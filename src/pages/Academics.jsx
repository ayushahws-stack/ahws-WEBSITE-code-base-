import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import './Academics.css'
import PageBanner from '../components/PageBanner'

export default function Academics() {
  const [activeTab, setActiveTab] = useState('curriculum') // 'curriculum' | 'non-curriculum'
  const [openAccordion, setOpenAccordion] = useState(null)

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  // Reveal animation hooks
  const { ref: curriculumRef, inView: curriculumInView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const { ref: pedagogyRef, inView: pedagogyInView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const { ref: programsRef, inView: programsInView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const { ref: sportsRef, inView: sportsInView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const { ref: facultyRef, inView: facultyInView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const { ref: sproutLayersRef, inView: sproutLayersInView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const { ref: pillarsRef, inView: pillarsInView } = useInView({ triggerOnce: true, threshold: 0.15 })

  // 7 Layers of SPROUT (From official SPROUT PPT)
  const sproutLayers = [
    { icon: '🛠️', code: 'SILK', title: 'Hands-on DIY Learning Kit', desc: 'Experiential learning kits enabling children to construct, experiment, and learn through tactile discovery.' },
    { icon: '🎒', code: 'STORE', title: 'Classroom Resource Essentials', desc: 'Comprehensive teaching & learning materials, manipulatives, and activity assets for every classroom.' },
    { icon: '📘', code: 'STAR', title: 'Teacher Facilitation Guide', desc: 'Structured lesson plans and pedagogical guides ensuring uniform excellence and innovative classroom delivery.' },
    { icon: '📖', code: 'Speak-O-Books', title: 'Foundational Literacy & Numeracy', desc: 'Specially crafted interactive books developing early phonics, reading comprehension, and numeracy skills.' },
    { icon: '🖊️', code: 'Speak-O-Pen', title: 'Interactive Reading Tool', desc: 'Audio-enabled talking pen that brings words, stories, and pronunciations to life for joyful learning.' },
    { icon: '💻', code: 'Prismart Smart Classes', title: 'Gamified Digital Classrooms', desc: '3D animated digital content, interactive quizzes, and visual modules making complex concepts easy.' },
    { icon: '📱', code: '360° Support App', title: 'Home-Based Learning Platform', desc: 'Seamless home-school connection with digital homework, progress tracking, and parent resources.' },
  ]

  // Enrichment Pillars (From SPROUT PPT Slide 6)
  const enrichmentPillars = [
    { icon: '🛠️', title: 'Kaushal Vikas & Kaushal Bodh', desc: 'Experiential & competency-based skill development preparing students with practical real-world abilities.' },
    { icon: '🎨', title: 'Art Integrated Education', desc: 'Music, movement, visual arts, and theatrical expression integrated into daily academic concepts.' },
    { icon: '💖', title: 'Value-Based Education', desc: 'Instilling empathy, kindness, gratitude, integrity, and social responsibility from early childhood.' },
    { icon: '🗣️', title: 'Language & Phonics', desc: 'Comprehensive listening, speaking, reading, and writing programs fostering multi-lingual fluency.' },
    { icon: '👨‍👩‍👧', title: 'Parent Partnership', desc: 'Active parent involvement through regular workshops, feedback forums, and collaborative events.' },
    { icon: '🏆', title: 'Co-Scholastic & Clubs', desc: 'Diverse student clubs building leadership, public speaking, enterprise, and talent discovery.' },
  ]

  // 5+3+3+4 Stage-Wise Academic Structure
  const curriculumCards = [
    {
      icon: '🌱',
      title: 'Foundation Stage',
      classes: '5 Years (Age 3-8)',
      desc: 'Play-based & joyful learning. Focuses on holistic child development — building curiosity, motor skills, social habits, and foundational language & numeracy.',
    },
    {
      icon: '🔍',
      title: 'Preparatory Stage',
      classes: '3 Years (Age 8-11)',
      desc: 'Discovery and Interactive Learning. Building a strong base in foundational literacy, numeracy, and cognitive skills through thematic and inquiry-based approaches.',
    },
    {
      icon: '🧪',
      title: 'Middle Stage',
      classes: '3 Years (Age 11-14)',
      desc: 'Learning by experience and analysis. Emphasis on conceptual understanding across Sciences, Mathematics, Social Studies, and Languages with project-based learning.',
    },
    {
      icon: '🧠',
      title: 'Secondary Stage',
      classes: '4 Years (Age 14-18)',
      desc: 'Multidisciplinary learning & Critical thinking. Rigorous preparation complemented by career counselling, competitive exam guidance, and specialized stream options.',
    },
  ]

  const pedagogyApproaches = [
    { icon: '🤝', title: 'Thematic Approach (8 Themes)', desc: 'Eight unifying themes designed to help learners become sensitive, compassionate, confident, and globally responsible citizens.' },
    { icon: '🎯', title: 'Project & Inquiry-Based Learning', desc: 'Encouraging exploration, discovery, and critical thinking through curiosity-driven projects and real-world problem solving.' },
    { icon: '🧩', title: 'Multiple Intelligences Framework', desc: 'Responding to different learning styles based on Howard Gardner\'s theory of Multiple Intelligences.' },
    { icon: '🎨', title: 'Art Integrated Education', desc: 'Combining visual arts, music, movement & drama to make academic concepts meaningful and memorable.' },
    { icon: '💻', title: 'Education 4.0 & Smart Tech', desc: 'Rethinking education for the 21st century with technology, digital interactive tools & experiential learning.' },
    { icon: '🌱', title: 'NIPUN & NCF-2023 Compliance', desc: 'Full alignment with National Curriculum Framework (NCF-2023) and NIPUN Bharat Mission for foundational literacy.' },
  ]

  const facultyStats = [
    { value: '25+', label: 'Qualified Teachers' },
    { value: '11', label: 'PGT Specialists' },
    { value: '100%', label: 'Trained in ICT' },
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
      type: 'Quick Games'
    },
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

      {/* ── Two-Part Segmented Navigation Switch ── */}
      <div className="acad-nav-tabs-wrapper">
        <div className="container">
          <div className="acad-nav-tabs">
            <button
              className={`acad-tab-btn ${activeTab === 'curriculum' ? 'active' : ''}`}
              onClick={() => setActiveTab('curriculum')}
            >
              📚 PART 1: CURRICULUM (Scholastic)
            </button>
            <button
              className={`acad-tab-btn ${activeTab === 'non-curriculum' ? 'active' : ''}`}
              onClick={() => setActiveTab('non-curriculum')}
            >
              ✨ PART 2: BEYOND CURRICULUM (Co-Scholastic & Skills)
            </button>
          </div>
        </div>
      </div>

      {/* ==========================================
          PART 1: CURRICULUM (Scholastic & SPROUT)
         ========================================== */}
      {activeTab === 'curriculum' && (
        <div className="acad-tab-content fade-in">
          
          {/* ── SPROUT Curriculum & NEP Overview ── */}
          <section className="acad-curriculum">
            <div className="container">
              <h2 className="section-title">The SPROUT Curriculum</h2>
              <div className="divider-line" />
              <p className="acad-subtitle">
                <strong>SPROUT is our exclusively in-house designed curriculum.</strong> Aligned with <strong>NEP-2020</strong>, <strong>NCF-2023</strong>, and the <strong>NIPUN Bharat Mission</strong>, our SPROUT curriculum holistically develops every learner 360° — integrating scholastic and co-scholastic pedagogies, life skills, value education, critical thinking, and future-ready abilities into practical real-life experiences.
              </p>

              {/* SPROUT Infographic Card */}
              <div className="acad-infographic-card">
                <div className="infographic-header">
                  <span className="infographic-badge">In-House Pedagogical Framework</span>
                  <h3 className="infographic-title">What SPROUT Stands For</h3>
                </div>
                <div className="infographic-img-wrap">
                  <img src="./WEBSITE GALLERY/other images/Sprout infographic.png" alt="What SPROUT Stands For Infographic" />
                </div>
              </div>

              {/* Interactive 7 Layers Breakdown Grid */}
              <div className="sprout-layers-header">
                <h3 className="sub-section-title">Explore The 7 Layers of SPROUT</h3>
                <p className="sub-section-desc">Each layer works seamlessly together to create an immersive, technology-enabled learning environment.</p>
              </div>

              <div ref={sproutLayersRef} className={`sprout-layers-grid ${sproutLayersInView ? 'in-view' : ''}`}>
                {sproutLayers.map((layer, i) => (
                  <div key={i} className="sprout-layer-card" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="layer-card-top">
                      <span className="layer-icon">{layer.icon}</span>
                      <span className="layer-code">{layer.code}</span>
                    </div>
                    <h4>{layer.title}</h4>
                    <p>{layer.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* ── 5+3+3+4 Academic Stages ── */}
          <section className="acad-stages-section bg-light">
            <div className="container">
              <h2 className="section-title">Academic Stages (NEP 5+3+3+4 Structure)</h2>
              <div className="divider-line" />
              <p className="acad-subtitle">Tailored learning stages designed to nurture age-appropriate developmental milestones grounded in Howard Gardner's Theory of Multiple Intelligences.</p>

              <div ref={curriculumRef} className={`acad-curriculum-grid ${curriculumInView ? 'in-view' : ''}`}>
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

          {/* ── Pedagogical Approach ── */}
          <section className="acad-pedagogy">
            <div className="container">
              <h2 className="section-title">Our Pedagogical Approach</h2>
              <div className="divider-line" />
              <p className="acad-subtitle">We strongly believe in Howard Gardner's Theory of Multiple Intelligences — ensuring that the needs of each learner are met uniquely through our diverse pedagogical toolkit.</p>
              
              <div ref={pedagogyRef} className={`acad-pedagogy-grid-6 ${pedagogyInView ? 'in-view' : ''}`}>
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
            </div>
          </section>

          {/* ── Examination Schedule ── */}
          <section className="acad-exams bg-light">
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
                📌 <em>Detailed date sheets will be shared via circulars and the 360° App well in advance. Parents are requested to ensure regular attendance during examination weeks.</em>
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
                <a href="./documents%20website/Academic%20Planner%20(2026-27).pdf" target="_blank" rel="noopener noreferrer" className="acad-download-btn">
                  📅 Download Academic Planner (2026-27)
                </a>
              </div>
            </div>
          </section>

          {/* ── Prescribed Textbooks ── */}
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      )}

      {/* ==========================================
          PART 2: BEYOND CURRICULUM (Co-Scholastic & Skills)
         ========================================== */}
      {activeTab === 'non-curriculum' && (
        <div className="acad-tab-content fade-in">
          
          {/* ── SPROUT Enrichment Pillars ── */}
          <section className="enrichment-pillars-section">
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
                  <div className="skill-21c-pill">🎨 Creativity &amp; Innovation</div>
                  <div className="skill-21c-pill">🤝 Collaboration &amp; Teamwork</div>
                  <div className="skill-21c-pill">💬 Communication &amp; Expression</div>
                  <div className="skill-21c-pill">🧠 Critical Thinking &amp; Problem Solving</div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Co-Scholastic & Special Programs ── */}
          <section className="special-programs-section bg-light">
            <div className="container">
              <h2 className="section-title">Co-Scholastic &amp; Special Programs</h2>
              <div className="divider-line" />
              <p className="acad-subtitle">Transformative programs that build confidence, creativity, and enterprise — preparing students not just for exams, but for life.</p>
              <div ref={programsRef} className={`programs-grid-2x2 ${programsInView ? 'in-view' : ''}`}>
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
              <h2 className="section-title">Sports</h2>
              <div className="divider-line" />
              <p className="acad-subtitle">At AHWS, we ensure our learners stay healthy and fit with top-notch sports facilities. Guided by professional sports coaches, students develop into all-rounders with stamina, strategy, and sportsmanship.</p>
              <div ref={sportsRef} className={`sports-grid ${sportsInView ? 'in-view' : ''}`}>
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

          {/* ── Distinguished Faculty & Guidance ── */}
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

        </div>
      )}
    </main>
  )
}
