---
title: "PDX maximaLIST"
description: "Events Calendar project"
thumbnail: "/images/projects/thumbnail-ask-ppd.jpeg"
tags: ["data", "ai"]
tools: ["python", "ai", "VOC"]
date: "2026-04-20"
featured: true
---

# Overview
PDX maximaLIST is a hyper-local, no/low-screens social calendar, powered by an AI pipeline, delivered as a paper trifold.

## The problem

The infinite scroll owns your taste, your time, and your social life. But getting off social media shouldn't mean losing your social life. In Portland's dense network of small music venues show information is fragmented across Instagram, flyers posted on telephone poles and bullitin boards, venue websites, and word of mouth. There was no single place to find it all. Even alt-weekly newspapers, that used to have weekly comprehensive events listings by venue, now have curated minimal listings and on-line filterable listings that do not often include small and medium sized venues. My impetus for creating this was a growing number of people I knew were complaining about wanting to get off social media, but felt trapped because most small and medium sized events are advertized only on social media. Local weekly papers used to have comprehensive events listings by venue.

## The solution

A fully automated pipeline that aggregates local show data from web calendars and crowdsourced flyers, cleans and deduplicates it, and outputs a weekly trifold PDF — delivered by email list and hand-delivered to spots in the neighborhood. The UI/UX is a piece of paper. That's the point.

Automated pipeline

01
→
Ingest events from venue web calendars + crowdsourced flyer photos via email and n8n
02
→
Claude Sonnet extracts structured event data from flyer images (artist, venue, date, time, price, age restriction)
03
→
Events written to SQLite relational database, cleaned and deduplicated
04
→
Formatted and output as a weekly trifold PDF
05
→
Sent to email list · hand-delivered to neighborhood spots (with a human edit before it ships)
Research & process

Built through several weeks of VOC coffee dates with community members, user surveys on how people find shows (spoiler: it's mostly Instagram and word of mouth), and iterative prototyping with early users. Tested multiple AI models before landing on Claude Sonnet for flyer extraction. The workflow was validated end-to-end before any distribution.

Discovery

VOC coffee dates · user surveys on show discovery habits · prototype iteration with early adopters

Distribution

Email list · hand-delivery to local venues and coffee shops in North Portland

Stack

Claude Sonnet
Python
SQLite
n8n
Dedicated email account
PDF generation

## What's next

Fine-tune a local model. Use Claude's flyer extraction output as training data to fine-tune a lightweight open-source model that runs locally — reducing API dependency and enabling offline operation.

Open-source the workflow. Package the full n8n + Python pipeline so other neighborhoods can run their own hyperlocal calendar. Built for replication.