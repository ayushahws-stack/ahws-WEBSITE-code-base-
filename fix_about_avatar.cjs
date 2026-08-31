const fs = require('fs');
let about = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/About.jsx', 'utf8');
about = about.replace(/<img src="\.\/images\/dr-rashmi\.jpg" alt="Dr\. Rashmi"[^>]*>/g, '<div className="counsellor-avatar">Dr. R</div>');
fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/About.jsx', about);
console.log('Fixed About.jsx avatar');
