const fs = require('fs');
let content = fs.readFileSync('src/pages/Admission.jsx', 'utf8');

// The caption bar HTML we want to replace
const targetStr = <div className="video-caption-bar">
              <div className="caption-info">
                <h4>Age Criteria Guidelines 2026–27</h4>
                <p>Official video explanation by Principal Ms. Rachna Anand</p>
              </div>
              <a 
                href="https://ahws.edu.in/age-criteria-2026-27.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{ background: '#FFC700', color: '#002147', fontWeight: 800 }}
              >
                📄 Download Age Criteria PDF ↗
              </a>
            </div>;

const newCaptionBar = <div className="video-caption-bar">
              <div className="caption-info">
                <h4>Age Criteria Guidelines 2026–27</h4>
                <p>Official video explanation by Principal Ms. Rachna Anand</p>
              </div>
            </div>;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, newCaptionBar);
    
    // Now insert the button above the video
    const insertPoint = Watch <strong>Ms. Rachna Anand</strong> (Principal, AHWS) explain the age criteria, class eligibility guidelines, and admission rules for the 2026–27 academic session.
          </p>;
          
    const newButton = Watch <strong>Ms. Rachna Anand</strong> (Principal, AHWS) explain the age criteria, class eligibility guidelines, and admission rules for the 2026–27 academic session.
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
          </div>;
          
    content = content.replace(insertPoint, newButton);
    fs.writeFileSync('src/pages/Admission.jsx', content, 'utf8');
    console.log("Success");
} else {
    console.log("Could not find the target string.");
}
