import { useState } from 'react'
import './About.css'
import PageBanner from '../components/PageBanner'

function FlippableWhyCard({ item }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className={`feature-flip-card ${isFlipped ? 'is-flipped' : ''}`}>
      <div className="feature-flip-inner">
        {/* Front Face */}
        <div className="feature-flip-front why-card">
          <div className="why-icon">{item.icon}</div>
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
          <button
            className="flip-hint-feature flip-btn"
            onClick={() => setIsFlipped(true)}
            aria-label={`See key highlights for ${item.title}`}
          >
            📋 Click for Key Highlights
          </button>
        </div>

        {/* Back Face */}
        <div className="feature-flip-back" style={{ background: item.bgGradient }}>
          <div>
            <h4 className="feature-back-title">{item.title}</h4>
            <ul className="feature-back-bullets">
              {item.points.map((pt, idx) => (
                <li key={idx}>
                  <span className="bullet-star">✦</span> {pt}
                </li>
              ))}
            </ul>
          </div>
          <button
            className="flip-hint-back-feature flip-btn"
            onClick={() => setIsFlipped(false)}
            aria-label="Flip back"
          >
            ↩️ Click to Flip Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default function About() {
  const [selectedLeader, setSelectedLeader] = useState(null)

  const leaders = [
    {
      name: "Rosy Ahuja",
      role: "Director",
      image: "./images/Ms Rosy Ahuja.png",
      quote: "Forever learning, forever achieving. The leitmotif of education is to sensitize students to the intricacies of life, giving wings to their dreams.",
      focus: "Moving from knowledge to skills and wisdom, from competition to cooperation."
    },
    {
      name: "Rachna Anand",
      role: "Principal",
      image: "./images/Ms Rachna Anand.png",
      quote: "Every child is a promise of a better tomorrow. Our duty is to help them realize it!",
      focus: "Nurturing values of integrity, curiosity, and empathy to foster holistic growth."
    },
    {
      name: "Harish Nagpal",
      role: "Associate Director",
      image: "./images/Mr Harish Nagpal.png",
      quote: "Dreams are seeds. Education nurtures and actions make them bloom.",
      focus: "Cultivating an environment where values meet excellence and students act with integrity."
    }
  ];

  return (
    <main className="about-page">
      <PageBanner title="About AHWS" image="./WEBSITE GALLERY/other images/AHWS.png" />

      {/* Leadership Messages */}
      <section className="leadership-section" id="leadership">
        <div className="container">
          <h2 className="section-title">Leadership With Vision</h2>
          <div className="divider-line" />
          <div className="leadership-grid">
            {leaders.map((leader, idx) => (
              <div key={idx} className="leader-card">
                <div className="quote-icon">“</div>
                <p className="leader-quote">"{leader.quote}"</p>
                <div className="leader-focus">
                  <strong>Focus:</strong> {leader.focus}
                </div>
                <div 
                  className="leader-meta"
                  onClick={() => leader.image && setSelectedLeader(leader)}
                  style={{ cursor: leader.image ? 'pointer' : 'default' }}
                  title={leader.image ? "Click to view portrait" : ""}
                >
                  {leader.image ? (
                    <img src={leader.image} alt={leader.name} className="leader-avatar-img" />
                  ) : (
                    <div className="leader-avatar">{leader.name.charAt(0)}</div>
                  )}
                  <div className="leader-info">
                    <h4>{leader.name}</h4>
                    <span className="leader-role-tag">{leader.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Screen Leader Lightbox Popup */}
      {selectedLeader && (
        <div className="leader-modal-backdrop" onClick={() => setSelectedLeader(null)}>
          <div className="leader-modal-content" onClick={e => e.stopPropagation()}>
            <button className="leader-modal-close" onClick={() => setSelectedLeader(null)}>✕</button>
            <div className="leader-modal-img-wrap">
              <img src={selectedLeader.image} alt={selectedLeader.name} />
            </div>
            <div className="leader-modal-details">
              <h3>{selectedLeader.name}</h3>
              <span className="leader-modal-role">{selectedLeader.role}</span>
              <p className="leader-modal-msg">"{selectedLeader.quote}"</p>
            </div>
          </div>
        </div>
      )}

      {/* Our Journey */}
      <section className="about-journey" id="journey">
        <div className="container">
          <h2 className="section-title">Our Journey Towards Excellence in Education</h2>
          <div className="divider-line" />
          <div className="journey-grid">
            <div className="journey-text">
              <p>Academic Heights World School takes pride in upholding the tradition of <strong>Bachpan Play School</strong> and <strong>Academic Heights World School (AHWS)</strong> — both of which have carved a distinguished name in the arena of education throughout India. AHWS was established in 2009 and marked the beginning of a remarkable institution where time-honoured legacy gracefully evolved to align with the demands of the 21st century.</p>
              <p>AHWS is a proud member of the <strong>120+ school Academic Heights Chain</strong> across India. We believe education is vital to creating all-round personalities who serve society in the coming years. We put strong emphasis on developing students' curiosity, reasoning skills, communication, and leadership abilities — fostering creative thinking where learners interact and discover through hands-on experiences.</p>
              <p>Technology plays a vital role in our school. Through modern teaching techniques, forward-thinking curriculum, and leading technology, we equip our students with the necessary skills for today's fast-changing world. Our methodology encompasses <strong>holistic development</strong> — intellectually, emotionally, socially, and physically — shaping compassionate and well-adjusted individuals alongside academic excellence.</p>
              <p>Our goal is to prepare students for the demands of tomorrow. As part of a unified brand family incorporating Bachpan Play School, Academic Heights World School, and <strong>Rishihood University</strong>, we offer a seamless educational pathway from Playgroup all the way to Higher Education, ensuring continuous, guided growth for every learner.</p>
            </div>
            <div className="journey-images-wrap">
              <div className="journey-image">
                <img src="https://ahws.edu.in/images/about-us-amination.gif" alt="About AHWS Animation" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AHWS */}
      <section className="why-ahws" id="why-ahws">
        <div className="container">
          <h2 className="section-title">Why Choose AHWS?</h2>
          <div className="divider-line" />
          <div className="why-grid">
            {[
              { 
                icon: '🏫', 
                title: 'Seamless Pathway', 
                desc: 'Playgroup to Higher Education — a continuous, guided journey under our unified brand umbrella with Rishihood University.',
                bgGradient: 'linear-gradient(135deg, #880e4f 0%, #ad1457 100%)',
                points: ['Playgroup to Higher Education', 'Unified Group: Bachpan, AHWS & Rishihood', 'Continuous Guided Mentorship', 'Smooth Transitioning Across Stages']
              },
              { 
                icon: '🤖', 
                title: 'Future-Ready Tech', 
                desc: 'Smart classrooms, X-Wall, Speak-O-Pen, AI Labs, and Robotics integration woven into the daily curriculum for every student.',
                bgGradient: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 100%)',
                points: ['AI & Robotics Integration', 'X-Wall Interactive Learning Wall', 'Speak-O-Pen Smart Pronunciation', 'Smart Classrooms with 3D Tech']
              },
              { 
                icon: '🎭', 
                title: 'Performing Arts', 
                desc: 'Theater, Dance, Music & Art programs with professional teachers, external competitions, and stage exposure from an early age.',
                bgGradient: 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%)',
                points: ['Theater & Stage Performance', 'Classical & Modern Dance', 'Vocal & Instrumental Music', 'Art & Sculpture Studios']
              },
              { 
                icon: '🏋️', 
                title: '9-Sport Portfolio', 
                desc: 'Pickleball, Cricket, Football, Badminton, Tennis, Basketball, Volleyball, Taekwondo, and Chess — for all-round athletic excellence.',
                bgGradient: 'linear-gradient(135deg, #004d40 0%, #00695c 100%)',
                points: ['Pickleball & Tennis Courts', 'Outdoor Basketball & Football', 'Cricket Nets & Volleyball', 'Taekwondo & Strategic Chess']
              },
              { 
                icon: '🧠', 
                title: 'Counselling Support', 
                desc: 'In-house counsellor Dr. Rashmi Bajaj Singh (28+ yrs exp) provides individual, group, and parent enrichment sessions year-round.',
                bgGradient: 'linear-gradient(135deg, #e65100 0%, #f57c00 100%)',
                points: ['28+ Yrs Experienced In-House Counsellor', 'Individual & Group Student Sessions', 'Parent Enrichment Workshops', 'Behavioral & Emotional Guidance']
              },
              { 
                icon: '🚀', 
                title: 'Decode Startup', 
                desc: 'Students pitch real business ideas to investors and receive initial funding — building entrepreneurs while still in school.',
                bgGradient: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)',
                points: ['Entrepreneurship in School', 'Real Business Idea Pitching', 'Initial Seed Funding Support', 'Financial & Innovation Literacy']
              },
            ].map((item, i) => (
              <FlippableWhyCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>



      {/* 360° Learning App */}
      <section className="app360-section" id="app">
        <div className="container">
          <div className="app360-grid">
            <div className="app360-content">
              <h2 className="section-title" style={{ textAlign: 'left' }}>360° Mobile App</h2>
              <div className="divider-line" style={{ margin: '12px 0 24px' }} />
              <p className="app360-desc">
                360 app was introduced to revolutionize children's education, enabling flexible study, anytime. It empowers parents to monitor their child's progress through teacher reports, for a holistic learning experience.
              </p>
              <h4 className="app360-subheading">AN ALL-IN-ONE SYSTEM FOR YOUR SCHOOL</h4>
              <p className="app360-desc">
                The Bachpan AHWS 360 Support App is a fully encompassing automation solution designed to meet the specific needs of our students, parents, educators, and school staff. This application offers a login portal that is customised to individual roles, ensuring ease of use and tailored access.
              </p>
              <ul className="app360-features">
                <li>✓ <span>Role-Defined Login Portal</span></li>
                <li>✓ <span>Most User-Friendly Interface</span></li>
                <li>✓ <span>360+ Outstanding Features</span></li>
                <li>✓ <span>Enhanced Experience for All Stakeholders</span></li>
                <li>✓ <span>24×7 Data Availability &amp; Security</span></li>
                <li>✓ <span>Live Classroom Experience</span></li>
                <li>✓ <span>Accessible Digital Content at your Fingertips</span></li>
                <li>✓ <span>Well Structured Programs &amp; Events</span></li>
                <li>✓ <span>Convenient Online Fee Payment</span></li>
              </ul>
              <p className="app360-cta-text">EXPERIENCE THE COMPLETE 360° IMMERSION NOW!</p>
              <div className="app360-btns">
                <a href="https://ah5000.skeducations.com/" target="_blank" rel="noopener noreferrer" className="app360-btn web" style={{ background: 'var(--primary)', color: '#FFC700', border: '1px solid #FFC700' }}>
                  <span className="app360-btn-icon">🌐</span>
                  <div><small>Access Online</small><strong>360° Portal Login</strong></div>
                </a>
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="app360-btn android">
                  <span className="app360-btn-icon">▶</span>
                  <div><small>Get it on</small><strong>Google Play</strong></div>
                </a>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="app360-btn ios">
                  <span className="app360-btn-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 814 1000" fill="currentColor" width="22" height="22">
                      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105.5-57.4-155.5-127.4C46.7 790.7 0 663 0 541.8c0-207.5 135.4-317.5 268.5-317.5 99.8 0 162.6 51.4 215.5 51.4 50.9 0 123.6-55.7 236.4-55.7 41.5 0 143.3 4.9 226.1 87.8zm-82.5-209.8c-35 26.3-81.9 52.2-136.4 52.2-50.1 0-130.3-24-183.9-78.4-29.6-29.6-53.3-73.1-53.3-117.9 0-4.5.3-8.9 1-13.4 47.4 1.9 139.9 36.8 190.6 101.7 27.5 35.1 44.5 74.6 44.5 110.6z"/>
                    </svg>
                  </span>
                  <div><small>Download on the</small><strong>App Store</strong></div>
                </a>
              </div>
              <div className="app360-mockups" style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
                <img src="./WEBSITE GALLERY/other images/360 app ui mockup 1.jpg" alt="360 App Mockup 1" style={{ width: '45%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }} />
                <img src="./WEBSITE GALLERY/other images/360 app ui mockup 2.png" alt="360 App Mockup 2" style={{ width: '45%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }} />
              </div>
            </div>
            <div className="app360-image">
              <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <img src="./WEBSITE GALLERY/other images/360 app infographicd.png" alt="360 App Infographic" style={{ maxWidth: '100%', borderRadius: 'var(--radius)' }} />
              </div>
              <div className="app360-video-wrap">
                <video
                  src="https://ahws.edu.in/images/360-App-Video-Final-1-1.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="app360-video"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Counselling & Parent Support ── */}
      <section className="counselling-section" id="counselling">
        <div className="container">
          <h2 className="section-title">Counselling & Parent Support</h2>
          <div className="divider-line" />
          <p className="counselling-intro">
            In today's fast-paced world, the need for counselling and emotional support for children is growing significantly. Increased stress, academic pressure, peer influence, and digital exposure can affect a child's confidence, emotional health, and overall development. At AHWS, we believe a child's life is a triangle — with the child at the centre, the parents on one side, the school on the other, and family values as the base.
          </p>
          <div className="counselling-grid">
            <div className="counselling-profile-card">
              <div className="counsellor-avatar-img"><div className="counsellor-avatar">Dr. R</div></div>
              <h3>Dr. Rashmi Bajaj Singh</h3>
              <p className="counsellor-title">School Counsellor & Parental Coach</p>
              <p className="counsellor-exp">📅 28+ Years of Experience in Education & Guidance</p>
              <p className="counsellor-bio">A dedicated Counsellor and Parental Coach supporting our learners' emotional and holistic development. Dr. Singh provides individual and group counselling sessions, storytelling activities, and life-skill programs.</p>
            </div>
            <div className="counselling-services">
              <div className="counselling-services-col">
                <h4>🧒 How We Help Students</h4>
                <ul>
                  <li>✓ Understand and positively express their feelings</li>
                  <li>✓ Build empathy and emotional resilience</li>
                  <li>✓ Manage stress, anger, and behaviour challenges</li>
                  <li>✓ Boost confidence and foster healthy relationships</li>
                  <li>✓ Storytelling and life-skill activities</li>
                </ul>
              </div>
              <div className="counselling-services-col">
                <h4>👨‍👩‍👧 Parent Enrichment Workshops</h4>
                <ul>
                  <li>✓ Concentration & learning challenges</li>
                  <li>✓ Concerns about screen time</li>
                  <li>✓ Behavioural or emotional difficulties</li>
                  <li>✓ Self-confidence and self-esteem</li>
                  <li>✓ Parent-child communication</li>
                  <li>✓ Anxiety, stress, or adjustment issues</li>
                </ul>
              </div>
            </div>
            <div className="counselling-appointment">
              <div className="appointment-icon">📋</div>
              <h4>How to Book an Appointment</h4>
              <p>Parents who wish to meet the counsellor may collect the <strong>Counselling Appointment Form</strong> from the school reception or download it from our website. Submit the completed form at the reception desk and we'll schedule your session.</p>
              <div style={{ margin: '16px 0' }}>
                <a href="./documents%20website/Enquiry%20form%20-AHWS%20FINAL.pdf" target="_blank" rel="noopener noreferrer" className="acad-download-btn" style={{ background: 'linear-gradient(135deg, var(--secondary), var(--accent))', color: 'var(--primary)', fontWeight: '800', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px', borderRadius: '50px' }}>
                  📥 Download Form
                </a>
              </div>
              <p className="counselling-tagline">Let's build together emotionally strong, confident, and happy children & families.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

