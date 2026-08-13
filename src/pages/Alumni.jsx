import { useState } from 'react'
import './Alumni.css'
import PageBanner from '../components/PageBanner'
import Popup from '../components/Popup'

const alumniData = [
  { name: 'Rahul Sharma', batch: '2020', achievement: 'Currently pursuing B.Tech at IIT Delhi. Secured AIR 245 in JEE Advanced.', emoji: '🎓' },
  { name: 'Priya Gupta', batch: '2021', achievement: 'NEET 2022 topper from AHWS. Now studying MBBS at AIIMS Delhi.', emoji: '⚕️' },
  { name: 'Arjun Verma', batch: '2019', achievement: 'National-level chess champion and currently pursuing Computer Science.', emoji: '♟️' },
  { name: 'Sneha Kapoor', batch: '2022', achievement: 'Selected for National Science Olympiad and secured merit scholarship.', emoji: '🔬' },
  { name: 'Vikram Singh', batch: '2018', achievement: 'Represented India in International Robotics Competition 2023.', emoji: '🤖' },
  { name: 'Anjali Mehta', batch: '2020', achievement: 'State-level athlete and currently pursuing BBA at Shri Ram College.', emoji: '🏃‍♀️' },
]

export default function Alumni() {
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    passingYear: '',
    schoolName: '',
    occupation: '',
    currentAddress: '',
  })
  const [status, setStatus] = useState('')
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    setTimeout(() => {
      setStatus('')
      setShowSuccessPopup(true)
      setForm({
        fullName: '',
        contactNumber: '',
        email: '',
        passingYear: '',
        schoolName: '',
        occupation: '',
        currentAddress: '',
      })
      setShowForm(false)
    }, 1200)
  }

  const years = Array.from({ length: 2026 - 2005 + 1 }, (_, i) => 2026 - i)

  return (
    <main className="alumni-page">
      <PageBanner title="Alumni" image="./WEBSITE GALLERY/Alumni Meet 2024/WhatsApp Image 2024-11-12 at 9.04.33 AM (1).jpeg" />

      {/* Intro Section */}
      <section className="alumni-intro-section" id="alumni">
        <div className="container">
          <h2 className="section-title">Our Proud Alumni</h2>
          <div className="divider-line" />
          <p className="alumni-intro">
            Our alumni are our greatest pride. They carry the AHWS spirit of excellence wherever they go,
            making us proud with their achievements in academics, sports, arts, and beyond. Here are some of
            our distinguished alumni who continue to inspire current students.
          </p>
        </div>
      </section>

      {/* CTA & Join Network Form Section */}
      <section className="alumni-top-cta-section">
        <div className="container">
          <div className="alumni-cta-card centered-cta">
            <div className="alumni-cta-icon">🎓</div>
            <h2>Are You an AHWS Alumni?</h2>
            <p>Connect with us and share your story. Join our alumni network and help inspire the next generation of AHWS students.</p>
            <button 
              className="btn-secondary-ahws"
              onClick={() => {
                const nextState = !showForm
                setShowForm(nextState)
                if (nextState) {
                  setTimeout(() => {
                    document.getElementById('alumni-reg-form')?.scrollIntoView({ behavior: 'smooth' })
                  }, 100)
                }
              }}
            >
              {showForm ? 'Close Form ✕' : 'Join The Network'}
            </button>

            {/* Expandable Form */}
            {showForm && (
              <div id="alumni-reg-form" className="alumni-network-form-wrapper fade-in-up">
                <h3 className="alumni-form-title">Join The Alumni Network</h3>
                {status && <div className="form-status">{status}</div>}

                <form onSubmit={handleSubmit} className="alumni-network-form">
                  <div className="alumni-form-grid">
                    
                    {/* Full Name */}
                    <div className="alumni-form-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                        className="alumni-input"
                      />
                    </div>

                    {/* Contact Number */}
                    <div className="alumni-form-group">
                      <label htmlFor="contactNumber">Contact Number *</label>
                      <input
                        id="contactNumber"
                        type="tel"
                        name="contactNumber"
                        value={form.contactNumber}
                        onChange={handleChange}
                        placeholder="0000000000"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        required
                        className="alumni-input"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="alumni-form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        required
                        className="alumni-input"
                      />
                    </div>

                    {/* Passing Year */}
                    <div className="alumni-form-group">
                      <label htmlFor="passingYear">Passing Year *</label>
                      <select
                        id="passingYear"
                        name="passingYear"
                        value={form.passingYear}
                        onChange={handleChange}
                        required
                        className="alumni-input"
                      >
                        <option value="">Select Year</option>
                        {years.map((y) => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                    </div>

                    {/* School Name */}
                    <div className="alumni-form-group">
                      <label htmlFor="schoolName">School Name *</label>
                      <input
                        id="schoolName"
                        type="text"
                        name="schoolName"
                        value={form.schoolName}
                        onChange={handleChange}
                        placeholder="Enter your school name"
                        required
                        className="alumni-input"
                      />
                    </div>

                    {/* Occupation */}
                    <div className="alumni-form-group">
                      <label htmlFor="occupation">Occupation *</label>
                      <input
                        id="occupation"
                        type="text"
                        name="occupation"
                        value={form.occupation}
                        onChange={handleChange}
                        placeholder="Enter your occupation"
                        required
                        className="alumni-input"
                      />
                    </div>

                  </div>

                  {/* Current Address */}
                  <div className="alumni-form-group full-width">
                    <label htmlFor="currentAddress">Current Address *</label>
                    <textarea
                      id="currentAddress"
                      name="currentAddress"
                      value={form.currentAddress}
                      onChange={handleChange}
                      placeholder="Full address with city, state & PIN"
                      rows="3"
                      required
                      className="alumni-input"
                    />
                  </div>

                  <div className="alumni-submit-wrapper">
                    <button type="submit" className="alumni-submit-btn" disabled={status === 'Submitting...'}>
                      {status === 'Submitting...' ? '⏳ Submitting...' : 'Submit Registration'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Alumni Grid */}
      <section className="alumni-grid-section">
        <div className="container">
          <div className="alumni-grid">
            {alumniData.map((alum, i) => (
              <div key={i} className="alumni-card">
                <div className="alumni-avatar">{alum.emoji}</div>
                <h3 className="alumni-name">{alum.name}</h3>
                <p className="alumni-batch">Batch of {alum.batch}</p>
                <p className="alumni-achievement">{alum.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <Popup
        isOpen={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        title="Registration Successful!"
        message="Thank you for joining the AHWS Alumni Network. We are proud of your journey and will stay in touch for upcoming alumni meets and events!"
        buttonText="Close"
      />
    </main>
  )
}
