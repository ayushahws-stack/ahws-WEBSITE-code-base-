import { useState } from 'react'
import './ContactUs.css'
import Popup from '../components/Popup'
import PageBanner from '../components/PageBanner'

export default function ContactUs() {
  const [form, setForm] = useState({ first_name: '', email: '', subject: '', phone: '', message: '' })
  const [status, setStatus] = useState('')
  const [showPopup, setShowPopup] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('')
      setShowPopup(true)
      setForm({ first_name: '', email: '', subject: '', phone: '', message: '' })
    }, 1200)
  }

  return (
    <main className="contact-page">
      <PageBanner title="Contact Us" image="./WEBSITE GALLERY/other images/AHWS.png" />

      {/* Contact Info + Form */}
      <section className="contact-section" id="contact-details">
        <div className="container">
          <div className="contact-grid">
            {/* Info */}
            <div className="contact-info">
              <h2 className="info-heading">Get In Touch</h2>
              <p className="info-intro">
                We'd love to hear from you! Whether you have a question about admissions, curriculum, or anything else, our team is ready to answer all your questions.
              </p>
              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon">📍</div>
                  <div>
                    <h4>Address</h4>
                    <a href="https://maps.app.goo.gl/8XoVEYAENZAcG6ro7" target="_blank" rel="noopener noreferrer">
                      SD - QD Block, Near TV Tower, Opposite Metro Pillar No: 319, Pitampura, Delhi - 110034
                    </a>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon">📞</div>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:8860455000">8860455000</a>
                    <a href="tel:01149402170">011-49402170</a>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon">✉</div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:info@ahws.edu.in">info@ahws.edu.in</a>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon">🌐</div>
                  <div>
                    <h4>Follow Us</h4>
                    <div className="contact-social">
                      <a href="https://www.facebook.com/profile.php?id=61555732875904" target="_blank" rel="noopener noreferrer">Facebook</a>
                      <a href="https://www.instagram.com/ahws.official/" target="_blank" rel="noopener noreferrer">Instagram</a>
                      <a href="https://www.youtube.com/@AcademicHeightsWorldSchool" target="_blank" rel="noopener noreferrer">YouTube</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrap">
              <div className="form-card">
                <h3>Questions? <br /><em>Feel free to contact us.</em></h3>
                {status === 'sending' && (
                  <div className="form-success-msg" style={{ background: 'rgba(255,199,0,0.1)', color: '#b38b00', borderColor: 'var(--secondary)' }}>⏳ Sending your message...</div>
                )}
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="cf-row">
                    <div style={{width: '100%'}}>
                      <label htmlFor="contact-firstname" className="sr-only">First Name</label>
                      <input
                        id="contact-firstname"
                        type="text" name="first_name" value={form.first_name}
                        onChange={handleChange} placeholder="First Name" required
                        className="cf-input"
                      />
                    </div>
                    <div style={{width: '100%'}}>
                      <label htmlFor="contact-email" className="sr-only">Your Email</label>
                      <input
                        id="contact-email"
                        type="email" name="email" value={form.email}
                        onChange={handleChange} placeholder="Your Email" required
                        className="cf-input"
                      />
                    </div>
                  </div>
                  <div className="cf-row">
                    <div style={{width: '100%'}}>
                      <label htmlFor="contact-subject" className="sr-only">Subject</label>
                      <input
                        id="contact-subject"
                        type="text" name="subject" value={form.subject}
                        onChange={handleChange} placeholder="Subject" required
                        className="cf-input"
                      />
                    </div>
                    <div style={{width: '100%'}}>
                      <label htmlFor="contact-phone" className="sr-only">Contact No.</label>
                      <div className="phone-input-group">
                        <span className="phone-prefix">+91</span>
                        <input
                          id="contact-phone"
                          type="tel" name="phone" value={form.phone}
                          onChange={handleChange} placeholder="0000000000" required
                          pattern="[0-9]{10}" maxLength={10}
                          className="cf-input phone-input"
                        />
                      </div>
                    </div>
                  </div>
                  <label htmlFor="contact-message" className="sr-only">Your Message</label>
                  <textarea
                    id="contact-message"
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="Your Message" required rows={5}
                    className="cf-input cf-textarea"
                  />
                  <button type="submit" className="btn-primary-ahws cf-submit" disabled={status === 'sending'}>
                    {status === 'sending' ? '⏳ Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="map-section" id="location-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13999.345345667478!2d77.146475!3d28.694542!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03cd66ffffff%3A0x57011d15466577a3!2sAcademic%20Heights%20World%20School%20(AHWS)%20-%20Best%20School%20in%20Pitampura%20I%20Best%20CBSE%20School%20in%20Pitampura%20I%20Top%20School%20in%20Pitampura!5e0!3m2!1sen!2sin!4v1765368526481!5m2!1sen!2sin"
          className="contact-map"
          height="450"
          style={{ border: 0, width: '100%', display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="AHWS Location"
        />
      </section>

      <Popup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)}
        title="Message Sent Successfully!"
        message="Thank you for getting in touch with us. We have received your message and will reply to your email shortly."
        buttonText="Done"
      />
    </main>
  )
}
