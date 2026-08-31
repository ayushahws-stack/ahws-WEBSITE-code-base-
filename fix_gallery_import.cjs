const fs = require('fs');
let gallery = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Gallery.jsx', 'utf8');
if (!gallery.includes("import { useLocation }")) {
    gallery = gallery.replace("import { useState, useEffect } from 'react'", "import { useState, useEffect } from 'react'\nimport { useLocation } from 'react-router-dom'");
}
fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Gallery.jsx', gallery);
console.log('Fixed useLocation import');
