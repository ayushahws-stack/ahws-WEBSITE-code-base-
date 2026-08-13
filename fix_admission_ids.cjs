const fs = require('fs');
let admission = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Admission.jsx', 'utf8');
admission = admission.replace('<section className="admission-process">', '<section className="admission-process" id="admission-process">');
fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Admission.jsx', admission);
console.log('Fixed Admission IDs');
