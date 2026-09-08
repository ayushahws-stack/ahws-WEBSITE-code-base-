const fs = require('fs');
let content = fs.readFileSync('src/components/FAQ.jsx', 'utf8');

const targetQuestion =   {
    question: "Your fees are higher than another school. Why?",
    answer: "I completely understand that fees are an important consideration. We encourage you to look at the overall value—our teaching approach, individual attention, learning environment, activities, facilities and opportunities for the child’s overall development. We would be happy to explain what is included in the fee structure."
  },
;

// Remove the target question from its current location
content = content.replace(targetQuestion, "");

// Find the end of the faqData array to append it
const endOfArrayMarker = ];\n\nexport default function FAQ() {;
content = content.replace(endOfArrayMarker, targetQuestion + ];\n\nexport default function FAQ() {);

fs.writeFileSync('src/components/FAQ.jsx', content);
