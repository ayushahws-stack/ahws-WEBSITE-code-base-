const fs = require('fs');
let content = fs.readFileSync('src/components/FAQ.jsx', 'utf8');

const searchStr = 'question: "Your fees are higher than another school. Why?",';
const qStartIndex = content.lastIndexOf('{', content.indexOf(searchStr));
const qEndIndex = content.indexOf('},', qStartIndex) + 2; // include }, 

const item = content.substring(qStartIndex, qEndIndex);

// Remove the item
content = content.substring(0, qStartIndex) + content.substring(qEndIndex);

// Add it to the end
const insertPoint = content.indexOf('];');
content = content.substring(0, insertPoint) + '  ' + item + '\n' + content.substring(insertPoint);

fs.writeFileSync('src/components/FAQ.jsx', content);
