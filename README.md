# Academic Heights World School (AHWS) Website v2

Welcome to the newly redesigned React frontend for Academic Heights World School. This project was upgraded to provide a premium, modern, and highly accessible user experience.

## 🚀 How to Run Locally

### For Development (Developers)
If you want to edit the code and see changes in real time:
1. Ensure you have Node.js installed.
2. Open the terminal in this folder and run `npm install`.
3. Run `npm run dev`.
4. Open the `http://localhost:5173` link in your browser.

### For Production / Offline Viewing (Non-Developers)
If you just want to click and view the final website without installing Node.js:
1. Unzip the `AHWS-Final-Preview.zip` folder.
2. Double-click the `index.html` file inside the `dist` folder.
3. The website will open perfectly in Chrome/Edge/Safari without needing a web server, thanks to our Legacy Build setup.

---

## 🛠️ Changelog & Upgrades (v2 Redesign)

We undertook a massive UI/UX overhaul of the website. Here are the major changes tracked in this project:

### 1. Design & Layout Enhancements
- **Premium Color Palette:** Standardized the use of `#002147` (Navy Blue) and `#FFC700` (School Yellow) across all elements.
- **Modern Typography:** Replaced default fonts with `Outfit` for bold, impactful headings and `Inter` for highly readable body text.
- **Glassmorphism UI:** Upgraded the "Quick Enquiry" and "Contact" forms with frosted glass effects (`backdrop-filter: blur()`).
- **Hero Slider:** Built an auto-sliding, high-resolution hero section.
- **Brand Ambassador Section:** Moved the Saina Nehwal section to the Home Page (directly below the hero) and replaced the placeholder image with the authentic, verified photograph.
- **360° App Section:** Integrated the App video preview and dynamic gradient text layout onto the Home Page.

### 2. Responsive & Mobile Fixes
- **Mobile Menu Backdrop:** Added a dark, blur-effect background overlay when the hamburger menu is opened on mobile devices.
- **Tablet Grids:** Adjusted the features, stats, and gallery grids to scale gracefully to 2 columns on 1024px screens instead of collapsing directly to 1 column.
- **Dynamic Spacing:** Swapped rigid pixel paddings for dynamic `clamp()` spacing, so sections look perfect on both huge monitors and small phones.

### 3. Accessibility (a11y) Upgrades
- **Form Labels:** Added visually hidden `<label>` tags (`.sr-only`) to all form inputs (Admission, Contact, Home) so screen readers can interpret them correctly.
- **Keyboard Navigation:** 
  - Added a global high-contrast yellow `*:focus-visible` outline.
  - Upgraded the top navigation dropdown menu with `aria-haspopup` and `aria-expanded` attributes. Users can now perfectly navigate the dropdowns using only the `Tab` key.
- **Contrast Ratios:** Fixed text contrast issues where yellow text was illegible on light backgrounds.

### 4. Performance & Architecture
- **Router Support:** Switched from `BrowserRouter` to `HashRouter` to support completely offline viewing (running from `file://`).
- **Offline Build Configuration:** Installed `@vitejs/plugin-legacy` and updated all image paths to relative paths (`./images/`) to bypass browser CORS security blocks when viewing locally.
- **Font Optimization:** Moved Google Fonts from CSS `@import` directly into `index.html` with `<link rel="preconnect">` to eliminate Flash of Unstyled Text (FOUT) and speed up rendering.
- **CLS Prevention:** Added aspect ratios and dimensions to images to prevent Cumulative Layout Shift as the page loads.

### 5. Content Updates & Navigation Fixes
- **Facility Updates:** Replaced "Computer Centre" with a detailed "Robotics Lab" section.
- **Alumni Page Revamp:** Re-structured the Alumni page to feature a prominent, center-aligned Call-To-Action (CTA) banner at the top, followed by a beautiful 3-column grid of distinguished alumni.
- **Mandatory Disclosure Data:** Converted all raw text for the CBSE Mandatory Disclosure into 5 distinct, highly readable, premium-styled data tables (General Info, Documents, Academics, Staff, and Infrastructure).
- **Mobile Menu Bug Fix:** Fixed an SPA routing issue where clicking dropdown items (like 'Admission') would change the page but fail to close the mobile menu or desktop dropdown overlay.

---

## 📁 WordPress Migration Note
If you are migrating this design to your existing WordPress site, please refer to the `ahws-custom-style.css` file inside the `AHWS WordPress Assets` folder provided separately. It contains all the exact CSS rules needed to replicate these designs on your live server!
