import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import './Curriculum.css'
import PageBanner from '../components/PageBanner'

export default function Curriculum() {
  const [openAccordion, setOpenAccordion] = useState(null)
  const [flippedCards, setFlippedCards] = useState({})

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  const toggleCardFlip = (index) => {
    setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }))
  }

  // Reveal animation hooks
  const { ref: curriculumRef, inView: curriculumInView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const { ref: pedagogyRef, inView: pedagogyInView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const { ref: sproutLayersRef, inView: sproutLayersInView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const { ref: hallmarkRef, inView: hallmarkInView } = useInView({ triggerOnce: true, threshold: 0.15 })

  // 5 Hallmark Items (Matching Bachpan / SPROUT exact infographic design)
  const hallmarkItems = [
    {
      circleText: "Aligns with NEP 2020",
      arrowText: "Our curriculum focuses on 5 domains of Development for the child.",
      isReverse: false
    },
    {
      circleText: "Tech and Value Based",
      arrowText: "We understand the needs of digital age learners and equip them with value based education.",
      isReverse: true
    },
    {
      circleText: "Fosters Multiple Intelligence",
      arrowText: "We are equipped to cater to the needs of various learners.",
      isReverse: false
    },
    {
      circleText: "Designed by Distinguished Experts",
      arrowText: "SPROUT Curriculum has been carefully crafted by understanding child psychology and needs.",
      isReverse: true
    },
    {
      circleText: "Promote STEAM Education",
      arrowText: "We facilitate STEAM (Science, Technology, Engineering, Arts, Mathematics) Education.",
      isReverse: false
    }
  ]

  // 7 Layers of SPROUT (Exact items & flip card descriptions from official website)
  const sprout7Layers = [
    {
      num: 1,
      code: 'S-BOOKS',
      icon: '📚',
      title: 'Developmentally Appropriate Books',
      desc: 'Designed for lasting impact, our developmentally appropriate books guide learners through a structured progression in literacy and numeracy.'
    },
    {
      num: 2,
      code: 'S-SPEAK-O-PEN',
      icon: '🖊️',
      title: 'Interactive Audio Pen',
      desc: 'Our Speak-O-Pen uses advanced audio technology to enhance learning, offering 6 lac+ files for improved comprehension and pronunciation.'
    },
    {
      num: 3,
      code: 'S-PRISMART',
      icon: '💻',
      title: 'Smart Class Content',
      desc: 'Our Smart Class content makes learning fun, using interactive tools and HD visuals to simplify concepts and align with global standards.'
    },
    {
      num: 4,
      code: 'S-360 APP',
      icon: '📱',
      title: '360° Support App',
      desc: 'Our 360° Support App is a user-friendly automation platform that streamlines all school needs for students, parents, teachers, and management.'
    },
    {
      num: 5,
      code: 'SILK',
      icon: '🧩',
      title: 'Learning At-Home Kit',
      desc: 'SILK enhances parental involvement while supporting continued learning at home for students with fun, curriculum-based DIY activities.'
    },
    {
      num: 6,
      code: 'STAR',
      icon: '📋',
      title: 'Teacher Assistive Reckoner',
      desc: 'STAR is an all-in-one guide for teachers, simplifying lesson planning, assessments, and curriculum alignment for efficient teaching.'
    },
    {
      num: 7,
      code: 'STORE',
      icon: '🎒',
      title: 'Resource Essentials',
      desc: 'STORE is a suite of teaching aids with customizable tools and interactive resources like puppets, masks, and concept cards to engage students effectively.'
    }
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

  return (
    <main className="curriculum-page">
      <PageBanner title="Curriculum" image="./WEBSITE GALLERY/other images/Curriculum and Academics.png" />

      {/* ── Section 1: SPROUT Curriculum Overview & Hallmark Banners ── */}
      <section className="acad-curriculum">
        <div className="container">
          <h2 className="section-title">The SPROUT Curriculum</h2>
          <div className="divider-line" />
          <p className="acad-subtitle">
            <strong>SPROUT is our exclusively in-house designed curriculum.</strong> Aligned with <strong>NEP-2020</strong>, <strong>NCF-2023</strong>, and the <strong>NIPUN Bharat Mission</strong>, our SPROUT curriculum holistically develops every learner 360° — integrating scholastic pedagogies, life skills, value education, critical thinking, and future-ready abilities into practical real-life experiences.
          </p>

          {/* 🌟 Visual Hallmark of Our SPROUT Curriculum (Arrow & Circle Rows) */}
          <div ref={hallmarkRef} className="sprout-hallmark-container">
            <p className="hallmark-header-tag">Curiosity takes root through project-based learning</p>
            <h3 className="hallmark-main-title">
              Hallmark of Our <span>SPROUT</span> Curriculum
            </h3>

            <div className="hallmark-list">
              {hallmarkItems.map((item, idx) => (
                <div key={idx} className={`hallmark-row ${item.isReverse ? 'reverse' : ''}`}>
                  {!item.isReverse ? (
                    <>
                      <div className="hallmark-circle">
                        <span>{item.circleText}</span>
                      </div>
                      <div className="hallmark-arrow-box">
                        {item.arrowText}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="hallmark-arrow-box">
                        {item.arrowText}
                      </div>
                      <div className="hallmark-circle">
                        <span>{item.circleText}</span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SPROUT Infographic Card */}
          <div className="acad-infographic-card" style={{ marginTop: '40px' }}>
            <div className="infographic-header">
              <span className="infographic-badge">In-House Pedagogical Framework</span>
              <h3 className="infographic-title">What SPROUT Stands For</h3>
            </div>
            <div className="infographic-img-wrap">
              <img src="./WEBSITE GALLERY/other images/Sprout infographic.png" alt="What SPROUT Stands For Infographic" />
            </div>
          </div>

          {/* 🌟 7 Layers of SPROUT (Interactive 3D Flip Cards with Numbers) */}
          <div ref={sproutLayersRef} className="sprout-layers-section" style={{ marginTop: '56px' }}>
            <div className="sprout-layers-header">
              <h3 className="sub-section-title">7 Layers Of SPROUT Curriculum</h3>
              <p className="sub-section-desc">Designed for lasting impact — tap any card below to explore each layer's specialized learning tools and technology.</p>
            </div>

            <div className="sprout-7layers-grid">
              {sprout7Layers.map((layer, idx) => (
                <div key={idx} className="layer-item-wrapper">
                  <div className="layer-big-number">{layer.num}</div>
                  <div
                    className={`sprout-flip-card ${flippedCards[idx] ? 'flipped' : ''}`}
                  >
                    <div className="sprout-flip-inner">
                      {/* Front Side */}
                      <div className="sprout-flip-front">
                        <span className="sprout-capsule-badge">🌱 {layer.code}</span>
                        <div className="sprout-card-icon">{layer.icon}</div>
                        <h4 className="sprout-card-title">{layer.title}</h4>
                        <button
                          className="sprout-flip-hint flip-btn"
                          onClick={() => toggleCardFlip(idx)}
                          aria-label={`Flip to see details of ${layer.title}`}
                        >
                          📋 Tap to See Details 🔄
                        </button>
                      </div>

                      {/* Back Side */}
                      <div className="sprout-flip-back">
                        <h5>{layer.code}</h5>
                        <p>{layer.desc}</p>
                        <button
                          className="sprout-flip-hint-back flip-btn"
                          onClick={() => toggleCardFlip(idx)}
                          aria-label="Flip back"
                          style={{ marginTop: '12px', color: '#aed581', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase' }}
                        >
                          ↩️ Flip Back
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Child Growth Through SPROUT SVG Infographic Card */}
          <div className="acad-infographic-card" style={{ marginTop: '48px' }}>
            <div className="infographic-header">
              <span className="infographic-badge">Holistic Student Progression</span>
              <h3 className="infographic-title">Child Growth Through SPROUT</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '8px', fontSize: '0.98rem' }}>
                Demonstrating how our children grow in intellect, creativity, social responsibility, and character through our integrated SPROUT curriculum.
              </p>
            </div>
            <div className="infographic-img-wrap" style={{ background: '#ffffff', padding: '16px', borderRadius: '16px' }}>
              <img 
                src="./WEBSITE GALLERY/other images/Child growth through Sprout.svg" 
                alt="Child Growth Through SPROUT Curriculum" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 2: 5+3+3+4 Academic Stages ── */}
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

      {/* ── Section 3: Pedagogical Approach ── */}
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

      {/* ── Section 4: Examination Schedule ── */}
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

      {/* ── Section 5: Prescribed Textbooks ── */}
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

    </main>
  )
}
