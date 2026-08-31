import React from 'react';
import PageBanner from '../components/PageBanner';
import './Infrastructure.css';

export default function Infrastructure() {
  return (
    <main className="infrastructure-page">
      <PageBanner title="Infrastructure & Facilities" image="./WEBSITE GALLERY/other images/LIBRARY 01.png" />
      
      {/* Section 1: Library */}
      <section className="library-section" id="library">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Library &amp; Resource Centre</h2>
            <div className="divider-line" />
            <p className="section-subtitle">A Hub of Knowledge, Quiet Study, and Intellectual Discovery</p>
          </div>
          <div className="library-content">
            <div className="library-text">
              <h3>Fostering a Lifelong Love for Reading</h3>
              <p>Our expansive, well-stocked library serves as the intellectual heart of AHWS. Designed with peaceful reading nooks and modern digital cataloguing, it provides students with unlimited access to literature and research material.</p>
              <ul className="feature-list">
                <li>📚 Extensive collection of 6,000+ books across diverse genres</li>
                <li>💻 Extensive digital resources and e-learning portals</li>
                <li>🤫 Dedicated quiet reading zones for focused study &amp; research</li>
                <li>📰 Daily national newspapers &amp; international periodicals</li>
              </ul>
            </div>
            <div className="library-gallery" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              <div className="library-img-wrap">
                <img src="./images/library 1.jpeg" alt="AHWS Library Reading Hall" className="library-img" />
                <span className="library-tag">Main Reading Hall</span>
              </div>
              <div className="library-img-wrap">
                <img src="./images/library 3.jpeg" alt="AHWS Quiet Study Nook" className="library-img" />
                <span className="library-tag">Quiet Study Zone</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Laboratories */}
      <section className="labs-section bg-light" id="laboratories">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">State-of-the-Art Laboratories</h2>
            <div className="divider-line" />
            <p className="section-subtitle">Hands-on practical learning through advanced scientific experimentation.</p>
          </div>
          <div className="labs-grid">
            <div className="lab-card fadeInUp">
              <img src="./WEBSITE GALLERY/other images/science lab.jpeg" alt="Science Lab" className="lab-card-img" />
              <div className="lab-card-content">
                <div className="lab-icon">🔬</div>
                <h3>Science Lab</h3>
                <p>Fully equipped, highly safe and well-ventilated laboratory with comprehensive chemical stocks, microscope stations, and modern apparatus.</p>
              </div>
            </div>
            <div className="lab-card fadeInUp delay-1">
              <img src="./WEBSITE GALLERY/other images/Computer lab.jpg" alt="Computer Lab" className="lab-card-img" />
              <div className="lab-card-content">
                <div className="lab-icon">💻</div>
                <h3>Computer Lab</h3>
                <p>High-speed internet workstations with the latest software for coding, digital literacy, and IT education.</p>
              </div>
            </div>
            <div className="lab-card fadeInUp delay-2">
              <img src="./images/Robotics 1.jpeg" alt="Robotics Lab" className="lab-card-img" />
              <div className="lab-card-content">
                <div className="lab-icon">🤖</div>
                <h3>Robotics &amp; AI Innovation Lab</h3>
                <p>An immersive setting equipped with robotic kits, sensors, and microcontrollers empowering students to master STEM &amp; coding.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Sports Facilities */}
      <section className="sports-section" id="sports">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sports &amp; Athletics Facilities</h2>
            <div className="divider-line" />
            <p className="section-subtitle">Fostering physical fitness, stamina, teamwork, and sportsmanship.</p>
          </div>
          <p className="sports-text">Our campus boasts world-class outdoor and indoor sports facilities, including basketball courts, cricket nets, track &amp; field, and indoor sports arenas.</p>
          <div className="sports-masonry">
            <div className="sports-img-wrap img-1">
              <img src="./images/Basketball 1.jpeg" alt="AHWS Basketball Arena" className="sports-img" />
              <span className="sports-caption">Basketball Court &amp; Training</span>
            </div>
            <div className="sports-img-wrap img-2">
              <img src="./images/Basketball 2.jpeg" alt="AHWS Sports Action" className="sports-img" />
              <span className="sports-caption">Outdoor Sports Arena</span>
            </div>
            <div className="sports-img-wrap img-3">
              <img src="./WEBSITE GALLERY/Sports Day (17-02-2026)/IMG_20260217_114341.jpeg" alt="Track & Field Athletics" className="sports-img" />
              <span className="sports-caption">Track &amp; Field Athletics</span>
            </div>
            <div className="sports-img-wrap img-4">
              <img src="./WEBSITE GALLERY/Sports Day (17-02-2026)/IMG_20260217_101527.jpeg" alt="Annual Sports Day" className="sports-img" />
              <span className="sports-caption">Annual Sports Day &amp; Parade</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Campus Amenities & Green Campus */}
      <section className="amenities-section bg-primary text-white" id="amenities">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title text-white">Campus Amenities</h2>
            <div className="divider-line" style={{ background: 'var(--secondary)' }} />
          </div>
          <div className="amenities-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="amenity-card fadeInUp">
              <img src="./images/Green campus.png" alt="Lush Green Campus" className="amenity-card-img" />
              <div className="amenity-content">
                <h3>🌳 Lush Green Eco-Campus</h3>
                <p>Spacious, eco-friendly green grounds providing a clean, inspiring environment for play, learning, and outdoor activities.</p>
              </div>
            </div>
            <div className="amenity-card fadeInUp delay-1">
              <img src="./WEBSITE GALLERY/other images/smart class room with 3D modes in the smart screen .jpeg" alt="Smart Classrooms" className="amenity-card-img" />
              <div className="amenity-content">
                <h3>💡 Smart Classrooms</h3>
                <p>Every classroom is fully air-conditioned and equipped with interactive smart boards and 3D learning models.</p>
              </div>
            </div>
            <div className="amenity-card fadeInUp delay-2">
              <img src="./WEBSITE GALLERY/other images/First-Aid education.jpeg" alt="First Aid & Safety" className="amenity-card-img" />
              <div className="amenity-content">
                <h3>🏥 Health &amp; Safety First</h3>
                <p>Comprehensive first-aid education, a fully equipped medical room, and active safety protocols for student well-being.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Safety & Security */}
      <section className="safety-section" id="safety">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Safety &amp; Security Systems</h2>
            <div className="divider-line" />
            <p className="section-subtitle">The safety and emotional well-being of every child is our highest priority.</p>
          </div>
          <div className="safety-grid">
            <div className="safety-card">
              <span className="safety-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
              </span>
              <h4>24x7 CCTV Surveillance</h4>
              <p>150 high-definition CCTV cameras actively monitor the entire campus and grounds to ensure continuous vigilance.</p>
            </div>
            <div className="safety-card">
              <span className="safety-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </span>
              <h4>Trained Security Personnel</h4>
              <p>Professional security staff stationed at all entry and exit points with a strict visitor management system.</p>
            </div>
            <div className="safety-card">
              <span className="safety-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="14" rx="2" ry="2"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M12 9v6M9 12h6"/></svg>
              </span>
              <h4>First-Aid Medical Room</h4>
              <p>Fully equipped medical room with trained support staff to handle health issues or emergencies immediately.</p>
            </div>
            <div className="safety-card">
              <span className="safety-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </span>
              <h4>Student Safety Protocols</h4>
              <p>Dedicated nannies on duty outside primary class washrooms. Mandatory driver background verification and regular fire drills.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
