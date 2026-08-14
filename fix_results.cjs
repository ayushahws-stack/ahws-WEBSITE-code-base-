const fs = require('fs');
let results = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Results.jsx', 'utf8');
results = results.replace(/<a href="#" className="archive-link">View Details &rarr;<\/a>/g, '<button className="archive-link" style={{background:"none", border:"none", cursor:"pointer", color:"var(--ahws-secondary)", fontWeight:"bold"}}>View Details &rarr;</button>');
fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Results.jsx', results);
console.log('Fixed Results.jsx');
