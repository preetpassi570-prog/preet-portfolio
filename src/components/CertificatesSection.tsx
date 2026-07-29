"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const certificatesData = [
  {
    id: 'cert-da',
    course: 'DATA ANALYTICS',
    title: 'Data Analytics',
    issuer: 'TuteDude Certified',
    description: 'Covers advanced statistical computation, Python libraries (Pandas, Numpy), database design with SQL, and data visualization strategies.',
    pdf: 'images/Data Analytics Certificate.pdf',
    icon: 'fa-solid fa-award'
  },
  {
    id: 'cert-excel',
    course: 'ADVANCED EXCEL WITH AI',
    title: 'Advanced Excel with AI',
    issuer: 'TuteDude Certified',
    description: 'Focuses on complex data modeling, automation with VBA, nested logic operations, dynamic charts, and integration of AI modeling in spreadsheets.',
    pdf: 'images/Advanced Excel Certificate.pdf',
    icon: 'fa-solid fa-calculator'
  },
  {
    id: 'cert-dm',
    course: 'DIGITAL MARKETING',
    title: 'Digital Marketing',
    issuer: 'TuteDude Certified',
    description: 'Explores search engine optimization (SEO), data-driven campaign analytics, conversion rate optimization (CRO), and digital branding strategies.',
    pdf: 'images/Digital Marketing Certificate.pdf',
    icon: 'fa-solid fa-bullseye'
  },
  {
    id: 'cert-fmv',
    course: 'FINANCIAL MODELING AND VALUATION (FMV)',
    title: 'Financial Modeling & Valuation (FMV)',
    issuer: 'TuteDude Certified',
    description: 'Covers corporate valuation models, discounted cash flow (DCF) analysis, financial projections, sensitivity tables, and investment evaluation.',
    pdf: 'images/Financial Modeling And Valuatoin Certificate.pdf',
    icon: 'fa-solid fa-chart-column'
  }
];

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

  return (
    <section id="certificates" className="section certificates-section">
      <div className="section-header">
        <h2 className="section-title"><span className="neon-text-red">//</span> PROFESSIONAL CREDENTIALS</h2>
        <p className="section-subtitle">Industry-recognized certifications validated by TuteDude.</p>
      </div>

      <div className="certificates-grid">
        {certificatesData.map((cert) => (
          <div 
            key={cert.id}
            className="cert-card tilt-card" 
            data-course={cert.course}
            onClick={() => setSelectedCert(cert)}
          >
            <div className="card-glow"></div>
            <div className="cert-badge"><i className={cert.icon}></i></div>
            <h3 className="cert-title">{cert.title}</h3>
            
            {/* Hide these on mobile */}
            <p className="cert-issuer mobile-hide">{cert.issuer}</p>
            <p className="cert-desc mobile-hide">{cert.description}</p>
            
            <div className="cert-footer" style={{ marginTop: 'auto', paddingTop: '1rem' }}>
              <button className="btn btn-secondary" style={{ width: "100%", justifyContent: "center", padding: "0.6rem", fontSize: "0.85rem" }}>
                <i className="fa-solid fa-file-pdf"></i> View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay via Portal */}
      {isMounted && typeof document !== 'undefined' && createPortal(
        <div 
          className={`modal-overlay ${selectedCert ? 'open' : ''}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedCert(null);
          }}
        >
          {selectedCert && (
            <div className="modal-content">
              <button className="modal-close-btn" onClick={() => setSelectedCert(null)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
              
              <div className="modal-header">
                <i className={`${selectedCert.icon} modal-icon`}></i>
                <h3 className="modal-title">{selectedCert.title}</h3>
                <span className="modal-badge">{selectedCert.issuer}</span>
              </div>
              
              <p className="modal-desc">{selectedCert.description}</p>
              
              <div className="modal-actions">
                <a href={selectedCert.pdf} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  <i className="fa-solid fa-file-pdf"></i> View Official Certificate
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
