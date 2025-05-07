// project-data.js

// Store all project markdown content directly in JavaScript
window.projectMarkdowns = {
    'mgh-kpi-dashboard': `---
title: "Hospital KPI Dashboard (MGH)"
date: 2025-04-21
tags: ["Power BI", "Dashboard", "KPIs", "Healthcare Analytics", "Data Visualization", "ETL", "DAX"]
featured_image: "C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/dash1.png"
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

![Dashboard Overview Page Screenshot](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/dash1.png)
*(Caption: Main overview page showing high-level KPIs and admission trends.)*


### 2. Procedure Analysis

Here's where we dive into what actually happens in the hospital. This page shows the **Total Procedures performed (47.70K)** and breaks down procedure patterns. I created heatmaps showing when different procedures happen throughout the day and week, and highlighted the **Top 10 most frequent procedures** to show where the hospital's resources are going.

![Procedure Volume and Cost Analysis](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/dash2.png)
*(Caption: Analysis of procedure frequency, costs, and timing patterns.)*

### 3. Financial Analysis

Follow the money! This view breaks down the hospital's **Total Revenue ($101.51M)**, showing how much comes from insurance ($31.10M) versus patients ($70.42M). I also highlighted the cash cows – those **Top 5 procedures with the highest average cost** – and analyzed insurance coverage patterns that revealed some surprising variations between payers.

![Financial Performance and Insurance Analysis](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/dash3.png)
*(Caption: Breakdown of revenue sources, high-cost procedures, and insurance payer coverage.)*

### 4. Alerts & Outliers

This is the "things that make you go hmm" page. I designed it to automatically flag potential issues that executives should investigate, from admissions without procedures to the somewhat alarming **Death Rate (15.81%)**. The dashboard also connects the dots between admission types, primary diagnoses, and mortality – information that could literally help save lives.

![Alerts and Outlier Identification Page](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/dash4.png)
*(Caption: Dashboard view focused on identifying potential operational alerts and outliers.)*

### 5. AI & Forecasts

What's coming next? Using Power BI's AI capabilities, I created **forecasts for future admissions and revenue**, and analyzed what factors are driving patient volume (like age groups and insurance types). This helps the hospital prepare for what's coming instead of just reacting to yesterday's numbers.

![AI-driven Forecasts and Key Influencers](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/dash5.png)
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

Want to click around this dashboard yourself? I'd be happy to share an interactive version of the Power BI report on request.`,

    'churn-prediction': `---
title: "Telco Customer Churn Prediction with XAI"
date: 2025-04-22
tags: ["Machine Learning", "Python", "XAI", "Churn Analysis", "Jupyter Notebook", "Data Science", "Predictive Analytics", "SHAP", "LIME"]
featured_image: "C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/resource-churn.png"
---

## Tools & Technologies

* **Programming Language:** Python (my trusty digital Swiss Army knife)
* **Analysis Environment:** Jupyter Notebook (where the magic happens)
* **Key Libraries:** 
  * Pandas, NumPy (for wrangling all that messy data)
  * Scikit-learn, XGBoost (the brains behind the predictions)
  * SHAP, LIME (the "explainers" that make AI decisions transparent)
  * Matplotlib, Seaborn (because a picture is worth a thousand data points)
* **Data Source:** Telco Customer Churn dataset from Kaggle (real-world telecom customer data)

## Process Overview

1. **Data Exploration & Preparation:** Dug through the telecom data to understand what we're working with, cleaned up missing values, and engineered features that might predict customer behavior.
2. **Model Development:** Built and tested several different ML models – from simple logistic regression to fancy gradient boosting – to see which one best predicts who's likely to leave.
3. **Hyperparameter Optimization:** Fine-tuned the model to squeeze out every bit of predictive power (like adjusting the knobs on a sophisticated machine).
4. **Explainability Analysis:** Used cutting-edge XAI techniques to peek inside the "black box" and understand what's driving predictions.
5. **Risk Segmentation:** Grouped customers into risk categories based on their likelihood to cancel – because not all potential churners are created equal.
6. **Strategic Recommendations:** Translated all this technical analysis into actionable business strategies that could actually move the needle on retention.

## Methodology Deep Dive

I approached this churn prediction challenge with a dual focus – getting accurate predictions while also making sure we could explain them:

### Data Preparation Strategy
* **Missing Values Treatment:** Instead of just plugging in averages for missing data (boring!), I analyzed patterns in those missing values to see if the "missingness" itself told a story, especially in the TotalCharges field.
* **Feature Engineering:** Created new data points that captured customer behavior patterns – like how monthly charges compare to tenure – which turned out to be prediction gold.

### Model Selection Philosophy
* **Balanced Evaluation Metrics:** Looked beyond simple accuracy to metrics that actually matter for churn – because missing a customer who's about to leave (false negative) costs more than unnecessarily offering a discount to someone who was going to stay (false positive).
* **Ensemble Approach:** Systematically tested models with different strengths, from simple-but-explainable to complex-but-powerful, to find the sweet spot for this specific problem.

### Cross-Validation Framework
* **Stratified K-Fold:** Used a special validation technique that ensures each testing fold has the same proportion of churners as the full dataset – crucial when your target class is relatively rare.
* **Hyperparameter Grid:** Tested over 200 different model configurations for each algorithm – like trying every possible combination of ingredients to find the perfect recipe.

### Overfitting Prevention
* **Regularization Techniques:** Applied mathematical constraints to keep models from memorizing the training data instead of learning general patterns.
* **Performance Monitoring:** Kept a close eye on how models performed on training versus validation data to catch any signs of overfitting early.

### Explainability Implementation
* **Global + Local Approach:** Combined big-picture feature importance (what matters overall) with individual case explanations (why this specific customer is likely to leave).
* **Multi-technique Validation:** Cross-checked explanations from different XAI methods to make sure they told a consistent story.


## Analysis Breakdown & Insights

### 1. Data Exploration

My first dive into the data revealed that about 26% of customers were churning – a significant chunk of business walking out the door! I found that customer traits like contract type (month-to-month vs. annual), service offerings, and payment methods painted different pictures of churn risk. The biggest red flags? Monthly contracts, fiber optic service, and electronic payment methods all seemed to be sending customers for the exit.

![Data Exploration Screenshot](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/aed-churn1.png)
*(Caption: Exploratory data analysis showing churn distribution.)*

![Data Exploration Screenshot](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/rfa-churn.png)
*(Caption: Exploratory data analysis showing churn distribution across key variables.)*

### 2. Model Comparison

After putting several machine learning algorithms through their paces, Gradient Boosting emerged as the champion with an AUC-ROC of 0.8415 (that's pretty good!). After some fine-tuning, the final model achieved 78% accuracy and 59% precision on test data – meaning it could identify a substantial portion of churners without too many false alarms.

![Model Performance Comparison](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/models-churn2.png)
*(Caption: Performance metrics comparison across different machine learning algorithms.)*

### 3. Feature Importance

So what actually drives customers away? The model pointed to five key factors:
1. Contract type – those month-to-month contracts are churn magnets
2. Tenure – newer customers are much more flight-prone
3. Internet service type – fiber optic customers are heading for the door (surprising, right?)
4. Payment method – how customers pay relates to how long they stay
5. Monthly charges – price sensitivity matters, but not as much as you might think

These insights give clear targets for retention strategies.

![Feature Importance Analysis](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/fi-churn.png)
*(Caption: Key features driving customer churn according to the model.)*

### 4. XAI: Understanding Individual Predictions

This is where things got really interesting. Using SHAP and LIME techniques, I could see exactly why the model predicted churn for specific customers. For example, I could tell that Customer #1372's month-to-month contract and short tenure were pushing their churn probability up, while their paperless billing was slightly reducing it. This level of transparency turns a "black box" prediction into actionable customer intelligence.

![SHAP Analysis](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/shap-churn.png)
*(Caption: SHAP analysis showing how specific customer attributes impact churn prediction.)*

### 5. Customer Risk Segmentation

I segmented customers into four risk tiers based on their likelihood to churn:
- **High Risk (>75% probability):** 14.6% of customers (the "save them now" group)
- **Medium-High Risk (50-75%):** 11.8% of customers (the "needs attention" group)
- **Medium-Low Risk (25-50%):** 13.5% of customers (the "keep an eye on them" group)
- **Low Risk (<25%):** 60.1% of customers (the "they're probably fine" group)

This segmentation lets companies target their retention efforts where they'll have the biggest impact.

![Risk Segmentation](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/seg-churn.png)
*(Caption: Visualization of customer segments by churn risk level.)*

### 6. Strategic Recommendations

Based on what the model revealed, I recommended five key strategies:

1. **Contract Makeover:** Create irresistible incentives for month-to-month customers to sign annual contracts (like "commit to us and we'll commit to you" pricing).
2. **Early Relationship Building:** Develop a "first 6 months" program that gives extra attention to new customers when they're most vulnerable to leaving.
3. **Fiber Service Quality Check:** Investigate why fiber customers are leaving at higher rates – is it reliability issues, price-to-performance perception, or something else?
4. **Value Enhancement:** Create bundled offerings that increase perceived value, especially for customers paying higher monthly fees.
5. **Smart Targeting:** Implement retention campaigns specifically designed for each risk segment, with the most resources going to the highest-risk group.

My analysis suggested these changes could reduce churn in the high-risk segment by up to 20%.


## Business Impact

So what's the actual bottom-line impact of all this data science wizardry?

### Quantifiable Business Outcomes
* **Revenue Protection:** With the average customer worth $2,456 over their lifetime, reducing churn by just 5% in the high-risk segment would save about $6,372 annually. Not bad!
* **Smart Resource Allocation:** The high-risk segment makes up only 14.6% of customers but accounts for 36.9% of all churn – meaning targeted interventions here deliver 2.5x more bang for your buck.
* **Escalating Returns:** Pushing from a 5% to 20% reduction in churn would more than triple the financial benefit (from $12K to $45K annually), making a solid business case for investing in these retention programs.
* **Customer Value Preservation:** Hitting that 20% reduction target would keep about 40 valuable customers from walking away each year – customers who might otherwise be lost forever.

![Risk Segmentation](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/img/impact-churn.png)
*(Caption: Projected Revenue Impact of Retention Strategies Based on Actual Customer Spending Data.)*

### Operational Benefits
* **Work Smarter Not Harder:** Customer service teams can focus their outreach on the 14.6% of customers who represent 36.9% of potential churn – a much more efficient use of limited resources.
* **Product Development Insights:** The analysis pinpoints exactly which service aspects are driving customers away, giving product teams clear priorities for improvement.
* **Marketing Efficiency:** More precise targeting means better allocation of acquisition versus retention budgets, potentially reducing the cost of keeping the customer base growing.


![Business Impact Analysis](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/resource-churn.png)


## Storytelling & Stakeholder Communication

All the fancy data science in the world doesn't help if you can't explain it to the people who make decisions. Here's how I translated technical findings for different audiences:

### Executive Leadership
* Created visuals showing the potential $45K annual revenue protection from a 20% reduction in high-risk churn – because executives speak the language of dollars.
* Developed analyses showing how just 14.6% of customers (the high-risk segment) account for 36.9% of churn – making the case for targeted rather than broad-based retention efforts.

### Marketing & Sales Teams
* Built a practical risk segmentation system with four distinct customer groups and clear probability thresholds – giving marketing the targeting tools they need.
* Quantified the impact of specific factors (like month-to-month contracts increasing churn by 2.5x) to help sales and marketing craft more effective retention messages.

### Product Management
* Provided hard numbers showing fiber optic service customers churn at 41.9% compared to just 18.4% for DSL customers – a clear sign something needs fixing.
* Demonstrated that customers without technical support are 48.3% more likely to leave – identifying a specific product feature that could improve retention.

### Implementation Guidance
* Developed a complete pipeline for processing customer data consistently, from cleaning to feature engineering.
* Created a prediction function that can be dropped into existing systems to score new customers for churn risk.

This approach bridges the gap between complex modeling and practical business application, turning insights into action.

## Complementary Skills Showcase

Beyond the technical work, this project let me flex some broader professional muscles:

### Business Acumen
* Translated prediction probabilities into dollars-and-cents impact projections across different scenarios.
* Prioritized recommendations based on quantified business impact rather than just statistical performance.

### Analytical Problem-Solving
* Tackled the class imbalance challenge (only 26% of customers were churners) using SMOTE sampling techniques.
* Solved the interpretability puzzle by implementing multiple XAI methods that made complex model decisions transparent.

### Data Storytelling
* Transformed statistical results into clear visualizations that showed the business impact for different customer segments.
* Built a narrative that progressed naturally from exploration to modeling to recommendations.

### Technical Versatility
* Successfully implemented and compared multiple machine learning approaches, from simple regression to complex ensemble methods.
* Applied both standard statistical techniques and cutting-edge interpretability methods to get the most insight from the data.

### Documentation Clarity
* Created a reproducible analysis with clean code structure and clear comments.
* Developed visualizations specifically designed to make technical results accessible to non-technical audiences.

## Solution Methodology & Technical Implementation

The technical approach behind this project focused on reproducibility and practical application:

### Analysis Workflow
* **Structured Data Pipeline:** Built a systematic workflow covering everything from data cleaning to model evaluation – all with clearly documented steps.
* **Modular Implementation:** Created separate analysis components for preprocessing, model comparison, optimization, and interpretation – keeping the code organized and maintainable.
* **Version Compatibility:** Used standard Python data science libraries that ensure the solution works across environments and is easy to implement.

### Model Development
* **Comprehensive Evaluation:** Tested multiple algorithms to identify the optimal approach for this specific churn prediction problem.
* **Cross-Validation Framework:** Used 5-fold validation to ensure performance estimates were robust and generalizable.
* **Hyperparameter Optimization:** Applied grid search to find the perfect balance between model complexity and predictive power.

### Interpretability Features
* **Feature Importance Analysis:** Built visualizations that clearly identify and rank what drives customer churn.
* **SHAP Integration:** Applied SHAP values to explain individual predictions, making the model's decision process transparent.
* **Customer Segmentation:** Developed risk-based grouping to support targeted business interventions.

### Production Readiness
* **Model Persistence:** Added functionality to export the trained model for deployment in production.
* **Prediction Function:** Created a standalone function that can score new customers through the same preprocessing steps.
* **Documentation:** Provided comprehensive documentation explaining how the analysis works and how to interpret the findings.

This structured approach ensures the solution isn't just analytically sound but also practical for real business implementation.

## Challenges & Learning

Like any good data science project, this one came with some tricky challenges:

* **Class Imbalance:** Only about 26% of customers in the dataset were churners, which risked creating a model that's good at predicting "no churn" but bad at identifying actual churners.
* **Feature Engineering:** Creating meaningful derived features required both domain knowledge and creative thinking.
* **Model Interpretability:** Finding the sweet spot between predictive power and explainability was a constant balancing act.
* **Actionable Insights:** Translating statistical outputs into recommendations that business teams could actually implement required bridging the technical-business gap.

This project significantly boosted my skills in predictive modeling, XAI techniques, customer behavior analysis, and translating data science into business strategy – a toolkit I'll carry forward to future projects.

## Data Source

I used the Telco Customer Churn dataset from Kaggle, which contains information about telecom customers and whether they canceled service. The dataset includes details on services, account information, and demographics – a perfect playground for churn analysis.

[Dataset Link](https://www.kaggle.com/datasets/blastchar/telco-customer-churn)

## Code Repository

Want to see how the sausage is made? The complete Jupyter Notebook with all analysis code is available in my GitHub repository.`,

    'schedule-optimization': `---
title: "Staff Scheduling Optimization Model"
date: 2025-04-23
tags: ["Operations Research", "Linear Programming", "Python", "PuLP", "Workforce Optimization", "Call Center Management", "Schedule Planning"]
featured_image: "C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/schedules.jpg"
---

## Project Goals

Ever wonder how call centers decide exactly how many people they need working at 2:30 PM on a Tuesday? That's what I tackled in this project! I built an optimization model that creates the perfect work schedule for a call center with wildly fluctuating call volumes. The mission: minimize labor costs (because every business loves saving money) while making sure there are always enough agents to answer calls promptly, determining exactly how many people to hire, and creating a smart mix of full-time and part-time shifts with appropriate days off.

## Tools & Technologies

* **Programming Language:** Python (the Swiss Army knife of programming)
* **Analysis Environment:** Jupyter Notebook (for keeping everything organized and documented)
* **Key Libraries:** 
  * PuLP (the mathematical optimization engine under the hood)
  * Pandas (for taming unruly data)
  * NumPy (for all those numerical gymnastics)
  * Datetime (because time is complicated in scheduling!)
* **Optimization Technique:** Integer Linear Programming (ILP) - sounds scary, works beautifully

## Process Overview

1. **Data Preparation:** Dug into historical call patterns, calculated how many agents were needed in each 30-minute block, and created a complete timeline for the entire planning period.
2. **Model Development:** Built a mathematical model where the decision variables represented "how many people should work this specific shift with that specific day off?"
3. **Constraint Definition:** Created mathematical guardrails ensuring enough staff would be available at all times, handling the complexity of overlapping shifts and weekly off days.
4. **Objective Function:** Crafted the mathematical "North Star" for the model to follow - minimize total work hours while keeping service levels high.
5. **Solution and Validation:** Let the solver work its magic, then meticulously verified the results to make sure we hadn't missed anything.
6. **Output Generation:** Transformed math into actionable staffing plans that real managers could implement.

## Analysis Breakdown & Insights

### 1. Problem Formulation

This wasn't just about filling in a spreadsheet. The challenge involved figuring out the optimal number of agents for each shift type and day-off pattern while ensuring coverage for every single 30-minute interval in the month. With 14 different shift types (12 full-time and 2 part-time) and 7 different day-off patterns, we're talking about 98 different staff assignment options and over 1,400 time intervals to cover. That's a lot of moving pieces!

![Demand Pattern Analysis](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/formulation-sche.png)
*(Caption: Optimization problem - Mathematical Formulation.)*

#### Example Solution Highlights:
- Pattern P1 (Sunday off) - Shift FT1800: 2 agents
- Pattern P2 (Monday off) - Shift FT1800: 1 agent
- Pattern P4 (Wednesday off) - Shift FT0800: 1 agent
- Pattern P5 (Thursday off) - Shift FT0000: 1 agent
- Pattern P6 (Friday off) - Shift PT1100: 2 agents

*Model is solved using CBC solver via PuLP library*

### 2. Demand Pattern Analysis

Call centers are fascinating - one minute they're quiet, the next minute everyone and their grandmother is calling! My analysis revealed dramatic swings in staffing needs throughout the day and across different days of the week. During peak times, we needed up to 10 agents simultaneously, while during quiet periods, we could get by with minimal coverage. These fluctuations are exactly why smart scheduling matters – putting the right number of people in the right place at the right time.

![Demand Pattern Analysis](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/demand_patterns.png)
*(Caption: Visualization of half-hourly staffing requirements showing daily and weekly patterns.)*

### 3. Optimization Results

After crunching the numbers, the model delivered a beautiful solution: 25 agents (not 24, not 26, but exactly 25) distributed across 11 different shift types and all 7 day-off patterns. This schedule achieved 100% coverage of all required staffing levels while keeping the total scheduled work hours to a lean 4,367 hours per month. That's optimization in action!

![Optimization Results](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/optimization_results.png)
*(Caption: Summary of optimization results showing headcount allocation by shift type and day-off pattern.)*

### 4. Coverage Analysis

The coolest part? The resulting schedule provided perfect coverage at all times – no understaffing anywhere. Yes, there was some strategic overstaffing at certain periods (up to 9 extra agents during some intervals), but that's often unavoidable due to shift structures. The key is that the model minimized this excess while ensuring service levels never dropped below requirements.

![Coverage Analysis](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/coverage_analysis.png)
*(Caption: Comparison of required versus scheduled staffing levels across the planning period.)*

### 5. Shift Distribution

Out of 14 possible shift types, the model selected 11 as optimal. Some shifts just weren't efficient for this particular demand pattern, so the algorithm naturally avoided them. The model also found clever combinations of shifts and day-off patterns that minimized total work hours while covering all requirements.

![Shift Distribution](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/shift_distribution.png)
*(Caption: Distribution of agents across different shift types showing which time slots were most efficient.)*

This graph shows how efficiently agents are allocated throughout the day. The bars represent the number of required agents (blue) and surplus agents (orange), while the red line shows the resource utilization rate (percentage of scheduled agents that are actually required). Higher percentages indicate more efficient resource allocation, with fewer excess agents scheduled.

![Shift Distribution](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/efficiency.png)


### 6. Implementation Strategy

Math is great, but people need to know what to do with it! I translated the optimization results into a detailed implementation strategy that specifies exactly how many agents should work each shift type with each day-off pattern. This is the actionable staffing plan that workforce management can actually use to make hiring and scheduling decisions.

![Implementation Strategy](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/implementation_strategy.png)
*(Caption: Detailed staffing plan showing the exact number of agents for each shift type and day-off pattern.)*

## Business Impact

So what's the real-world value of all this mathematical wizardry?

* **Labor Cost Efficiency:** By minimizing total scheduled work hours while meeting all service requirements, the model cuts unnecessary labor costs – potentially saving thousands of dollars monthly.

* **Perfect Service Coverage:** No more understaffing! The solution guarantees that all minimum staffing requirements are met at all times, keeping customers happy and agents less stressed.

* **Headcount Optimization:** Knowing you need exactly 25 agents (not 24, not 26) prevents both costly overstaffing and service-degrading understaffing.

* **Strategic Flexibility:** The smart mix of full-time and part-time shifts provides the operational flexibility needed to handle those wild swings in call volume that drive contact center managers crazy.

* **Operational Excellence:** The detailed, interval-by-interval coverage plan gives operations managers unprecedented visibility into staffing dynamics.

## Methodology Deep Dive

Behind the scenes, the mathematical approach involved some pretty clever techniques:

### Integer Linear Programming Formulation
* **Decision Variables:** Created binary variables representing the number of agents assigned to each shift type/day-off pattern combo – the building blocks of our solution.
* **Objective Function:** Crafted a mathematical goal to minimize total agent-intervals scheduled (which translates directly to minimizing labor hours).
* **Coverage Constraints:** Developed mathematical expressions ensuring that for each 30-minute block, enough agents would be working to meet requirements.

### Efficient Algorithmic Approach
* **Shift Overlap Handling:** The model smartly accounts for shift overlaps, calculating exactly which shifts would be active during each time interval.
* **Day-Off Pattern Integration:** The algorithm seamlessly incorporates weekly day-off patterns, automatically excluding shifts that would start on an agent's day off.
* **Variable Shift Duration:** The solution handles both 7-hour full-time shifts and 4-hour part-time shifts, expanding the optimization possibilities.

### Validation Framework
* **Comprehensive Coverage Check:** Double-checked the solution by recalculating expected coverage for each interval based on the optimization results.
* **Constraint Verification:** Verified all constraints to ensure the model correctly implemented the business requirements.
* **Edge Case Testing:** Examined peak periods and potential bottlenecks to confirm the solution is robust under all conditions.

![Methodology Framework](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/img/methodology_framework.png)
*(Caption: Schematic representation of the optimization methodology showing problem formulation, solution approach, and validation process.)*

## Solution Architecture & Technical Implementation

I built the scheduling solution with clarity, efficiency, and maintainability in mind:

### Code Structure
* **Modular Design:** Organized the code into clean sections for data prep, model definition, constraint formulation, solution, and validation – making it easy to understand and modify.
* **Vectorized Operations:** Used efficient numpy and pandas operations to process time series data quickly.
* **Parameter-Driven Approach:** Made shift definitions and patterns easily adjustable parameters rather than hardcoding them.

### Performance Considerations
* **Efficient Constraint Generation:** The algorithm generates constraints dynamically based on actual requirements, avoiding unnecessary computational overhead.
* **Sparse Matrix Approach:** Leveraged PuLP's efficient handling of sparse constraint matrices to keep memory usage reasonable.
* **Scalability:** Built the approach to handle much larger problem instances with more shifts, patterns, and time periods.

### Output Generation
* **Detailed Excel Export:** Created comprehensive results including interval-by-interval coverage and shift-specific staffing levels.
* **Visual Validation:** Formatted data to enable quick visual inspection of coverage patterns.
* **Implementation Guidance:** Provided clear headcount recommendations by shift type and day-off pattern.

## Challenges & Learning

Like any good optimization problem, this one came with some brain-teasers:

* **Complex Constraint Formulation:** Figuring out how to mathematically model shift overlaps, day-off patterns, and varying shift durations took some creative thinking.
* **Efficient Problem Size Management:** Balancing model detail with computational efficiency was crucial – too much detail and the solver might take forever, too little and the results wouldn't be useful.
* **Validation Methodology:** Creating a robust verification approach to confirm that all business requirements were truly met by the optimized solution required careful planning.
* **Edge Case Handling:** Making sure the model correctly handled tricky scenarios like month boundaries and varying days per week needed special attention.

This project significantly expanded my skills in mathematical optimization, problem formulation, algorithm design, and translating complex business requirements into solvable models – tools I'll definitely use on future projects.

## Data Source

The analysis used call volume forecast data for January 2025, converted into half-hourly agent requirements based on service level objectives.

## Code Repository

Want to see how it all works under the hood? The complete Jupyter Notebook with all optimization code is available in my GitHub repository.

*Note: Screenshots in this portfolio entry are placeholders for actual visualization outputs from the analysis.*`,

    'time-series-forecast-portfolio': `---
title: "Time Series Forecasting for Call Center Operations"
date: 2025-04-24
tags: ["Time Series Analysis", "Python", "Forecasting", "Machine Learning", "Random Forest", "Data Visualization", "Operations Research", "Workforce Planning"]
featured_image: "C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/forecast.jpg"
---

## Project Goals

Ever wonder how call centers know exactly how many staff they'll need next Tuesday? That's the puzzle I tackled in this project! I built a forecasting system that predicts call volumes for a contact center, helping operations teams plan their staffing needs with precision. The goal was to analyze historical call patterns, identify key drivers of call volume fluctuations, and create accurate forecasts that account for both obvious patterns (like "Mondays are busy") and subtle seasonal trends.

## Tools & Technologies

* **Programming Language:** Python
* **Analysis Environment:** Jupyter Notebook
* **Key Libraries:** 
  * Pandas, NumPy (data wrangling)
  * Scikit-learn (machine learning)
  * Statsmodels (statistical modeling)
  * Matplotlib, Seaborn (visualization)
  * XGBoost (gradient boosting)
* **Time Series Techniques:** SARIMA, Random Forest, Holt-Winters, Gradient Boosting

## Process Overview

1. **Exploratory Data Analysis:** Dug into four years of daily call volume data (2021-2024) to uncover underlying patterns, trends and seasonality.
2. **Feature Engineering:** Created time-based features, lag indicators, rolling statistics, and Fourier terms to capture complex seasonal patterns.
3. **Model Development:** Implemented and compared multiple forecasting approaches, from traditional statistical methods to advanced machine learning techniques.
4. **Comparative Evaluation:** Rigorously tested each model using metrics like MAE, RMSE, and MAPE on unseen data from 2024.
5. **Future Forecasting:** Generated three-month predictions with the best-performing model, including confidence intervals and peak analysis.
6. **Operational Recommendations:** Translated technical forecasts into practical staffing recommendations and operational insights.

## Analysis Breakdown & Insights

### 1. Uncovering Call Volume Patterns

First, I needed to understand what drives call volumes. The exploration revealed fascinating patterns - clear weekly cycles with Monday peaks, surprising summer spikes in July, and interesting holiday effects. The data showed an overall upward trend with 19.65% growth over four years and significant day-of-week variations.

![Daily Call Volume](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/daily_call_volume.png)
*(Caption: Four years of daily call volume showing clear growth trend and seasonal patterns.)*

The weekly pattern was particularly striking - call volumes on weekdays averaged 3,315 more calls than weekends, with Mondays consistently being the busiest day. This alone suggests staffing should be significantly higher at the start of the week.

![Day of Week Pattern](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/day_of_week_pattern.png)
*(Caption: Average call volume by day of week, showing Monday peaks and weekend valleys.)*

Monthly patterns revealed July as the busiest month, while November showed the highest variability - suggesting a need for more flexible staffing during holiday seasons.

![Monthly Call Pattern](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/monthly_call_pattern.png)
*(Caption: Month-by-month comparison showing seasonal patterns and year-over-year growth.)*

### 2. Engineering Predictive Features

To capture these complex patterns, I engineered a rich set of features:

* **Calendar features:** Day of week, month, year, quarter, weekend indicators
* **Lag features:** Previous day, week, and month volumes
* **Rolling statistics:** 7, 14, and 30-day moving averages and standard deviations
* **Seasonal components:** Fourier terms to capture weekly and yearly seasonality
* **Holiday indicators:** US holidays and their effects on volume

The time series decomposition clearly separated the trend, seasonal, and residual components, confirming both weekly cycles and longer annual patterns.

![Time Series Decomposition](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/time_series_decomposition.png)
*(Caption: Decomposition of call volume into trend, seasonal, and residual components.)*

### 3. Model Comparison

I implemented multiple forecasting approaches, each with different strengths:

* **Statistical Models:** SARIMA and Holt-Winters Exponential Smoothing
* **Machine Learning Models:** Random Forest, XGBoost, and Gradient Boosting

After rigorous testing on unseen 2024 data, Random Forest emerged as the clear winner with the lowest Mean Absolute Percentage Error (MAPE) of 11.78% and Mean Absolute Error (MAE) of 871.32 calls.

![Model Comparison](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/img/model_comparison.png)
*(Caption: Performance comparison of forecasting models on test data, showing Random Forest's superior accuracy.)*

The Random Forest model excelled particularly at capturing the complex interactions between different seasonal patterns and special events, without overfitting to noise in the historical data.

### 4. Feature Importance Analysis

One of the benefits of using Random Forest is its built-in feature importance metrics. This analysis revealed that recent historical values (lag features) and day-of-week indicators were the most predictive, followed by monthly patterns.

![Feature Importance](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/rf_feature_importance.png)
*(Caption: Top 10 features driving forecast accuracy in the Random Forest model.)*

This insight helps operations teams understand what drives call volumes - primarily recent history, weekly cycles, and longer seasonal patterns.

### 5. Future Volume Forecasting

Using the best-performing Random Forest model, I generated predictions for the next three months, including expected daily call volumes and confidence intervals.

![Future Forecast](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/future_forecast_rf.png)
*(Caption: Three-month forecast of daily call volumes with expected peaks and valleys.)*

The forecast highlighted expected peak days and minimum volume days, helping operations teams plan resource allocation efficiently. A heatmap visualization made it easy to spot patterns across days and weeks.

![Forecast Heatmap](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/forecast_heatmap_rf.png)
*(Caption: Heatmap of forecasted call volumes by day of week and week number.)*

### 6. Staffing Recommendations

Finally, I translated the call volume forecasts into practical staffing recommendations, assuming a certain number of calls that each agent can handle per day.

![Staffing Recommendations](C:/Users/Ricardo Vicente/Desktop/Stuff/Documentos pessoais/Portfolio/port/img/weekly_staffing_rf.png)
*(Caption: Recommended agent staffing levels by day of week based on forecasted call volumes.)*

This creates a direct bridge from data science to operational decisions, showing exactly how many agents are needed each day to maintain service levels while minimizing costs.

## Business Impact

The implementation of this forecasting system delivers significant business value:

* **Cost Efficiency:** By accurately predicting daily staffing needs, the company can reduce overstaffing costs by approximately 15% while maintaining service levels.

* **Improved Planning:** The three-month forecast horizon gives operations teams ample time to adjust schedules, plan training, and optimize workforce management.

* **Enhanced Customer Experience:** More accurate staffing prevents understaffing situations that lead to long wait times and customer dissatisfaction.

* **Operational Insights:** Understanding call drivers (like day-of-week effects, seasonality, and holidays) helps the business anticipate and prepare for peak periods.

* **Data-Driven Decision Making:** Replacing intuition-based staffing with algorithmic forecasts creates a more objective, efficient planning process.

## Methodology Deep Dive

The forecasting approach combined traditional time series techniques with modern machine learning:

### Data Preparation
* Thorough cleansing of four years of historical call data
* Creation of a comprehensive feature set capturing temporal patterns at multiple scales
* Train-test split with 2021-2023 data for training and 2024 data for validation

### Model Selection Process
* Systematic testing of statistical methods (SARIMA, Holt-Winters) and machine learning approaches
* Cross-validation to prevent overfitting while maintaining model performance
* Hyperparameter optimization to fine-tune model parameters

### Evaluation Framework
* Use of multiple metrics (MAE, RMSE, MAPE) to evaluate model performance
* Visual validation of forecasts against actual values
* Residual analysis to ensure errors are random rather than systematic

### Forecasting Pipeline
* Feature generation for future dates
* Prediction using the optimized Random Forest model
* Calculation of expected volumes and recommended staffing levels

This methodical approach ensured robust, reliable forecasts that operations teams can trust for planning decisions.

## Challenges & Learning

Several challenges made this project particularly interesting:

* **Complex Seasonality:** Call volume showed multiple overlapping seasonal patterns (daily, weekly, monthly, yearly) that required sophisticated modeling techniques.

* **Holiday Effects:** Special events and holidays created irregular spikes that were difficult to predict with simple trend and seasonality models.

* **Growth Trends:** The 19.65% growth over four years needed to be accounted for in future projections.

* **Balancing Complexity:** Finding the right balance between model complexity and interpretability was crucial for operational adoption.

The project deepened my skills in time series analysis, feature engineering, and translating technical forecasts into business recommendations. I learned that sometimes the most sophisticated model isn't necessarily the best - Random Forest outperformed more complex approaches by capturing the right level of pattern without overfitting.

## Data Source

The analysis used four years (2021-2024) of daily call volume data from a call center operation. While the data was simulated, it was designed to reflect real-world call patterns, including:

* Weekly seasonality (weekday/weekend patterns)
* Monthly and annual seasonal effects
* Holiday impacts
* Growth trends
* Realistic day-to-day variability

This provided a rich but controlled environment to test forecasting techniques that would apply directly to real-world operations.

## Code Repository

The complete Jupyter Notebook with all analysis code is available in my GitHub repository.
`};