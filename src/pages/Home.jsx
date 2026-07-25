import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Home.css'
import Popup from '../components/Popup'


/* ── Feature Card with 3D Flip & Bullet Points ── */
function FeatureCard({ icon, title, description, points = [], bgGradient, delay }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className={`feature-flip-card ${isFlipped ? 'is-flipped' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="feature-flip-inner">
        {/* Front Face: Info */}
        <div className="feature-flip-front feature-card">
          <div className="feature-icon-wrap">
            {typeof icon === 'string' && (icon.startsWith('http') || icon.startsWith('./')) ? (
              <img src={icon} alt={title} className="feature-icon" loading="lazy" />
            ) : (
              <span className="feature-icon-emoji">{icon}</span>
            )}
          </div>
          <h3 className="feature-title">{title}</h3>
          <p className="feature-desc">{description}</p>
          <button
            className="flip-hint-feature flip-btn"
            onClick={() => setIsFlipped(true)}
            aria-label={`See key highlights for ${title}`}
          >
            📋 Click for Key Highlights
          </button>
        </div>

        {/* Back Face: Colorful Background + Bullet Points + White Text */}
        <div className="feature-flip-back" style={{ background: bgGradient || 'linear-gradient(135deg, #0b2545 0%, #134074 100%)' }}>
          <div>
            <h4 className="feature-back-title">{title}</h4>
            <ul className="feature-back-bullets">
              {points.map((pt, idx) => (
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

/* ── Desk Card ── */


/* ── Flippable Infrastructure Card ── */
function FlippableInfraCard({ item }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className={`infra-flip-card ${isFlipped ? 'is-flipped' : ''}`}>
      <div className="infra-flip-inner">
        {/* Front: Info Card */}
        <div className="infra-flip-front infra-card">
          <div className="infra-icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <button
            className="flip-hint flip-btn"
            onClick={() => setIsFlipped(true)}
            aria-label={`View photo of ${item.title}`}
          >
            📸 Click for Photo
          </button>
        </div>

        {/* Back: Photo */}
        <div className="infra-flip-back">
          <img src={item.image} alt={item.title} className="infra-back-img" loading="lazy" />
          <div className="infra-back-overlay">
            <h4>{item.title}</h4>
            <button
              className="flip-hint-back flip-btn"
              onClick={() => setIsFlipped(false)}
              aria-label={`View info about ${item.title}`}
            >
              ℹ️ Click for Info
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ✨ Flippable Bento Card ✨ */
function FlippableBentoCard({ item }) {
  const [isFlipped, setIsFlipped] = useState(false)

  // Support both a single image (item.image) and multiple images (item.images[])
  const images = item.images
    ? item.images
    : item.image
    ? [item.image]
    : []

  return (
    <div
      className={`bento-flip-card ${item.hero ? 'bento-hero' : ''} ${item.fullWidth ? 'bento-full' : ''} ${isFlipped ? 'is-flipped' : ''}`}
    >
      <div className="bento-flip-inner">
        {/* Front Face: Info */}
        <div className="bento-flip-front">
          <div className="bento-icon-wrap">
            <img src={item.icon} alt={item.title} loading="lazy" />
          </div>
          <div className="bento-content-wrap" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div className="bento-text">
              <h4 className="bento-title">{item.title}</h4>
              <p className="bento-tagline">{item.tagline}</p>
              {item.desc && <p className="bento-desc">{item.desc}</p>}
            </div>
            {images.length > 0 && (
              <button
                className="bento-flip-hint flip-btn"
                onClick={() => setIsFlipped(true)}
                aria-label={`View photo of ${item.title}`}
              >
                📸 Click for Photo{images.length > 1 ? ` (${images.length} photos)` : ''}
              </button>
            )}
          </div>
        </div>

        {/* Back Face: Image or Swiper Gallery */}
        <div className="bento-flip-back">
          {images.length > 1 ? (
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop
              className="bento-back-swiper"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <img src={src} alt={`${item.title} ${idx + 1}`} className="bento-back-img" loading="lazy" />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : images.length === 1 ? (
            <img src={images[0]} alt={item.title} className="bento-back-img" loading="lazy" />
          ) : null}
          <div className="bento-back-overlay">
            <h4>{item.title}</h4>
            <button
              className="flip-hint-back flip-btn"
              onClick={() => setIsFlipped(false)}
              aria-label={`View info about ${item.title}`}
            >
              ℹ️ Click for Info
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const dayTimeline = [
  {
    time: "01",
    title: "Warm Welcome",
    desc: "Children are greeted with smiles and hugs, ensuring a smooth, safe transition from home to school.",
    icon: "🤗"
  },
  {
    time: "02",
    title: "Blessings & Values",
    desc: "The day begins spiritually by seeking blessings from Maa Saraswati to instill gratitude.",
    icon: "🙏"
  },
  {
    time: "03",
    title: "Fruit Break",
    desc: "Prioritizing health and nutrition, children enjoy seasonal fruits to energize themselves.",
    icon: "🍎"
  },
  {
    time: "04",
    title: "Circle Time",
    desc: "A safe space for sharing thoughts, memories, and giggles, helping align their bodies and souls.",
    icon: "💬"
  },
  {
    time: "05",
    title: "Concept Introduction",
    desc: "Academics taught through hands-on MI tools, Interactive Panels, and our X-Wall.",
    icon: "💡"
  },
  {
    time: "06",
    title: "Nourish Room",
    desc: "Nutritious meals served in a community setting to teach healthy eating habits.",
    icon: "🥗"
  },
  {
    time: "07",
    title: "Learning by Exploring",
    desc: "Rotational activities like robotics, library, taekwondo, music, and yoga for holistic growth.",
    icon: "🎨"
  },
  {
    time: "08",
    title: "Smiling Farewells",
    desc: "The day concludes safely with transitions to school transport equipped with dedicated nannies.",
    icon: "🚌"
  }
];

export default function Home() {
  const [showPopup, setShowPopup] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const heroVideoRef = useRef(null)

  const toggleMute = () => {
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const togglePlay = () => {
    if (heroVideoRef.current) {
      if (isPlaying) {
        heroVideoRef.current.pause()
      } else {
        heroVideoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }


  const features = [
    {
      icon: '🖥️',
      title: 'Technology-Integrated',
      description: 'Smart classrooms, modern labs, and AI-integrated tools that prepare our students with essential digital age competencies.',
      bgGradient: 'linear-gradient(135deg, #0b2545 0%, #134074 100%)',
      points: [
        'Interactive 3D Smart Boards in Classrooms',
        'Robotics & AI Hands-On Kits',
        'X-Wall & Speak-O-Pen Language Tools',
        '360° Mobile App Real-Time Access'
      ]
    },
    {
      icon: '🌟',
      title: 'Learning Beyond Books',
      description: 'Equal emphasis on academics, sports, performing arts, leadership, life skills, and experiential learning.',
      bgGradient: 'linear-gradient(135deg, #004d40 0%, #00695c 100%)',
      points: [
        'Experiential & Outdoor Field Learning',
        'Theater, Dance, Music & Fine Arts',
        'Leadership & Personality Workshops',
        '9-Sport Athletic Infrastructure'
      ]
    },
    {
      icon: '🌍',
      title: 'Global Outlook, Indian Values',
      description: 'Nurturing responsible global citizens rooted in Indian ethics, culture, compassion, and respect.',
      bgGradient: 'linear-gradient(135deg, #4a148c 0%, #7b1fa2 100%)',
      points: [
        'Rooted in Rich Indian Ethics & Heritage',
        'Global Citizen Competencies & Mindset',
        'Character Building & Value Education',
        'Empathy, Integrity & Social Compassion'
      ]
    },
    {
      icon: '🎓',
      title: 'Playgroup to University',
      description: 'A seamless academic journey from early years to university pathways through Rishihood University — all part of our unified brand group.',
      bgGradient: 'linear-gradient(135deg, #880e4f 0%, #c2185b 100%)',
      points: [
        'Playgroup to Higher Education',
        'Unified Group: Bachpan, AHWS & Rishihood',
        'Continuous Guided Mentorship',
        'Smooth Higher Ed Transitions'
      ]
    },
  ]

  const uniquenessData = [
    {
      image: './WEBSITE GALLERY/other images/Sprout infographic.png',
      icon: './WEBSITE GALLERY/other images/Sprout logo.png',
      title: 'SPROUT Curriculum',
      tagline: 'Our exclusive in-house curriculum aligned with NEP-2020',
      desc: 'Our signature, in-house SPROUT curriculum integrates scholastic and co-scholastic pedagogies, life skills, value education, critical thinking, and future-ready abilities - aligned with NEP-2020, NCF-2023, and the NIPUN Bharat Mission.',
      hero: true,
    },
    {
      image: './WEBSITE GALLERY/other images/smart class room with 3D modes in the smart screen .jpeg',
      icon: './WEBSITE GALLERY/other images/AHWS logo.png',
      title: 'X-Wall & Speak-O-Pen',
      tagline: 'Immersive learning wall + smart pronunciation tools for language mastery.',
    },
    {
      image: './WEBSITE GALLERY/other images/smart class room with 3D modes in the smart screen .jpeg',
      icon: './WEBSITE GALLERY/other images/AHWS logo.png',
      title: 'AI-Powered Smart Classrooms',
      tagline: 'Interactive classrooms with immersive 3D learning experiences.',
    },
    {
      image: './WEBSITE GALLERY/other images/robotics lab.jpeg',
      icon: './WEBSITE GALLERY/other images/AHWS logo.png',
      title: 'AI and Robotics Lab',
      tagline: 'Hands-on STEM learning with real robotic kits and programming.',
    },
    {
      image: './WEBSITE GALLERY/other images/Technology_and_App_010.jpg',
      icon: './WEBSITE GALLERY/other images/360 app logo .png',
      title: '360° Mobile App',
      tagline: 'Complete Parent & School Automation',
      desc: 'Fully encompassing automation solution with role-customized portals for parents, teachers, and students. Monitor daily progress, attendance, academic reports, and school communications in real-time.',
      hero: true,
    },
    {
      image: './WEBSITE GALLERY/other images/kids Dance .jpg',
      icon: './WEBSITE GALLERY/other images/AHWS logo.png',
      title: 'Performing Arts',
      tagline: 'Creative & Artistic Excellence',
      desc: 'Theatre, Dance, Music & Art with professional coaches and stage exposure.',
    },
    {
      image: './images/Basketball 1.jpeg',
      icon: './WEBSITE GALLERY/other images/AHWS logo.png',
      title: '9-Sport Portfolio',
      tagline: 'Comprehensive Athletics Infrastructure',
      desc: 'Pickleball, Cricket, Football, Badminton, Tennis, Basketball, Volleyball, Taekwondo & Chess - dedicated coaching and professional athletic infrastructure for all-round physical excellence.',
      hero: true,
      fullWidth: true,
    },
  ]

  const infraItems = [
    { 
      title: 'Smart Classrooms', 
      icon: '💻', 
      desc: 'Interactive digital boards, ergonomic seating, and 3D digital learning tools.',
      image: './WEBSITE GALLERY/other images/smart class room with 3D modes in the smart screen .jpeg'
    },
    { 
      title: 'Science Laboratories', 
      icon: '🔬', 
      desc: 'Fully equipped Physics, Chemistry, Composite, and Biology labs with advanced safety features.',
      image: './WEBSITE GALLERY/other images/science lab.jpeg'
    },
    { 
      title: 'Robotics Lab', 
      icon: '🤖', 
      desc: 'An immersive setting equipped with distinct types of robotic kits, empowering students to harness the power of programming to design and build practical robots.',
      image: './WEBSITE GALLERY/other images/robotics lab.jpeg'
    },
    { 
      title: 'Library', 
      icon: '📚', 
      desc: 'A vast collection of academic books, journals, fiction, and digital resources.',
      image: './images/library 1.jpeg'
    },
    { 
      title: 'Sports', 
      icon: '🏅', 
      desc: 'Pickleball court, outdoor basketball court, outdoor football field, and cricket nets.',
      image: './images/Basketball 1.jpeg'
    },
    { 
      title: 'Art & Music Studios', 
      icon: '🎨', 
      desc: 'Dedicated spaces for painting, sculpture, classical music, and dance.',
      image: './WEBSITE GALLERY/other images/kid making art.jpeg'
    },
  ]

  const galleryImages = [
    { src: './WEBSITE GALLERY/other images/science lab.jpeg', alt: 'Science Lab', title: 'Science Laboratory' },
    { src: './images/Robotics 1.jpeg', alt: 'Robotics Lab', title: 'Robotics & AI Innovation Lab' },
    { src: './images/Green campus.png', alt: 'Green Campus', title: 'Lush Green Eco-Campus' },
    { src: './images/library 1.jpeg', alt: 'Library', title: 'Library & Resource Centre' },
    { src: './WEBSITE GALLERY/other images/smart class room with 3D modes in the smart screen .jpeg', alt: 'Classroom', title: 'Smart Classrooms' },
    { src: './images/Basketball 1.jpeg', alt: 'Basketball Court', title: 'Basketball & Sports Court' },
  ]

  return (
    <main className="home-page">
      <h1 className="sr-only">Academic Heights World School (AHWS) – Best CBSE School in Pitampura, Delhi</h1>
      {/* ── Hero Section ── */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-video-wrap">
            <video
              ref={heroVideoRef}
              className="hero-video"
              autoPlay
              muted={isMuted}
              loop
              playsInline
              poster="https://ahws.edu.in/images/hero-fallback.jpg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="https://ahws.edu.in/images/world-school.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="hero-video-controls-overlay">
              <button 
                type="button" 
                className="video-control-btn" 
                onClick={togglePlay}
                title={isPlaying ? "Pause Video" : "Play Video"}
              >
                {isPlaying ? '⏸️ Pause' : '▶️ Play'}
              </button>
              <button 
                type="button" 
                className="video-control-btn" 
                onClick={toggleMute}
                title={isMuted ? "Unmute Audio" : "Mute Audio"}
              >
                {isMuted ? '🔇 Unmute Sound' : '🔊 Sound On'}
              </button>
            </div>
          </div>

          <div className="hero-form-container">
          <div className="hero-form-card">
            <h3>Quick Enquiry</h3>
            <p>Connect with our admissions team instantly. (Parent/Guardian details)</p>
            <form onSubmit={(e) => { 
              e.preventDefault(); 
              const form = e.target;
              setIsSubmitting(true);
              setTimeout(() => {
                setShowPopup(true); 
                form.reset();
                setIsSubmitting(false);
              }, 1000);
            }}>
                <label htmlFor="hf-parentname" className="sr-only">Parent's Name</label>
                <input id="hf-parentname" type="text" placeholder="Parent's Name" className="hf-input" required />
                
                <div className="phone-input-group">
                  <label htmlFor="hf-phone" className="sr-only">Phone Number</label>
                  <span className="phone-prefix">+91</span>
                  <input id="hf-phone" type="tel" placeholder="Phone Number" className="hf-input phone-input" pattern="[0-9]{10}" maxLength={10} required />
                </div>
                
                <label htmlFor="hf-class" className="sr-only">Select Class</label>
                <select id="hf-class" className="hf-input" required defaultValue="">
                <option value="">Select Class</option>
                <option value="Nursery">Nursery</option>
                <option value="KG">Kindergarten</option>
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
                <option value="3">Class 3</option>
                <option value="4">Class 4</option>
                <option value="5">Class 5</option>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
              </select>
              <button type="submit" className="btn-primary-ahws hf-submit" disabled={isSubmitting}>
                {isSubmitting ? '⏳ Sending...' : 'Get a Call Back'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

      {/* ── Infrastructure / World-Class Facilities ── */}
      <section className="infra-section">
        <div className="container">
          <h2 className="section-title">World-Class Facilities</h2>
          <div className="divider-line" />
          <p className="infra-intro">
            At Academic Heights World School, we believe that the right environment is crucial for effective learning.
            Our campus is thoughtfully designed to provide students with state-of-the-art facilities that cater to
            academic, athletic, and artistic pursuits.
          </p>
          <div className="infra-grid">
            {infraItems.map((item, i) => (
              <FlippableInfraCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission, Vision & Values ── */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To provide a world-class education that empowers students with knowledge, skills, and values to excel academically and become compassionate, responsible global citizens who contribute meaningfully to society.</p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>To be the leading educational institution in India, recognized for nurturing innovative thinkers, ethical leaders, and lifelong learners through cutting-edge technology, holistic development, and academic excellence.</p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">💎</div>
              <h3>Our Values</h3>
              <p>Excellence, Integrity, Innovation, Compassion, and Collaboration — these core values guide every aspect of our educational approach, shaping students into well-rounded individuals ready for tomorrow's challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Empowering Section (Why Join AHWS) ── */}
      <section className="empowering-section">
        <div className="container">
          <h2 className="section-title">Why Join Academic Heights World School?</h2>
          <div className="divider-line" />
          <div className="features-grid">
            {features.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 150} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Uniqueness Defined ── */}
      <section className="uniqueness-section">
        <div className="container">
          <h2 className="section-title">UNIQUENESS DEFINED</h2>
          <p className="uniqueness-subtitle">What sets Academic Heights World School apart — 7 pillars of educational excellence.</p>
          <div className="divider-line" />
          <div className="bento-grid">
            {uniquenessData.map((item, i) => (
              <FlippableBentoCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 📸📸 A Day at AHWS Timeline 📸📸 */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">A Day at AHWS</h2>
            <div className="divider-line" />
            <p className="section-subtitle">Experience the holistic journey of a young learner from morning arrivals to smiling farewells.</p>
          </div>
          <div className="timeline-wrapper">
            {dayTimeline.map((item, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="timeline-icon">{item.icon}</div>
                  <div className="timeline-text">
                    <span className="timeline-time">Step {item.time}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📸📸 Campus Gallery 📸📸 */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Life at AHWS — Campus Gallery</h2>
          <div className="divider-line" />
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="gallery-swiper"
          >
            {galleryImages.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="gallery-item">
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <div className="gallery-overlay">
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Popup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)}
        title="We're Thrilled to Connect!"
        message="Your enquiry has been successfully submitted. Our admissions counselors will be in touch with you very soon to answer all your questions."
        buttonText="Done"
      />
    </main>
  )
}
