const fs = require('fs');
let css = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/index.css', 'utf8');
css += '\n.table-responsive { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }\n';
fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/index.css', css);
console.log('Fixed table-responsive globally');
