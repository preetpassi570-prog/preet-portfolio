import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="error-page-wrapper">
      <style dangerouslySetInnerHTML={{__html: `
        .navbar { display: none !important; }
        footer { display: none !important; }
        #loader-overlay { display: none !important; }
        #app-container { opacity: 1 !important; pointer-events: auto !important; }
        body { overflow: auto !important; }
        .loading-active { overflow: auto !important; }
      `}} />
      
      {/* Subtle red background glow */}
      <div className="error-glow"></div>
      
      <div className="error-container">
        <div className="error-content">
          <h1 className="error-title">404</h1>
          <h2 className="error-subtitle">Oops! <span>Page Not Found</span></h2>
          
          <div className="error-divider"></div>
          
          <p className="error-desc">
            The data you&apos;re looking for seems to be missing from the table.
          </p>
          
          <div className="error-action-text">
            <i className="fa-solid fa-chart-line" style={{ color: '#E11D48', fontSize: '1.2rem' }}></i>
            <span>Let&apos;s get you back to explore insights that exist.</span>
          </div>

          <Link href="/" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '1rem' }}>
            <i className="fa-solid fa-arrow-left"></i> Back to Home
          </Link>
        </div>
        
        <div className="error-image-wrapper">
          <Image 
            src="/images/Error%20Page.png" 
            alt="404 Error Illustration" 
            width={600} 
            height={500} 
            className="error-image"
            priority
          />
        </div>
      </div>
    </div>
  );
}
