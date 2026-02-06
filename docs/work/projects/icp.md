# MedTech Company & Contact Intelligence Pipeline
_Python, JavaScript, n8n, Excel, NLP / LLMs_

I designed and built an end-to-end data pipeline to identify, enrich, and continuously monitor high-fit U.S. MedTech companies, innovators, and decision-makers in advanced surgical devices and robotics.

## Problem

An EU MedTech startup focused on commercializing complex surgical robotics lacked a reliable, current view of ICP-qualified U.S. companies and technical innovators. Existing data was outdated and unsuitable for prioritized outreach or market analysis.

## Solution

I built a repeatable, automated intelligence pipeline that transforms semi-structured sources into a clean, deduplicated, and prioritized ICP database. 

## Process 
I was provided a clear Ideal Customer Profile (ICP), and potential data sources. 
### Researched Data sources
- Smoke tested potential data sources
- Researched additional data sources
### ICP → Data Translation
- Converted qualitative ICP definitions into regulatory codes to use as filters (NAICS, CPC, FDA product codes)
- Defined technical and regulatory inclusion criteria
### Automated Data Pipelines
- Ingested and updated U.S. patent data, SEC Form D filings, and FDA 510(k) records
- Prototyped ETL workflows in Python; productionized automation in n8n (quarterly refresh)
### AI-Assisted Filtering
- Applied NLP to patent abstracts for first-pass ICP classification (Yes / No / Maybe)
- Built and evaluated an LLM classifier to resolve ambiguous technical cases
- Tested multiple models for accuracy in a narrow, domain-specific space
This is a high-level diagram of the LLM Patent Classifier
![LLM Patent Classifier](/assets/images/hx-llmClassifier-diagram.png)
        
### Data Aggregation & Expantion
- Implemented fuzzy matching and consolidation logic to aggregate patents to produce organization list.
- Exploded out contancts from the inventors field to populate contacts list, including their history of patent research.

### Data Enrichment
- Enriched data using AI model-ensembling, cross-validation, and manual review.

## Value Created
I delivered high-signal ICP dataset of companies and contacts (diagram below) for the marketing team.

![ICP ERD](/assets/images/icp-erd.png)

- Significantly expanded U.S. company and contact coverage
- Reduced manual research and data cleanup effort through automation
- Built an extensible LLM ICP classifier to ingest and classify records from large text fields
- Created repeatable automated ETL and data aggregation workflows in n8n
