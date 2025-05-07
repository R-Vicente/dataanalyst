---
title: "Hospital KPI Dashboard (MGH)"
date: 2025-04-21
tags: ["Power BI", "Dashboard", "KPIs", "Healthcare Analytics", "Data Visualization", "ETL", "DAX"]
featured_image: "/img/dash1.png"
# link: "URL_PARA_RELATORIO_PUBLICADO_PBI"
---


## Tools & Technologies

* **BI Tool:** Microsoft Power BI (my go-to visualization powerhouse)
* **Data Transformation:** Power Query (M language) for all the behind-the-scenes data magic
* **Calculations:** DAX (Data Analysis Expressions) for the number-crunching
* **Data Sources:** A collection of CSV files covering everything from patient encounters to procedures and payers

## Process Overview

1.  **Data Loading and Transformation (ETL):** I wrangled multiple messy CSV files using Power Query, cleaning and connecting data that wasn't designed to work together.
2.  **Data Modeling:** Created a web of relationships between tables to build a coherent data model that made sense of the hospital's operations.
3.  **Measure Creation (DAX):** Wrote formulas to calculate the metrics that matter, from average length of stay to readmission rates.
4.  **Visualization & Design:** Crafted an interactive, multi-page dashboard that tells the hospital's performance story in a way that's both detailed for analysts and clear for executives.

## Dashboard Breakdown & Insights

I organized the dashboard into distinct pages, each telling a different part of the hospital's story:

### 1. Overview

This is the "hospital vital signs" page! At a glance, you can see the big numbers: **Total Admissions (27.89K)**, **Unique Patients (974)**, **Average Admission Time (7h 15min)**, and **Average Admission Cost ($3.64K)**. I also included charts showing when patients tend to arrive by month, day, and hour – perfect for spotting those Monday morning rushes or seasonal trends.

![Dashboard Overview Page Screenshot](/img/dash1.png)
*(Caption: Main overview page showing high-level KPIs and admission trends.)*


### 2. Procedure Analysis

Here's where we dive into what actually happens in the hospital. This page shows the **Total Procedures performed (47.70K)** and breaks down procedure patterns. I created heatmaps showing when different procedures happen throughout the day and week, and highlighted the **Top 10 most frequent procedures** to show where the hospital's resources are going.

![Procedure Volume and Cost Analysis](/img/dash2.png)
*(Caption: Analysis of procedure frequency, costs, and timing patterns.)*

### 3. Financial Analysis

Follow the money! This view breaks down the hospital's **Total Revenue ($101.51M)**, showing how much comes from insurance ($31.10M) versus patients ($70.42M). I also highlighted the cash cows – those **Top 5 procedures with the highest average cost** – and analyzed insurance coverage patterns that revealed some surprising variations between payers.

![Financial Performance and Insurance Analysis](/img/dash3.png)
*(Caption: Breakdown of revenue sources, high-cost procedures, and insurance payer coverage.)*

### 4. Alerts & Outliers

This is the "things that make you go hmm" page. I designed it to automatically flag potential issues that executives should investigate, from admissions without procedures to the somewhat alarming **Death Rate (15.81%)**. The dashboard also connects the dots between admission types, primary diagnoses, and mortality – information that could literally help save lives.

![Alerts and Outlier Identification Page](/img/dash4.png)
*(Caption: Dashboard view focused on identifying potential operational alerts and outliers.)*

### 5. AI & Forecasts

What's coming next? Using Power BI's AI capabilities, I created **forecasts for future admissions and revenue**, and analyzed what factors are driving patient volume (like age groups and insurance types). This helps the hospital prepare for what's coming instead of just reacting to yesterday's numbers.

![AI-driven Forecasts and Key Influencers](/img/dash5.png)
*(Caption: Forecasted trends for admissions/revenue and analysis of key influencing factors.)*

## Challenges & Learning

This wasn't all smooth sailing! Some of the trickiest parts included:
* Getting stubborn data from different CSV files to play nicely together in Power Query
* Creating bulletproof DAX formulas for complex metrics like readmission rates (turns out patients don't always follow neat statistical patterns!)
* Designing visualizations that work for both the detail-oriented analyst and the big-picture executive

By the end of this project, I'd seriously leveled up my ETL skills, Power BI data modeling, DAX formula writing, and dashboard design abilities. It's one thing to make pretty charts – it's another to make them tell the right story to the right audience.

## Data Source

I worked with a collection of simulated patient records provided in CSV format for Massachusetts General Hospital. While the data was created for an academic project, it mimicked the messiness and complexity of real healthcare data.

## Live Demo / Report Link

Want to click around this dashboard yourself? I'd be happy to share an interactive version of the Power BI report on request.