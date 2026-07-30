import React from 'react';

export default function AboutSection() {
  return (
    <>
    <section id="about" className="section about-section">
      <div className="about-container-wrapper">
        <div className="about-main-grid">
          <div className="about-left-col">
            <div className="about-welcome-tag">ABOUT ME</div>
            <h2 className="about-main-title">Turning Data<br />Into Decisions</h2>
            
            <div className="about-desc-container">
              <p>
                I am a passionate Data Analyst specializing in transforming complex raw data into meaningful, actionable business insights. I have completed multiple hands-on projects using Python, SQL, Excel, and Power BI. I excel at cleaning, analyzing, and visualizing data to solve real-world business problems.
              </p>
              <p>
                My technical skills include Python with NumPy, Pandas, Matplotlib, and Seaborn for data analysis and visualization, SQL for database management, Excel for data processing, and Power BI for creating interactive dashboards. I am continuously improving my analytical and problem-solving skills by building practical projects.
              </p>
            </div>
          </div>
          
          <div className="about-right-col">
            <div className="about-profile-card">
              <div className="profile-card-glow"></div>
              
              <div className="profile-card-header">
                <div className="profile-avatar-circle">
                  <i className="fa-solid fa-user-astronaut" aria-hidden="true"></i>
                </div>
                <div className="profile-meta">
                  <h3 className="profile-name">Preet Passi</h3>
                  <p className="profile-role">Data Analytics Engineer</p>
                  <p className="profile-loc" style={{ color: "var(--text-secondary)", fontSize: "0.78rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "5px" }}>🚀 Data Analytics Engineer</p>
                  <p className="profile-loc" style={{ marginBottom: "5px" }}><i className="fa-solid fa-location-dot"></i> India</p>
                  <p className="profile-loc" style={{ color: "var(--accent-red)", fontSize: "0.78rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "3px" }}>🟢 Open to Work</p>
                  <p className="profile-loc" style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>📚 Continuous Learning</p>
                </div>
              </div>
              
              <div className="profile-stats-list">
                <div className="profile-stat-item">
                  <div className="stat-item-icon"><i className="fa-solid fa-briefcase" aria-hidden="true"></i></div>
                  <div className="stat-item-details">
                    <span className="stat-item-value">🚀 Data Analyst</span>
                    <span className="stat-item-label">Specialization</span>
                  </div>
                </div>
                
                <div className="profile-stat-item">
                  <div className="stat-item-icon"><i className="fa-solid fa-diagram-project" aria-hidden="true"></i></div>
                  <div className="stat-item-details">
                    <span className="stat-item-value">8+</span>
                    <span className="stat-item-label">Projects Completed</span>
                  </div>
                </div>
                
                <div className="profile-stat-item">
                  <div className="stat-item-icon"><i className="fa-solid fa-award" aria-hidden="true"></i></div>
                  <div className="stat-item-details">
                    <span className="stat-item-value">4+</span>
                    <span className="stat-item-label">Certificates Earned</span>
                  </div>
                </div>
                
                <div className="profile-stat-item">
                  <div className="stat-item-icon"><i className="fa-solid fa-heart-pulse" aria-hidden="true"></i></div>
                  <div className="stat-item-details">
                    <span className="stat-item-value">100%</span>
                    <span className="stat-item-label">Dedication</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-expertise-section">
          <h3 className="about-sub-section-title">{"// CORE EXPERTISE"}</h3>
          
          <div className="about-skills-grid">
            <div className="about-skill-card">
              <div className="skill-card-glow"></div>
              <i className="fa-brands fa-python about-skill-icon" aria-hidden="true"></i>
              <h4 className="about-skill-title">Python</h4>
            </div>
            
            <div className="about-skill-card">
              <div className="skill-card-glow"></div>
              <i className="fa-solid fa-database about-skill-icon" aria-hidden="true"></i>
              <h4 className="about-skill-title">SQL</h4>
            </div>
            
            <div className="about-skill-card">
              <div className="skill-card-glow"></div>
              <i className="fa-solid fa-file-excel about-skill-icon" aria-hidden="true"></i>
              <h4 className="about-skill-title">Microsoft Excel</h4>
            </div>
            
            <div className="about-skill-card">
              <div className="skill-card-glow"></div>
              <i className="fa-solid fa-chart-simple about-skill-icon" aria-hidden="true"></i>
              <h4 className="about-skill-title">Power BI</h4>
            </div>
            
            <div className="about-skill-card">
              <div className="skill-card-glow"></div>
              <i className="fa-solid fa-table about-skill-icon" aria-hidden="true"></i>
              <h4 className="about-skill-title">Pandas</h4>
            </div>
            
            <div className="about-skill-card">
              <div className="skill-card-glow"></div>
              <i className="fa-solid fa-calculator about-skill-icon" aria-hidden="true"></i>
              <h4 className="about-skill-title">NumPy</h4>
            </div>
            
            <div className="about-skill-card">
              <div className="skill-card-glow"></div>
              <i className="fa-solid fa-chart-line about-skill-icon"></i>
              <h4 className="about-skill-title">Matplotlib</h4>
            </div>
            
            <div className="about-skill-card">
              <div className="skill-card-glow"></div>
              <i className="fa-solid fa-chart-area about-skill-icon"></i>
              <h4 className="about-skill-title">Seaborn</h4>
            </div>

            <div className="about-skill-card">
              <div className="skill-card-glow"></div>
              <i className="fa-solid fa-broom about-skill-icon"></i>
              <h4 className="about-skill-title">Data Cleaning</h4>
            </div>

            <div className="about-skill-card">
              <div className="skill-card-glow"></div>
              <i className="fa-solid fa-magnifying-glass-chart about-skill-icon"></i>
              <h4 className="about-skill-title">Data Analysis</h4>
            </div>

            <div className="about-skill-card">
              <div className="skill-card-glow"></div>
              <i className="fa-solid fa-eye about-skill-icon"></i>
              <h4 className="about-skill-title">Data Visualization</h4>
            </div>

            <div className="about-skill-card">
              <div className="skill-card-glow"></div>
              <i className="fa-solid fa-lightbulb about-skill-icon"></i>
              <h4 className="about-skill-title">Business Intelligence</h4>
            </div>
          </div>
        </div>
        
        <div className="about-journey-section">
          <h3 className="about-sub-section-title">{"// MY JOURNEY"}</h3>
          
          <div className="journey-timeline">
            <div className="timeline-line"></div>
            
            <div className="timeline-item">
              <div className="timeline-circle"></div>
              <div className="timeline-content">
                <span className="timeline-date">Phase 1</span>
                <h4 className="timeline-title">Started Learning Data Analytics</h4>
                <p className="timeline-desc">Acquired foundational understanding of statistical principles, data structuring, and visualization analytics systems.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-circle"></div>
              <div className="timeline-content">
                <span className="timeline-date">Phase 2</span>
                <h4 className="timeline-title">Learned Python</h4>
                <p className="timeline-desc">Mastered OOP, Pandas, Numpy, Matplotlib, and scripting protocols to build automated pipelines and models.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-circle"></div>
              <div className="timeline-content">
                <span className="timeline-date">Phase 3</span>
                <h4 className="timeline-title">Mastered SQL</h4>
                <p className="timeline-desc">Developed proficiency in writing optimized relational queries, triggers, aggregates, and database design structures.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-circle"></div>
              <div className="timeline-content">
                <span className="timeline-date">Phase 4</span>
                <h4 className="timeline-title">Created Dashboards</h4>
                <p className="timeline-desc">Designed interactive, high-fidelity Power BI and Excel dashboards with dynamic tracking visualizations and KPI cards.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-circle"></div>
              <div className="timeline-content">
                <span className="timeline-date">Phase 5</span>
                <h4 className="timeline-title">Data Cleaning & Manipulation</h4>
                <p className="timeline-desc">Applied Pandas and NumPy methodologies to clean, filter, and structure complex messy datasets for reporting.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-circle"></div>
              <div className="timeline-content">
                <span className="timeline-date">Phase 6</span>
                <h4 className="timeline-title">Portfolio Projects</h4>
                <p className="timeline-desc">Built and deployed professional, end-to-end data analytics and automation projects showcase.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="seo-summary" className="section seo-summary-section">
      <div className="seo-container-wrapper">
        <div className="section-header">
          <h2 className="section-title"><span className="neon-text-red">{"//"}</span> PROFESSIONAL SUMMARY</h2>
          <p className="section-subtitle">Deep dive into the methodology, expertise, and analytics philosophy driving my work.</p>
        </div>
        
        <div className="seo-article-content tilt-card glass-panel">
          <div className="card-glow"></div>
          <h3 className="seo-heading">The Data Analytics Journey of Preet Passi</h3>
          <p className="seo-text">
            Welcome to the official <strong>Preet Passi Portfolio</strong>, a comprehensive digital showcase of a passionate data professional dedicated to turning complex datasets into clear, actionable business strategies. In today&apos;s rapidly evolving corporate landscape, data is no longer just a byproduct of operations; it is the core engine that drives strategic decision-making, operational efficiency, and revenue growth. As an emerging <strong>Preet Passi Data Analyst</strong>, my mission is to bridge the critical gap between raw, unstructured data streams and intuitive, high-impact business insights. Whether you are exploring a <strong>Data Analyst Portfolio India</strong> for inspiration, or actively seeking a dedicated analytics engineer to elevate your organization&apos;s data maturity, you will find a robust display of technical proficiency and business acumen right here.
          </p>

          <h3 className="seo-heading">A Robust SQL Portfolio for Data Engineering</h3>
          <p className="seo-text">
            Data extraction, manipulation, and secure storage are the foundational pillars of any successful analytics pipeline. My extensive <strong>SQL Portfolio</strong> demonstrates a profound, practical understanding of relational database management systems, including MySQL, PostgreSQL, and Microsoft SQL Server. Through a series of rigorous, real-world projects, I have engineered complex queries, utilized advanced window functions to track moving averages, designed Common Table Expressions (CTEs) for recursive data processing, and optimized database schemas to handle massive, multi-table datasets efficiently. I believe that writing clean, performant SQL is an art form—one that ensures data integrity and drastically reduces query execution times, laying the perfect groundwork for subsequent analysis and reporting phases.
          </p>

          <h3 className="seo-heading">An Advanced Power BI Portfolio for Visual Storytelling</h3>
          <p className="seo-text">
            Extracting data is only the first step; visualizing it effectively is where the true business value is unlocked. Within my <strong>Power BI Portfolio</strong>, I have meticulously designed executive-level dashboards that transform complex, multi-dimensional metrics into intuitive, interactive visual narratives. From financial performance tracking and sales forecasting to supply chain logistics and human resources talent acquisition, my Power BI data models are built for scale and usability. They incorporate advanced Data Analysis Expressions (DAX) for complex calculations, Row-Level Security (RLS) for enterprise-grade access control, and sophisticated time-intelligence functions to monitor year-over-year growth trends. By prioritizing user experience (UX) in dashboard design, I ensure that stakeholders at all technical levels can easily slice, filter, and interpret the data they need to make rapid, informed decisions.
          </p>

          <h3 className="seo-heading">Leveraging Python for Predictive Analytics</h3>
          <p className="seo-text">
            Beyond descriptive and diagnostic analytics, my technical repertoire extends deeply into the realm of predictive modeling and machine learning using Python. While SQL tells us what happened and Power BI helps us understand why it happened, Python allows us to forecast what will happen next. Utilizing industry-standard libraries such as Pandas, NumPy, Scikit-Learn, Matplotlib, and Seaborn, I have developed end-to-end machine learning pipelines. For instance, my customer churn prediction engines use classification algorithms to identify at-risk accounts before they leave, allowing businesses to proactively deploy retention strategies. Additionally, my Python expertise covers automated data scraping, API integrations, and complex data cleaning operations—ensuring that even the messiest datasets are transformed into pristine analytical assets.
          </p>

          <h3 className="seo-heading">Advanced Excel Modeling</h3>
          <p className="seo-text">
            Despite the rise of modern business intelligence tools, Microsoft Excel remains an indispensable powerhouse in the corporate financial sector. My portfolio features advanced financial modeling, automated VBA macro scripts, and dynamic pivot-table reports that push the boundaries of traditional spreadsheet capabilities. By integrating AI-powered forecasting modules and complex nested logic formulas, I have streamlined manual reporting workflows that previously took hours, reducing them to automated processes that execute in seconds.
          </p>

          <h3 className="seo-heading">The Analytics Philosophy Driving the Preet Passi Portfolio</h3>
          <p className="seo-text">
            The core philosophy underlying the <strong>Preet Passi Portfolio</strong> is simple yet profound: Data without context is merely noise. Every single dataset holds a unique narrative waiting to be uncovered, but it requires a curious, analytical mind to ask the right questions. Being a top-tier analyst isn&apos;t just about writing code or building charts; it&apos;s about deeply understanding the underlying business domain, identifying critical KPIs, and communicating findings in a way that resonates with non-technical stakeholders. As you browse through this <strong>Data Analyst Portfolio India</strong>, you will notice a consistent focus on ROI-driven results. From optimizing e-commerce customer retention databases to engineering interactive cloud-deployed financial dashboards, every project is aligned with solving tangible business challenges. I am continuously expanding my skill set, staying abreast of the latest AI trends, cloud computing architectures, and data engineering frameworks to ensure that my analytical solutions remain cutting-edge, scalable, and highly impactful.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
