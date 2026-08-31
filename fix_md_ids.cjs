const fs = require('fs');
let md = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/MandatoryDisclosure.jsx', 'utf8');
md = md.replace('<section className="disclosure-section">', '<section className="disclosure-section" id="disclosure">');
fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/MandatoryDisclosure.jsx', md);
console.log('Fixed MandatoryDisclosure IDs');
