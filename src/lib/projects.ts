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
}

export const projects: Project[] = [
  {
    slug: "sales-performance-dashboard",
    title: "Global Sales Performance Dashboard",
    shortDescription: "Interactive Power BI dashboard analyzing global sales trends, revenue growth, and regional performance.",
    fullDescription: "A comprehensive data analysis project that transforms raw global sales data into actionable business intelligence. Built using Power BI, SQL, and Excel. It features dynamic filtering, year-over-year growth metrics, and predictive forecasting for upcoming quarters.",
    featuredImage: "/images/sales-dashboard.png",
    technologies: ["Power BI", "SQL Server", "DAX", "Excel Power Query"],
    category: "Data Visualization",
    publishedDate: "2023-11-15T08:00:00Z",
    updatedDate: "2024-01-20T10:30:00Z",
    githubUrl: "https://github.com/preetpassi570-prog",
    liveUrl: "#",
    seoTitle: "Global Sales Performance Dashboard | Preet Passi",
    seoDescription: "Explore the Global Sales Performance Dashboard built by Preet Passi using Power BI and SQL for deep business intelligence insights.",
    keywords: ["Power BI Dashboard", "Sales Analytics", "Data Visualization", "DAX", "Business Intelligence", "SQL"],
    schemaType: "CreativeWork",
    duration: "4 Weeks",
    status: "Completed",
    problem: "The client was struggling to track global sales performance across multiple regions due to siloed data sources. Generating weekly reports was a manual, error-prone process taking over 10 hours per week.",
    solution: "Engineered an automated data pipeline using SQL Server and Excel Power Query to centralize data. Developed an interactive Power BI dashboard with DAX measures to provide real-time insights into revenue, profit margins, and regional growth.",
    keyInsights: [
      "Identified a 15% revenue drop in the EMEA region due to supply chain delays.",
      "Discovered that Q4 promotions drove 40% of the annual profit.",
      "Highlighted the top 3 underperforming product categories requiring immediate marketing attention."
    ],
    businessImpact: "Reduced manual reporting time by 95% (saving 40+ hours monthly) and enabled executive stakeholders to make data-driven decisions that increased Q1 revenue by 12%.",
    gallery: ["/images/sales-dashboard.png"] // Placeholder for actual screenshots
  },
  {
    slug: "customer-churn-prediction",
    title: "Customer Churn Prediction Model",
    shortDescription: "Machine learning model predicting telecom customer churn using Python, Pandas, and Scikit-Learn.",
    fullDescription: "This project uses historical customer data to predict churn probabilities. By performing exploratory data analysis (EDA), data cleaning, and feature engineering, a Random Forest classifier was trained to identify at-risk customers, allowing targeted retention strategies.",
    featuredImage: "/images/churn-prediction.png",
    technologies: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn"],
    category: "Machine Learning",
    publishedDate: "2024-02-10T09:15:00Z",
    updatedDate: "2024-02-12T14:00:00Z",
    githubUrl: "https://github.com/preetpassi570-prog",
    seoTitle: "Customer Churn Prediction in Python | Preet Passi",
    seoDescription: "A machine learning project predicting telecom customer churn using Python, Pandas, and Scikit-Learn by Data Analyst Preet Passi.",
    keywords: ["Customer Churn", "Machine Learning", "Python", "Pandas", "Predictive Analytics", "Data Science"],
    schemaType: "SoftwareSourceCode",
    duration: "6 Weeks",
    status: "Completed",
    problem: "A major telecom provider was experiencing a 20% annual customer churn rate without understanding the underlying causes or identifying at-risk customers before they left.",
    solution: "Developed a predictive machine learning model using Python and Scikit-Learn. Cleaned and preprocessed over 100,000 customer records, engineered predictive features (like usage patterns and tenure), and trained a Random Forest classifier.",
    keyInsights: [
      "Customers on month-to-month contracts were 3x more likely to churn.",
      "High tech-support call volume strongly correlated with churn within 30 days.",
      "The model achieved an 85% accuracy and 82% recall in predicting churn."
    ],
    businessImpact: "Allowed the retention team to proactively target high-risk customers, successfully reducing the overall churn rate by 4% in the first quarter post-deployment.",
    gallery: ["/images/churn-prediction.png"] // Placeholder for actual screenshots
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
