// Define the project data
window.projectsData = window.projectsData || {};

window.projectsData['mgh-kpi-dashboard'] = {
    title: "Hospital KPI Dashboard (Massachusetts General Hospital)",
    shortDescription: "Ever wondered how hospital executives keep track of everything going on in their complex organizations? That's exactly what I tackled in this project!",
    description: "Ever wondered how hospital executives keep track of everything going on in their complex organizations? That's exactly what I tackled in this project! As part of a Business Intelligence course, I built a comprehensive KPI dashboard for the Massachusetts General Hospital's executive team. My mission? To transform patient data into clear, actionable insights about hospital performance.",
    image: "https://placehold.co/600x400",
    technologies: "Power BI, SQL, ETL, DAX",
    category: "Healthcare Analytics, Dashboard",
    tags: ["Power BI", "Dashboard", "Healthcare"],
    content: `
        <h3>Project Overview</h3>
        <p>In this project, I designed and implemented a comprehensive analytics dashboard for Massachusetts General Hospital executives. The dashboard provides real-time access to critical performance indicators across multiple departments, helping leadership make data-driven decisions about resource allocation, staff scheduling, and quality improvement initiatives.</p>
        
        <h3>Dashboard Visualizations</h3>
        <div class='image-container'>
            <img src='https://placehold.co/1000x600' alt='Dashboard Screenshot' style='width: 100%; height: auto; border-radius: 8px;'>
        </div>
        <p>The dashboard includes multiple interconnected views including:</p>
        <ul>
            <li>Patient flow metrics (admissions, discharges, average length of stay)</li>
            <li>Department utilization rates</li>
            <li>Staff performance indicators</li>
            <li>Financial performance tracking</li>
            <li>Quality and patient satisfaction measures</li>
        </ul>
        
        <h3>Technical Implementation</h3>
        <p>For this project, I performed the following technical tasks:</p>
        <ul>
            <li>Developed an ETL pipeline to extract and transform data from multiple hospital systems</li>
            <li>Created a star schema data model to optimize report performance</li>
            <li>Implemented complex DAX measures to calculate KPIs like bed turnover rate and patient wait times</li>
            <li>Designed an intuitive interface with drill-down capabilities for detailed analysis</li>
            <li>Set up automated data refreshes to ensure timely information</li>
        </ul>
    `
};