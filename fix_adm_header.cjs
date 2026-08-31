const fs = require('fs');
let content = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Admission.jsx', 'utf8');

const oldHeader = <div className="admission-form-wrap" id="enquiry-form">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
                <h3 className="form-heading" style={{ margin: 0 }}>Admission Enquiry Form</h3>
                <a 
                  href="./documents%20website/AHWS_Admission_Application_Form.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary-ahws"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 16px', fontSize: '0.9rem', textDecoration: 'none' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Download PDF Application
                </a>
              </div>;

const newHeader = <div className="admission-form-wrap" id="enquiry-form">
              <h3 className="form-heading" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
                <span style={{ margin: 0 }}>Admission Enquiry Form</span>
                <a 
                  href="./documents%20website/AHWS_Admission_Application_Form.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary-ahws"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 16px', fontSize: '0.9rem', textDecoration: 'none', background: 'var(--white)', color: 'var(--primary)', border: 'none' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Download PDF Application
                </a>
              </h3>;

content = content.replace(oldHeader, newHeader);
fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Admission.jsx', content);
console.log('Fixed Header');
