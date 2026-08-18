import React, { useEffect, useState } from 'react';
import PageBanner from '../components/PageBanner';
import './Careers.css';

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    e.target.reset();
  };

  return (
    <main className="careers-page">
      <PageBanner title="Careers" image="./WEBSITE GALLERY/other images/AHWS.png" />

      <section className="careers-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Join Our Team</h2>
            <div className="divider-line"></div>
            <p>
              At Academic Heights World School, we believe that exceptional educators are the heart of a great school. 
              We are constantly looking for passionate, innovative, and dedicated professionals to join our community.
            </p>
          </div>
        </div>
      </section>

      {/* Life at AHWS / Culture & Wellness */}
      <section className="culture-wellness-section">
        <div className="container">
          <h3 className="section-subtitle">Work Culture &amp; Teacher Wellness</h3>
          <div className="culture-grid">
            <div className="culture-card">
              <div className="culture-icon">🧘</div>
              <h4>Mindfulness &amp; Wellness</h4>
              <p>School life can be demanding, which is why we actively prioritize our team’s mental and emotional health with regular breathing exercises and mindfulness sessions on campus to unwind and recharge.</p>
            </div>
            <div className="culture-card">
              <div className="culture-icon">💻</div>
              <h4>Tech Training Without Headaches</h4>
              <p>We use advanced daily classroom technologies (Bright Class, 360 App, PRI Smart, and X-Wall). We provide structured, hands-on, casual training sessions to ensure all staff are fully confident and comfortable without tech-induced stress.</p>
            </div>
            <div className="culture-card">
              <div className="culture-icon">✨</div>
              <h4>Holistic Skill Enrichment</h4>
              <p>We host non-standard training workshops covering AI tools, public speaking, grooming, makeup tutorials, and key life skills. We build a supportive environment for teachers to grow as individuals, not just employees.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="openings-section">
        <div className="container">
          <h3 className="section-subtitle">Current Openings</h3>
          <div className="jobs-grid">
            <div className="job-card">
              <span className="job-badge">Teaching</span>
              <h4>PGT / TGT Mathematics</h4>
              <p>Post Graduate with B.Ed. Minimum 3 years of teaching experience in a CBSE school.</p>
            </div>
            <div className="job-card">
              <span className="job-badge">Teaching</span>
              <h4>Primary & Pre-Primary Teachers</h4>
              <p>Graduate with NTT / B.Ed. Excellent communication skills and passion for early childhood education.</p>
            </div>
            <div className="job-card">
              <span className="job-badge">Administration</span>
              <h4>Front Desk Executive</h4>
              <p>Graduate with 2+ years of experience in school administration and front office management.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="application-section">
        <div className="container">
          <div className="application-box">
            <div className="application-info">
              <h3>Apply Now</h3>
              <p>Don't see a position that fits? We are always accepting resumes for future opportunities. Submit your application below.</p>
            </div>
            
            <form className="career-form" onSubmit={handleSubmit}>
              {submitted && (
                <div className="form-toast success">
                  <span className="toast-icon">✓</span>
                  Application submitted successfully! We will contact you soon.
                </div>
              )}
              
              <div className="form-group">
                <input type="text" placeholder="Full Name *" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address *" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number *" pattern="[0-9]{10}" maxLength={10} required />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Position Applied For *</option>
                  <option value="teaching">Teaching Staff</option>
                  <option value="admin">Administration</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Brief Cover Letter" rows="4"></textarea>
              </div>
              <div className="form-group file-upload">
                <label>Upload Resume (PDF/DOCX) <span style={{ color: '#e74c3c' }}>*</span></label>
                <input type="file" accept=".pdf,.doc,.docx" required />
              </div>
              <button type="submit" className="btn-primary-ahws submit-btn">Submit Application</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
