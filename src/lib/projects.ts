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
  gallery: string[];
  icon: string;
  tag: string;
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
    title: "Advanced Sales Forecasting & AI Dashboard",
    shortDescription: "A complex analytical workbook featuring predictive modeling, cohort analysis, and automated reports driven by Excel functions & AI-powered forecasting modules.",
    fullDescription: "A complex analytical workbook featuring predictive modeling, cohort analysis, and automated reports driven by Excel functions & AI-powered forecasting modules.",
    featuredImage: "/icon.png",
    technologies: ["Power Query", "Pivot Tables", "VBA/Macros", "AI Forecasting"],
    category: "excel",
    publishedDate: "2024-01-01T00:00:00Z",
    updatedDate: "2024-01-01T00:00:00Z",
    githubUrl: "https://github.com/preetpassi570-prog/Excel-Sales-Dashboard.git",
    
    seoTitle: "Advanced Sales Forecasting & AI Dashboard | Preet Passi",
    seoDescription: "An advanced Excel dashboard for sales forecasting and cohort analysis.",
    keywords: ["Excel", "Sales Dashboard", "Forecasting", "Power Query", "VBA"],
    schemaType: "SoftwareSourceCode",
    icon: "fa-regular fa-file-excel",
    tag: "Excel",
    ...placeholderContent
  },
  {
    slug: "sql-ecommerce-retention",
    title: "E-commerce Customer Retention Database",
    shortDescription: "Designed relational databases, wrote complex CTE queries, optimization procedures, and transactional schemas to track and improve retail customer retention metrics.",
    fullDescription: "Designed relational databases, wrote complex CTE queries, optimization procedures, and transactional schemas to track and improve retail customer retention metrics.",
    featuredImage: "/icon.png",
    technologies: ["PostgreSQL", "CTEs & Windows", "DB Normalization", "Indexes"],
    category: "sql",
    publishedDate: "2024-01-01T00:00:00Z",
    updatedDate: "2024-01-01T00:00:00Z",
    githubUrl: "https://github.com/preetpassi570-prog/SQL-Advanced-E-Commerce-Sales-Analysis.git",
    
    seoTitle: "E-commerce Customer Retention Database | Preet Passi",
    seoDescription: "A SQL project analyzing e-commerce customer retention using advanced queries and CTEs.",
    keywords: ["SQL", "E-commerce", "Database", "CTEs", "PostgreSQL"],
    schemaType: "SoftwareSourceCode",
    icon: "fa-solid fa-database",
    tag: "SQL",
    ...placeholderContent
  },
  {
    slug: "sql-healthcare-cohort",
    title: "Healthcare Operations Cohort Analysis",
    shortDescription: "Processed public medical records using analytical SQL. Conducted patient flow optimization and clinical cohort trends using window functions and query optimization.",
    fullDescription: "Processed public medical records using analytical SQL. Conducted patient flow optimization and clinical cohort trends using window functions and query optimization.",
    featuredImage: "/icon.png",
    technologies: ["MySQL", "Stored Procedures", "Window Functions", "Joins & Views"],
    category: "sql",
    publishedDate: "2024-01-01T00:00:00Z",
    updatedDate: "2024-01-01T00:00:00Z",
    githubUrl: "https://github.com/preetpassi570-prog/SQL-Basics-E-Commerce-Sales-Analysis.git",
    
    seoTitle: "Healthcare Operations Cohort Analysis | Preet Passi",
    seoDescription: "Healthcare data analysis and cohort trends using SQL window functions.",
    keywords: ["SQL", "Healthcare", "Data Analysis", "MySQL"],
    schemaType: "SoftwareSourceCode",
    icon: "fa-solid fa-server",
    tag: "SQL",
    ...placeholderContent
  },
  {
    slug: "python-financial-dashboard",
    title: "Interactive Cloud-Deployed Financial Dashboard",
    shortDescription: "A comprehensive, cloud-deployed dash dashboard showing real-time market tracker, financial indicators, and interactive visuals built using Plotly.",
    fullDescription: "A comprehensive, cloud-deployed dash dashboard showing real-time market tracker, financial indicators, and interactive visuals built using Plotly.",
    featuredImage: "/icon.png",
    technologies: ["Dash / Plotly", "Pandas", "APIs", "Render / Heroku"],
    category: "python",
    publishedDate: "2024-01-01T00:00:00Z",
    updatedDate: "2024-01-01T00:00:00Z",
    githubUrl: "https://github.com/preetpassi570-prog/Customer-Risk-Stratification-App.git",
    liveUrl: "https://customer-risk-dashboard.streamlit.app/",
    seoTitle: "Interactive Cloud-Deployed Financial Dashboard | Preet Passi",
    seoDescription: "A Python financial dashboard built with Dash and Plotly.",
    keywords: ["Python", "Dash", "Plotly", "Finance Dashboard", "Data Visualization"],
    schemaType: "SoftwareSourceCode",
    icon: "fa-brands fa-python",
    tag: "Python",
    ...placeholderContent
  },
  {
    slug: "python-churn-prediction",
    title: "Customer Churn Prediction Engine",
    shortDescription: "Engineered a Scikit-Learn machine learning pipeline to classify and predict customer churn patterns. Achieved 91% accuracy with hyperparameter tuning.",
    fullDescription: "Engineered a Scikit-Learn machine learning pipeline to classify and predict customer churn patterns. Achieved 91% accuracy with hyperparameter tuning.",
    featuredImage: "/icon.png",
    technologies: ["Scikit-Learn", "Pandas / NumPy", "Matplotlib", "Feature Eng"],
    category: "python",
    publishedDate: "2024-01-01T00:00:00Z",
    updatedDate: "2024-01-01T00:00:00Z",
    githubUrl: "https://github.com/preetpassi570-prog/E-Commerce-Sales-Analysis-Python.git",
    
    seoTitle: "Customer Churn Prediction Engine | Preet Passi",
    seoDescription: "Machine learning churn prediction engine using Python and Scikit-Learn.",
    keywords: ["Python", "Machine Learning", "Scikit-Learn", "Churn Prediction"],
    schemaType: "SoftwareSourceCode",
    icon: "fa-solid fa-brain",
    tag: "Python",
    ...placeholderContent
  },
  {
    slug: "powerbi-executive-revenue",
    title: "Executive Revenue & Sales Dashboard",
    shortDescription: "An executive dashboard featuring sales analytics, regional performance tracking, and profit margin analysis with full interactive drill-down reports.",
    fullDescription: "An executive dashboard featuring sales analytics, regional performance tracking, and profit margin analysis with full interactive drill-down reports.",
    featuredImage: "/icon.png",
    technologies: ["DAX", "Data Modeling", "Power Query", "KPI Cards"],
    category: "powerbi",
    publishedDate: "2024-01-01T00:00:00Z",
    updatedDate: "2024-01-01T00:00:00Z",
    githubUrl: "https://github.com/preetpassi570-prog/powerbi-financial-performance-dashboard.git",
    
    seoTitle: "Executive Revenue & Sales Dashboard | Preet Passi",
    seoDescription: "A Power BI executive revenue and sales analytics dashboard.",
    keywords: ["Power BI", "Sales Dashboard", "DAX", "Data Modeling"],
    schemaType: "CreativeWork",
    icon: "fa-solid fa-chart-line",
    tag: "Power BI",
    ...placeholderContent
  },
  {
    slug: "powerbi-supply-chain",
    title: "Supply Chain Logistics & Operations Tracker",
    shortDescription: "A metrics tracker reflecting delivery schedules, warehousing costs, transit times, and bottlenecks, resulting in a 12% operational efficiency gain.",
    fullDescription: "A metrics tracker reflecting delivery schedules, warehousing costs, transit times, and bottlenecks, resulting in a 12% operational efficiency gain.",
    featuredImage: "/icon.png",
    technologies: ["DAX", "Time Intelligence", "Geographical Maps", "Data Models"],
    category: "powerbi",
    publishedDate: "2024-01-01T00:00:00Z",
    updatedDate: "2024-01-01T00:00:00Z",
    githubUrl: "https://github.com/preetpassi570-prog/powerbi-customer-insights-dashboard.git",
    
    seoTitle: "Supply Chain Logistics & Operations Tracker | Preet Passi",
    seoDescription: "Power BI logistics dashboard for tracking supply chain metrics and efficiency.",
    keywords: ["Power BI", "Supply Chain", "Logistics", "Dashboard", "DAX"],
    schemaType: "CreativeWork",
    icon: "fa-solid fa-truck-ramp-box",
    tag: "Power BI",
    ...placeholderContent
  },
  {
    slug: "powerbi-hr-analytics",
    title: "HR Talent Acquisition & Performance Analytics",
    shortDescription: "A comprehensive talent intelligence tracker analyzing employee retention rates, recruitment funnels, and performance appraisals across multiple departments.",
    fullDescription: "A comprehensive talent intelligence tracker analyzing employee retention rates, recruitment funnels, and performance appraisals across multiple departments.",
    featuredImage: "/icon.png",
    technologies: ["DAX", "Drill-Downs", "Row-Level Security", "HR Metrics"],
    category: "powerbi",
    publishedDate: "2024-01-01T00:00:00Z",
    updatedDate: "2024-01-01T00:00:00Z",
    githubUrl: "https://github.com/preetpassi570-prog/powerbi-sales-customer-analytics-dashboard.git",
    
    seoTitle: "HR Talent Acquisition & Performance Analytics | Preet Passi",
    seoDescription: "An HR talent acquisition and performance analytics dashboard built in Power BI.",
    keywords: ["Power BI", "HR Analytics", "Talent Intelligence", "Dashboard"],
    schemaType: "CreativeWork",
    icon: "fa-solid fa-users-gear",
    tag: "Power BI",
    ...placeholderContent
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

export function getRelatedProjects(currentSlug: string, limit: number = 2): Project[] {
  const currentProject = getProjectBySlug(currentSlug);
  if (!currentProject) return [];
  
  return projects
    .filter(p => p.slug !== currentSlug)
    // Optionally sort by same category first
    .sort((a, b) => {
      if (a.category === currentProject.category && b.category !== currentProject.category) return -1;
      if (a.category !== currentProject.category && b.category === currentProject.category) return 1;
      return 0;
    })
    .slice(0, limit);
}
