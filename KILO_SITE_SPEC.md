# Milestones Programs for Children — Static Website Rebuild Spec (Kilo Code)

You are an expert web designer + developer + nonprofit copywriter.

Goal: rebuild a modern, mobile-first, accessible website for **Milestones Programs for Children** by porting and polishing content from the legacy site while keeping core facts the same. The new site must be **static** (no backend required) and suitable for **free hosting**.

Legacy site: http://milestonesprograms.org/

---

## Non‑negotiables
- Organization name stays exactly: **Milestones Programs for Children**.
- Tone: mix of nonprofit + school-quality professionalism. Emphasize: **“highest quality care and educational opportunities for children.”**
- Preserve core facts (ages served, hours, locations, contact info, program structure). You may rewrite for clarity, but do **not** invent facts.
- Prominent persistent **Family Portal Login** button linking to:
  **https://connect.schoolcareworks.com/milestones_login.jsp**
- Keep legacy calendar **as-is** for now. Create an **Events** page that embeds:
  **https://milestonesprograms.org/plans/plans.cgi**
  If embedding is blocked by browser security, show a modern “View Calendar” button that opens in a new tab.
- Remove / do not include: the historical “Dear Milestones Families” letter page.
- PDFs: keep as PDFs; link from **For Parents → Parent Resources** (do not rewrite PDFs into pages unless instructed later).
- Testimonials: yes, include tasteful **placeholders**.
- Photos: weave throughout using **placeholders** (no dedicated gallery).
- News: must have a **rolling News & Announcements** section that’s easy to update (Markdown content).

---

## Stack requirement (STATIC)
Use **Astro** with Tailwind CSS.
- All pages are static.
- News posts are Markdown files.
- Build output is static and deployable for free.

---

## Visual Design System (implement exactly)

### Brand goals
- Feel: warm, trustworthy, nonprofit + school-quality.
- Clarity first: parents can find Programs, Enroll, Portal, News quickly.
- Use the red bouncing ball motif as a subtle accent (never overwhelming).

### Color palette (Tailwind theme)
Define in Tailwind config / CSS variables:
- Brand Navy: #1F3A68 (primary headings, links)
- Brand Red:  #D9413A (CTAs, accents, ball motif)
- Sky Blue:   #4D7FBF (secondary accents, hover states)
- Sand:       #F5F1EA (section backgrounds)
- Ink:        #111827 (body text)
- Slate:      #334155 (secondary text)
- Mist:       #E5E7EB (borders/dividers)
- White:      #FFFFFF

Usage rules:
- Primary buttons = Brand Red background + white text.
- Secondary buttons = white background + Brand Navy border/text.
- Alternate section backgrounds: White / Sand.
- Use Mist for borders and subtle dividers.

### Typography
Use Google fonts:
- Headings: **Poppins** (600–700)
- Body: **Inter** (400–500)

Sizing rules:
- H1: 40–48px desktop; 32–36px mobile
- H2: 28–32px desktop; 24–28px mobile
- Body: 16–18px; line-height 1.6+

### Component styling
Buttons:
- Height 44–48px
- Radius 14–16px
- Subtle shadow; hover elevates slightly
Cards:
- Radius 20px; 1px Mist border; white background
- Padding 20–28px
Spacing:
- Max width container 1100–1200px
- Section padding 64–88px desktop; 48–64px mobile

Motif:
- Use a small red dot + dashed arc as a decorative divider (max once per page).

---

## IA / Navigation (must match)
Top nav:
- Home
- Programs
  - Early Childhood
  - Kindergarten (4K / Junior Kindergarten)
  - School Age Programs
  - Summer Camps
- Locations
- For Parents
  - Enrollment / Registration
  - Tuition & Fees
  - Parent Resources (PDF links)
  - Family Portal Login (also persistent header button)
- News & Announcements
- Donate
  - Direct Donations
  - United Way Giving
- About
  - Mission & Philosophy
  - Careers (tucked away)
