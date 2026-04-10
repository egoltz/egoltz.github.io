---
title: "Optimizing Non-profit Clinic Locations"
description: "Location Optimization, using R,  Open Source Routing Machine (OSRM) and Google Maps API for map visualizations"
thumbnail: "/images/projects/thumbnail-cats-distance.png"
tags: ["data"]
tools: ["r", "optimization modeling", "api", "non-profits"]
date: "2025-04-01"
featured: false
---

# Optimizing Nonprofit Clinic Locations

For my Operations Research Class with Engineering and Technology Management (ETM) Department Chair Tim Anderson, I worked on a mapping optimization project with a group of two other graduate students. Our goal was to find an additional optimal location for a local non-profit. Altough we all particicpated in all aspects of the project, my part of the project was to write the model formulation, code the model in R and run it for 2 and 4 clinics. I also styled maps for presentation.

## Premise 

Local nonprofit Feral Cat Coalition of Oregon has one clinic in SW
Portland servicing clients across Oregon and southern Washington. They
provide trap-and-spay services among others, and have helped 140k cats
since 1995. Many clients are low-income and/or may have a hard time
travelling more than an hour away, especially when handling feral cats,
so it could be easier and more attractive to more potential clients if
FCCO had a second location. If they were to open another clinic, which
location would best service clients, taking into account client travel
distance and monthly operation cost?

For an organization to succeed in a new location, some of the most
important factors to consider are workforce, costs, licenses/permits,
zone requirements, tax or other incentives, real estate availability,
donor location and preference, and more. For the sake of this project
and simplicity, we will only be using travel distance between clients
and the clinics and monthly costs (using monthly cost
of living per zipcode as a proxy), but these are only two potential factors that go into
the massive decision to build or buy another clinic.

## Data
The clients dataset was sourced from FCCO; the clinics dataset contains the coordinates of the current clinic location along with the 10 other potential locations.
Data was stored as a csv which included 7,464 rows, with each row representing a record for a feral cat attended to by the clinic. It encompasses about a year’s worth of data. 
Though each row represents a unique record, not all records had unique addresses, indicating that a client had either visited the client multiple times or had multiple cats attended to. There are 1,800 unique addresses.
Latitude & Longitude were added for each address through a converter found online. Clients were later aggregated by the average of their coordinates per zipcode.

## Client & Clinic Map
![Client and Clinic Map](/assets/images/cats-map1.png)
_Map show clients in red, existing clinic in blue, and potential clinic locations in yellow._

Made in mapping software QGIS, this map shows non-unique client locations and the real and potential clinics chosen based on the concentration of clients.
The majority of clients come from around the Portland area, but some are as far out as The Dalles or all the way in Newport. We can use the distribution of clients to get an idea as to where people need these services the most.

## Considerations
 - Uses OpenStreetMap data https://project-osrm.org/ to provide road distance between points.
 - Aggregating by clients by zip code reduced code lag
 - Included gas multiplier to factor in gas + travel time + car maintenance, doubled for travel and return trip

## Formulation
![Distance Optimization Formulation](/assets/images/cats-distance-formula.png)

## Model 
The objective function utilized the distHaversine function from the geospatial package to calculate distance between customers and potential clinic locations in order to minimize the distance between both. In order to process the records efficiently, customers were grouped by their zip codes and the average latitude and longitude were calculated per zip code. In the function, potential clinic monthly costs were then divided by the number of customers that were assigned to a clinic, so that as a clinic served more customers, the marginal operating cost decreased. A constraint was also added to ensure that the existing clinic was always selected.

## R Distance Optimization Model
```r
# Set number of clients and clinics
n <- as.numeric(nrow(client_locations))
m <- as.numeric(nrow(clinic_locations))
# Per distance (mi/km) cost ($) of gas + travel time + car maintenance, 
# doubled for travel and return trip
gas <- 6  # $

# Create the MIP model
model <- MIPModel() |>
  # 1 iff client i gets assigned to clinic j
  add_variable(Vx[i, j], i = 1:n, j = 1:m, type = "binary") |>
  
  # 1 iff clinic j is built
  add_variable(Vy[j], j = 1:m, type = "binary") |>
  
  # Minimize cost / removed Gas for testing
  set_objective(
    sum_expr(gas *
      distHaversine(
        c(client_locations[i, "y"], client_locations[i, "x"]), 
        c(clinic_locations[j, "y"], clinic_locations[j, "x"]), r=6378137) 
      *.000621371 * Vx[i, j], i = 1:n, j = 1:m) +
                  sum_expr((clinic_locations$opcost[j] * Vy[j]) / 
                             client_summary$count[i],i = 1:n, j = 1:m),
                "min") |>
  
  # Original clinic remains in existence
  add_constraint(Vy[1] == 1) |>
  
  # Sum of all Vy = 4 (number of clinics to be built)
  add_constraint(sum_expr(Vy[j], j = 1:m) == 4) |>
  
  # Every client needs to be assigned to a clinic
  add_constraint(sum_expr(Vx[i, j], j = 1:m) == 1, i = 1:n) |>
  
  # If a client is assigned to a clinic, then this clinic must be built
  add_constraint(Vx[i, j] <= Vy[j], i = 1:n, j = 1:m)

result <- solve_model(model, with_ROI(solver = "glpk", verbose = TRUE))

result
```
## Maps for 2 and 4 Clinic Solutions
### Maps show optimal clinics for existing clients in both solutions
![2 or 4 Clinic Locations](/assets/images/cats-maps.png)

## Results
The optimal solutions when solving for 3 additional clinic locations were Salem, Gresham, and The Dalles. When solving for only 1 additional clinic location, the result was Salem. However, these solutions did not account for the travel distance by vehicle, so further experiments were still required. To account for distance in miles, the objective function was re-run using the OSRM package, which we used to substitute the Haversine distance function. Interestingly, when plotted, the solutions for travel distance were still the same, though in some cases, customers were routed to clinics which had a shorter travel route even though the haversine distance may have previously indicated a clinic was farther away. This can be clearly observed by comparing the 3 potential clinic solutions between Haversine and OSRM, which show customers from Washington routed to Gresham under Haversine distance, but when accounting for actual travel distance, routed to The Dalles instead.

## Potential Model Expansions
Some ways to expand upon this project are incorporating volunteer locations, taxes/fees, permit or license requirements, etc. and trying to minimize or maximize them appropriately
Weighting potential clinic locations by regional feral cat population or projections to anticipate demand
Digging deeper into potentials - if we put a clinic in east Salem, will that generate more demand in central/southern Oregon? What if there aren’t enough volunteers in Salem? Where are donors located and will they receive tax incentives in the new location? Collaboration/cooperation with other nonprofits?
What are alternatives to building/buying a new clinic? Occasional pop-up clinics in underserved areas, more frequent home services, newer transport vehicles
