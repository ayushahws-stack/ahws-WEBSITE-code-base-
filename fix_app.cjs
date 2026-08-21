const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');
content = content.replace(/<Breadcrumbs \/>/g, '');
fs.writeFileSync('src/App.jsx', content);
