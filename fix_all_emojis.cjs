const fs = require('fs');
const path = require('path');
const src = 'D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages';

function replaceInFile(filename, replacements) {
    const filePath = path.join(src, filename);
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    for (const [regex, newStr] of replacements) {
        content = content.replace(regex, newStr);
    }
    fs.writeFileSync(filePath, content);
}

replaceInFile('Home.jsx', [
    [/<h2 className="section-title">Life at AHWS [^<]+ Campus Gallery<\/h2>/g, '<h2 className="section-title" id="gallery-preview">Life at AHWS - Campus Gallery</h2>']
]);

replaceInFile('Gallery.jsx', [
    [/<h2 className="section-title"[^>]*>[^<]*Photo Gallery<\/h2>/g, '<h2 className="section-title" id="photos">📸 Photo Gallery</h2>'],
    [/<h2 className="section-title"[^>]*>[^<]*Video Gallery<\/h2>/g, '<h2 className="section-title" id="videos">📹 Video Gallery</h2>'],
    [/<h2 className="section-title"[^>]*>[^<]*Our Achievers<\/h2>/g, '<h2 className="section-title" id="achievers">🏆 Our Achievers</h2>'],
    [/{ key: 'photos', label: '[^']*Photo Gallery' }/g, "{ key: 'photos', label: '📸 Photo Gallery' }"],
    [/{ key: 'videos', label: '[^']*Video Gallery' }/g, "{ key: 'videos', label: '📹 Video Gallery' }"],
    [/{ key: 'achievers', label: '[^']*Our Achievers' }/g, "{ key: 'achievers', label: '🏆 Our Achievers' }"]
]);

replaceInFile('NoticeBoard.jsx', [
    [/<h2 className="section-title"[^>]*>[^<]*Notice Board<\/h2>/g, '<h2 className="section-title" id="notices">📢 Notice Board</h2>'],
    [/<h2 className="section-title"[^>]*>[^<]*Upcoming Events<\/h2>/g, '<h2 className="section-title" id="upcoming-events">🗓️ Upcoming Events</h2>'],
    [/<h2 className="section-title"[^>]*>[^<]*School Circulars<\/h2>/g, '<h2 className="section-title" id="circulars">📜 School Circulars</h2>']
]);

replaceInFile('Events.jsx', [
    [/<h2 className="section-title"[^>]*>[^<]*Awards &amp; Accolades<\/h2>/g, '<h2 className="section-title" id="awards">🏆 Awards &amp; Accolades</h2>'],
    [/<h2 className="section-title"[^>]*>[^<]*Recent News &amp; Event Highlights<\/h2>/g, '<h2 className="section-title" id="recent-news">📰 Recent News &amp; Event Highlights</h2>']
]);

console.log("Replaced corrupted emojis in headings.");
