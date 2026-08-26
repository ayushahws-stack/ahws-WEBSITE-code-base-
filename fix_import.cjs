const fs = require('fs');
let content = fs.readFileSync('src/pages/WeTeachLife.jsx', 'utf8');

if (!content.includes("import { Link } from 'react-router-dom'")) {
    content = "import { Link } from 'react-router-dom';\n" + content;
    fs.writeFileSync('src/pages/WeTeachLife.jsx', content);
}
