import { Metadata } from "next";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Projects",
    description: "View my latest web development projects.",
    alternates: {
      canonical: "/projects",
    },
  };
}

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://preet-portfolio-ten.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://preet-portfolio-ten.vercel.app/projects",
      },
    ],
  };

  return (
    <div className="pt-24 min-h-screen">
      <section id="projects" className="section projects-section">
      <div className="section-header">
        <h2 className="section-title"><span className="neon-text-red">//</span> PROJECTS SHOWCASE</h2>
        <p className="section-subtitle">A curated collection of data analysis, database engineering, and machine learning models.</p>
      </div>

      
      <div className="tabs-container">
        <button className="tab-btn active" data-tab="all">All Projects</button>
        <button className="tab-btn" data-tab="excel"><i className="fa-regular fa-file-excel"></i> Excel</button>
        <button className="tab-btn" data-tab="sql"><i className="fa-solid fa-server"></i> SQL</button>
        <button className="tab-btn" data-tab="python"><i className="fa-brands fa-python"></i> Python</button>
        <button className="tab-btn" data-tab="powerbi"><i className="fa-solid fa-chart-pie"></i> Power BI</button>
      </div>

      
      <div className="projects-grid" id="projects-grid">
        
        <div className="project-card tilt-card" data-category="excel" id="proj-excel">
          <div className="card-glow"></div>
          <div className="project-header">
            <span className="project-icon"><i className="fa-regular fa-file-excel"></i></span>
            <span className="project-tag">Excel</span>
          </div>
          <h3 className="project-title">Advanced Sales Forecasting & AI Dashboard</h3>
          <p className="project-description">
            A complex analytical workbook featuring predictive modeling, cohort analysis, and automated reports driven by Excel functions & AI-powered forecasting modules.
          </p>
          <div className="project-tech-stack">
            <span>Power Query</span>
            <span>Pivot Tables</span>
            <span>VBA/Macros</span>
            <span>AI Forecasting</span>
          </div>
          <div className="project-links" style={{"display":"flex","width":"100%"}}>
            <a href="https://github.com/preetpassi570-prog/Excel-Sales-Dashboard.git" target="_blank" className="project-link-btn github-link" style={{"flex":"1","textAlign":"center","justifyContent":"center"}}><i className="fa-brands fa-github"></i> Project Link</a>
          </div>
        </div>

        
        <div className="project-card tilt-card" data-category="sql" id="proj-sql-ecommerce">
          <div className="card-glow"></div>
          <div className="project-header">
            <span className="project-icon"><i className="fa-solid fa-database"></i></span>
            <span className="project-tag">SQL</span>
          </div>
          <h3 className="project-title">E-commerce Customer Retention Database</h3>
          <p className="project-description">
            Designed relational databases, wrote complex CTE queries, optimization procedures, and transactional schemas to track and improve retail customer retention metrics.
          </p>
          <div className="project-tech-stack">
            <span>PostgreSQL</span>
            <span>CTEs & Windows</span>
            <span>DB Normalization</span>
            <span>Indexes</span>
          </div>
          <div className="project-links" style={{"display":"flex","width":"100%"}}>
            <a href="https://github.com/preetpassi570-prog/SQL-Advanced-E-Commerce-Sales-Analysis.git" target="_blank" className="project-link-btn github-link" style={{"flex":"1","textAlign":"center","justifyContent":"center"}}><i className="fa-brands fa-github"></i> Project Link</a>
          </div>
        </div>

        <div className="project-card tilt-card" data-category="sql" id="proj-sql-healthcare">
          <div className="card-glow"></div>
          <div className="project-header">
            <span className="project-icon"><i className="fa-solid fa-server"></i></span>
            <span className="project-tag">SQL</span>
          </div>
          <h3 className="project-title">Healthcare Operations Cohort Analysis</h3>
          <p className="project-description">
            Processed public medical records using analytical SQL. Conducted patient flow optimization and clinical cohort trends using window functions and query optimization.
          </p>
          <div className="project-tech-stack">
            <span>MySQL</span>
            <span>Stored Procedures</span>
            <span>Window Functions</span>
            <span>Joins & Views</span>
          </div>
          <div className="project-links" style={{"display":"flex","width":"100%"}}>
            <a href="https://github.com/preetpassi570-prog/SQL-Basics-E-Commerce-Sales-Analysis.git" target="_blank" className="project-link-btn github-link" style={{"flex":"1","textAlign":"center","justifyContent":"center"}}><i className="fa-brands fa-github"></i> Project Link</a>
          </div>
        </div>

        
        <div className="project-card tilt-card" data-category="python" id="proj-python-streamlit">
          <div className="card-glow"></div>
          <div className="project-header">
            <span className="project-icon"><i className="fa-brands fa-python"></i></span>
            <span className="project-tag">Python</span>
          </div>
          <h3 className="project-title">Interactive Cloud-Deployed Financial Dashboard</h3>
          <p className="project-description">
            A comprehensive, cloud-deployed dash dashboard showing real-time market tracker, financial indicators, and interactive visuals built using Plotly.
          </p>
          <div className="project-tech-stack">
            <span>Dash / Plotly</span>
            <span>Pandas</span>
            <span>APIs</span>
            <span>Render / Heroku</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/preetpassi570-prog/Customer-Risk-Stratification-App.git" target="_blank" className="project-link-btn github-link"><i className="fa-brands fa-github"></i> Code</a>
            <a href="https://customer-risk-dashboard.streamlit.app/" target="_blank" className="project-link-btn live-link"><i className="fa-solid fa-rocket"></i> Live App</a>
          </div>
        </div>

        <div className="project-card tilt-card" data-category="python" id="proj-python-churn">
          <div className="card-glow"></div>
          <div className="project-header">
            <span className="project-icon"><i className="fa-solid fa-brain"></i></span>
            <span className="project-tag">Python</span>
          </div>
          <h3 className="project-title">Customer Churn Prediction Engine</h3>
          <p className="project-description">
            Engineered a Scikit-Learn machine learning pipeline to classify and predict customer churn patterns. Achieved 91% accuracy with hyperparameter tuning.
          </p>
          <div className="project-tech-stack">
            <span>Scikit-Learn</span>
            <span>Pandas / NumPy</span>
            <span>Matplotlib</span>
            <span>Feature Eng</span>
          </div>
          <div className="project-links" style={{"display":"flex","width":"100%"}}>
            <a href="https://github.com/preetpassi570-prog/E-Commerce-Sales-Analysis-Python.git" target="_blank" className="project-link-btn github-link" style={{"flex":"1","textAlign":"center","justifyContent":"center"}}><i className="fa-brands fa-github"></i> Project Link</a>
          </div>
        </div>

        
        <div className="project-card tilt-card" data-category="powerbi" id="proj-pbi-sales">
          <div className="card-glow"></div>
          <div className="project-header">
            <span className="project-icon"><i className="fa-solid fa-chart-line"></i></span>
            <span className="project-tag">Power BI</span>
          </div>
          <h3 className="project-title">Executive Revenue & Sales Dashboard</h3>
          <p className="project-description">
            An executive dashboard featuring sales analytics, regional performance tracking, and profit margin analysis with full interactive drill-down reports.
          </p>
          <div className="project-tech-stack">
            <span>DAX</span>
            <span>Data Modeling</span>
            <span>Power Query</span>
            <span>KPI Cards</span>
          </div>
          <div className="project-links" style={{"display":"flex","width":"100%"}}>
            <a href="https://github.com/preetpassi570-prog/powerbi-financial-performance-dashboard.git" target="_blank" className="project-link-btn github-link" style={{"flex":"1","textAlign":"center","justifyContent":"center"}}><i className="fa-brands fa-github"></i> Project Link</a>
          </div>
        </div>

        <div className="project-card tilt-card" data-category="powerbi" id="proj-pbi-supply">
          <div className="card-glow"></div>
          <div className="project-header">
            <span className="project-icon"><i className="fa-solid fa-truck-ramp-box"></i></span>
            <span className="project-tag">Power BI</span>
          </div>
          <h3 className="project-title">Supply Chain Logistics & Operations Tracker</h3>
          <p className="project-description">
            A metrics tracker reflecting delivery schedules, warehousing costs, transit times, and bottlenecks, resulting in a 12% operational efficiency gain.
          </p>
          <div className="project-tech-stack">
            <span>DAX</span>
            <span>Time Intelligence</span>
            <span>Geographical Maps</span>
            <span>Data Models</span>
          </div>
          <div className="project-links" style={{"display":"flex","width":"100%"}}>
            <a href="https://github.com/preetpassi570-prog/powerbi-customer-insights-dashboard.git" target="_blank" className="project-link-btn github-link" style={{"flex":"1","textAlign":"center","justifyContent":"center"}}><i className="fa-brands fa-github"></i> Project Link</a>
          </div>
        </div>

        <div className="project-card tilt-card" data-category="powerbi" id="proj-pbi-hr">
          <div className="card-glow"></div>
          <div className="project-header">
            <span className="project-icon"><i className="fa-solid fa-users-gear"></i></span>
            <span className="project-tag">Power BI</span>
          </div>
          <h3 className="project-title">HR Talent Acquisition & Performance Analytics</h3>
          <p className="project-description">
            A comprehensive talent intelligence tracker analyzing employee retention rates, recruitment funnels, and performance appraisals across multiple departments.
          </p>
          <div className="project-tech-stack">
            <span>DAX</span>
            <span>Drill-Downs</span>
            <span>Row-Level Security</span>
            <span>HR Metrics</span>
          </div>
          <div className="project-links" style={{"display":"flex","width":"100%"}}>
            <a href="https://github.com/preetpassi570-prog/powerbi-sales-customer-analytics-dashboard.git" target="_blank" className="project-link-btn github-link" style={{"flex":"1","textAlign":"center","justifyContent":"center"}}><i className="fa-brands fa-github"></i> Project Link</a>
          </div>
        </div>

      </div>
    </section>
    </div>
  );
}
