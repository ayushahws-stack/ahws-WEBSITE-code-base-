import React from 'react';
import './Committees.css';
import PageBanner from '../components/PageBanner';

export default function Committees() {
  return (
    <main className="committees-page">
      <PageBanner title="Safety & Committees" image="./WEBSITE GALLERY/other images/First-Aid education.jpeg" />
      
      <section className="committees-intro" id="overview">
        <div className="container">
          <div className="notice-box">
            <span className="notice-icon">🛡️</span>
            <p><strong>Notice:</strong> The safety and well-being of our students is our highest priority. The following committees are active as per CBSE guidelines.</p>
          </div>
        </div>
      </section>

      <section className="committees-section" id="committees-list">
        <div className="container">
          <div className="committees-grid">
            
            {/* POCSO Committee */}
            <div className="committee-card fade-in-up">
              <div className="committee-card-header">
                <h3><span className="emoji">👧👦</span> POCSO Committee</h3>
                <p className="subtitle">Protection of Children from Sexual Offences</p>
              </div>
              <div className="committee-card-body">
                <table className="committee-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Ms. Rachna Anand</td><td>Chair Person (Principal)</td></tr>
                    <tr><td>Ms. Manpreet</td><td>Nodal Teacher (Coordinator)</td></tr>
                    <tr><td>Dr. Rashmi Bajaj</td><td>Counsellor</td></tr>
                    <tr><td>Ms. Deepshikha Gupta</td><td>NGO Representative</td></tr>
                    <tr><td>Ms. Veena Bajpai</td><td>PGT Teacher</td></tr>
                    <tr><td>Mr. Deepak Sanoria</td><td>TGT Teacher</td></tr>
                    <tr><td>Ms. Babita / Ms. Jyoti Sahu</td><td>Parent Representatives</td></tr>
                    <tr><td>Hiten / Swati</td><td>Student Representatives (Class XII)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sexual Harassment Committee (POSH) */}
            <div className="committee-card fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="committee-card-header">
                <h3><span className="emoji">⚖️</span> Sexual Harassment Committee (POSH)</h3>
                <p className="subtitle">Prevention of Sexual Harassment at Workplace</p>
              </div>
              <div className="committee-card-body">
                <table className="committee-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Ms. Rachna Anand</td><td>Chair Person (Principal)</td></tr>
                    <tr><td>Ms. Sandeep Gulati</td><td>Coordinator</td></tr>
                    <tr><td>Ms. Manpreet</td><td>Coordinator</td></tr>
                    <tr><td>Dr. Rashmi Bajaj</td><td>Counsellor</td></tr>
                    <tr><td>Ms. Deepshikha Gupta</td><td>NGO Representative</td></tr>
                    <tr><td>Ms. Meenu Marwah</td><td>Admin Incharge</td></tr>
                    <tr><td>Mr. Akash</td><td>Lawyer / Legal Representative</td></tr>
                  </tbody>
                </table>
                <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-muted)', marginTop: '12px' }}>* Wherever required, the class leaders/Sports In charge will be co-opted.</p>
              </div>
            </div>

            {/* School Disciplinary & Anti-Bullying */}
            <div className="committee-card fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="committee-card-header">
                <h3><span className="emoji">🛑</span> School Disciplinary Committee</h3>
                <p className="subtitle">Anti-Bullying & Vandalism Control Squad</p>
              </div>
              <div className="committee-card-body">
                <table className="committee-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Ms. Rosy Ahuja</td><td>Academic Director</td></tr>
                    <tr><td>Ms. Rachna Anand</td><td>Principal</td></tr>
                    <tr><td>Ms. Sandeep Gulati</td><td>Coordinator</td></tr>
                    <tr><td>Ms. Manpreet</td><td>Coordinator</td></tr>
                    <tr><td>Dr. Rashmi Bajaj</td><td>Counsellor</td></tr>
                    <tr><td>Ms. Veena Bajpai</td><td>PGT Teacher</td></tr>
                    <tr><td>Mr. Deepak Sanoria</td><td>TGT Teacher</td></tr>
                    <tr><td>Mr. Rajesh Kumar Singh</td><td>PTA Representative</td></tr>
                    <tr><td>Dr. Akanksha</td><td>Medical Practitioner</td></tr>
                    <tr><td>Mr. Akash</td><td>Legal Representative</td></tr>
                    <tr><td>Student Representatives</td><td>Class XI Students</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* School Safety Committee */}
            <div className="committee-card fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="committee-card-header">
                <h3><span className="emoji">🛡️</span> School Safety Committee</h3>
                <p className="subtitle">Holistic Campus Safety Audit Team</p>
              </div>
              <div className="committee-card-body">
                <table className="committee-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Ms. Rachna Anand</td><td>Principal</td></tr>
                    <tr><td>Ms. Sandeep Gulati</td><td>Coordinator</td></tr>
                    <tr><td>Ms. Manpreet</td><td>Coordinator</td></tr>
                    <tr><td>Dr. Rashmi Bajaj</td><td>Counsellor</td></tr>
                    <tr><td>Ms. Veena Bajpai</td><td>PGT Teacher</td></tr>
                    <tr><td>Mr. Sachin Solanki</td><td>PET Teacher</td></tr>
                    <tr><td>Mr. Deepak Sanoria</td><td>Transport Incharge</td></tr>
                    <tr><td>Dr. Akanksha</td><td>Medical Practitioner</td></tr>
                    <tr><td>Mr. Akash</td><td>Legal Representative</td></tr>
                    <tr><td>PTA Members</td><td>Parent Representatives</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tobacco Control Committee */}
            <div className="committee-card fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="committee-card-header">
                <h3><span className="emoji">🚭</span> Tobacco Control Committee</h3>
                <p className="subtitle">Promoting a Tobacco-Free Environment</p>
              </div>
              <div className="committee-card-body">
                <table className="committee-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Ms. Rachna Anand</td><td>Principal</td></tr>
                    <tr><td>Mr. Deepak Sanoria</td><td>Nodal Teacher Incharge</td></tr>
                    <tr><td>Ms. Veena Bajpai</td><td>Health Coordinator</td></tr>
                    <tr><td>Mr. Rajesh Kumar Singh</td><td>PTA Member</td></tr>
                    <tr><td>Swati / Hiten</td><td>Student Members</td></tr>
                    <tr><td>Dhruv / Mansi / Bhumika</td><td>Student Members</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Grievance Redressal */}
            <div className="committee-card fade-in-up" style={{animationDelay: '0.5s'}}>
              <div className="committee-card-header">
                <h3><span className="emoji">📞</span> Grievance Redressal Cell</h3>
                <p className="subtitle">We are here to listen and help</p>
              </div>
              <div className="committee-card-body grievance-info">
                <p>Parents and students can reach out to the Grievance Redressal Cell for any concerns regarding academics, administration, or safety.</p>
                <div className="contact-methods">
                  <div className="contact-method">
                    <strong>Email:</strong> <a href="mailto:info@ahws.edu.in" style={{ color: 'var(--primary)', fontWeight: 600 }}>info@ahws.edu.in</a>
                  </div>
                  <div className="contact-method">
                    <strong>Suggestion Box:</strong> Located near the main gate
                  </div>
                  <div className="contact-method">
                    <strong>Meeting:</strong> Walk-in hours every Friday, 2 PM - 4 PM
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
