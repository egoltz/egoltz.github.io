# ICP-Driven MedTech Company & Contact Intelligence Pipeline
_Python, JavaScript, n8n, Excel, NLP / LLMs_

I designed and built an end-to-end data pipeline to identify, enrich, and continuously monitor high-fit U.S. MedTech companies, innovators, and decision-makers in advanced surgical devices and robotics.

### Problem

A European MedTech startup focused on commercializing complex surgical robotics lacked a reliable, current view of ICP-qualified U.S. companies and technical innovators. Existing data was fragmented, outdated, and unsuitable for prioritized outreach or market analysis.

### Solution

I built a repeatable, automated intelligence pipeline that converts noisy public and semi-structured sources into a clean, deduplicated, and prioritized ICP database.

### What I Built

- **ICP → Data Translation**
    - Converted qualitative ICP definitions into concrete filters (NAICS, CPC, patent signals)
    - Defined technical and regulatory inclusion criteria
- **Automated Data Pipelines**
    - Ingested and updated U.S. patent data, SEC Form D filings, and FDA 510(k) records
    - Prototyped ETL workflows in Python; productionized automation in n8n (quarterly refresh)
- **AI-Assisted Filtering**
    - Applied NLP to patent abstracts for first-pass ICP classification (Yes / No / Maybe)
    - Built and evaluated LLM classifiers to resolve ambiguous technical cases
    - Tested multiple models for accuracy in a narrow, domain-specific space
        
![LLM Patent Classifier](/assets/images/hx-llmClassifier-diagram.png)
        
- **Company & Contact Discovery**
    - Scraped industry publications and innovation sources to identify relevant companies and key contacts
- **Normalization & De-duplication**
    - Implemented fuzzy matching and consolidation logic to:
        - Merge duplicate organizations
        - Aggregate patents and funding signals
        - Preserve highest-confidence positive classifications

### Outcome

- Produced a high-signal ICP intelligence dataset for sales, partnerships, and market research
- Significantly expanded U.S. company and contact coverage
- Reduced manual research and data cleanup effort through automation

