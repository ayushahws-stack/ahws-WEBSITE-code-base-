import { useState } from 'react';
import './CampusVisitCTA.css';

export default function CampusVisitCTA() {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const parentName = formData.get('parentName');
    const phone = formData.get('phone');
    const childGrade = formData.get('childGrade');
    const visitDate = formData.get('visitDate');

    const msg = `Hello Academic Heights World School, I would like to book a campus visit.\n\n*Booking Details:*\nParent Name: ${parentName}\nPhone: ${phone}\nChild's Grade: ${childGrade}\nPreferred Date: ${visitDate}`;
    
    const whatsappUrl = `https://wa.me/918860455000?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');

    setShowModal(false);
    setIsSubmitting(false);
    e.target.reset();
  };

  return (
    <>
      <section className="campus-visit-section">
        <div className="container cv-container">
          <div className="cv-content">
            <h2>Experience AHWS Firsthand</h2>
            <p>Walk through our smart classrooms, science labs, and world-class sports arena. See where your child will learn, explore, and thrive.</p>
            <button className="btn-primary-cv" onClick={() => setShowModal(true)}>
              📅 Book a Campus Visit
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="cv-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="cv-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cv-modal-close" onClick={() => setShowModal(false)}>✕</button>
            <div className="cv-modal-header">
              <h3>Schedule Your Tour</h3>
              <p>Pick a date to explore our campus and meet our team.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="cv-form">
              <div className="cv-form-field">
                <label>Parent's Name <span className="req">*</span></label>
                <input type="text" name="parentName" placeholder="Enter your name" required />
              </div>
              <div className="cv-form-field">
                <label>Phone Number <span className="req">*</span></label>
                <input type="tel" name="phone" pattern="[0-9]{10}" maxLength={10} placeholder="10-digit mobile number" required />
              </div>
              <div className="cv-form-field">
                <label>Child's Grade/Class <span className="req">*</span></label>
                <select name="childGrade" required defaultValue="">
                  <option value="" disabled>Select Grade</option>
                  <option value="Nursery">Nursery</option>
                  <option value="KG">Kindergarten</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={`Class ${i + 1}`}>Class {i + 1}</option>
                  ))}
                </select>
              </div>
              <div className="cv-form-field">
                <label>Preferred Visit Date <span className="req">*</span></label>
                <input type="date" name="visitDate" required min={new Date().toISOString().split('T')[0]} />
              </div>
              
              <button type="submit" className="cv-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Processing...' : 'Confirm via WhatsApp'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
