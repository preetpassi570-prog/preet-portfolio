"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { portfolioData } from '../lib/portfolioData';
import { playPop } from '@/lib/soundFx';

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<any>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true); }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedCert]);

  const openCertModal = (cert: any) => {
    playPop(850);
    setSelectedCert(cert);
  };

  return (
    <section id="certificates" className="section certificates-section">
      <div className="section-header-centered">
        <div className="section-badge-pill">
          <i className="fa-solid fa-award"></i>
          <span>ACCREDITED EXPERTISE</span>
        </div>
        <h2 className="section-heading-large">
          Professional Certifications
        </h2>
        <p className="section-subtext">
          Industry-validated credentials in <strong>Data Analytics</strong>, <strong>Advanced Excel with AI</strong>, <strong>Power BI Intelligence</strong>, and <strong>Financial Modeling</strong>.
        </p>
      </div>

      <div className="bespoke-cert-grid">
        {portfolioData.certifications.map((cert) => (
          <div 
            key={cert.id}
            className="bespoke-cert-card" 
            data-course={cert.course}
            onClick={() => openCertModal(cert)}
          >
            {/* Top Verification Ribbon Header */}
            <div className="cert-card-top-bar">
              <span className="cert-verified-pill">
                <i className="fa-solid fa-circle-check"></i>
                <span>VERIFIED CREDENTIAL</span>
              </span>
              <span className="cert-issuer-code">TUTEDUDE CERTIFIED</span>
            </div>

            {/* Cert Main Info */}
            <div className="cert-card-main">
              <div className="cert-icon-emblem">
                <i className={cert.icon}></i>
              </div>
              
              <div className="cert-title-group">
                <span className="cert-category-tag">{cert.course}</span>
                <h3 className="bespoke-cert-title">{cert.title}</h3>
              </div>
            </div>

            {/* Description */}
            <p className="bespoke-cert-desc">{cert.description}</p>

            {/* Skills & Competencies Chips */}
            {cert.skills && (
              <div className="cert-skills-wrap">
                {cert.skills.map((skill: string, idx: number) => (
                  <span key={idx} className="cert-skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {/* Card Action Footer */}
            <div className="cert-card-footer">
              <button 
                className="btn-cert-view" 
                onClick={(e) => {
                  e.stopPropagation();
                  openCertModal(cert);
                }}
              >
                <i className="fa-solid fa-file-pdf"></i>
                <span>View Certificate</span>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modern 2D Neo-Brutalist Modal Overlay via Portal */}
      {isMounted && typeof document !== 'undefined' && createPortal(
        <div 
          className={`modal-overlay ${selectedCert ? 'open' : ''}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedCert(null);
          }}
        >
          {selectedCert && (
            <div className="bespoke-cert-modal">
              <button className="modal-close-btn" onClick={() => setSelectedCert(null)} title="Close">
                <i className="fa-solid fa-xmark"></i>
              </button>
              
              <div className="modal-diploma-ribbon">
                <i className="fa-solid fa-award"></i>
                <span>OFFICIAL VERIFICATION OF COMPLETION</span>
                <i className="fa-solid fa-award"></i>
              </div>

              <div className="modal-cert-header">
                <div className="modal-icon-badge">
                  <i className={`${selectedCert.icon}`}></i>
                </div>
                <div>
                  <h3 className="modal-cert-title">{selectedCert.title}</h3>
                  <span className="modal-issuer-pill">{selectedCert.issuer} • Course ID: {selectedCert.course}</span>
                </div>
              </div>
              
              <p className="modal-cert-desc">{selectedCert.description}</p>

              {/* Skills breakdown in modal */}
              {selectedCert.skills && (
                <div className="modal-skills-box">
                  <span className="modal-skills-label">VERIFIED CORE COMPETENCIES:</span>
                  <div className="modal-skills-list">
                    {selectedCert.skills.map((s: string, i: number) => (
                      <span key={i} className="modal-skill-tag">
                        <i className="fa-solid fa-check"></i> {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="modal-cert-actions">
                <a 
                  href={selectedCert.pdf} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="modal-open-pdf-btn"
                  onClick={() => playPop(900)}
                >
                  <i className="fa-solid fa-file-pdf"></i>
                  <span>Open Official PDF in New Tab</span>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          )}
        </div>,
        document.body
      )}
    </section>
  );
}
