const fs = require('fs');
let wb = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Wellbeing.jsx', 'utf8');

wb = wb.replace(
    /id=\{sec\.title\.includes\("Mentor"\) \? "mentor-mentee" : sec\.title\.includes\("Life"\) \? "life-skills" : ""\}/g,
    'id={sec.title.includes("Mentor") ? "mentor-mentee" : sec.title.includes("Life") ? "life-skills" : undefined}'
);

fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Wellbeing.jsx', wb);
console.log('Fixed Wellbeing empty IDs');
