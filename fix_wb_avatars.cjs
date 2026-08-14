const fs = require('fs');
let wb = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Wellbeing.jsx', 'utf8');

wb = wb.replace(/<img src="\.\/images\/dr-rashmi\.jpg"[^>]*>/g, '<div className="counsellor-avatar">Dr. R</div>');
wb = wb.replace(/<img src="\.\/images\/dr-rekha\.jpg"[^>]*>/g, '<div className="counsellor-avatar">Dr. R</div>');
wb = wb.replace(/<img src="\.\/images\/ms-urvashi\.jpg"[^>]*>/g, '<div className="counsellor-avatar">Ms. U</div>');

// The gallery images 'counseling-parents.jpg' and 'counseling-students.jpg'
wb = wb.replace('./images/counseling-parents.jpg', './WEBSITE GALLERY/other images/parents feedback.png');
wb = wb.replace('./images/counseling-students.jpg', './WEBSITE GALLERY/other images/well being 101.png');

fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Wellbeing.jsx', wb);
console.log('Fixed Wellbeing avatars');
