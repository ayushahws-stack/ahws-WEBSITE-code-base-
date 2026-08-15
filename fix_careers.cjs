const fs = require('fs');
let careers = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Careers.jsx', 'utf8');
careers = careers.replace('className="btn btn-primary submit-btn"', 'className="btn-primary-ahws submit-btn"');
fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Careers.jsx', careers);
console.log('Fixed Careers submit button');
