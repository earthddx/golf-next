# Alle Golf Lab

Marketing site for **Alle Golf Lab LLC** — Alessandra Miller's golf fitness & biomechanics practice. Built with Next.js 16, React 19, and CSS Modules.

## Tech stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **CSS Modules** (`app/App.module.css`)
- **Lucide React** — icons
- **Tailwind CSS v4** — utility classes
- **Formspree** — contact form submissions

## Project structure

```
app/
  page.tsx          # Root page — composes all sections
  App.module.css    # All styles
  layout.tsx        # Root layout

components/
  Navbar.tsx
  HeroSection.tsx
  StatsStrip.tsx
  AboutSection.tsx
  ServicesSection.tsx
  MethodSection.tsx
  AffiliateSection.tsx
  MedPartnersSection.tsx
  ContactSection.tsx
  Footer.tsx
  LinkedInIcon.tsx
  InstagramIcon.tsx

lib/
  utils.ts          # scrollToSection helper
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form setup

The contact form uses [Formspree](https://formspree.io). Replace the placeholder in `components/ContactSection.tsx`:

```ts
fetch('https://formspree.io/f/REPLACE_WITH_FORM_ID', ...)
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
