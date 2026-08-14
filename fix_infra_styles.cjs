const fs = require('fs');
let infra = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Infrastructure.jsx', 'utf8');
infra = infra.replace(/ style=\{\{ gridTemplateColumns: 'repeat\(2, 1fr\)', gap: '20px' \}\}/g, '');
infra = infra.replace(/ style=\{\{ gridTemplateColumns: 'repeat\(3, 1fr\)' \}\}/g, '');
fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Infrastructure.jsx', infra);
console.log('Fixed Infrastructure inline styles');
