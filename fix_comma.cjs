const fs = require('fs');
let content = fs.readFileSync('src/components/FAQ.jsx', 'utf8');
content = content.replace('}\n  {\n    question: "Your fees', '},\n  {\n    question: "Your fees');
content = content.replace('}\r\n  {\r\n    question: "Your fees', '},\r\n  {\r\n    question: "Your fees');
content = content.replace('    }\n    {\n      question: "Your', '    },\n    {\n      question: "Your');
content = content.replace('    }\r\n    {\r\n      question: "Your', '    },\r\n    {\r\n      question: "Your');
fs.writeFileSync('src/components/FAQ.jsx', content);
