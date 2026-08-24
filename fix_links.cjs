const fs = require('fs');
let content = fs.readFileSync('src/pages/WeTeachLife.jsx', 'utf8');

// replace <a href="#/contact"> with <Link to="/contact">
content = content.replace(/<a href="#\/contact"([^>]*)>(.*?)<\/a>/g, '<Link to="/contact"></Link>');
content = content.replace(/<a href="#\/admission"([^>]*)>(.*?)<\/a>/g, '<Link to="/admission"></Link>');

fs.writeFileSync('src/pages/WeTeachLife.jsx', content);
