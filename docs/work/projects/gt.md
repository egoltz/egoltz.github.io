# Marketing Data Project
_Tools & methods: Python, Excel, Tableau, data wrangling, fuzzy matching, k-means clustering, data visualization_

![Tableau](/assets/images/gt-tableau.png)

This was an extended contract project for a PE-backed golf company that had recently aquired several smaller companies with adjacent product lines. It was originally scoped as a data hygene project, to clean, standardize, de-duplicate, classify customer types for data that had been concatonated from several datasets. The project extended to merge data to a purchased national industry database to find new customers and potentially monetizable patterns.

I presented my findings and visualizations in regular creative marketing strategy meetings with the VP of Marketing. My data visualizations and maps were used as key visuals in quarterly board meetings for executive level decisions.

## Data Wrangling
Customer data was extremely messy and had many non-standardized and blank fields critical for analysis. Data was entered by golf reps from different companies and had varied jargon and abbreviations. Newly aquired companies had their own reps and often sold products to the same customers; this was hidden in the data by duplicate customer entries. 
I standardized company names, geographic fields, and across multi-origin data. I deduplicated companies using fuzzy matching in python.

Because the Golf industry has a lot of similar company names, I wrote my matching algorith to require an exact State match and fuzzy matched the Company Name and Address. I set my Fuzzy match threshold fairly low (75%) and manually reviewed matches between 75-90%.
<details>
<summary>My fuzzy matching python code</summary>
```python
import pandas as pd
from rapidfuzz import fuzz
from itertools import combinations

MATCH_COLUMNS = ['State']
FUZZY_COLUMNS = ['Company Name', 'Address']
FUZZY_THRESHOLD = 75  

def is_fuzzy_match(row1, row2, threshold=FUZZY_THRESHOLD):
    for col in FUZZY_COLUMNS:
        val1, val2 = str(row1[col]), str(row2[col])
        if fuzz.token_sort_ratio(val1, val2) < threshold:
            return False
    return all(row1[col] == row2[col] for col in MATCH_COLUMNS)

def find_duplicates(df):
    duplicates = []
    checked_pairs = set()

    for i, j in combinations(df.index, 2):
        row1, row2 = df.loc[i], df.loc[j]
        if is_fuzzy_match(row1, row2):
            duplicates.append(row1.to_dict())
            duplicates.append(row2.to_dict())
        checked_pairs.add((i, j))

    return pd.DataFrame(duplicates)

df = pd.DataFrame(gt)
duplicates_df = find_duplicates(df)

# Check results
print(f"Found {len(duplicates_df)} duplicates")
```
Found 308 duplicates.
</details>

## Matching to a National Database

The client purchased national database of golf courses that had a wealth of demographic, facility and financial information. I merged this data to existing cleaned customer data using fuzzy matching on the company names and exact match for city and state. With this information, I was able to enrich existing customer data to find revenue trends for existing customer and find opportunity accounts.

<!-- ![Opportunity Accounts](/assets/images/gt-opportunity.png) -->

## Value Created
### Identified Two New Unique Customer Types
When I got the data, customer type field was 38% blank. I classified all customers and identified two new customer categories, University Teams and Disc Golf Courses.
![Customer Type - Before](/assets/images/gt-cust-type-before.png) 
![Customer Type - After](/assets/images/gt-cust-type-after.png)

### Customer Segmentation
I used k-means on several revenue categories to cluster customers by spending habits. High spenders generate outsized revenue in accessories, which scale faster than other categories, making accessories the strongest lever for segment-based revenue growth.

![Customer segmentation](/assets/images/gt-customer-seg.png) 

### Cross-Selling Opportunity
I found that most customers were buying only one of the 2 main product lines. This was a huge cross-selling opportunity. While a few of their reps were selling both product lines to customers, most were not aware of the other product line. The aquisitions came with company reps and these new reps were not acting on the merge. Visualizing this problem helped the marketing team to realize that before they expanded their market, they needed to focus on getting their reps up to date on new product lines.

![Product Line Revenue Scatter Plot](/assets/images/gt-cross-selling.png) 

### Public vs. Private Revenue
The client marketing team wanted to validate their discrepancy with leadership, who believed that public golf courses created more revenue. I found that, while there were a few outlier public courses, in general, public vs. private status did not accurately predict revenue.

![Public Private Revenue Violin Plot](/assets/images/gt-public-private.png)
![Public Private Revenue](/assets/images/gt-public-private2.png)
