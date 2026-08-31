const fs = require('fs');
const file = 'D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/components/Header.jsx';
let content = fs.readFileSync(file, 'utf8');

// Update top-level dropdown items
const oldDropdownLink = <NavLink to={child.to} className="dropdown-item" onClick={() => !child.children && setOpenDropdown(null)}>;
const newDropdownLink = <NavLink to={child.to} className="dropdown-item" onClick={(e) => {
                                if (!child.children) setOpenDropdown(null);
                                if (child.to.includes('#') && window.location.hash.includes(child.to.split('#')[0])) {
                                  const id = child.to.split('#')[1];
                                  const elem = document.getElementById(id);
                                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                                }
                              }}>;
content = content.replace(oldDropdownLink, newDropdownLink);

// Update sub-dropdown items
const oldSubDropdownLink = <NavLink to={sub.to} className="sub-dropdown-item" onClick={() => setOpenDropdown(null)}>{sub.label}</NavLink>;
const newSubDropdownLink = <NavLink to={sub.to} className="sub-dropdown-item" onClick={(e) => {
                                      setOpenDropdown(null);
                                      if (sub.to.includes('#') && window.location.hash.includes(sub.to.split('#')[0])) {
                                        const id = sub.to.split('#')[1];
                                        const elem = document.getElementById(id);
                                        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                                      }
                                    }}>{sub.label}</NavLink>;
content = content.replace(oldSubDropdownLink, newSubDropdownLink);

fs.writeFileSync(file, content);
console.log('Scroll handler updated!');
