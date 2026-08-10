import { useState } from 'react'
import './Academics.css'
import PageBanner from '../components/PageBanner'

export default function Academics() {
  const [openAccordion, setOpenAccordion] = useState(null)

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  const curriculumCards = [
    {
      icon: '🌱',
      title: 'Foundation Stage',
      classes: '5 Years',
      desc: 'Activities and learning through play. Focuses on the holistic development of the child during their most formative years — building curiosity, social skills, and foundational language & numeracy.',
    },
    {
      icon: '🔍',
      title: 'Preparatory Stage',
      classes: '3 Years',
      desc: 'Discovery and Interaction Learning. Building a strong base in foundational literacy, numeracy, and cognitive skills through thematic and inquiry-based approaches.',
    },
    {
      icon: '🧪',
      title: 'Middle Stage',
      classes: '3 Years',
      desc: 'Learning by experience and analysis. Emphasis on conceptual understanding across Sciences, Mathematics, Social Studies, and Languages with project-based learning.',
    },
    {
      icon: '🧠',
      title: 'Secondary Stage',
      classes: '4 Years',
      desc: 'Multi-disciplinary learning & Critical thinking. Rigorous preparation complemented by career counselling, competitive exam coaching, Decode Startup, and specialised streams.',
    },
  ]

  const pedagogyApproaches = [
    { icon: '🎯', title: 'Project-Based Learning', desc: 'Encouraging inquiry, exploration, and discovery through real-world challenges.' },
    { icon: '🔬', title: 'Inquiry-Based Learning', desc: 'Curiosity-based learning that fosters critical and analytical thinking skills.' },
    { icon: '🧩', title: 'Multiple Intelligence', desc: 'Responding to different learning styles based on Howard Gardner\'s theory of MI.' },
    { icon: '🎨', title: 'Art Integrated Education', desc: 'Art, music, movement & creativity combined to make learning fun and meaningful.' },
    { icon: '🤝', title: 'Thematic Approach', desc: 'Eight themes designed to help learners become sensitive, compassionate, and responsible global citizens.' },
    { icon: '💻', title: 'Education 4.0', desc: 'Rethinking education for the 21st century with technology, creativity, innovation & experiential learning.' },
  ]

  const facultyStats = [
    { value: '25+', label: 'Qualified Teachers' },
    { value: '11', label: 'PGT Specialists' },
    { value: '100%', label: 'Trained in ICT' },
    { value: '28+', label: 'Yrs. Counsellor Exp.' },
  ]

  const examSchedule = [
    { term: 'Term I', type: 'Periodic Assessment I', dates: 'July 2026' },
    { term: 'Term I', type: 'Mid-Term Examination', dates: 'September 2026' },
    { term: 'Term I', type: 'Periodic Assessment II', dates: 'November 2026' },
    { term: 'Term II', type: 'Periodic Assessment III', dates: 'January 2027' },
    { term: 'Term II', type: 'Annual Examination', dates: 'March 2027' },
  ]

  const textbookSections = [
    { title: 'Pre-Primary (Nursery – KG)', icon: '🧒', books: ['Rhymes & Stories Reader', 'Number Fun Workbook', 'Drawing & Colouring Book', 'Hindi Akshar Mala'] },
    { title: 'Classes 1–5 (Primary)', icon: '📗', books: ['NCERT English Reader', 'NCERT Mathematics', 'NCERT EVS / Science', 'NCERT Hindi Rimjhim', 'General Knowledge', 'Computer Science'] },
    { title: 'Classes 6–8 (Middle)', icon: '📘', books: ['NCERT Mathematics', 'NCERT Science', 'NCERT Social Science', 'NCERT English Honeysuckle / Honeydew', 'NCERT Hindi Vasant', 'Sanskrit Ruchira', 'Computer Applications'] },
    { title: 'Classes 9–10 (Secondary)', icon: '📕', books: ['NCERT Mathematics', 'NCERT Science', 'NCERT Social Science', 'NCERT English Beehive & Moments', 'NCERT Hindi Kshitij & Kritika', 'Information Technology'] },
    { title: 'Classes 11–12 (Senior Secondary)', icon: '📙', books: ['Stream-specific NCERT Textbooks', 'Physics / Accounts / History', 'Chemistry / Business Studies / Political Science', 'Mathematics / Economics / Geography', 'English Core / Hindi Core', 'Computer Science / Physical Education'] },
  ]

  const sportsPortfolio = [
    { icon: '🏓', name: 'Pickleball', type: 'Quick Games' },
    { icon: '🏏', name: 'Cricket', type: 'Stamina-Based' },
    { icon: '⚽', name: 'Football', type: 'Stamina-Based' },
    { icon: '🏸', name: 'Badminton', type: 'Quick Games' },
    { icon: '🎾', name: 'Tennis', type: 'Quick Games' },
    { icon: '🏀', name: 'Basketball', type: 'Dynamism-Based' },
    { icon: '🏐', name: 'Volleyball', type: 'Dynamism-Based' },
    { icon: '🥋', name: 'Taekwondo', type: 'Self-Defence' },
    { icon: '♟️', name: 'Chess', type: 'Strategic Thinking' },
  ]

  const coScholasticPrograms = [
    {
      icon: '🎨',
      title: 'Creativity & Expression through Art',
      tag: 'Visual Arts',
      desc: 'Our Arts program empowers students to express themselves freely, build confidence, and develop their unique creativity. Young artists explore various mediums, bringing imagination to life.',
      image: './WEBSITE GALLERY/other images/kid making art.jpeg'
    },
    {
      icon: '🎵',
      title: 'Music & Performing Arts',
      tag: 'Performing Arts',
      desc: 'Professional teachers guide students in singing, dancing, and musical instruments. Students compete in external events, building talent and confidence through performance and expression.',
      image: './WEBSITE GALLERY/other images/kids Dance .jpg',
      imagePosition: 'center 70%'
    },
    {
      icon: '🤖',
      title: 'Robotics & STEM Innovation',
      tag: 'Tech & Innovation',
      desc: 'Hands-on learning with robotic kits, microcontrollers, and coding activities that empower students to master STEM skills, logical reasoning, and digital enterprise.',
      image: './WEBSITE GALLERY/other images/robotics lab.jpeg'
    },
  ]

  return (
    <main className="academics-page">
      <PageBanner title="Academics" image="./WEBSITE GALLERY/other images/Curriculum and Academics.png" />

      {/* ── Section 1: Curriculum Overview ── */}
      <section className="acad-curriculum">
        <div className="container">
          <h2 className="section-title">The SPROUT Curriculum (5+3+3+4)</h2>
          <div className="divider-line" />
          <p className="acad-subtitle">
            <strong>SPROUT is our exclusively in-house designed curriculum.</strong> Aligned with <strong>NEP-2020</strong>, <strong>NCF-2023</strong>, and the <strong>NIPUN Bharat Mission</strong>, our SPROUT curriculum holistically develops every learner 360° — integrating scholastic and co-scholastic pedagogies, life skills, value education, critical thinking, and future-ready abilities into practical real-life experiences.
          </p>

          {/* SPROUT 6 Layers Infographic Card */}
          <div className="acad-infographic-card">
            <div className="infographic-header">
              <span className="infographic-badge">In-House Pedagogical Framework</span>
              <h3 className="infographic-title">The 6 Layers of SPROUT</h3>
            </div>
            <div className="infographic-img-wrap">
              <img src="./WEBSITE GALLERY/other images/Sprout infographic.png" alt="SPROUT Curriculum Infographic" />
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 2: Pedagogical Approach ── */}
      <section className="acad-pedagogy">
        <div className="container">
          <h2 className="section-title">Our Pedagogical Approach</h2>
          <div className="divider-line" />
          <p className="acad-subtitle">We strongly believe in Howard Gardner's Theory of Multiple Intelligences — ensuring that the needs of each learner are met uniquely through our diverse pedagogical toolkit.</p>
          <div className="acad-pedagogy-grid-6">
            {pedagogyApproaches.map((feat, i) => (
              <div key={i} className="acad-pedagogy-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="acad-pedagogy-card-icon">{feat.icon}</div>
                <div>
                  <h4>{feat.title}</h4>
                  <p>{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="skills-21c-box">
            <h3>21st Century Skills (4 C's)</h3>
            <div className="skills-21c-grid">
              <div className="skill-21c-pill">🎨 Creativity</div>
              <div className="skill-21c-pill">🤝 Collaboration</div>
              <div className="skill-21c-pill">💬 Communication</div>
              <div className="skill-21c-pill">🧠 Critical Thinking</div>
            </div>
          </div>

          {/* 4 Curriculum Stages Sub-header */}
          <div className="curriculum-stages-header" style={{ marginTop: '56px' }}>
            <h3 className="sub-section-title">Academic Stages (NEP 5+3+3+4 Structure)</h3>
            <p className="sub-section-desc">Tailored learning stages designed to nurture age-appropriate developmental milestones.</p>
          </div>

          <div className="acad-curriculum-grid">
            {curriculumCards.map((card, i) => (
              <div key={i} className="acad-curriculum-card" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="acad-curriculum-icon">{card.icon}</div>
                <span className="acad-curriculum-badge">{card.classes}</span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2b: Co-Scholastic & Special Programs ── */}
      <section className="special-programs-section">
        <div className="container">
          <h2 className="section-title">Co-Scholastic & Special Programs</h2>
          <div className="divider-line" />
          <p className="acad-subtitle">Beyond the classroom, AHWS offers transformative programs that build confidence, creativity, and enterprise — preparing students not just for exams, but for life.</p>
          <div className="programs-grid-2x2">
            {coScholasticPrograms.map((prog, i) => (
              <div key={i} className="program-card-v2">
                {prog.image && (
                  <div className="program-image-v2" style={{ height: '220px', marginBottom: '24px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                    <img src={prog.image} alt={prog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: prog.imagePosition || 'center' }} />
                  </div>
                )}
                <div className="program-icon-v2">{prog.icon}</div>
                <div className="program-tag">{prog.tag}</div>
                <h3>{prog.title}</h3>
                <p>{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sports Portfolio ── */}
      <section className="sports-section">
        <div className="container">
          <h2 className="section-title">Our Sports Portfolio</h2>
          <div className="divider-line" />
          <p className="acad-subtitle">At AHWS, we ensure our learners stay healthy and fit with top-notch sports facilities. Guided by professional sports coaches, students develop into all-rounders with stamina, strategy, and sportsmanship.</p>
          <div className="sports-grid">
            {sportsPortfolio.map((sport, i) => (
              <div key={i} className="sport-card">
                <div className="sport-icon">{sport.icon}</div>
                <h4>{sport.name}</h4>
                <span className="sport-tag">{sport.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Faculty ── */}
      <section className="acad-faculty">
        <div className="container">
          <h2 className="section-title acad-faculty-title">Our Distinguished Faculty</h2>
          <div className="divider-line" />
          <div className="acad-faculty-stats">
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

      {/* ── Section 4: Exam Schedule ── */}
      <section className="acad-exams">
        <div className="container">
          <h2 className="section-title">Examination Schedule 2026–27</h2>
          <div className="divider-line" />
          <div className="acad-table-wrap">
            <table className="acad-exam-table">
              <thead>
                <tr>
                  <th>Term</th>
                  <th>Examination Type</th>
                  <th>Tentative Dates</th>
                </tr>
              </thead>
              <tbody>
                {examSchedule.map((row, i) => (
                  <tr key={i}>
                    <td>{row.term}</td>
                    <td>{row.type}</td>
                    <td><span className="acad-date-badge">{row.dates}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="acad-exam-note">
            📌 <em>Detailed date sheets will be shared via circulars and the 360° App well in advance. Parents are requested
            to ensure regular attendance during examination weeks.</em>
          </p>
        </div>
      </section>

      {/* ── Section 5: Textbooks ── */}
      <section className="acad-textbooks">
        <div className="container">
          <h2 className="section-title">List of Textbooks</h2>
          <div className="divider-line" />
          <p className="acad-textbooks-intro">
            Below is the list of prescribed textbooks for each grade group. You may download the complete syllabus from the link below.
          </p>
          <div className="acad-accordion">
            {textbookSections.map((section, i) => (
              <div key={i} className={`acad-accordion-item ${openAccordion === i ? 'open' : ''}`}>
                <button
                  className="acad-accordion-header"
                  onClick={() => toggleAccordion(i)}
                  aria-expanded={openAccordion === i}
                >
                  <span className="acad-accordion-icon">{section.icon}</span>
                  <span className="acad-accordion-title">{section.title}</span>
                  <span className="acad-accordion-chevron">{openAccordion === i ? '−' : '+'}</span>
                </button>
                <div className="acad-accordion-body">
                  <ul>
                    {section.books.map((book, j) => (
                      <li key={j}>📖 {book}</li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '16px' }}>
                    <a href="./documents%20website/HVM%20Syllabus%20Class%201-12-%202026-27.pdf" target="_blank" rel="noopener noreferrer" className="acad-download-btn">
                      ⬇️ Download Complete Syllabus (Class 1-12)
                    </a>
                    <a href="./documents%20website/Academic%20Planner%20(2026-27).pdf" target="_blank" rel="noopener noreferrer" className="acad-download-btn" style={{ background: 'var(--primary)', color: 'var(--white)' }}>
                      📅 Download Academic Planner (2026-27)
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
