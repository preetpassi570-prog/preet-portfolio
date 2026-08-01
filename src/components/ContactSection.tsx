import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-container-wrapper">
        <div className="contact-header">
          <span className="contact-welcome-tag">GET IN TOUCH</span>
          <h2 className="contact-main-title">Let's Build Something<br />Amazing Together</h2>
          <p className="contact-subtitle">
            I'm currently open to internships, freelance work, collaborations, and full-time Data Analytics opportunities. Feel free to send me a message.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-left-col">
            <div className="contact-info-cards">
              <div className="contact-info-card">
                <div className="info-card-glow"></div>
                <div className="info-card-icon"><i className="fa-solid fa-envelope" aria-hidden="true"></i></div>
                <div className="info-card-details">
                  <span className="info-card-label">Email</span>
                  <a href="mailto:preetpassi570@gmail.com" className="info-card-value">preetpassi570@gmail.com</a>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="info-card-glow"></div>
                <div className="info-card-icon"><i className="fa-solid fa-briefcase" aria-hidden="true"></i></div>
                <div className="info-card-details">
                  <span className="info-card-label">Status</span>
                  <span className="info-card-value status-value">
                    <span className="online-indicator"></span> Open to Work
                  </span>
                </div>
              </div>

              <a href="https://www.google.com/maps?q=28.730778,77.174722" target="_blank" rel="noopener noreferrer" className="contact-info-card-link" aria-label="Open Delhi, India location on Google Maps">
                <div className="contact-info-card">
                  <div className="info-card-glow"></div>
                  <div className="info-card-icon"><i className="fa-solid fa-location-dot" aria-hidden="true"></i></div>
                  <div className="info-card-details">
                    <span className="info-card-label">Location</span>
                    <span className="info-card-value">Delhi, India</span>
                  </div>
                </div>
              </a>
            </div>

            <p className="contact-pitch">
              Whether you have a query, want to discuss a potential project, or just want to connect, feel free to drop a message! I'm always excited to explore new challenges and apply analytical insights to real-world problems.
            </p>

            <div className="contact-social-icons">
              <a href="https://github.com/preetpassi570-prog" target="_blank" title="GitHub" aria-label="Connect on GitHub"><i className="fa-brands fa-github" aria-hidden="true"></i></a>
              <a href="https://www.linkedin.com/in/preet-passi-567b25426/" target="_blank" title="LinkedIn" aria-label="Connect on LinkedIn"><i className="fa-brands fa-linkedin" aria-hidden="true"></i></a>
              <a href="https://www.instagram.com/preet_passii/?hl=en" target="_blank" title="Instagram" aria-label="Connect on Instagram"><i className="fa-brands fa-instagram" aria-hidden="true"></i></a>
              <a href="https://wa.me/919315971839" target="_blank" title="WhatsApp" aria-label="Chat on WhatsApp"><i className="fa-brands fa-whatsapp" aria-hidden="true"></i></a>
              <a href="https://in.pinterest.com/preet_passii/" target="_blank" title="Pinterest" aria-label="Connect on Pinterest"><i className="fa-brands fa-pinterest" aria-hidden="true"></i></a>
            </div>
          </div>

          <div className="contact-right-col">
            <form id="contact-form" className="contact-glass-form" action="https://api.web3forms.com/submit" method="POST" noValidate>
              <input type="hidden" name="access_key" value="92bbefd2-9f1e-48f2-a477-6cb4fd851470" />
              
              <div className="form-group">
                <label htmlFor="form-name" className="form-label">Full Name</label>
                <div className="input-wrapper">
                  <input type="text" id="form-name" name="name" className="form-input" placeholder="Your name" required />
                  <span className="input-glow"></span>
                </div>
                <span className="error-message" id="error-name">Name is required</span>
              </div>

              <div className="form-group">
                <label htmlFor="form-email" className="form-label">Email Address</label>
                <div className="input-wrapper">
                  <input type="email" id="form-email" name="email" className="form-input" placeholder="name@example.com" required />
                  <span className="input-glow"></span>
                </div>
                <span className="error-message" id="error-email">Please enter a valid email address</span>
              </div>

              <div className="form-group">
                <label htmlFor="form-phone" className="form-label">Phone Number</label>
                <div className="input-wrapper">
                  <input type="tel" id="form-phone" name="phone" className="form-input" placeholder="+91 Enter your phone number" required />
                  <span className="input-glow"></span>
                </div>
                <span className="error-message" id="error-phone">Please enter a valid phone number</span>
              </div>

              <div className="form-group">
                <label htmlFor="form-message" className="form-label">Message</label>
                <div className="input-wrapper">
                  <textarea id="form-message" name="message" className="form-input textarea-input" placeholder="Write your message here..." rows={5} required></textarea>
                  <span className="input-glow"></span>
                </div>
                <span className="error-message" id="error-message">Message is required</span>
              </div>

              <button type="submit" id="form-submit-btn" className="btn btn-primary form-submit-btn">
                <span className="btn-text">Send Message</span>
                <span className="spinner-hidden" id="form-spinner"></span>
                <div className="btn-shine"></div>
              </button>

              <p className="reply-disclaimer">I usually reply within 24 hours.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
