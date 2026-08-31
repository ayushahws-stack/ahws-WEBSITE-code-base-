const fs = require('fs');
const path = require('path');
const src = 'D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages';

function replaceInFile(filename, replacements) {
    const filePath = path.join(src, filename);
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    for (const [oldStr, newStr] of replacements) {
        content = content.replace(oldStr, newStr);
    }
    fs.writeFileSync(filePath, content);
}

// Home.jsx
replaceInFile('Home.jsx', [
    ['<section className="facilities-section">', '<section className="facilities-section" id="facilities">'],
    ['<section className="why-ahws-section">', '<section className="why-ahws-section" id="why-join">'],
    ['<section className="uniqueness-section">', '<section className="uniqueness-section" id="uniqueness">'],
    ['<section className="day-at-ahws">', '<section className="day-at-ahws" id="day-at-ahws">'],
    ['<section className="gallery-preview">', '<section className="gallery-preview" id="gallery-preview">']
]);

// Gallery.jsx
replaceInFile('Gallery.jsx', [
    ['<h2 className="section-title">? Photo Gallery</h2>', '<h2 className="section-title" id="photos">? Photo Gallery</h2>'],
    ['<h2 className="section-title">?? Video Gallery</h2>', '<h2 className="section-title" id="videos">?? Video Gallery</h2>'],
    ['<h2 className="section-title">?? Our Achievers</h2>', '<h2 className="section-title" id="achievers">?? Our Achievers</h2>']
]);

// BeyondCurriculum.jsx
replaceInFile('BeyondCurriculum.jsx', [
    ['<section className="sprout-enrichment">', '<section className="sprout-enrichment" id="sprout-pillars">'],
    ['<section className="co-scholastic">', '<section className="co-scholastic" id="programs">'],
    ['<section className="sports-section">', '<section className="sports-section" id="sports">']
]);

// FeeStructure.jsx
replaceInFile('FeeStructure.jsx', [
    ['<section className="fee-structure-section">', '<section className="fee-structure-section" id="academic-session">']
]);

// ContactUs.jsx
replaceInFile('ContactUs.jsx', [
    ['<section className="contact-section">', '<section className="contact-section" id="contact-details">'],
    ['<section className="map-section">', '<section className="map-section" id="location-map">']
]);

// NoticeBoard.jsx
replaceInFile('NoticeBoard.jsx', [
    ['<h2 className="section-title">?? Notice Board</h2>', '<h2 className="section-title" id="notices">?? Notice Board</h2>'],
    ['<h2 className="section-title">??? Upcoming Events</h2>', '<h2 className="section-title" id="upcoming-events">??? Upcoming Events</h2>'],
    ['<h2 className="section-title">?? School Circulars</h2>', '<h2 className="section-title" id="circulars">?? School Circulars</h2>']
]);

// Events.jsx
replaceInFile('Events.jsx', [
    ['<h2 className="section-title">?? Awards &amp; Accolades</h2>', '<h2 className="section-title" id="awards">?? Awards &amp; Accolades</h2>'],
    ['<h2 className="section-title">?? Recent News &amp; Event Highlights</h2>', '<h2 className="section-title" id="recent-news">?? Recent News &amp; Event Highlights</h2>']
]);

// Blog.jsx
replaceInFile('Blog.jsx', [
    ['<section className="blog-section">', '<section className="blog-section" id="articles">']
]);

// MandatoryDisclosure.jsx
replaceInFile('MandatoryDisclosure.jsx', [
    ['<section className="mandatory-section">', '<section className="mandatory-section" id="disclosure">']
]);

// Alumni.jsx
replaceInFile('Alumni.jsx', [
    ['<section className="alumni-section">', '<section className="alumni-section" id="alumni">']
]);

// Committees.jsx
replaceInFile('Committees.jsx', [
    ['<section className="committees-intro">', '<section className="committees-intro" id="overview">'],
    ['<section className="committees-section">', '<section className="committees-section" id="committees-list">']
]);

console.log("Added remaining IDs successfully.");
