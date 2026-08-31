const fs = require('fs');

function makeAsteriskRed(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/ \*<\/label>/g, ' <span style={{ color: \'#e74c3c\' }}>*</span></label>');
  content = content.replace(/\(PDF\/DOCX\) \*/g, '(PDF/DOCX) <span style={{ color: \'#e74c3c\' }}>*</span>');
  fs.writeFileSync(filePath, content);
}

makeAsteriskRed('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Admission.jsx');
makeAsteriskRed('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Careers.jsx');

console.log('Fixed Asterisks');
