const fs = require('fs');
let admission = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Admission.jsx', 'utf8');
admission = admission.replace(/documents website/g, 'documents%20website');
fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Admission.jsx', admission);
console.log('Fixed spaces in Admission.jsx');
