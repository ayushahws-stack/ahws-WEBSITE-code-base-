import { useState, useEffect, useRef, useCallback } from 'react'
import './Wellbeing.css'
import PageBanner from '../components/PageBanner'

export default function Wellbeing() {
  const [selectedLightbox, setSelectedLightbox] = useState(null)
  const [rotatingIdx, setRotatingIdx] = useState(0)
  const [lightboxImgIdx, setLightboxImgIdx] = useState(0)
  const rotationRef = useRef(null)

  /* ── Keyboard: Escape closes lightbox, arrows navigate gallery ── */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedLightbox(null)
      if (selectedLightbox?.images) {
        if (e.key === 'ArrowRight') setLightboxImgIdx(prev => (prev + 1) % selectedLightbox.images.length)
        if (e.key === 'ArrowLeft') setLightboxImgIdx(prev => (prev - 1 + selectedLightbox.images.length) % selectedLightbox.images.length)
      }
    }
    if (selectedLightbox) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedLightbox])

  /* ── Counsellor Profiles ── */
  const counsellors = [
    {
      name: "Dr. Rashmi Bajaj Singh",
      role: "Senior Counselor",
      badge: "Parental Coach • 28+ Years Exp.",
      image: "./images/Dr_Rashmi_Bajaj_Singh.jpg",
      fallback: "./images/new%20AHWS%20Website%20Photos/About/Ms.%20Rashmi%20ma_am/WhatsApp%20Image%202026-08-31%20at%2011.04.40%20PM.jpeg",
      desc: "Specializes in adolescent psychology, parental coaching, stress resilience, and positive behavioral development for children and families."
    },
    {
      name: "Dr. Rekha Jha",
      role: "Counselor",
      badge: "Student Psychological Support",
      image: "./images/Dr_Rekha_Jha.jpg",
      fallback: "./WEBSITE GALLERY/other images/AHWS.png",
      desc: "Empowering learners through active listening, mindfulness, self-regulation, and holistic emotional wellbeing support."
    },
    {
      name: "Ms. Urvashi",
      role: "Counselor",
      badge: "Student Wellbeing Specialist",
      image: "./images/new%20AHWS%20Website%20Photos/Counselling/Urvashi.jpeg",
      fallback: "./images/Ms_Urvashi.jpg",
      desc: "Dedicated to student emotional development, early pastoral care, and positive behavioral coaching in a compassionate environment."
    }
  ]

  /* ── Session Gallery Data ── */
  const drRashmiStudentImages = [
    "./images/counseling_support_students.jpg",
    "./images/new%20AHWS%20Website%20Photos/Counselling/Dr_Rashmi_Images/Counsellor_Dr_Rashmi_Bajaj_Singh%20with%20kids/IMG_20260724_142231.jpg.jpeg",
    "./images/new%20AHWS%20Website%20Photos/Counselling/Dr_Rashmi_Images/Counsellor_Dr_Rashmi_Bajaj_Singh%20with%20kids/IMG_20260724_142216.jpg.jpeg",
    "./images/new%20AHWS%20Website%20Photos/Counselling/Dr_Rashmi_Images/Counsellor_Dr_Rashmi_Bajaj_Singh%20with%20kids/IMG_20260724_142341.jpg.jpeg",
    "./images/new%20AHWS%20Website%20Photos/Counselling/Dr_Rashmi_Images/Counsellor_Dr_Rashmi_Bajaj_Singh%20with%20kids/IMG_20260724_142352.jpg.jpeg",
    "./images/new%20AHWS%20Website%20Photos/Counselling/Dr_Rashmi_Images/Counsellor_Dr_Rashmi_Bajaj_Singh%20with%20kids/IMG_20260724_142326.jpg.jpeg"
  ]

  const sessionGalleries = [
    {
      title: "Counselor with Parent",
      tag: "Parent Counseling Session",
      image: "./images/counseling_support_parents.jpg",
      fallback: "./WEBSITE GALLERY/other images/parents feedback.png",
      desc: "Dedicated counseling and parental coaching sessions to support child development, address concerns, and build nurturing home environments."
    },
    {
      title: "Counselor with Student",
      tag: "Student Counseling Session",
      images: drRashmiStudentImages,
      fallback: "./WEBSITE GALLERY/other images/well being 101.png",
      desc: "Compassionate, confidential student guidance and emotional well-being sessions to foster self-confidence and personal resilience."
    }
  ]

  /* ── Auto-rotate the student gallery card every 3.5s ── */
  useEffect(() => {
    rotationRef.current = setInterval(() => {
      setRotatingIdx(prev => (prev + 1) % drRashmiStudentImages.length)
    }, 3500)
    return () => clearInterval(rotationRef.current)
  }, [])

  /* ── Wellbeing Feature Sections ── */
  const sections = [
    {
      title: "Mentor-Mentee Programme",
      icon: "\uD83E\uDD1D",
      desc: "Our Mentor-Mentee programme ensures that every child is personally known, valued, and guided. Faculty mentors provide academic support, emotional guidance, and serve as the primary link between the school and parents."
    },
    {
      title: "Student Well-being & Counselling",
      icon: "\uD83E\uDDE0",
      desc: "We provide dedicated on-campus counselors and safe spaces where students can talk freely about academic stress, peer relationships, and emotional struggles without judgment."
    },
    {
      title: "Life Skills Education",
      icon: "\uD83C\uDF31",
      desc: "Integrated into our daily curriculum, we teach essential life skills such as resilience, financial literacy, effective communication, and critical problem-solving to prepare students for the real world."
    },
    {
      title: "Health & Nutrition",
      icon: "\uD83C\uDF4E",
      desc: "Our 'Nourish Room' and robust physical education programs ensure students develop healthy eating habits. We conduct regular health checkups and promote a balanced, active lifestyle."
    },
    {
      title: "Values & Character Building",
      icon: "\uD83C\uDF1F",
      desc: "Through our 'We Teach Life' initiative and daily mindfulness practices, we actively instill core values like empathy, respect, integrity, and gratitude into our students' daily lives."
    },
    {
      title: "Inclusion & Diversity",
      icon: "\uD83C\uDF08",
      desc: "AHWS is a safe haven for every child. We strictly enforce anti-bullying policies and offer tailored support for special educational needs, ensuring an inclusive environment where everyone thrives."
    }
  ]

  /* ── Helper: open lightbox for a gallery item ── */
  const openSessionLightbox = useCallback((s) => {
    if (s.images) {
      setLightboxImgIdx(rotatingIdx)
      setSelectedLightbox({
        title: s.title,
        subtitle: s.tag,
        badge: s.tag,
        images: s.images,
        fallback: s.fallback,
        desc: s.desc
      })
    } else {
      setSelectedLightbox({
        title: s.title,
        subtitle: s.tag,
        badge: s.tag,
        image: s.image,
        fallback: s.fallback,
        desc: s.desc
      })
    }
  }, [rotatingIdx])

  return (
    <main className="wellbeing-page">
      <PageBanner 
        title="Well-being & Mentoring" 
        image="./WEBSITE GALLERY/other images/First-Aid education.jpeg"
      />

      <section className="wellbeing-intro-section" id="overview">
        <div className="container">
          <div className="wb-intro-content">
            <h2 className="section-title">Nurturing Minds, Building Character</h2>
            <div className="divider-line" />
            <p className="wb-lead-text">
              At Academic Heights World School, we believe that education extends far beyond academics. 
              Our holistic approach prioritizes the emotional, mental, and physical well-being of every student. 
              By providing robust mentoring and an inclusive, safe environment, we empower our students to grow into confident, resilient, and compassionate individuals.
            </p>
          </div>
        </div>
      </section>

      <section className="wellbeing-grid-section">
        <div className="container">
          <div className="wb-grid">
            {sections.map((sec, idx) => (
              <div key={idx} className="wb-card" id={sec.title.includes("Mentor") ? "mentor-mentee" : sec.title.includes("Life") ? "life-skills" : undefined}>
                <div className="wb-card-icon">{sec.icon}</div>
                <h3 className="wb-card-title">{sec.title}</h3>
                <p className="wb-card-desc">{sec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Counselling Team Highlight */}
      <section className="counsellor-section" id="counselling-team">
        <div className="container">
          <div className="counsellor-box">
            <h2>Meet Our Wellness & Counseling Team</h2>
            <p>Our dedicated wellness and counseling team provides expert guidance to support emotional health, stress management, and personal development for both students and parents.</p>
            
            <div className="counsellor-profiles">
              {counsellors.map((c, idx) => (
                <div 
                  key={idx} 
                  className="counsellor-profile clickable-card"
                  onClick={() => setSelectedLightbox({
                    title: c.name,
                    subtitle: c.role,
                    badge: c.badge,
                    image: c.image,
                    fallback: c.fallback,
                    desc: c.desc
                  })}
                  role="button"
                  tabIndex={0}
                  aria-label={`View photo and profile of ${c.name}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedLightbox({
                        title: c.name,
                        subtitle: c.role,
                        badge: c.badge,
                        image: c.image,
                        fallback: c.fallback,
                        desc: c.desc
                      })
                    }
                  }}
                >
                  <div className="counsellor-img-wrap">
                    <img 
                      src={c.image} 
                      alt={c.name} 
                      className="counsellor-img"
                      style={{ objectFit: 'cover' }}
                      onError={(e) => {
                        if (c.fallback && e.currentTarget.src !== c.fallback) {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = c.fallback;
                        }
                      }}
                    />
                    <div className="counsellor-img-overlay">
                      <span className="counsellor-zoom-icon">🔍</span>
                    </div>
                  </div>
                  <h4>{c.name}</h4>
                  <span className="counsellor-role">{c.role}</span>
                  <span className="counsellor-click-hint">Click to Enlarge Photo</span>
                </div>
              ))}
            </div>

            <div className="counsellor-gallery">
              {sessionGalleries.map((s, idx) => (
                <div 
                  key={idx} 
                  className="cg-item clickable-card"
                  onClick={() => openSessionLightbox(s)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Enlarge photo: ${s.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') openSessionLightbox(s)
                  }}
                >
                  <div className="cg-img-wrap">
                    {s.images ? (
                      /* ── Rotating image slideshow ── */
                      <div className="cg-rotating-container">
                        {s.images.map((imgSrc, imgIdx) => (
                          <img
                            key={imgIdx}
                            src={imgSrc}
                            alt={`${s.title} ${imgIdx + 1}`}
                            className={`cg-img cg-rotating-img ${imgIdx === rotatingIdx ? 'cg-active' : ''}`}
                            loading="lazy"
                            onError={(e) => {
                              if (s.fallback && e.currentTarget.src !== s.fallback) {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = s.fallback;
                              }
                            }}
                          />
                        ))}
                        {/* Dot indicators */}
                        <div className="cg-dots">
                          {s.images.map((_, dotIdx) => (
                            <span
                              key={dotIdx}
                              className={`cg-dot ${dotIdx === rotatingIdx ? 'cg-dot-active' : ''}`}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      /* ── Static single image ── */
                      <img 
                        src={s.image} 
                        alt={s.title} 
                        className="cg-img" 
                        onError={(e) => {
                          if (s.fallback && e.currentTarget.src !== s.fallback) {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = s.fallback;
                          }
                        }}
                      />
                    )}
                    <div className="cg-img-overlay">
                      <span className="cg-zoom-badge">🔍 Click to Enlarge</span>
                    </div>
                  </div>
                  <div className="cg-item-content">
                    <h5>{s.title}</h5>
                    <span className="cg-tag-pill">{s.tag}</span>
                  </div>
                </div>
              ))}
            </div>

            <a href="#/contact" className="btn-primary-ahws" style={{ marginTop: '30px' }}>Reach Out for Support</a>
          </div>
        </div>
      </section>

      {/* ── High-Definition Lightbox Modal ── */}
      {selectedLightbox && (
        <div className="wb-lightbox-backdrop" onClick={() => setSelectedLightbox(null)}>
          <div 
            className="wb-lightbox-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selectedLightbox.title}
          >
            <button 
              type="button" 
              className="wb-lightbox-close" 
              onClick={() => setSelectedLightbox(null)}
              aria-label="Close preview"
            >
              ✕
            </button>
            <div className="wb-lightbox-img-wrap">
              {selectedLightbox.images ? (
                /* ── Multi-image lightbox with prev/next ── */
                <>
                  <img 
                    src={selectedLightbox.images[lightboxImgIdx]} 
                    alt={`${selectedLightbox.title} ${lightboxImgIdx + 1}`} 
                    className="wb-lightbox-img"
                    onError={(e) => {
                      if (selectedLightbox.fallback && e.currentTarget.src !== selectedLightbox.fallback) {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = selectedLightbox.fallback;
                      }
                    }}
                  />
                  <button
                    type="button"
                    className="wb-lightbox-nav wb-lightbox-prev"
                    onClick={() => setLightboxImgIdx(prev => (prev - 1 + selectedLightbox.images.length) % selectedLightbox.images.length)}
                    aria-label="Previous photo"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="wb-lightbox-nav wb-lightbox-next"
                    onClick={() => setLightboxImgIdx(prev => (prev + 1) % selectedLightbox.images.length)}
                    aria-label="Next photo"
                  >
                    ›
                  </button>
                  <div className="wb-lightbox-counter">
                    {lightboxImgIdx + 1} / {selectedLightbox.images.length}
                  </div>
                </>
              ) : (
                /* ── Single image lightbox ── */
                <img 
                  src={selectedLightbox.image} 
                  alt={selectedLightbox.title} 
                  className="wb-lightbox-img"
                  onError={(e) => {
                    if (selectedLightbox.fallback && e.currentTarget.src !== selectedLightbox.fallback) {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = selectedLightbox.fallback;
                    }
                  }}
                />
              )}
            </div>
            <div className="wb-lightbox-details">
              <span className="wb-lightbox-badge">{selectedLightbox.badge || selectedLightbox.subtitle}</span>
              <h3>{selectedLightbox.title}</h3>
              {selectedLightbox.desc && <p className="wb-lightbox-desc">{selectedLightbox.desc}</p>}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
