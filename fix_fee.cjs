const fs = require('fs');
let fee = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/FeeStructure.jsx', 'utf8');
fee = fee.replace('"250/Subject"', '"? 250/Subject"');
fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/FeeStructure.jsx', fee);
console.log('Fixed FeeStructure');
