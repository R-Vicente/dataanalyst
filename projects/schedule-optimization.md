---
title: "Staff Scheduling Optimization Model"
date: 2025-04-23
tags: ["Operations Research", "Linear Programming", "Python", "PuLP", "Workforce Optimization", "Call Center Management", "Schedule Planning"]
#featured_image: "/img/staff_scheduling.png"
# link: "URL_PARA_GITHUB_OU_NOTEBOOK"
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

![Demand Pattern Analysis](/img/formulation-sche.png)
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

![Demand Pattern Analysis](/img/demand_patterns.png)
*(Caption: Visualization of half-hourly staffing requirements showing daily and weekly patterns.)*

### 3. Optimization Results

After crunching the numbers, the model delivered a beautiful solution: 25 agents (not 24, not 26, but exactly 25) distributed across 11 different shift types and all 7 day-off patterns. This schedule achieved 100% coverage of all required staffing levels while keeping the total scheduled work hours to a lean 4,367 hours per month. That's optimization in action!

![Optimization Results](/img/optimization_results.png)
*(Caption: Summary of optimization results showing headcount allocation by shift type and day-off pattern.)*

### 4. Coverage Analysis

The coolest part? The resulting schedule provided perfect coverage at all times – no understaffing anywhere. Yes, there was some strategic overstaffing at certain periods (up to 9 extra agents during some intervals), but that's often unavoidable due to shift structures. The key is that the model minimized this excess while ensuring service levels never dropped below requirements.

![Coverage Analysis](/img/coverage_analysis.png)
*(Caption: Comparison of required versus scheduled staffing levels across the planning period.)*

### 5. Shift Distribution

Out of 14 possible shift types, the model selected 11 as optimal. Some shifts just weren't efficient for this particular demand pattern, so the algorithm naturally avoided them. The model also found clever combinations of shifts and day-off patterns that minimized total work hours while covering all requirements.

![Shift Distribution](/img/shift_distribution.png)
*(Caption: Distribution of agents across different shift types showing which time slots were most efficient.)*

This graph shows how efficiently agents are allocated throughout the day. The bars represent the number of required agents (blue) and surplus agents (orange), while the red line shows the resource utilization rate (percentage of scheduled agents that are actually required). Higher percentages indicate more efficient resource allocation, with fewer excess agents scheduled.

![Shift Distribution](/img/efficiency.png)


### 6. Implementation Strategy

Math is great, but people need to know what to do with it! I translated the optimization results into a detailed implementation strategy that specifies exactly how many agents should work each shift type with each day-off pattern. This is the actionable staffing plan that workforce management can actually use to make hiring and scheduling decisions.

![Implementation Strategy](/img/implementation_strategy.png)
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

![Methodology Framework](/img/methodology_framework.png)
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

*Note: Screenshots in this portfolio entry are placeholders for actual visualization outputs from the analysis.*