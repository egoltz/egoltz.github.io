# Ontario Provincial Police: Pricing Models
_Analysis in Excel_
## Problem: 
The Ontario Provincial Police (OPP) needs to develop a fair, transparent, and equitable billing
model for providing police services to diverse municipalities. The previous billing model created inconsistent per-household policing costs, was overly complex, difficult to administer, and challenging to communicate to municipalities.
OPP must determine whether its new two-driver billing model (base service + calls for service) is the most
equitable approach among various alternatives. Included in this analysis are single cost driver analyses
including allocation by properties, calls for service (CFS), population, household income, and property value.
The OPP serves many municipalities, featured in this data are the municipalities Alder, Balsam, and Cedar, that have distinct demographic characteristics. Alder is lower income families, lower population density with a high crime rate. Balsam is high income, densely populated urban area, average household size is 1.8 with a medium crime rate. Cedar is higher income families with single family homes and a low crime rate.
![Household and Population Density](/assets/images/opp-population.png)
## 2015 service cost for each municipality using the New Billing Model
The New Billing Model separates the cost distribution per municipality on:
1) Base Service Cost based on a per property base cost
2) CFS Cost distribution based on a 4 year average weighted time multiplier for each municipality
3) Other Costs (ie. overtime, security, cleaning, etc.) calculated based on usage.
We have data for Alder, Balsam and Cedar; the remainder will be allocated percent-wise to the remaining municipalities.
![OPP Services](/assets/images/opp-service.png)
## New Billing Model Summary
![New Billing Model Summary](/assets/images/opp-summary.png)
Alder is the lowest income municipality and has a relatively high CFS burden compared to its
property count, resulting in a higher cost per property. This is the lowest income municipality with
3.21 people per household.
Balsam benefits from a low CFS to property ratio, resulting in the lowest cost per property. This is
the highest income municipality with the lowest people per household.
Cedar: Has a moderate CFS to property ratio, resulting in a moderate cost per property

##Single Driver Cost Allocation

For the single cost driver analysis, some municipalities will benefit over others based on their unique demographics.
● Allocation based on number of properties alone is going to benefit the lower density areas.
● CFS allocation is commensurate with the crime rate.
● Population is similar, but Cedar pays a higher rate which might be unfavorable due to their low crime rate.
● Allocating by household income, might be a way to redistribute wealth and so could be favorable to lower income areas.
● Allocating by property value might be another less innocuous of distributing the cost burden across income brackets
![Single Cost Drivers](/assets/images/opp-cost-drivers.png)
## Conclusions 
Given these analyses, I might suggest that a simple dual cost model similar to the new cost
model be used. The four year average CFS cost allocation is reasonable because it
reflects the crime rate fairly well. 
For the Base Cost, I would use a different property based metric, like property value,
which does reflect the higher crime rates in more urban areas, but also redistributes the
cost burden of policing a bit more to those who can afford it. Crime does not always stay
within a single municipality. If some areas are allowed to grow crime rates, it might affect
those in higher income, lower crime areas.
![Crime by Municipality](/assets/images/opp-crime.png)

