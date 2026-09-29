import { useState, useEffect } from 'react'
import './FloatingEnquiry.css'

export default function FloatingEnquiry() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') setIsOpen(false) }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  // Auto-popup disabled - only opens when user clicks the floating button

    const handleSubmit = (e) => {
    e.preventDefault()
    
    const formData = new FormData(e.target)
    const parentName = formData.get('parentName')
    const phone = formData.get('phone')
    const email = formData.get('email')
    const studentClass = formData.get('studentClass')

    let msg = "Hello Academic Heights World School, I would like to inquire about admission for my child.\n\n*Enquiry Details:*\nParent Name: $parentName\nPhone: $phone\nClass: $studentClass"
    if (email) {
      msg += "\nEmail: $email"
    }

    const whatsappUrl = "https://wa.me/918860455000?text=${encodeURIComponent(msg)}"
    window.open(whatsappUrl, '_blank')

    setSubmitted(true)
    e.target.reset()
    setTimeout(() => {
      setSubmitted(false)
      setIsOpen(false)
    }, 2500)
  }

  return (
    <>
      {/* Floating Button */}
      <button
        className={`floating-enquiry-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Admission Enquiry"
      >
        {isOpen ? '✕' : '🎓'}
        {!isOpen && <span className="floating-label">Enquire Now</span>}
      </button>

      {/* Backdrop */}
      {isOpen && <div className="floating-backdrop" onClick={() => setIsOpen(false)} />}

      {/* Form Panel */}
      <div className={`floating-panel ${isOpen ? 'open' : ''}`}>
        <div className="floating-panel-header">
          <h3>Quick Admission Enquiry</h3>
          <p>Fill in your details and we'll get back to you within 24 hours.</p>
        </div>

        {submitted ? (
          <div className="floating-success">
            <span className="success-icon">✅</span>
            <h4>Thank You!</h4>
            <p>We'll contact you shortly.</p>
          </div>
        ) : (
                    <form onSubmit={handleSubmit} className="floating-form">
            <input type="text" name="parentName" placeholder="Parent's Name" aria-label="Parent's Name" required className="fl-input" />
            <input type="tel" name="phone" placeholder="Phone Number" aria-label="Phone Number" required pattern="[0-9]{10}" maxLength={10} className="fl-input" />
            <input type="email" name="email" placeholder="Email Address" aria-label="Email Address" className="fl-input" />
            <select name="studentClass" required defaultValue="" className="fl-input" aria-label="Select Class">
              <option value="">Select Class</option>
              <option value="Nursery">Nursery</option>
              <option value="KG">Kindergarten</option>
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={Class }>Class {i + 1}</option>
              ))}
            </select>
            <button type="submit" className="fl-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Submit on WhatsApp'}
            </button>
          </form>
        )}

        <div className="floating-panel-footer">
          <p>Or call us: <a href="tel:8860455000">8860455000</a></p>
        </div>
      </div>
    </>
  )
}

