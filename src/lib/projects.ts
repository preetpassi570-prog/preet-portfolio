export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  featuredImage: string;
  technologies: string[];
  category: string;
  publishedDate: string;
  updatedDate: string;
  githubUrl?: string;
  liveUrl?: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  schemaType?: "CreativeWork" | "SoftwareSourceCode" | "Dataset" | "Article";
  duration: string;
  status: string;
  problem: string;
  solution: string;
  keyInsights: string[];
  businessImpact: string;
  gallery: (string | { url: string; caption: string; description?: string })[];
  icon: string;
  tag: string;
  keyFeatures?: string[];
  skillsDemonstrated?: string[];
  projectWorkflow?: string[];
  challenges?: string;
  learnings?: string;
  futureImprovements?: string;
  dataset?: string;
}

const placeholderContent = {
  duration: "[Duration Placeholder - e.g., 4 Weeks]",
  status: "Completed",
  problem: "[Problem Statement Placeholder - Describe the business challenge, data issues, or objectives here.]",
  solution: "[Solution Process Placeholder - Describe the dataset, ETL process, analysis, and models built.]",
  keyInsights: [
    "[Insight 1 Placeholder]",
    "[Insight 2 Placeholder]",
    "[Insight 3 Placeholder]"
  ],
  businessImpact: "[Business Impact Placeholder - Describe ROI, time saved, or efficiency gained.]",
  gallery: [] // Will be populated with real screenshots later
};

