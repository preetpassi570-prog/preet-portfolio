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
    keywords: ["Power BI Dashboard", "Sales Analytics", "Data Visualization", "DAX", "Business Intelligence", "SQL"]
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
    keywords: ["Customer Churn", "Machine Learning", "Python", "Pandas", "Predictive Analytics", "Data Science"]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
