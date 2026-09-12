# Figma UI Enhancement Plan - Premium Swiss Portfolio

## Project status

The static portfolio implementation now follows the light Swiss editorial direction:

- Warm paper background, graphite text, slate secondary text, and cobalt accent
- Sticky responsive navigation with active-section states
- Editorial hero with portrait and credential placeholders
- Large project case-study rows instead of generic cards
- Dark capabilities section
- Experience timeline, working principles, contact CTA, and footer
- Reduced-motion support, keyboard focus states, skip link, and mobile navigation

All personal credentials, dates, links, screenshots, portrait assets, and outcome metrics remain replaceable placeholders.

## Phase 1 - Content-safe wireframes

Create three Figma wireframes before applying final visual styling:

- Desktop: 1440px wide
- Tablet: 1024px wide
- Mobile: 390px wide

Page order:

1. Sticky header and navigation
2. Hero section
3. Selected work introduction
4. Three project case studies
5. Capabilities section
6. Experience timeline
7. How I work / About section
8. Contact CTA
9. Footer

Annotate replaceable content slots for:

- Name and role
- Email and resume
- Location
- LinkedIn and GitHub
- Portrait
- Project screenshots or diagrams
- Project URLs
- Experience dates and companies

## Phase 2 - Figma design system

Create reusable styles and variables for:

### Colors

- `Paper / #F5F4EF`
- `Paper Deep / #EBE9E1`
- `Ink / #111111`
- `Ink Soft / #3B414B`
- `Slate / #737B88`
- `Muted / #9AA1AD`
- `Line / #D9D7D0`
- `Cobalt / #245EE8`
- `Cobalt Dark / #174BC2`
- `Dark Surface / #121313`

### Typography

- Sora for display headings and project titles
- Manrope for body copy, labels, navigation, and controls
- Large editorial display type for the hero
- Small uppercase labels with increased letter spacing
- Comfortable body text line length and contrast

### Layout

- 12-column desktop grid
- 8-column tablet grid
- 4-column mobile grid
- 8px spacing scale
- Maximum content width matching the implementation
- 4-8px corner radius
- Thin dividers instead of heavy cards and shadows

## Phase 3 - Component library and states

Build named Figma components with Auto Layout and variants.

### Navigation

- Default
- Hover
- Active section
- Keyboard focus
- Mobile closed
- Mobile open

### Buttons and links

- Primary CTA
- Secondary CTA
- Hover
- Focus
- Placeholder or unavailable link
- External-link indicator

### Hero identity panel

- Portrait placeholder
- Portrait image
- Monogram fallback
- Empty or loading state

### Project case study

- Project row default
- Project row hover
- Screenshot placeholder
- Loaded screenshot
- UML or diagram placeholder
- Technology tags
- Outcome callout
- Repository/demo link group

### Experience and contact

- Experience timeline item
- Company placeholder
- Contact email CTA
- Social link placeholder
- Location placeholder

## Phase 4 - High-fidelity composition

Apply the design system to the full page.

Enhance the visual composition by:

- Keeping the hero asymmetric and editorial
- Reducing empty space while preserving premium pacing
- Aligning project numbers, media, copy, and metadata to the same grid
- Using consistent 16:10 project media slots
- Separating projects with thin rules
- Using verified technologies only: PHP, JavaScript, MySQL, HTML, CSS, UML, systems analysis, and IT support
- Keeping the capabilities section dark but reducing its density on mobile
- Making the contact section a decisive closing statement instead of a form card

Project content structure:

1. Problem
2. Contribution
3. Technology or project focus
4. Verified outcome or neutral outcome placeholder
5. Screenshot, mockup, or UML media
6. Repository, demo, or documentation link

## Phase 5 - Prototype, responsive QA, and handoff

Prototype these interactions:

- Navigation anchor scrolling
- Active navigation state
- Mobile menu open and close
- Button hover and focus states
- Project link states
- Back-to-top interaction
- Quiet reveal animation

Validate at 1440px, 1024px, and 390px:

- No horizontal overflow
- Correct heading hierarchy
- Readable mobile typography
- Touch-friendly controls
- Visible keyboard focus
- Sufficient contrast
- Reduced-motion behavior
- Clear placeholder labels
- Stable media slots when images are added
- Consistent spacing and alignment

## Content slot contract

Use these replaceable fields in the final content pass:

- `displayName`
- `roleLabel`
- `email`
- `resumeUrl`
- `location`
- `linkedinUrl`
- `githubUrl`
- `portraitSrc`
- `projectMedia`
- `projectLinks`
- `experienceDates`
- `experienceCompanies`
- `verifiedOutcomes`

Until supplied, use neutral labels such as `Add resume`, `Add project screenshot`, `Add LinkedIn URL`, and `Add verified result`. Do not invent credentials, employers, technologies, or metrics.

## Final Figma handoff checklist

- Wireframes for desktop, tablet, and mobile
- High-fidelity page frames
- Color, typography, spacing, and radius styles
- Component library with variants
- Navigation, button, project, and contact states
- Responsive behavior annotations
- Project screenshot art direction
- Credential and media replacement notes
- Prototype links for navigation and mobile menu
- Developer notes matching `index.html`, `styles.css`, and `script.js`
