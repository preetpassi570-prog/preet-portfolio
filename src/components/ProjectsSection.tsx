"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import Link from 'next/link';
import { projects } from '@/lib/projects';

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true); }, []);

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
            onClick={() => setSelectedProject(project)}
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
            
            <div className="project-links" style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-secondary" style={{ flex: 1, justifyContent: "center", padding: "0.6rem", fontSize: "0.85rem" }}>
                Quick View
              </button>
              <Link 
                href={`/projects/${project.slug}`} 
                className="btn btn-primary" 
                onClick={(e) => e.stopPropagation()} 
                style={{ flex: 1, justifyContent: "center", padding: "0.6rem", fontSize: "0.85rem" }}
              >
                Case Study
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay via Portal */}
      {isMounted && typeof document !== 'undefined' && createPortal(
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
              
              <p className="modal-desc">{selectedProject.shortDescription}</p>
              
              <div className="modal-tech">
                {selectedProject.technologies.map((t: string, idx: number) => <span key={idx}>{t}</span>)}
              </div>
              
              <div className="modal-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href={`/projects/${selectedProject.slug}`} className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                  <i className="fa-solid fa-book-open"></i> Read Case Study
                </Link>
                {selectedProject.githubUrl && (
                  <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                    <i className="fa-brands fa-github"></i> View Code
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                  </a>
                )}
              </div>
            </div>
          )}
        </div>,
        document.body
      )}
    </section>
  );
}
