const fs = require('fs');
let content = fs.readFileSync('src/pages/Admission.jsx', 'utf8');

// Import FAQ
content = content.replace(
  "import PageBanner from '../components/PageBanner'",
  "import PageBanner from '../components/PageBanner'\nimport FAQ from '../components/FAQ'"
);

// Add the section
const faqSection = 
      {/* FAQ Section */}
      <section className="admission-faq" id="faq" style={{ padding: '60px 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="divider-line" />
          <FAQ />
        </div>
      </section>
;

content = content.replace(
        <section className="admission-links" id="documents">,
  faqSection + \n      <section className="admission-links" id="documents">
);

fs.writeFileSync('src/pages/Admission.jsx', content);
