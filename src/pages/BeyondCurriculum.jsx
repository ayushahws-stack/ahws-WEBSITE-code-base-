import { useInView } from 'react-intersection-observer'
import './BeyondCurriculum.css'
import PageBanner from '../components/PageBanner'

export default function BeyondCurriculum() {
  // Reveal animation hooks
  const { ref: pillarsRef, inView: pillarsInView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const { ref: programsRef, inView: programsInView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const { ref: sportsRef, inView: sportsInView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const { ref: facultyRef, inView: facultyInView } = useInView({ triggerOnce: true, threshold: 0.15 })

  // Enrichment Pillars (From SPROUT PPT Slide 6)
  const enrichmentPillars = [
    { icon: '🛠️', title: 'Kaushal Vikas & Kaushal Bodh', desc: 'Experiential & competency-based skill development preparing students with practical real-world abilities.' },
    { icon: '🎨', title: 'Art Integrated Education', desc: 'Music, movement, visual arts, and theatrical expression integrated into daily academic concepts.' },
    { icon: '💖', title: 'Value-Based Education', desc: 'Instilling empathy, kindness, gratitude, integrity, and social responsibility from early childhood.' },
    { icon: '🗣️', title: 'Language & Phonics', desc: 'Comprehensive listening, speaking, reading, and writing programs fostering multi-lingual fluency.' },
    { icon: '👨‍👩‍👧', title: 'Parent Partnership', desc: 'Active parent involvement through regular workshops, feedback forums, and collaborative events.' },
    { icon: '🏆', title: 'Co-Scholastic & Clubs', desc: 'Diverse student clubs building leadership, public speaking, enterprise, and talent discovery.' },
  ]

  const facultyStats = [
    { value: '25+', label: 'Qualified Teachers' },
    { value: '11', label: 'PGT Specialists' },
    { value: '100%', label: 'Trained in ICT' },
  ]

  const sportsPortfolio = [
    {
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
          <path d="M12 2C8.5 2 6 4.5 6 8C6 10.5 7.5 12.5 9.5 13.3L8.5 20.5C8.4 21.3 9 22 9.8 22H14.2C15 22 15.6 21.3 15.5 20.5L14.5 13.3C16.5 12.5 18 10.5 18 8C18 4.5 15.5 2 12 2Z" fill="#FFC700" stroke="#002147" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M9.5 16.5H14.5M9.8 19H14.2" stroke="#002147" strokeWidth="1.2" strokeLinecap="round"/>
          <circle cx="10" cy="6.5" r="0.9" fill="#002147"/>
          <circle cx="14" cy="6.5" r="0.9" fill="#002147"/>
          <circle cx="12" cy="9" r="0.9" fill="#002147"/>
          <circle cx="19.5" cy="18.5" r="3.2" fill="#FFFFFF" stroke="#002147" strokeWidth="1.2"/>
        </svg>
      ),
      name: 'Pickleball',
      type: 'Quick Games',
      categoryClass: 'type-quick'
    },
    { icon: '🏏', name: 'Cricket', type: 'Stamina-Based', categoryClass: 'type-stamina' },
    { icon: '⚽', name: 'Football', type: 'Stamina-Based', categoryClass: 'type-stamina' },
    { icon: '🏸', name: 'Badminton', type: 'Quick Games', categoryClass: 'type-quick' },
    { icon: '🎾', name: 'Tennis', type: 'Quick Games', categoryClass: 'type-quick' },
    { icon: '🏀', name: 'Basketball', type: 'Dynamism-Based', categoryClass: 'type-dynamism' },
    { icon: '🏐', name: 'Volleyball', type: 'Dynamism-Based', categoryClass: 'type-dynamism' },
    { icon: '🥋', name: 'Taekwondo', type: 'Self-Defence', categoryClass: 'type-defence' },
    { icon: '♟️', name: 'Chess', type: 'Strategic Thinking', categoryClass: 'type-strategy' },
  ]

  const coScholasticPrograms = [
    {
      icon: '🚀',
      title: 'Decode Startup — Entrepreneurial Leadership',
      tag: 'Enterprise & Leadership',
      desc: 'Our signature Decode Startup program helps students grow into future leaders by enabling them to design, implement, and present business ideas to actual investors. Upon approval, concepts receive initial seed funding to turn ideas into feasible startup ventures.',
      image: './images/new%20AHWS%20Website%20Photos/Home/Students%20using%20Smart%20Classrooms/IMG_8540.jpg'
    },
    {
      icon: '🎙️',
      title: 'Wordsworth — Digital Language Lab',
      tag: 'Linguistic Excellence',
      desc: 'Equipped with Words Worth, the most innovative language learning software, offering grade-specific content for extensive practice in vocabulary, pronunciation, spelling correction, and elimination of mother tongue interference (MTI).',
      image: './WEBSITE GALLERY/other images/Computer lab.jpg'
    },
    {
      icon: '🎭',
      title: 'Theater & Performing Arts',
      tag: 'Stage Exposure & Empathy',
      desc: 'Uniquely formulated to empower students to overcome stage fear, instill unshakeable self-confidence, and master emotional expressiveness. Young performers tackle social issues on stage to build deep human empathy and community awareness.',
      image: './images/new%20AHWS%20Website%20Photos/Home/Students%20in%20Art%20&%20Music%20Studios/CAM%20%201%201935T01.JPG',
      imagePosition: 'center 20%'
    },
    {
      icon: '🎨',
      title: 'Creativity & Expression through Art',
      tag: 'Visual Arts',
      desc: 'Our Arts program empowers students to express themselves freely, build confidence, and develop their unique creativity. Young artists explore various mediums, bringing imagination to life.',
      image: './images/new%20AHWS%20Website%20Photos/Home/Students%20in%20Art%20&%20Music%20Studios/IMG_8588.jpg'
    },
    {
      icon: '🤖',
      title: 'Robotics & STEM Innovation',
      tag: 'Tech & Innovation',
      desc: 'Hands-on learning with robotic kits, microcontrollers, and coding activities that empower students to master STEM skills, logical reasoning, and digital enterprise.',
      image: './images/new%20AHWS%20Website%20Photos/Beyond%20Curriculum/Robotics/IMG_8552.jpg'
    },
    {
      icon: '🏆',
      title: 'Sports & Athletics Excellence',
      tag: 'Fitness & Sportsmanship',
      desc: 'Comprehensive sports training under certified coaches. From track and field to tactical team sports, students build endurance, leadership, and sportsmanship.',
      image: './images/new%20AHWS%20Website%20Photos/Home/Sports/CAM%20%201%201696T01.JPG'
    }
  ]

  return (
    <main className="beyond-curriculum-page">
      <PageBanner title="Beyond Curriculum" image="./WEBSITE GALLERY/other images/Kids walking to school .png" />

      {/* ── Section 1: SPROUT Enrichment Pillars ── */}
      <section className="enrichment-pillars-section" id="sprout-pillars">
        <div className="container">
          <h2 className="section-title">SPROUT Enrichment Pillars</h2>
          <div className="divider-line" />
          <p className="acad-subtitle">Beyond textbooks, our curriculum incorporates 6 vital enrichment pillars to cultivate confident, compassionate, and future-ready global citizens.</p>
          
          <div ref={pillarsRef} className={`enrichment-grid ${pillarsInView ? 'in-view' : ''}`}>
            {enrichmentPillars.map((pillar, i) => (
              <div key={i} className="enrichment-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="enrichment-icon">{pillar.icon}</div>
                <h4>{pillar.title}</h4>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* 21st Century Skills (The 4 C's) */}
          <div className="skills-21c-box" style={{ marginTop: '56px' }}>
            <h3>21st Century Competencies (The 4 C's Framework)</h3>
            <div className="skills-21c-grid">
              <div className="skill-21c-pill"><span className="pill-emoji">🎨</span> Creativity &amp; Innovation</div>
              <div className="skill-21c-pill"><span className="pill-emoji">🤝</span> Collaboration &amp; Teamwork</div>
              <div className="skill-21c-pill"><span className="pill-emoji">💬</span> Communication &amp; Expression</div>
              <div className="skill-21c-pill"><span className="pill-emoji">🧠</span> Critical Thinking &amp; Problem Solving</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Co-Scholastic & Special Programs ── */}
      <section className="special-programs-section bg-light" id="programs">
        <div className="container">
          <h2 className="section-title">Co-Scholastic &amp; Special Programs</h2>
          <div className="divider-line" />
          <p className="acad-subtitle">Transformative programs that build confidence, creativity, and enterprise — preparing students not just for exams, but for life.</p>
          <div ref={programsRef} className={`programs-grid-2x2 ${programsInView ? 'in-view' : ''}`}>
            {coScholasticPrograms.map((prog, i) => (
              <div key={i} className="program-card-v2">
                {prog.image && (
                  <div className="program-image-v2" style={{ height: '220px', marginBottom: '20px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                    <img src={prog.image} alt={prog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: prog.imagePosition || 'center' }} />
                  </div>
                )}
                <div className="program-card-content">
                  <div className="program-card-header">
                    <span className="program-icon-v2">{prog.icon}</span>
                    <span className="program-tag">{prog.tag}</span>
                  </div>
                  <h3>{prog.title}</h3>
                  <p>{prog.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Sports Portfolio ── */}
      <section className="sports-section" id="sports">
        <div className="container">
          <h2 className="section-title">Sports &amp; Athletic Excellence</h2>
          <div className="divider-line" />
          <p className="acad-subtitle">At AHWS, students are guided by certified sports coaches and compete at zonal and national levels. Every student participates in our annual Tejas Sports Meet, building endurance, strategy, and sportsmanship.</p>

          {/* Verified Sports Evidence Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', margin: '30px 0 40px 0' }}>
            <div style={{ background: '#F4F6F9', padding: '22px', borderRadius: '10px', borderLeft: '4px solid #1B2A4A' }}>
              <h4 style={{ color: '#1B2A4A', fontWeight: '700', marginBottom: '8px' }}>Certified Coaches</h4>
              <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.5' }}>Dedicated instructors for Taekwondo, Cricket, Badminton, Basketball, and Chess.</p>
            </div>
            <div style={{ background: '#F4F6F9', padding: '22px', borderRadius: '10px', borderLeft: '4px solid #D4AF37' }}>
              <h4 style={{ color: '#1B2A4A', fontWeight: '700', marginBottom: '8px' }}>CBSE Zonal Medals</h4>
              <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.5' }}>Gold and Silver medalists in CBSE Zonal Taekwondo and Athletics championships.</p>
            </div>
            <div style={{ background: '#F4F6F9', padding: '22px', borderRadius: '10px', borderLeft: '4px solid #2E7D32' }}>
              <h4 style={{ color: '#1B2A4A', fontWeight: '700', marginBottom: '8px' }}>100% Student Participation</h4>
              <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.5' }}>Every student competes in the annual Tejas Sports Meet and intra-house games.</p>
            </div>
          </div>

          <div ref={sportsRef} className={`sports-grid ${sportsInView ? 'in-view' : ''}`}>
            {sportsPortfolio.map((sport, i) => (
              <div key={i} className="sport-card">
                <div className="sport-icon">{sport.icon}</div>
                <h4>{sport.name}</h4>
                <span className={`sport-tag ${sport.categoryClass || ''}`}>{sport.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Distinguished Faculty & Guidance ── */}
      <section className="acad-faculty bg-light">
        <div className="container">
          <h2 className="section-title acad-faculty-title">Our Distinguished Faculty</h2>
          <div className="divider-line" />
          <div ref={facultyRef} className={`acad-faculty-stats ${facultyInView ? 'in-view' : ''}`}>
            {facultyStats.map((stat, i) => (
              <div key={i} className="acad-stat-item">
                <span className="acad-stat-value">{stat.value}</span>
                <span className="acad-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
          <p className="acad-faculty-desc">
            Our educators are the backbone of AHWS. Every faculty member holds a postgraduate or doctoral degree in their respective discipline and is trained in modern pedagogical techniques, ICT integration, and inclusive education. We have <strong>11 PGT specialists</strong>, <strong>5 TGT teachers</strong>, and <strong>9 PRT educators</strong> — each supported by continuous professional development workshops, mindfulness training, and AI/tech upskilling sessions. Our in-house Counsellor, <strong>Dr. Rashmi Bajaj Singh</strong>, brings over <strong>28 years of experience</strong> in guidance and holistic student development.
          </p>
        </div>
      </section>

    </main>
  )
}