- Contact

Header utility buttons (desktop + mobile):
- **Family Portal Login** (primary)
- **Enroll / Register** (secondary)

Footer:
- Contact info, address, phone
- Quick links (Portal, Programs, Donate, News, Contact)

---

## Content rules (copywriting)
- Rewrite legacy text for polish: clearer headings, shorter sentences.
- Keep meaning and facts the same; do not add new claims.
- Speak to parents first (primary audience).
- Add clear CTAs: Enroll/Register, Contact, Donate, Portal Login.

---

## Known facts to preserve (from legacy)
### Home
- Nonprofit childcare provider.
- Serves children roughly **2 months to 13 years**.
- Founded **1979** (keep as a fact; don’t embellish).

### Programs
Early Childhood:
- Ages **2 months–4 years**
- Hours **Mon–Fri 7:00am–6:00pm**
- Locations:
  - Plymouth Church (Milwaukee)
  - Lydell Community Center (Whitefish Bay)
  - Indian Hill School (River Hills)

Kindergarten (renamed from Junior Kindergarten):
- For **4-year-olds** (4K / Junior Kindergarten). Not 5K.
- Curriculum includes: language arts, math, science/social studies, creative arts, PE, play/exploration.

School Age:
- Before/after school care; homework support; social/emotional development.

Summer:
- Include legacy program names: Little Explorers, Kid Crew, Jet Set, Action Pack, Camp M2.
- Seasonal dates should be handled via News posts, not hardcoded.

### Mission
- Keep three-fold commitment: children / parents / teachers (rewrite only).

### Enrollment
- New family registration uses **SchoolCareWorks** (link as placeholder unless provided later).
- Keep portal link prominent.

### Careers
- Keep careers page content (tucked away) based on legacy employment info.

---

## PDFs (keep as downloads; tucked away)
Implement a data-driven list of resources on Parent Resources page. Start with placeholders and allow easy edits later.
- Early Childhood Policies & Procedures (PDF) — keep, not spotlighted
- School Age Parent Handbook (PDF)
- Other policies/registration packets/camp PDFs (placeholders; easy to add)

---

## News & Announcements (must implement)
- Create /news page listing posts reverse-chronological.
- Add a homepage “Latest Announcements” section showing 1–3 newest.
- Store posts as Markdown in: **src/content/news/**
- Each post frontmatter:
  - title
  - date (YYYY-MM-DD)
  - category
  - summary
  - pinned (optional boolean)

---

## Donate (must implement)
Create /donate landing plus subpages:

### Direct Donations (placeholder)
- Impact framing + “donation form placeholder” component
- UI-only one-time vs monthly

### United Way Giving (include exactly these facts; rewrite for clarity)
- Donors can designate United Way gifts to Milestones via Donor Choice / write-in.
- Provide:
  - Organization Name: Milestones Programs for Children
  - Designation Number: 23000
  - Address: 2214 East Capitol Drive, Milwaukee, WI 53211
  - Phone: 414-964-5545

---

## Events
Create /events page that embeds legacy calendar URL listed above, with modern framing.

---

## Logo assets
Assume you have:
- /public/assets/logo-full.svg
- /public/assets/logo-mark.svg

Implement a Logo component that displays logo-full in header/footer; use logo-mark in small contexts if needed.

---

## Deliverables
Generate:
- Astro site with all routes and navigation
- Tailwind styles implementing the design system
- Reusable layout (Header/Footer)
- Programs pages, Locations, For Parents pages, News system, Donate pages, Events, Contact, About+Mission, Careers
- Parent Resources page using a data file for PDF links
- Placeholders for photos and testimonials

Proceed now:
1) Scaffold the full file structure and routes
2) Implement layout + navigation + footer
3) Build each page with polished copy and clear structure
4) Implement news markdown system
5) Implement donate pages and United Way content
6) Implement events embed page
7) Ensure site builds and runs without errors