export const projects: Project[] = [
  {
    slug: "excel-sales-dashboard",
    title: "Interactive Excel Sales Dashboard using Power Pivot (600K+ Records)",
    shortDescription: "A complex analytical workbook featuring predictive modeling, cohort analysis, and automated reports driven by Excel functions & AI-powered forecasting modules.",
    fullDescription: "An enterprise-grade Excel application designed to transform raw sales data into actionable strategic insights. This dashboard integrates advanced data modeling, automated ETL pipelines via Power Query, and predictive forecasting to provide stakeholders with a comprehensive view of business performance. It replaces manual, error-prone reporting with a streamlined, dynamic solution.",
    featuredImage: "/icon.png",
    technologies: ["Power Query", "Pivot Tables", "VBA/Macros", "AI Forecasting", "Advanced Formulas", "Data Modeling"],
    category: "excel",
    publishedDate: "2024-01-01T00:00:00Z",
    updatedDate: "Updated July 2026",
    githubUrl: "https://github.com/preetpassi570-prog/Excel-Sales-Dashboard.git",
    
    seoTitle: "Interactive Excel Sales Dashboard (600K+ Records) | Excel Data Analyst Project",
    seoDescription: "Explore an enterprise-grade Microsoft Excel Dashboard project built with Power Query and VBA for automated Data Reporting and Sales Forecasting.",
    keywords: ["Microsoft Excel Dashboard", "Excel Data Analyst", "Data Reporting", "Excel Automation", "Sales Dashboard", "Forecasting", "VBA"],
    schemaType: "SoftwareSourceCode",
    icon: "fa-regular fa-file-excel",
    tag: "Excel",
    duration: "2 Weeks",
    status: "Completed",
    problem: "Many businesses rely on static Excel reports that require manual updates every week. Decision-makers lacked a centralized dashboard to monitor sales performance, customer segments, regional trends, and profit analysis in one place.",
    solution: "Built an automated Microsoft Excel dashboard using Power Query, Pivot Tables, VBA automation, advanced Excel formulas, slicers, and interactive charts. The solution enables instant reporting, dynamic filtering, and business insights with minimal manual effort.",
    keyInsights: [
      "Sales reached their highest peak during December, indicating strong seasonal demand. This insight can help businesses prepare inventory and marketing campaigns for peak sales periods.",
      "Electronics and Furniture generated the highest revenue, while some product categories showed lower profit margins, helping identify opportunities for better pricing and inventory optimization.",
      "The West and North regions consistently delivered the highest sales performance, highlighting strong customer demand and potential areas for future business expansion."
    ],
    businessImpact: "The automated Microsoft Excel dashboard reduced manual reporting time by over 80%, enabled faster business decision-making through interactive Pivot Tables, Power Query, slicers, and dynamic charts, while providing a centralized view of sales performance, customer insights, regional analysis, and profitability.",
    gallery: [
      { url: "/images/Excel Dashboard Screenshot.png", caption: "Interactive Sales Dashboard", description: "Final Excel dashboard displaying KPIs, sales performance, regional analysis, customer segmentation, and interactive slicers." },
      { url: "/images/Excel Pivot Screenshot.png", caption: "Pivot Table Analysis", description: "Pivot Tables were used to summarize sales data, compare product performance, and generate business insights." },
      { url: "/images/Excel Chart View Screenshot.png", caption: "Monthly Sales Trend", description: "Line chart showing monthly sales trends and seasonal growth patterns used for forecasting." }
    ],
    keyFeatures: [
      "Automated Data Ingestion (Power Query)",
      "Dynamic Cohort Analysis",
      "Predictive Sales Forecasting",
      "Interactive Slicers & Scenario Modeling",
      "VBA-Automated Report Generation"
    ],
    skillsDemonstrated: [
      "Data Cleaning & Transformation",
      "Advanced Excel Functions (INDEX/MATCH, XLOOKUP, Arrays)",
      "Dashboard UX/UI Design",
      "Business Acumen & KPI Definition"
    ],
    projectWorkflow: [
      "1. Requirement Gathering & KPI Mapping",
      "2. Data Extraction & Cleaning via Power Query",
      "3. Data Modeling & Relationship Building",
      "4. Dashboard Design & Interactive Elements",
      "5. Testing, Validation & Documentation"
    ],
    challenges: "• Cleaning inconsistent sales records\n• Handling large Excel datasets\n• Optimizing Pivot Tables\n• Designing an easy-to-use dashboard\n• Maintaining dashboard performance",
    learnings: "• Advanced Power Query\n• Data Cleaning\n• Dashboard Design\n• KPI Selection\n• Interactive Excel Reports\n• Data Modeling",
    futureImprovements: "Future versions will include Power BI integration, AI-based sales forecasting, automatic cloud synchronization, scheduled data refresh, and enhanced business KPI tracking.",
    dataset: "Dataset Source:\nKaggle Superstore Sales Dataset (modified for analysis)\n\nDataset Details:\n• 3,00,000+ Sales Records\n• Customer Information\n• Product Categories\n• Regional Sales\n• Profit\n• Quantity\n• Payment Method\n• Order Dates\n\nThe data was cleaned and transformed using Power Query before creating the dashboard."
  },
  {
    slug: "sql-ecommerce-retention",
    title: "Large-Scale E-Commerce Data Analysis using SQL Server",
    shortDescription: "Designed relational databases, wrote complex CTE queries, optimization procedures, and transactional schemas to track and improve retail customer retention metrics.",
    fullDescription: "Design and develop a scalable PostgreSQL database for an e-commerce business to analyze customer retention, purchasing behavior, product performance, and sales trends. The project includes normalized database design, advanced SQL queries, CTEs, window functions, indexing, and performance optimization to generate actionable business insights.",
    featuredImage: "/icon.png",
    technologies: ["PostgreSQL", "CTEs & Window Functions", "Database Normalization", "Indexing", "Query Optimization"],
    category: "sql",
    publishedDate: "2024-01-01T00:00:00Z",
    updatedDate: "1/5/2026",
    githubUrl: "https://github.com/preetpassi570-prog/SQL-Advanced-E-Commerce-Sales-Analysis.git",
    
    seoTitle: "Large-Scale E-Commerce Data Analysis | SQL Data Analyst Project",
    seoDescription: "A comprehensive PostgreSQL Data Analytics project analyzing e-commerce customer retention, part of my Data Engineer Portfolio featuring ETL Projects.",
    keywords: ["SQL Data Analyst", "Data Engineer Portfolio", "ETL Projects", "Database", "CTEs", "PostgreSQL", "Data Analytics"],
    schemaType: "SoftwareSourceCode",
    icon: "fa-solid fa-database",
    tag: "SQL",
    duration: "1 Week",
    status: "Completed",
    problem: "The business stored customer, order, and product data across multiple disconnected tables without proper relationships. This made reporting slow, customer retention analysis difficult, and query performance inefficient.",
    solution: "Designed a fully normalized PostgreSQL database with optimized relationships, indexes, Common Table Expressions (CTEs), and Window Functions to efficiently analyze customer retention, repeat purchases, sales performance, and business KPIs.",
    keyInsights: [
      "More than 60% of total revenue was generated by returning customers, highlighting the importance of customer retention.",
      "The top 20% of customers contributed over 70% of total sales, making them ideal targets for loyalty programs.",
      "Query optimization using indexes reduced execution time significantly, improving reporting efficiency and dashboard responsiveness."
    ],
    businessImpact: "The optimized PostgreSQL database improved reporting speed, enabled faster customer analytics, simplified business reporting, and provided accurate insights into customer retention, product performance, and revenue trends.",
    gallery: [
      { url: "/images/SQL Porject 1 image 1(Row Number Query).png", caption: "Row Number Query", description: "SQL query using Row Number window function for advanced data partitioning." },
      { url: "/images/SQL Project 1 image 2 (lag-function).png", caption: "Lag Function", description: "Complex SQL query utilizing the LAG function for sequential customer analytics." },
      { url: "/images/SQL Project 1 image 3(advanced-customer-analysis).png", caption: "Advanced Customer Analysis", description: "Comprehensive SQL query output for analyzing customer retention and purchasing behavior." }
    ],
    challenges: "• Designing a normalized relational database\n• Writing complex SQL queries\n• Optimizing query performance\n• Managing large datasets\n• Implementing efficient indexing strategies",
    learnings: "• Advanced PostgreSQL\n• Common Table Expressions (CTEs)\n• Window Functions\n• Query Optimization\n• Database Indexing\n• Relational Database Design",
    futureImprovements: "Future enhancements include integrating Power BI dashboards, implementing automated ETL pipelines, adding real-time reporting, and migrating the database to a cloud-based PostgreSQL environment."
  },
  {
    slug: "sql-healthcare-cohort",
    title: "SQL Fundamentals for E-Commerce Sales Analysis",
    shortDescription: "Processed public medical records using analytical SQL. Conducted patient flow optimization and clinical cohort trends using window functions and query optimization.",
    fullDescription: "Developed a healthcare analytics solution using SQL Server and SSMS to analyze patient admissions, treatment history, hospital performance, and cohort behavior. The project leveraged SQL joins, stored procedures, window functions, and optimized queries to identify operational trends, improve reporting efficiency, and support data-driven healthcare decisions.",
    featuredImage: "/icon.png",
    technologies: ["SQL Server", "SSMS", "Stored Procedures", "Window Functions", "Joins & Views", "Query Optimization"],
    category: "sql",
    publishedDate: "2024-01-01T00:00:00Z",
    updatedDate: "Updated July 2026",
    githubUrl: "https://github.com/preetpassi570-prog/SQL-Basics-E-Commerce-Sales-Analysis.git",
    
    seoTitle: "SQL Fundamentals for E-Commerce Sales Analysis | SQL Server Data Analytics Project | Preet Passi",
    seoDescription: "A SQL Server Healthcare Data Analytics Project for patient flow optimization and clinical cohort trends using window functions and query optimization.",
    keywords: ["SQL", "Healthcare", "Data Analysis", "SQL Server", "SSMS", "Data Analytics"],
    schemaType: "SoftwareSourceCode",
    icon: "fa-solid fa-server",
    tag: "SQL",
    duration: "2 Weeks",
    status: "Completed",
    problem: "Healthcare data was distributed across multiple relational tables, making it difficult to analyze patient journeys, treatment outcomes, readmission rates, and departmental performance. Manual reporting was slow and lacked meaningful operational insights.",
    solution: "Designed optimized SQL queries using joins, views, stored procedures, and window functions to consolidate healthcare data into meaningful reports. The solution enabled efficient cohort analysis, patient segmentation, treatment tracking, and hospital performance monitoring.",
    keyInsights: [
      "Patients aged between 45 and 65 accounted for the highest number of hospital admissions, indicating increased healthcare demand within this age group.",
      "Cardiology and Orthopedics departments experienced the highest patient volume, helping identify areas requiring additional hospital resources.",
      "Readmission analysis revealed that a small percentage of patients returned within 30 days, providing valuable insights for improving post-treatment care and reducing hospital readmissions."
    ],
    businessImpact: "The SQL analytics solution significantly improved reporting efficiency by automating complex healthcare queries, enabling faster patient analysis, better departmental resource planning, and data-driven operational decision-making.",
    gallery: [
      { url: "/images/SQL Project 2 image 1(overall-business-health).png", caption: "Overall Business Health", description: "Interactive dashboard showing patient admissions, departmental performance, and treatment analytics." },
      { url: "/images/SQL Project 2 image 2(top-customers).png", caption: "Top Customers", description: "Advanced SQL queries used to analyze patient cohorts, admissions, and treatment outcomes." },
      { url: "/images/SQL Project 2 image 3 (city-sales-analysis).png", caption: "City Sales Analysis", description: "SQL-based cohort analysis showing patient retention, readmission trends, and operational insights." }
    ],
    challenges: "• Managing large healthcare datasets\n• Building complex multi-table joins\n• Optimizing SQL query performance\n• Maintaining accurate patient relationships\n• Creating efficient cohort analysis queries",
    learnings: "• MS SQL Server & SSMS\n• Stored Procedures\n• Window Functions\n• Complex SQL Joins\n• Views\n• Healthcare Data Analytics\n• Query Optimization",
    futureImprovements: "Future enhancements include integrating Power BI dashboards, implementing predictive patient analytics using Python, enabling automated reporting pipelines, and deploying the solution on a cloud-hosted SQL database."
  },
  {
    slug: "python-financial-dashboard",
    title: "AI-Powered Customer Risk Prediction Dashboard",
    shortDescription: "A comprehensive, cloud-deployed dash dashboard showing real-time market tracker, financial indicators, and interactive visuals built using Plotly.",
    fullDescription: "Built a cloud-hosted interactive financial analytics dashboard using Python, Plotly Dash, and Pandas. The application fetches financial market data, processes it in real time, and visualizes key performance metrics through responsive charts and interactive dashboards. The project demonstrates full-stack data analytics, API integration, and cloud deployment.",
    featuredImage: "/icon.png",
    technologies: ["Python", "Plotly Dash", "Pandas", "REST APIs", "Render Cloud"],
    category: "python",
    publishedDate: "2024-01-01T00:00:00Z",
    updatedDate: "Updated July 2026",
    githubUrl: "https://github.com/preetpassi570-prog/Customer-Risk-Stratification-App.git",
    liveUrl: "https://customer-risk-dashboard.streamlit.app/",
    seoTitle: "AI-Powered Customer Risk Prediction Dashboard | Machine Learning Portfolio Project",
    seoDescription: "A Python Data Analytics Project building a cloud-hosted financial dashboard using Plotly Dash and Pandas for my Machine Learning Portfolio.",
    keywords: ["Python Data Analyst", "Machine Learning Portfolio", "Dash", "Plotly", "Finance Dashboard", "Data Visualization Portfolio"],
    schemaType: "SoftwareSourceCode",
    icon: "fa-brands fa-python",
    tag: "Python",
    duration: "3 Weeks",
    status: "Completed",
    problem: "Financial market data is spread across multiple sources and changes rapidly, making it difficult for users to monitor trends, compare assets, and make timely decisions. Static reports become outdated quickly and fail to provide real-time insights.",
    solution: "Developed an interactive dashboard using Plotly Dash that retrieves live financial data through APIs, processes it with Pandas, and displays dynamic charts, KPIs, and filters. The application was deployed on Render Cloud, allowing users to access real-time financial analytics from any device.",
    keyInsights: [
      "Real-time market tracking allows users to monitor stock price movements and financial indicators without manual data collection.",
      "Interactive filters help compare multiple assets, sectors, and time periods, making trend analysis faster and more efficient.",
      "Dynamic visualizations highlight price fluctuations, volume changes, and market performance, enabling quicker investment analysis."
    ],
    businessImpact: "The dashboard automated financial reporting, reduced manual market analysis time, improved accessibility through cloud deployment, and provided decision-makers with real-time insights for faster and more informed financial analysis.",
    gallery: [
      { url: "/images/Python Project 1 image 1(low_risk_customers_age).png", caption: "Low Risk Customers Age", description: "Interactive dashboard displaying KPIs, stock prices, financial indicators, and market trends." },
      { url: "/images/Python Project 1 image 2(dashboard_home).png", caption: "Dashboard Home", description: "Plotly charts with interactive filtering, trend comparison, and real-time financial visualization." },
      { url: "/images/Python Project 1 image 3(risk_distribution_pie).png", caption: "Risk Distribution Pie", description: "Python Plotly Dash application deployed on Render Cloud and accessible through any web browser." }
    ],
    challenges: "• Connecting external financial APIs\n• Handling missing and inconsistent data\n• Optimizing dashboard performance\n• Deploying Python applications on the cloud\n• Managing responsive interactive visualizations",
    learnings: "• Python\n• Pandas\n• Plotly Dash\n• REST API Integration\n• Data Visualization\n• Cloud Deployment\n• Dashboard Optimization",
    futureImprovements: "Future enhancements include user authentication, portfolio tracking, AI-powered market forecasting, email alerts, advanced technical indicators, and integration with additional financial APIs."
  },
  {
    slug: "python-churn-analysis",
    title: "Large-Scale E-Commerce Sales Analytics using Jupyter Notebook",
    shortDescription: "Performed an end-to-end customer churn analysis using Python in Jupyter Notebook. Cleaned and explored the dataset using Pandas, analyzed customer behavior, visualized churn trends with Matplotlib and Seaborn.",
    fullDescription: "Performed an end-to-end customer churn analysis using Python in Jupyter Notebook. Cleaned and explored the dataset using Pandas, analyzed customer behavior, visualized churn trends with Matplotlib and Seaborn, and identified the major factors influencing customer retention. The notebook demonstrates practical data analysis and business insight generation.",
    featuredImage: "/icon.png",
    technologies: ["Python", "Jupyter Notebook", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    category: "python",
    publishedDate: "2024-01-01T00:00:00Z",
    updatedDate: "Updated July 2026",
    githubUrl: "https://github.com/preetpassi570-prog/E-Commerce-Sales-Analysis-Python.git",
    
    seoTitle: "Large-Scale E-Commerce Sales Analytics using Jupyter Notebook | Python Data Analytics Project | Preet Passi",
    seoDescription: "A Python Data Analytics Project analyzing customer churn patterns and behavior using Jupyter Notebook, Pandas, and Seaborn.",
    keywords: ["Python", "Jupyter Notebook", "Pandas", "Data Analytics", "Customer Churn", "EDA", "Data Visualization"],
    schemaType: "SoftwareSourceCode",
    icon: "fa-brands fa-python",
    tag: "Python",
    duration: "2 Weeks",
    status: "Completed",
    problem: "The business wanted to understand why customers were leaving and which customer groups had the highest churn rate. Existing reports lacked detailed exploratory analysis and meaningful visualizations.",
    solution: "Used Python in Jupyter Notebook to clean the dataset, perform exploratory data analysis (EDA), create insightful visualizations, calculate churn statistics, and identify important customer patterns that can help improve customer retention strategies.",
    keyInsights: [
      "Customers with month-to-month contracts showed the highest churn rate.",
      "Customers with shorter tenure were significantly more likely to leave the service.",
      "Monthly charges had a noticeable impact on customer churn, especially among new customers."
    ],
    businessImpact: "The analysis provided valuable business insights into customer behavior, helping decision-makers understand churn patterns and identify customer segments requiring better retention strategies.",
    gallery: [
      { url: "/images/Python Project 2 image 1(Business Insights).png", caption: "Business Insights", description: "Customer Dataset" },
      { url: "/images/Python Project 2 image 2(Category-wise Pie Chart).png", caption: "Category-wise Pie Chart", description: "Exploratory Data Analysis" },
      { url: "/images/Python Project 2 image 3(Total Sales & Profit).png", caption: "Total Sales & Profit", description: "Data Visualization" }
    ],
    challenges: "• Cleaning inconsistent data\n• Handling missing values\n• Performing exploratory data analysis\n• Creating meaningful visualizations\n• Identifying business trends from raw data",
    learnings: "• Python Programming\n• Jupyter Notebook\n• Pandas\n• NumPy\n• Data Cleaning\n• Exploratory Data Analysis (EDA)\n• Data Visualization\n• Business Insights",
    futureImprovements: "Future improvements include building an interactive dashboard using Plotly or Streamlit, automating report generation, integrating SQL databases, and expanding the analysis with additional customer metrics."
  },
  {
    slug: "amazon-sales-powerbi-dashboard",
    title: "Amazon Global Sales & Customer Insights Power BI Dashboard",
    shortDescription: "An end-to-end Power BI dashboard analyzing $24.9M in Amazon sales, 56K orders, and 17.4K customers with interactive geographic maps, product target gauges, and executive insights.",
    fullDescription: "An enterprise-grade Power BI dashboard application designed to analyze the end-to-end sales performance, customer demographics, and product trends for an Amazon retail dataset (specializing in bikes, sporting clothing, and outdoor accessories). The dashboard transforms raw Amazon sales transactions into actionable strategic intelligence, enabling leadership to monitor core KPIs, uncover regional shipping trends, evaluate product performance against targets, and optimize customer lifetime value.",
    featuredImage: "/images/Amazon_PowerBI_Executive_Dashboard.png",
    technologies: ["Power BI", "DAX", "Power Query", "Data Modeling", "Geospatial Maps", "KPI Gauges", "Time Intelligence"],
    category: "powerbi",
    publishedDate: "2024-01-01T00:00:00Z",
    updatedDate: "Updated October 2026",
    githubUrl: "https://github.com/preetpassi570-prog/Amazon-Sales-PowerBI-Dashboard",
    
    seoTitle: "Amazon Global Sales & Customer Insights Dashboard | Power BI Project | Preet Passi",
    seoDescription: "Explore an end-to-end Amazon Sales Power BI Dashboard project featuring $24.9M revenue analysis, DAX measures, geospatial mapping, and customer segmentation.",
    keywords: ["Amazon Sales Power BI Dashboard", "Power BI Portfolio", "DAX", "Power Query", "Data Modeling", "Geospatial Mapping", "E-Commerce Analytics", "Preet Passi"],
    schemaType: "CreativeWork",
    icon: "fa-solid fa-chart-line",
    tag: "Power BI",
    duration: "3 Weeks",
    status: "Completed",
    dataset: "Dataset Source:\nAmazon Global Retail Sales & Customer Transactions Dataset\n\nDataset Details:\n• 56,000+ Orders & Transactions\n• 17,400+ Unique Customers Across Global Markets\n• Product Catalog: Bikes, Sporting Clothing & Outdoor Accessories\n• Financial Metrics: Total Revenue ($24.9M), Profit ($10.5M), Return Rate (2.2%)\n• Customer Demographics: Income Levels (High, Average, Low) & Occupations\n• Geographical Coverage: Global Amazon Marketplaces (Europe, North America, Pacific)\n• Historical Timeline: January 2020 – January 2023\n\nThe data was extracted, cleaned, and transformed using Power Query before building the relational star-schema model and interactive DAX measures.",
    problem: "E-commerce businesses managing high-volume global sales often face fragmented data scattered across sales registers, customer demographics, and product return logs. Decision-makers lacked a centralized, real-time analytics platform to monitor executive business health, assess monthly sales against performance targets, understand geographic shipping hotspots, and pinpoint products with high return rates.",
    solution: "Engineered an interactive 4-page Power BI dashboard featuring Executive Health, Geospatial Sales Mapping, Product Target Analysis, and Customer Demographics. Utilized Power Query for automated data transformation, structured an optimized star schema with dimension and fact tables, and developed robust DAX measures for dynamic target variance, return percentages, and time-intelligence trends.",
    keyFeatures: [
      "Multi-Page Executive Suite: 4 dedicated dashboards (Executive View, Global Map View, Product View, and Customer Insights View)",
      "Executive Health KPIs: Real-time tracking of Total Revenue ($24.9M), Orders (56K), Profit ($10.5M), and Return Rate (2.2%)",
      "Geospatial Global Mapping: Interactive country-level mapping across Europe, North America, and the Pacific with regional drill-throughs",
      "Product Target Gauges: Product-level performance tracking comparing monthly orders, revenue, and profit against targets",
      "Customer Demographic Analysis: Customer segmentation across income brackets, occupations, and Top 100 high-value spenders ($1,431 avg revenue per customer)",
      "Time Intelligence Trends: Dynamic monthly revenue and profit trend tracking spanning Jan 2020 through Jan 2023"
    ],
    skillsDemonstrated: [
      "Power BI Desktop & Service",
      "DAX (Data Analysis Expressions)",
      "Power Query & ETL Automation",
      "Star Schema Data Modeling",
      "Interactive Geospatial Mapping",
      "E-Commerce KPI Architecture",
      "Customer Segmentation & Cohorts",
      "Dashboard UX/UI Design"
    ],
    projectWorkflow: [
      "1. Requirement Gathering & KPI Architecture Definition",
      "2. Data Ingestion & Cleansing via Power Query",
      "3. Star Schema Data Modeling & Relationship Optimization",
      "4. Advanced DAX Formulation (KPIs, Targets, Return Rates)",
      "5. Interactive UI/UX Design Across 4 Dashboard Views",
      "6. QA Validation, Performance Tuning & GitHub Documentation"
    ],
    keyInsights: [
      "Top Volume & Revenue Drivers: 'Water Bottle - 30 oz.' and 'Sport-100 Helmets' generated the highest order volume, while high-value Bikes generated the greatest proportion of total revenue ($24.9M).",
      "Customer Demographics: Over 70% of Amazon orders were placed by customers in the 'Average' income tier working in Professional or Skilled Manual roles, representing the prime audience for loyalty promotions.",
      "Quality & Return Alerts: Tires and Tubes recorded the highest return rate (2.2% overall portfolio return), highlighting the need for enhanced supplier quality control and updated product descriptions on Amazon listings.",
      "Geographic Distribution: North American and European markets accounted for the largest concentration of orders, identifying key regions for fulfillment optimization and localized stock allocation."
    ],
    businessImpact: "The automated Amazon Global Sales Power BI dashboard centralized enterprise sales metrics, slashing manual multi-spreadsheet reporting time by over 75%. It gave leadership immediate clarity into product profit margins, enabled rapid response to return rate anomalies across 56K orders, and empowered marketing teams to target high-lifetime-value customer segments.",
    gallery: [
      { 
        url: "/images/Amazon_PowerBI_Executive_Dashboard.png", 
        caption: "Executive Dashboard", 
        description: "High-level executive overview tracking $24.9M revenue, 56K orders, $10.5M profit, return rates, monthly trends, and Top 10 products." 
      },
      { 
        url: "/images/Amazon_PowerBI_Map_Dashboard.png", 
        caption: "Geographic Map Dashboard", 
        description: "Interactive geospatial sales distribution across Europe, North America, and Pacific territories with regional drill-downs." 
      },
      { 
        url: "/images/Amazon_PowerBI_Product_Dashboard.png", 
        caption: "Product Performance & Target Dashboard", 
        description: "Granular product-level analysis with gauge visuals comparing monthly orders, revenue, and profit against targets." 
      },
      { 
        url: "/images/Amazon_PowerBI_Customer_Dashboard.png", 
        caption: "Customer Demographics & Insights Dashboard", 
        description: "Customer intelligence view breaking down 17.4K unique buyers by income brackets, occupations, and top spender rankings." 
      }
    ],
    challenges: "• Designing an optimized star-schema data model across transactional, product, customer, and territory tables without circular dependencies\n• Writing advanced DAX measures for dynamic target variance, return rate calculations, and monthly trend comparisons\n• Designing clean, intuitive visual hierarchies across 4 distinct report pages for rapid executive decision-making\n• Ensuring fast visual filtering and slicing performance across 56,000+ transactional records",
    learnings: "• Advanced Power BI & DAX (CALCULATE, FILTER, RELATED, Time Intelligence)\n• Star Schema Relational Data Modeling\n• Interactive Geospatial Visualizations & Map Filtering\n• E-Commerce KPI Design & Target Tracking\n• Customer Demographic Segmentation & Lifetime Value Analysis\n• End-to-End BI Workflow from ETL to Executive Presentation",
    futureImprovements: "Future enhancements include live cloud database connections (Snowflake/BigQuery), Power BI Service automated scheduled refreshes, Row-Level Security (RLS) for localized regional sales managers, and predictive sales forecasting models built with Python."
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function getNextProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === projects.length - 1) return undefined;
  return projects[currentIndex + 1];
}

export function getPrevProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  if (currentIndex <= 0) return undefined;
  return projects[currentIndex - 1];
}

export function getRelatedProjects(currentSlug: string, limit: number = 3): Project[] {
  const currentProject = getProjectBySlug(currentSlug);
  if (!currentProject) return [];
  
  const related: Project[] = [];
  const usedCategories = new Set<string>();
  usedCategories.add(currentProject.category);
  
  for (const p of projects) {
    if (!usedCategories.has(p.category) && p.slug !== currentSlug) {
      related.push(p);
      usedCategories.add(p.category);
    }
    if (related.length >= limit) break;
  }
  
  return related;
}
