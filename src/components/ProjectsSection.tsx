"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { projects } from '@/lib/projects';

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

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
            key={project.slug} 
            className="project-card tilt-card" 
          >
            <div className="card-glow"></div>
            <div className="project-header">
              <span className="project-icon"><i className={project.icon}></i></span>
              <span className="project-tag">{project.tag}</span>
            </div>
            <h3 className="project-title">{project.title}</h3>
            
            {/* Hide these on mobile */}
            <p className="project-description mobile-hide">{project.shortDescription}</p>
            <div className="project-tech-stack mobile-hide">
              {project.technologies.map((t, idx) => <span key={idx}>{t}</span>)}
            </div>
            
            <div className="project-links" style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex' }}>
              <Link 
                href={`/projects/${project.slug}`} 
                className="btn btn-secondary" 
                style={{ flex: 1, justifyContent: "center", padding: "0.6rem", fontSize: "0.85rem", textDecoration: 'none' }}
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
