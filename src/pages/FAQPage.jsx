import PageBanner from '../components/PageBanner'
import FAQ from '../components/FAQ'
import './FAQPage.css'

export default function FAQPage() {
  return (
    <main className="faq-page">
      <PageBanner 
        title="Frequently Asked Questions" 
        image="./WEBSITE GALLERY/other images/AHWS.png"
      />

      <section className="faq-page-section">
        <div className="container">
          <div className="faq-page-content">
            <h2 className="section-title">Parents' Most Asked Questions</h2>
            <div className="divider-line" />
            <p className="faq-intro">
              We understand that choosing the right school is a significant decision. Here are answers to the most common questions from parents about admissions, curriculum, safety, fees, and school life at Academic Heights World School.
            </p>
            <FAQ />
            <div className="faq-cta-box">
              <h3>Still Have Questions?</h3>
              <p>Our admissions team is here to help. Reach out to us for any additional queries.</p>
              <div className="faq-cta-buttons">
                <a href="/ahws_WEBSITE-/contact" className="btn-primary-ahws">Contact Us</a>
                <a href="tel:8860455000" className="btn-secondary-ahws">📞 Call: 8860 455 000</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
