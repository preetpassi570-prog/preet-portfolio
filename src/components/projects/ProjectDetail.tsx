'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project, getNextProject, getPrevProject } from '@/lib/projects';

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const nextProject = getNextProject(project.slug);
  const prevProject = getPrevProject(project.slug);

  return (
    <article className="pd-container">
      {/* 1. Breadcrumbs */}
      <nav className="pd-breadcrumbs">
        <Link href="/">Home</Link>
        <span className="separator">/</span>
        <Link href="/#projects">Projects</Link>
        <span className="separator">/</span>
        <span className="current">{project.title}</span>
      </nav>

      {/* 2. Hero Section */}
      <header className="pd-hero">
        <div className="pd-hero-content">
          <div className="category-badge">
            <span className="neon-text-red">●</span> {project.category}
          </div>
          <h1 className="pd-title">{project.title}</h1>
          <p className="pd-subtitle">{project.shortDescription}</p>
          <div className="pd-hero-buttons">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                <div className="btn-shine"></div>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <i className="fa-brands fa-github"></i> View Source
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Main Grid Layout for Content */}
      <div className="pd-layout">
        
        {/* Sidebar: Table of Contents & Project Info */}
        <aside className="pd-sidebar">
          {/* Project Information Card */}
          <div className="glass-panel pd-info-card">
            <h3 className="pd-sidebar-title">Project Info</h3>
            <ul className="pd-info-list">
              <li>
                <span className="pd-info-label">Status</span>
                <span className="pd-info-value">{project.status}</span>
              </li>
              <li>
                <span className="pd-info-label">Duration</span>
                <span className="pd-info-value">{project.duration}</span>
              </li>
              <li>
                <span className="pd-info-label">Last Updated</span>
                <span className="pd-info-value">{new Date(project.updatedDate).toLocaleDateString()}</span>
              </li>
              <li>
                <span className="pd-info-label">Tools</span>
                <div className="pd-tools-container">
                  {project.technologies.map(tech => (
                    <span key={tech} className="skill-badge pd-mini-badge">{tech}</span>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          {/* Table of Contents (Auto-generated for >4 sections) */}
          <nav className="glass-panel pd-toc">
            <h3 className="pd-sidebar-title">Table of Contents</h3>
            <ul>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#problem-solution">Problem & Solution</a></li>
              <li><a href="#key-insights">Key Insights</a></li>
              <li><a href="#business-impact">Business Impact</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </nav>
        </aside>

        {/* Main Content Area */}
        <div className="pd-main-content">
          <section id="overview" className="pd-section">
            <h2 className="pd-section-title">Overview</h2>
            <p className="pd-text">{project.fullDescription}</p>
          </section>

          <section id="problem-solution" className="pd-section">
            <h2 className="pd-section-title">Problem & Solution</h2>
            <div className="pd-split-cards">
              <div className="glass-panel pd-card">
                <h3 className="pd-card-title"><i className="fa-solid fa-triangle-exclamation neon-text-red"></i> The Problem</h3>
                <p className="pd-text">{project.problem}</p>
              </div>
              <div className="glass-panel pd-card">
                <h3 className="pd-card-title"><i className="fa-solid fa-lightbulb" style={{ color: '#ffd700' }}></i> The Solution</h3>
                <p className="pd-text">{project.solution}</p>
              </div>
            </div>
          </section>

          <section id="key-insights" className="pd-section">
            <h2 className="pd-section-title">Key Insights</h2>
            <ul className="pd-list">
              {project.keyInsights.map((insight, index) => (
                <li key={index}>
                  <i className="fa-solid fa-check-circle neon-text-red"></i>
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="business-impact" className="pd-section">
            <h2 className="pd-section-title">Business Impact</h2>
            <div className="glass-panel pd-impact-box">
              <i className="fa-solid fa-chart-line pd-impact-icon"></i>
              <p className="pd-impact-text">{project.businessImpact}</p>
            </div>
          </section>

          {project.gallery && project.gallery.length > 0 && (
            <section id="gallery" className="pd-section">
              <h2 className="pd-section-title">Dashboard & Gallery</h2>
              <div className="pd-gallery-grid">
                {project.gallery.map((imgUrl, index) => (
                  <div key={index} className="pd-gallery-item">
                    <Image 
                      src={imgUrl} 
                      alt={`${project.title} screenshot ${index + 1}`} 
                      width={800} 
                      height={450} 
                      className="pd-gallery-img"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Navigation (Prev/Next) */}
      <nav className="pd-nav-footer">
        <div className="pd-nav-prev">
          {prevProject && (
            <Link href={`/projects/${prevProject.slug}`} className="pd-nav-link">
              <span className="pd-nav-label">← Previous Project</span>
              <span className="pd-nav-title">{prevProject.title}</span>
            </Link>
          )}
        </div>
        <div className="pd-nav-next">
          {nextProject && (
            <Link href={`/projects/${nextProject.slug}`} className="pd-nav-link text-right">
              <span className="pd-nav-label">Next Project →</span>
              <span className="pd-nav-title">{nextProject.title}</span>
            </Link>
          )}
        </div>
      </nav>

      {/* Final CTA */}
      <section className="pd-cta">
        <h2 className="pd-cta-title">Want to build something similar?</h2>
        <p className="pd-cta-text">Let's connect and discuss how I can help transform your data into actionable insights.</p>
        <a href="mailto:preetpassi570@gmail.com" className="btn btn-primary">
          <i className="fa-solid fa-envelope"></i> Get In Touch
          <div className="btn-shine"></div>
        </a>
      </section>
    </article>
  );
}
