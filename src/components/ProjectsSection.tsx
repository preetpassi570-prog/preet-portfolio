"use client";
import React, { useState, useEffect } from 'react';

const projectsData = [
  {
    id: 'proj-excel',
    category: 'excel',
    icon: 'fa-regular fa-file-excel',
    title: 'Advanced Sales Forecasting & AI Dashboard',
    tag: 'Excel',
    description: 'A complex analytical workbook featuring predictive modeling, cohort analysis, and automated reports driven by Excel functions & AI-powered forecasting modules.',
    tech: ['Power Query', 'Pivot Tables', 'VBA/Macros', 'AI Forecasting'],
    github: 'https://github.com/preetpassi570-prog/Excel-Sales-Dashboard.git',
    live: null
  },
  {
    id: 'proj-sql-ecommerce',
    category: 'sql',
    icon: 'fa-solid fa-database',
    title: 'E-commerce Customer Retention Database',
    tag: 'SQL',
    description: 'Designed relational databases, wrote complex CTE queries, optimization procedures, and transactional schemas to track and improve retail customer retention metrics.',
    tech: ['PostgreSQL', 'CTEs & Windows', 'DB Normalization', 'Indexes'],
    github: 'https://github.com/preetpassi570-prog/SQL-Advanced-E-Commerce-Sales-Analysis.git',
    live: null
  },
  {
    id: 'proj-sql-healthcare',
    category: 'sql',
    icon: 'fa-solid fa-server',
    title: 'Healthcare Operations Cohort Analysis',
    tag: 'SQL',
    description: 'Processed public medical records using analytical SQL. Conducted patient flow optimization and clinical cohort trends using window functions and query optimization.',
    tech: ['MySQL', 'Stored Procedures', 'Window Functions', 'Joins & Views'],
    github: 'https://github.com/preetpassi570-prog/SQL-Basics-E-Commerce-Sales-Analysis.git',
    live: null
  },
  {
    id: 'proj-python-streamlit',
    category: 'python',
    icon: 'fa-brands fa-python',
    title: 'Interactive Cloud-Deployed Financial Dashboard',
    tag: 'Python',
    description: 'A comprehensive, cloud-deployed dash dashboard showing real-time market tracker, financial indicators, and interactive visuals built using Plotly.',
    tech: ['Dash / Plotly', 'Pandas', 'APIs', 'Render / Heroku'],
    github: 'https://github.com/preetpassi570-prog/Customer-Risk-Stratification-App.git',
    live: 'https://customer-risk-dashboard.streamlit.app/'
  },
  {
    id: 'proj-python-churn',
    category: 'python',
    icon: 'fa-solid fa-brain',
    title: 'Customer Churn Prediction Engine',
    tag: 'Python',
    description: 'Engineered a Scikit-Learn machine learning pipeline to classify and predict customer churn patterns. Achieved 91% accuracy with hyperparameter tuning.',
    tech: ['Scikit-Learn', 'Pandas / NumPy', 'Matplotlib', 'Feature Eng'],
    github: 'https://github.com/preetpassi570-prog/E-Commerce-Sales-Analysis-Python.git',
    live: null
  },
  {
    id: 'proj-pbi-sales',
    category: 'powerbi',
    icon: 'fa-solid fa-chart-line',
    title: 'Executive Revenue & Sales Dashboard',
    tag: 'Power BI',
    description: 'An executive dashboard featuring sales analytics, regional performance tracking, and profit margin analysis with full interactive drill-down reports.',
    tech: ['DAX', 'Data Modeling', 'Power Query', 'KPI Cards'],
    github: 'https://github.com/preetpassi570-prog/powerbi-financial-performance-dashboard.git',
    live: null
  },
  {
    id: 'proj-pbi-supply',
    category: 'powerbi',
    icon: 'fa-solid fa-truck-ramp-box',
    title: 'Supply Chain Logistics & Operations Tracker',
    tag: 'Power BI',
    description: 'A metrics tracker reflecting delivery schedules, warehousing costs, transit times, and bottlenecks, resulting in a 12% operational efficiency gain.',
    tech: ['DAX', 'Time Intelligence', 'Geographical Maps', 'Data Models'],
    github: 'https://github.com/preetpassi570-prog/powerbi-customer-insights-dashboard.git',
    live: null
  },
  {
    id: 'proj-pbi-hr',
    category: 'powerbi',
    icon: 'fa-solid fa-users-gear',
    title: 'HR Talent Acquisition & Performance Analytics',
    tag: 'Power BI',
    description: 'A comprehensive talent intelligence tracker analyzing employee retention rates, recruitment funnels, and performance appraisals across multiple departments.',
    tech: ['DAX', 'Drill-Downs', 'Row-Level Security', 'HR Metrics'],
    github: 'https://github.com/preetpassi570-prog/powerbi-sales-customer-analytics-dashboard.git',
    live: null
  }
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedProject]);

  const filteredProjects = activeTab === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <h2 className="section-title"><span className="neon-text-red">//</span> PROJECTS SHOWCASE</h2>
        <p className="section-subtitle">A curated collection of data analysis, database engineering, and machine learning models.</p>
      </div>

      <div className="tabs-container project-filters">
        <button className={`tab-btn filter-btn ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>All Projects</button>
        <button className={`tab-btn filter-btn ${activeTab === 'excel' ? 'active' : ''}`} onClick={() => setActiveTab('excel')}><i className="fa-regular fa-file-excel"></i> Excel</button>
        <button className={`tab-btn filter-btn ${activeTab === 'sql' ? 'active' : ''}`} onClick={() => setActiveTab('sql')}><i className="fa-solid fa-server"></i> SQL</button>
        <button className={`tab-btn filter-btn ${activeTab === 'python' ? 'active' : ''}`} onClick={() => setActiveTab('python')}><i className="fa-brands fa-python"></i> Python</button>
        <button className={`tab-btn filter-btn ${activeTab === 'powerbi' ? 'active' : ''}`} onClick={() => setActiveTab('powerbi')}><i className="fa-solid fa-chart-pie"></i> Power BI</button>
      </div>

      <div className="projects-grid" id="projects-grid">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="project-card tilt-card" 
            onClick={() => setSelectedProject(project)}
          >
            <div className="card-glow"></div>
            <div className="project-header">
              <span className="project-icon"><i className={project.icon}></i></span>
              <span className="project-tag">{project.tag}</span>
            </div>
            <h3 className="project-title">{project.title}</h3>
            
            {/* Hide these on mobile */}
            <p className="project-description mobile-hide">{project.description}</p>
            <div className="project-tech-stack mobile-hide">
              {project.tech.map((t, idx) => <span key={idx}>{t}</span>)}
            </div>
            
            <div className="project-links">
              <button className="project-link-btn view-details-btn" style={{ width: "100%", justifyContent: "center" }}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      <div 
        className={`modal-overlay ${selectedProject ? 'open' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelectedProject(null);
        }}
      >
        {selectedProject && (
          <div className="modal-content">
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            
            <div className="modal-header">
              <i className={`${selectedProject.icon} modal-icon`}></i>
              <h3 className="modal-title">{selectedProject.title}</h3>
              <span className="modal-badge">{selectedProject.tag}</span>
            </div>
            
            <p className="modal-desc">{selectedProject.description}</p>
            
            <div className="modal-tech">
              {selectedProject.tech.map((t: string, idx: number) => <span key={idx}>{t}</span>)}
            </div>
            
            <div className="modal-actions">
              {selectedProject.github && (
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                  <i className="fa-brands fa-github"></i> View Code
                </a>
              )}
              {selectedProject.live && (
                <a href={selectedProject.live} target="_blank" rel="noreferrer" className="btn btn-primary">
                  <i className="fa-solid fa-rocket"></i> Live Demo
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
