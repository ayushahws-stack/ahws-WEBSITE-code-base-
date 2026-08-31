const fs = require('fs');
let admission = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Admission.jsx', 'utf8');

// Update initial state
admission = admission.replace(
  "address: '', income: '', source: ''",
  "address: '', income: '', source: '', otherSource: ''"
);

// Update conditional rendering
const selectBlock = <select id="adm-source" name="source" value={form.source || ''} onChange={handleChange} required className="form-input">
                        <option value="">Select Option</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Newspaper">Newspaper</option>
                        <option value="Friends/Family">Friends / Family</option>
                        <option value="Flyers/Banners">Flyers / Banners</option>
                        <option value="Other">Other</option>
                      </select>;
                      
const replacementBlock = <select id="adm-source" name="source" value={form.source || ''} onChange={handleChange} required className="form-input">
                        <option value="">Select Option</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Newspaper">Newspaper</option>
                        <option value="Friends/Family">Friends / Family</option>
                        <option value="Flyers/Banners">Flyers / Banners</option>
                        <option value="Other">Other</option>
                      </select>
                      {form.source === 'Other' && (
                        <input
                          type="text"
                          name="otherSource"
                          value={form.otherSource || ''}
                          onChange={handleChange}
                          placeholder="Please specify"
                          className="form-input"
                          style={{ marginTop: '10px' }}
                          required
                        />
                      )};

admission = admission.replace(selectBlock, replacementBlock);
fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Admission.jsx', admission);
console.log('Fixed Form "Other" input');
