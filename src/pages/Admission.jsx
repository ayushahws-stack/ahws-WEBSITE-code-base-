import { useState } from 'react'
import './Admission.css'
import Popup from '../components/Popup'
import PageBanner from '../components/PageBanner'

export default function Admission() {
  const [form, setForm] = useState({
    parentname: '', class: '', city: '', studentname: '', phone: '', email: '',
    dob: '', gender: '', category: '', prevschool: '',
    fathername: '', mothername: '', fatherjob: '', motherjob: '',
    address: '', income: '', source: ''
  })
  const [status, setStatus] = useState('')
  const [showPopup, setShowPopup] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(() => {
      setStatus('')
      setShowPopup(true)
      setForm({ parentname: '', class: '', city: '', studentname: '', phone: '', email: '',
        dob: '', gender: '', category: '', prevschool: '',
        fathername: '', mothername: '', fatherjob: '', motherjob: '',
        address: '', income: '', source: '' })
    }, 1200)
  }

    const steps = [
    { num: '01', title: 'Online Inquiry', desc: 'Fill the online inquiry form on our website to begin the admission journey at AHWS.', link: '#enquiry-form', linkText: 'Fill Enquiry Form' },
    { num: '02', title: 'Campus Visit', desc: 'Experience our campus, facilities, and vibrant learning environment firsthand.', link: '/#/gallery', linkText: 'Explore Campus' },
    { 
      num: '03', 
      title: 'Application', 
      desc: 'Complete the application with accurate information and required documents.',
      multiLink: [
        { link: './documents website/AHWS_Admission_Application_Form.pdf', text: 'PDF Form', download: true },
        { link: './documents website/AHWS_Admission_Application_Form.html', text: 'Online Form', download: false, target: '_blank' }
      ]
    },
    { num: '04', title: 'Interactive Session', desc: 'Connect with parents in an interactive session to understand your child better.' },
    { num: '05', title: 'Decision', desc: 'We will promptly communicate our decision via email or phone.' },
    { num: '06', title: 'Enrollment', desc: 'Confirm acceptance and complete enrollment to secure your child\'s place at AHWS.' },
  ]

  return (
    <main className="admission-page">
      <PageBanner title="Admission Process" image="./WEBSITE GALLERY/other images/Kids walking to school .png" />

      {/* Enquiry + Video */}
      <section className="admission-main" id="admission-journey">
        <div className="container">
          <h2 className="section-title">Begin Your AHWS Admission Journey</h2>
          <div className="divider-line" />
          <div className="admission-grid">


            {/* Form */}
            <div className="admission-form-wrap" id="enquiry-form">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
                <h3 className="form-heading" style={{ margin: 0 }}>Admission Enquiry Form</h3>
                <a 
                  href="./documents website/AHWS_Admission_Application_Form.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary-ahws"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 16px', fontSize: '0.9rem', textDecoration: 'none' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Download PDF Application
                </a>
              </div>
              {status && <div className="form-success">{status}</div>}
              <form onSubmit={handleSubmit} className="enq-form">
                
                {/* Section 1: Student Details */}
                <div className="form-section">
                  <h4>1. Student Details</h4>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="adm-studentname">Student's Full Name *</label>
                      <input
                        id="adm-studentname"
                        type="text" name="studentname" value={form.studentname}
                        onChange={handleChange} placeholder="Full Name" required
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="adm-dob">Date of Birth *</label>
                      <input
                        id="adm-dob"
                        type="date" name="dob" value={form.dob || ''}
                        onChange={handleChange} required
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="adm-gender">Gender *</label>
                      <select id="adm-gender" name="gender" value={form.gender || ''} onChange={handleChange} required className="form-input">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="adm-class">Select Class *</label>
                      <select id="adm-class" name="class" value={form.class} onChange={handleChange} required className="form-input">
                        <option value="">Select Class</option>
                        {['Nursery','Kindergarten (KG)','Class 1','Class 2','Class 3','Class 4','Class 5','Class 6','Class 7','Class 8','Class 9','Class 10','Class 11','Class 12'].map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="adm-category">Category *</label>
                      <select id="adm-category" name="category" value={form.category || ''} onChange={handleChange} required className="form-input">
                        <option value="">Select Category</option>
                        <option value="General">General</option>
                        <option value="SC">SC</option>
                        <option value="ST">ST</option>
                        <option value="OBC">OBC</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="adm-prevschool">Previous School &amp; Class *</label>
                      <input
                        id="adm-prevschool"
                        type="text" name="prevschool" value={form.prevschool || ''}
                        onChange={handleChange} placeholder="e.g. ABC School, Class 2" required
                        className="form-input"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Parent Details */}
                <div className="form-section">
                  <h4>2. Parents / Guardian Details</h4>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="adm-fathername">Father's Name *</label>
                      <input
                        id="adm-fathername"
                        type="text" name="fathername" value={form.fathername || ''}
                        onChange={handleChange} placeholder="Father's Full Name" required
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="adm-mothername">Mother's Name *</label>
                      <input
                        id="adm-mothername"
                        type="text" name="mothername" value={form.mothername || ''}
                        onChange={handleChange} placeholder="Mother's Full Name" required
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="adm-fatherjob">Father's Designation / Office Address</label>
                      <input
                        id="adm-fatherjob"
                        type="text" name="fatherjob" value={form.fatherjob || ''}
                        onChange={handleChange} placeholder="Designation &amp; Address"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="adm-motherjob">Mother's Designation / Office Address</label>
                      <input
                        id="adm-motherjob"
                        type="text" name="motherjob" value={form.motherjob || ''}
                        onChange={handleChange} placeholder="Designation &amp; Address"
                        className="form-input"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 3: Contact & Income */}
                <div className="form-section">
                  <h4>3. Contact &amp; Income Details</h4>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="adm-phone">Mobile Number *</label>
                      <div className="phone-input-group">
                        <span className="phone-prefix">+91</span>
                        <input
                          id="adm-phone"
                          type="tel" name="phone" value={form.phone}
                          onChange={handleChange} placeholder="Phone Number" required
                          pattern="[0-9]{10}" maxLength={10}
                          className="form-input phone-input"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="adm-email">Email Address *</label>
                      <input
                        id="adm-email"
                        type="email" name="email" value={form.email}
                        onChange={handleChange} placeholder="Email Address" required
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="adm-address">Residential Address *</label>
                    <textarea
                      id="adm-address"
                      name="address" value={form.address || ''}
                      onChange={handleChange} placeholder="Complete Residential Address" required
                      rows="2" className="form-input"
                    ></textarea>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="adm-income">Gross Family Income Per Annum</label>
                      <input
                        id="adm-income"
                        type="text" name="income" value={form.income || ''}
                        onChange={handleChange} placeholder="Annual Family Income"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="adm-source">How did you hear about AHWS? *</label>
                      <select id="adm-source" name="source" value={form.source || ''} onChange={handleChange} required className="form-input">
                        <option value="">Select Option</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Newspaper">Newspaper</option>
                        <option value="Friends/Family">Friends / Family</option>
                        <option value="Flyers/Banners">Flyers / Banners</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="submit-btn-wrapper">
                  <button type="submit" className="btn-primary-ahws submit-btn" disabled={status === 'Sending...'}>
                    {status === 'Sending...' ? '⏳ Sending...' : 'Submit Admission Enquiry'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Age Criteria & Principal Video Section ── */}
      <section className="admission-video-section bg-light" id="age-criteria">
          <div className="container">
            <h2 className="section-title">🎥 Age Criteria Explained by Principal Ma'am</h2>
            <div className="divider-line" />
            <p className="process-intro" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 36px' }}>
              Watch <strong>Ms. Rachna Anand</strong> (Principal, AHWS) explain the age criteria, class eligibility guidelines, and admission rules for the 2026–27 academic session.
            </p>

            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <a 
                href="https://ahws.edu.in/age-criteria-2026-27.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary-ahws"
                style={{ background: '#FFC700', color: '#002147', fontWeight: 800, padding: '12px 24px', borderRadius: '50px', textDecoration: 'none', display: 'inline-block' }}
              >
                📄 Download Age Criteria PDF ↗
              </a>
            </div>

            <div className="admission-video-wrap">
            <div className="video-responsive-embed">
              <iframe
                src="https://www.youtube.com/embed/y9Ew2QONNPQ"
                title="AHWS Principal Explaining Age Criteria"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-caption-bar">
              <div className="caption-info">
                <h4>Age Criteria Guidelines 2026–27</h4>
                <p>Official video explanation by Principal Ms. Rachna Anand</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="admission-process">
        <div className="container">
          <h2 className="section-title">Admission Process</h2>
          <div className="divider-line" />
          <p className="process-intro">
            We are deeply honoured that you are considering AHWS as the best CBSE school in Delhi for your child's education.
            Our admission process is designed to identify students who align with our values, contribute to fostering a diverse
            and inclusive community, and possess a strong enthusiasm for learning.
          </p>
          <div className="steps-grid">
            {steps.map((step, i) => (
              <div key={i} className="step-card">
                <div className="step-num">{step.num}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
                {step.link && (
                  <a href={step.link} className="step-link" style={{ marginTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: '#1B2A4A', fontWeight: '700', textDecoration: 'none' }}>
                    {step.linkText} <span style={{ fontSize: '1.2rem', color: '#FFC700' }}>&rarr;</span>
                  </a>
                )}
                {step.multiLink && (
                  <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    {step.multiLink.map((ml, idx) => (
                      <a key={idx} href={ml.link} download={ml.download} target={ml.target} className="step-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: '#1B2A4A', fontWeight: '700', textDecoration: 'none' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        {ml.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>      {/* Safe Transport */}
      <section className="admission-transport" id="transport" style={{ padding: '60px 0', backgroundColor: 'var(--ahws-light-bg)' }}>
        <div className="container">
          <h2 className="section-title">Safe & Secure Transport</h2>
          <div className="divider-line" />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginTop: '40px'
          }}>
            <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '12px', boxShadow: 'var(--shadow)', borderTop: '4px solid var(--ahws-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                <span style={{ fontSize: '1.5rem' }}>🚌</span>
                <h3 style={{ color: 'var(--ahws-primary)', margin: 0 }}>Bus Routes & Coverage</h3>
              </div>
              <p style={{ color: 'var(--ahws-muted)', lineHeight: '1.6' }}>We provide comfortable transport covering major residential areas around North West Delhi. <em>(Specific routes and timings will be updated soon).</em></p>
            </div>
            
            <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '12px', boxShadow: 'var(--shadow)', borderTop: '4px solid var(--ahws-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <span style={{ fontSize: '1.5rem' }}>🛡️</span>
                  <h3 style={{ color: 'var(--ahws-primary)', margin: 0 }}>Safety & GPS Monitored</h3>
                </div>
              <p style={{ color: 'var(--ahws-muted)', lineHeight: '1.6' }}>For complete security, all our school buses are equipped with GPS tracking which is strictly monitored in real-time by our dedicated school safety staff and administration.</p>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '12px', boxShadow: 'var(--shadow)', borderTop: '4px solid var(--ahws-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                <span style={{ fontSize: '1.5rem' }}>💳</span>
                <h3 style={{ color: 'var(--ahws-primary)', margin: 0 }}>Transport Fees</h3>
              </div>
              <p style={{ color: 'var(--ahws-muted)', lineHeight: '1.6' }}>Transport fees vary based on distance and route slabs. Please reach out to our admission desk or reception for the exact fee structure for your location.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Links */}
      <section className="admission-links" id="documents">
        <div className="container">
          <h2 className="section-title">Important Documents</h2>
          <div className="divider-line" />
          <div className="docs-grid">
            {[
              { label: 'Official Offline Enquiry Form (PDF)', href: './documents%20website/Enquiry%20form%20-AHWS%20FINAL.pdf' },
              { label: 'Admission Draw List 2026-27', href: 'https://ahws.edu.in/ADMISSION-DRAW-LIST-17.01.25.pdf' },
              { label: 'Age Criteria 2026-27', href: 'https://ahws.edu.in/age-criteria-2026-27.pdf' },
              { label: 'List of Registered Applicants 2026-27', href: 'https://ahws.edu.in/list-of-registered-applicants-2026-27.pdf' },
              { label: 'A-9 Vendors List', href: 'https://ahws.edu.in/images/A-9-vendors-list.pdf' },
              { label: 'List of Book Vendors 2026', href: 'https://ahws.edu.in/pdfs/book-vendors-list-2026.pdf' },
            ].map((doc, i) => (
              <a key={i} href={doc.href} target="_blank" rel="noopener noreferrer" className="doc-card">
                <span className="doc-icon">📄</span>
                <span className="doc-label">{doc.label}</span>
                <span className="doc-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Popup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)}
        title="Application Received"
        message="Thank you! We have successfully received your admission enquiry. A counselor will reach out to guide you through the next steps."
        buttonText="Done"
      />
    </main>
  )
}





