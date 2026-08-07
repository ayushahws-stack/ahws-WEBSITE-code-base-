const fs = require('fs');
const file = 'D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/components/Header.css';
let content = fs.readFileSync(file, 'utf8');

const newCSS = 

/* Sub-dropdown */
.has-sub-dropdown {
  position: relative;
}

.sub-dropdown-menu {
  position: absolute;
  top: 0;
  left: 100%;
  min-width: 240px;
  background: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow-hover);
  border: 1px solid var(--border);
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  z-index: 101;
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Invisible bridge for nested menu */
.has-sub-dropdown::before {
  content: '';
  position: absolute;
  top: 0;
  right: -20px; 
  width: 20px;
  height: 100%;
  background: transparent;
  z-index: 102;
}

.has-sub-dropdown:hover > .sub-dropdown-menu {
  opacity: 1;
  visibility: visible;
}

.sub-dropdown-item {
  display: block;
  padding: 10px 18px;
  color: var(--primary);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: var(--transition);
  border-bottom: 1px solid rgba(0,33,71,0.06);
  text-decoration: none;
}

.sub-dropdown-menu li:last-child > .sub-dropdown-item {
  border-bottom: none;
}

.sub-dropdown-item:hover {
  background: var(--secondary);
  color: var(--primary);
  padding-left: 24px;
}
;

if (!content.includes('has-sub-dropdown')) {
  content += newCSS;
  fs.writeFileSync(file, content);
}

console.log('Header.css updated!');
