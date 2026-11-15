"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects, Project } from '@/lib/projects';
import { playPop } from '@/lib/soundFx';

// Helper to get project thumbnail (prioritizes user's custom poster)
function getProjectThumbnail(project: Project): string {
  if (project.featuredImage && !project.featuredImage.includes("/icon.png")) {
    return project.featuredImage;
  }
  if (project.gallery && project.gallery.length > 0) {
    const first = project.gallery[0];
    return typeof first === "string" ? first : first.url;
  }
  return "/icon.png";
}

// Helper to get simulated window file name
function getProjectFileName(project: Project): string {
  if (project.category === 'excel') return 'sales_analytics.xlsx';
  if (project.slug.includes('ecommerce')) return 'ecom_retention.sql';
  if (project.slug.includes('healthcare') || project.slug.includes('cohort')) return 'patient_cohorts.sql';
  if (project.slug.includes('risk') || project.slug.includes('financial')) return 'risk_prediction.py';
  if (project.slug.includes('churn')) return 'churn_eda.ipynb';
  if (project.category === 'powerbi') return 'amazon_executive.pbix';
  return `${project.slug}.data`;
}

// Helper to get key highlight metric
function getProjectMetric(project: Project): string {
  if (project.category === 'excel') return '600K+ Rows • -80% Time';
  if (project.slug.includes('ecommerce')) return '60% Revenue • CTEs';
  if (project.slug.includes('healthcare')) return 'Patient Cohorts • SSMS';
  if (project.slug.includes('risk')) return 'Real-Time Plotly • ML';
  if (project.slug.includes('churn')) return 'EDA & Churn • Pandas';
  if (project.category === 'powerbi') return '$24.9M Sales • 56K Orders';
  return 'Enterprise Analytics';
}

// Category Badge Color Schemes
function getCategoryBadgeClass(category: string): string {
  switch (category) {
    case 'excel':
      return 'badge-excel';
    case 'sql':
      return 'badge-sql';
    case 'python':
      return 'badge-python';
    case 'powerbi':
      return 'badge-powerbi';
    default:
      return 'badge-default';
  }
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  // Counts for filter pills
  const counts = {
    all: projects.length,
    excel: projects.filter(p => p.category === 'excel').length,
    sql: projects.filter(p => p.category === 'sql').length,
    python: projects.filter(p => p.category === 'python').length,
    powerbi: projects.filter(p => p.category === 'powerbi').length,
  };

  const handleTabChange = (tab: string) => {
    playPop(750);
    setActiveTab(tab);
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="section-header-centered">
        <div className="section-badge-pill">
          <i className="fa-solid fa-chart-line"></i>
          <span>PORTFOLIO CASE STUDIES</span>
        </div>
        <h2 className="section-heading-large">
          Production Analytics Projects
        </h2>
        <p className="section-subtext">
          Enterprise-grade <strong>Power BI Dashboards</strong>, <strong>PostgreSQL / SSMS Pipelines</strong>, <strong>Python Exploratory Analytics</strong>, and <strong>Automated Excel Models</strong> built for measurable revenue clarity.
        </p>
      </div>

      {/* 2D Neo-Brutalist Filter Pills Strip */}
      <div className="projects-filter-bar">
        <button
          className={`filter-pill-btn ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => handleTabChange('all')}
        >
          <span>All Case Studies</span>
          <span className="pill-count">{counts.all}</span>
        </button>
        <button
          className={`filter-pill-btn ${activeTab === 'excel' ? 'active' : ''}`}
          onClick={() => handleTabChange('excel')}
        >
          <i className="fa-regular fa-file-excel"></i>
          <span>Excel</span>
          <span className="pill-count">{counts.excel}</span>
        </button>
        <button
          className={`filter-pill-btn ${activeTab === 'sql' ? 'active' : ''}`}
          onClick={() => handleTabChange('sql')}
        >
          <i className="fa-solid fa-server"></i>
          <span>SQL Server</span>
          <span className="pill-count">{counts.sql}</span>
        </button>
        <button
          className={`filter-pill-btn ${activeTab === 'python' ? 'active' : ''}`}
          onClick={() => handleTabChange('python')}
        >
          <i className="fa-brands fa-python"></i>
          <span>Python</span>
          <span className="pill-count">{counts.python}</span>
        </button>
        <button
          className={`filter-pill-btn ${activeTab === 'powerbi' ? 'active' : ''}`}
          onClick={() => handleTabChange('powerbi')}
        >
          <i className="fa-solid fa-chart-pie"></i>
          <span>Power BI</span>
          <span className="pill-count">{counts.powerbi}</span>
        </button>
      </div>

      {/* Projects Grid */}
      <div className="curated-projects-grid" id="projects-grid">
        {filteredProjects.map((project) => {
          const thumbnail = getProjectThumbnail(project);
          const fileName = getProjectFileName(project);
          const metric = getProjectMetric(project);
          const badgeClass = getCategoryBadgeClass(project.category);

          return (
            <div 
              key={project.slug} 
              className="bespoke-project-card"
            >
              {/* TOP RETRO OS WINDOW HEADER */}
              <div className="project-window-bar">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="window-file-title">
                  <i className="fa-regular fa-folder-open"></i>
                  <span>{fileName}</span>
                </div>
                <div className="window-status-dot" title="Verified Pipeline">
                  <span className="status-live-indicator"></span>
                </div>
              </div>

              {/* VISUAL DASHBOARD PREVIEW POSTER */}
              <div className="project-preview-wrapper">
                <Link href={`/projects/${project.slug}`} className="preview-image-link" tabIndex={-1}>
                  <div className="preview-image-container">
                    <Image
                      src={thumbnail}
                      alt={`${project.title} Poster`}
                      width={640}
                      height={360}
                      className="preview-img"
                      priority={false}
                    />
                    <div className="preview-overlay-hover">
                      <span className="overlay-badge">
                        <span>Read Case Study</span>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* CARD MAIN CONTENT */}
              <div className="project-card-body">
                {/* Header Meta: Category Pill + Metric */}
                <div className="project-meta-row">
                  <span className={`body-category-badge ${badgeClass}`}>
                    <i className={project.icon}></i>
                    <span>{project.tag}</span>
                  </span>
                  <span className="body-metric-pill">
                    <i className="fa-solid fa-bolt"></i>
                    <span>{metric}</span>
                  </span>
                </div>

                <h3 className="bespoke-project-title">
                  <Link href={`/projects/${project.slug}`} onClick={() => playPop(800)}>
                    {project.title}
                  </Link>
                </h3>

                <p className="bespoke-project-desc">
                  {project.shortDescription}
                </p>

                {/* Tech Stack Chips */}
                <div className="bespoke-tech-stack">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-chip tech-more">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* CARD FOOTER ACTION BUTTONS */}
                <div className="project-card-actions">
                  <Link 
                    href={`/projects/${project.slug}`} 
                    className="btn-case-study"
                    onClick={() => playPop(850)}
                  >
                    <span>View Case Study</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>

                  {/* GitHub Quick Link if available */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-icon-btn github-btn"
                      title="View GitHub Repository"
                      onClick={() => playPop(600)}
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  )}

                  {/* Live Web App Demo if available */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-icon-btn demo-btn"
                      title="Open Live Interactive Web App"
                      onClick={() => playPop(700)}
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
