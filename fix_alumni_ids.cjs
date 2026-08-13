const fs = require('fs');
let alumni = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Alumni.jsx', 'utf8');
alumni = alumni.replace('<section className="alumni-intro-section">', '<section className="alumni-intro-section" id="alumni">');
fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Alumni.jsx', alumni);
console.log('Fixed Alumni IDs');
