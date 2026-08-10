# AHWS Website Project - Context Bridge & Content Analysis

This document serves as a complete **Context Bridge** for any new AI coding assistant taking over the development of the **Academic Heights World School (AHWS)** website. Feed this entire document to the AI in the first prompt to prevent duplicates, hallucinations, and to preserve all styling, design guidelines, and the newly analyzed website content.

---

## 1. Project Overview & Tech Stack
* **Framework:** React SPA (Vite)
* **Styling:** Vanilla CSS (using CSS Variables defined in `index.css`)
* **Design Philosophy:** Modern, premium, clean. High-end colors, soft drop shadows, glassmorphism, responsive masonry grids, and smooth micro-animations.
* **Responsive Rules:** 100% mobile-friendly. **Must scroll vertically only**—do not allow horizontal scrolling under any circumstances.
* **Color Palette:**
  * **Primary (Navy Blue):** `#002147`
  * **Secondary (Gold/Yellow):** `#FFC700`

---

## 2. Critical Client Guidelines & Work Rules
* **No Names in Tracker:** In the Data Collection Tracker (`AHWS_Data_Collection_Tracker_V2.xlsx`), **never** call out staff or admins by name in the *What Is Missing / Action Needed* column. Use generic phrasing (e.g., use *"Needs to film the video"* instead of *"Saurabh Sir needs to film the video"*).
* **Curated Gallery Images:** When populating event photo galleries, **do not add all images** from a folder. Select only **the best 3-4 images** to keep the page light, clean, and visually outstanding.
* **URL Encoding for Media Assets:** Always wrap folder names and filenames in `encodeURIComponent` when building paths in JSX to prevent broken links on files/folders containing spaces or special characters (such as curly apostrophes `’` or commas).

---

## 3. Work Completed & Implemented
1. **Gallery Image Integration:** Audited all 29 event folders under `public/WEBSITE GALLERY/` and populated 28 albums with top 3 curated photos.
2. **HEIF/HEIC Conversion:** Converted `.heif` images inside `Farewell of XII (04-02-2026)` to `.jpg`.
3. **YouTube Video Embeds:** Embedded 6 real YouTube channel videos into `Gallery.jsx`.
4. **Leadership Messages:** Added vision cards for Rosy Ahuja (Director), Rachna Anand (Principal), and Harish Nagpal (Associate Director) in `About.jsx`.
5. **SPROUT Curriculum & Special Programs:** Integrated 5+3+3+4 structure, 7 SPROUT layers, Decode Startup, and Wordsworth Language Lab in `Academics.jsx`.
6. **Homepage USPs & Balvatika Routine:** Added "Why Join AHWS" features and horizontal "A Day at AHWS (Balvatika)" routine timeline in `Home.jsx`.
7. **Teacher Wellness & Culture:** Integrated mindfulness, tech training, and skill enrichment in `Careers.jsx`.
8. **CBSE Committees:** Populated real staff and coordinator names for POCSO, POSH, Anti-Bullying, Safety, and Tobacco Control in `Committees.jsx`.
9. **Campus Safety Systems:** Added 24x7 CCTV (128 cameras), GPS transport, First-Aid room, and Nanny supervision in `Infrastructure.jsx`.
10. **Comprehensive Enquiry Form:** Rebuilt the `Admission.jsx` form to include all fields from the official PDF enquiry form.
11. **Mandatory Disclosure Documents & Video Link:** Linked all 13 real PDF/JPG files in `public/documents website/AHWS Mandatory disclosures/` to `MandatoryDisclosure.jsx` and added the official Drive inspection video link.

---

## 4. Full Document & Folder Inventory Scanned (`public/documents website`)

Total 30 files & 2 subdirectories scanned:

### A. Root Directory (`public/documents website/`)
* `2nd Content For AHWS Web Page.docx` — Decode Startup, Theater/Arts, Wordsworth Digital Language Lab, Dance/Music/Art, Sports portfolio.
* `About AHWS.pdf` — School mission, vision, values, 10+ years journey.
* `Academic Planner (2026-27).pdf` — Complete academic schedules and holidays.
* `Content For AHWS Web Page.docx` — Bachpan & AHPS heritage, 21st century tech, global citizenship.
* `Counselling ^0 Parent Support.docx` — Dr. Rashmi Bajaj Singh (28+ yrs exp), 360° student guidance (resilience, anxiety, stress), parent enrichment workshops, appointment process.
* `Enquiry form -AHWS FINAL.doc` / `.pdf` — Complete multi-section student/parent enquiry parameters.
* `HVM Syllabus Class 1-12- 2026-27.pdf` — Classwise syllabus overview.
* `MESSAGES.pdf` — Detailed quotes from Rosy Ahuja, Rachna Anand, Harish Nagpal.
* `Our Curriculum.docx` — SPROUT Curriculum (5+3+3+4), 7 layers, Howard Gardner Multiple Intelligences, 8 foundational themes, Education 4.0.
* `POCSO ACT circular.pdf` / `POCSO-ACT-Gazette.pdf` — Legal compliance docs for child protection.
* `SCHOOL COMMITTEES (1).docx` / `.pdf` / `SCHOOL COMMITTEES.docx` — Committee lists (POSH, POCSO, Disciplinary, Safety, Tobacco).
* `SCHOOL EVENTS - DR REKHA.pdf` — 58 event schedule for session 2025-26.
* `TRAINING SESSION WRITE UP FOR WEBSITE.pdf` — Staff tech training, mindfulness, and personal development workshops.
* `WEBSITE CONTENT- SAFETY & SECURITY MEASURES.pdf` — CCTV (128 cameras), GPS transport, security, health & hygiene, counselling.
* `WHY JOIN ACADEMIC HEIGHTS WORLD SCHOOL.pdf` — Key differentiators, Rishihood University link.
* `WRITE UP_WEBSITE_A  day at  AHWS.docx` / `.pdf` — Step-by-step Balvatika routine.
* `ppt of sprout.pdf` — Full SPROUT presentation deck.

### B. Subdirectory: `AHWS Mandatory disclosures/` (24 Files)
* `affililation letter upto 2030.pdf` (Affiliation extension till 2030)
* `society registration.jpg` (Society Certificate)
* `copy of NOCissued by state govt.jpg` (State NOC)
* `recognition letters.pdf` (RTE Recognition)
* `Building Safety Certificate.pdf` (Building Safety)
* `Fire certificate.pdf` (Fire Safety)
* `Health Certificate.pdf` & `water report.pdf` (Health & Water Safety)
* `Fee structure- Mandatory Disclosure.pdf` (Fee Structure)
* `Academic Planner for Educators 2026-27 (P).pdf` (Educator Calendar)
* `List of SMC.pdf` & `List of PTA MEMBERS.pdf` (SMC & PTA Lists)
* `last three years cbse result.pdf` (CBSE Board Results)
* `STAFF DETAILS PGT.pdf`, `STAFF DETAILS PRT.pdf`, `STAFF DETAILS TGT.pdf` (Staff Roster)
* `youtube video link.docx` (Drive link for school infrastructure inspection video)

### C. Subdirectory: `devender sir/` (2 Files)
* `ABOUT AHWS.pdf` (31 MB brochure presentation)
* `AHWS Brochure.pdf` (13 MB official school prospectus)
