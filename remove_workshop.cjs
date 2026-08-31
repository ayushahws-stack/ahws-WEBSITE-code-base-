const fs = require('fs');
const file = 'D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Gallery.jsx';
let content = fs.readFileSync(file, 'utf8');

// Find the object with title: 'Self Makeup Workshop' and remove it
content = content.replace(/\{\s*id:\s*27,\s*title:\s*'Self Makeup Workshop'[\s\S]*?\},/, '');

fs.writeFileSync(file, content);
console.log('Removed successfully.');
