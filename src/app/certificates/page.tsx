import React from 'react';
export default function Page() {
  return (
    <div className="pt-24">
      <section id="certificates" className="section certificates-section">
      <div className="section-header">
        <h2 className="section-title"><span className="neon-text-red">//</span> PROFESSIONAL CREDENTIALS</h2>
        <p className="section-subtitle">Industry-recognized certifications validated by TuteDude.</p>
      </div>

      <div className="certificates-grid">
        
        <div className="cert-card tilt-card" data-course="DATA ANALYTICS">
          <div className="card-glow"></div>
          <div className="cert-badge"><i className="fa-solid fa-award"></i></div>
          <h3 className="cert-title">Data Analytics</h3>
          <p className="cert-issuer">TuteDude Certified</p>
          <p className="cert-desc">Covers advanced statistical computation, Python libraries (Pandas, Numpy), database design with SQL, and data visualization strategies.</p>
          <div className="cert-footer">
            <span className="cert-date">Verified</span>
            <a href="images/Data Analytics Certificate.pdf" target="_blank" className="cert-view-btn" style={{"textDecoration":"none"}}><i className="fa-solid fa-file-pdf"></i> View Certificate</a>
          </div>
        </div>

        
        <div className="cert-card tilt-card" data-course="ADVANCED EXCEL WITH AI">
          <div className="card-glow"></div>
          <div className="cert-badge"><i className="fa-solid fa-calculator"></i></div>
          <h3 className="cert-title">Advanced Excel with AI</h3>
          <p className="cert-issuer">TuteDude Certified</p>
          <p className="cert-desc">Focuses on complex data modeling, automation with VBA, nested logic operations, dynamic charts, and integration of AI modeling in spreadsheets.</p>
          <div className="cert-footer">
            <span className="cert-date">Verified</span>
            <a href="images/Advanced Excel Certificate.pdf" target="_blank" className="cert-view-btn" style={{"textDecoration":"none"}}><i className="fa-solid fa-file-pdf"></i> View Certificate</a>
          </div>
        </div>

        
        <div className="cert-card tilt-card" data-course="DIGITAL MARKETING">
          <div className="card-glow"></div>
          <div className="cert-badge"><i className="fa-solid fa-bullseye"></i></div>
          <h3 className="cert-title">Digital Marketing</h3>
          <p className="cert-issuer">TuteDude Certified</p>
          <p className="cert-desc">Explores search engine optimization (SEO), data-driven campaign analytics, conversion rate optimization (CRO), and digital branding strategies.</p>
          <div className="cert-footer">
            <span className="cert-date">Verified</span>
            <a href="images/Digital Marketing Certificate.pdf" target="_blank" className="cert-view-btn" style={{"textDecoration":"none"}}><i className="fa-solid fa-file-pdf"></i> View Certificate</a>
          </div>
        </div>

        
        <div className="cert-card tilt-card" data-course="FINANCIAL MODELING AND VALUATION (FMV)">
          <div className="card-glow"></div>
          <div className="cert-badge"><i className="fa-solid fa-chart-column"></i></div>
          <h3 className="cert-title">Financial Modeling & Valuation (FMV)</h3>
          <p className="cert-issuer">TuteDude Certified</p>
          <p className="cert-desc">Covers corporate valuation models, discounted cash flow (DCF) analysis, financial projections, sensitivity tables, and investment evaluation.</p>
          <div className="cert-footer">
            <span className="cert-date">Verified</span>
            <a href="images/Financial Modeling And Valuatoin Certificate.pdf" target="_blank" className="cert-view-btn" style={{"textDecoration":"none"}}><i className="fa-solid fa-file-pdf"></i> View Certificate</a>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}