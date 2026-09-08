const fs = require('fs');
let content = fs.readFileSync('src/pages/WeTeachLife.jsx', 'utf8');

if (!content.includes("import { Link } from 'react-router-dom'")) {
    content = content.replace("import React from 'react'", "import React from 'react'\nimport { Link } from 'react-router-dom'");
    fs.writeFileSync('src/pages/WeTeachLife.jsx', content);
}
