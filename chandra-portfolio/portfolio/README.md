# Chandra Prakash Upadhyay — Product Portfolio

Premium personal portfolio for an aspiring Associate Product Manager. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and react-markdown.

## Structure

- `app/` — pages (home, projects, certifications, experience, resume, about, contact)
- `content/case-studies/` — one data file per case study (full Markdown body + metadata). Edit these to update case study content.
- `content/certifications.ts` — all certifications with credential URLs
- `components/` — Navbar, Footer, cards, reading progress bar, animations
- `public/wireframes/` — drop exported wireframe images here (filenames referenced in each case study's `wireframes` array)
- `public/resume.pdf` — add your resume PDF here (Download buttons point to it)
- `public/profile.jpg` — add your profile photo, then swap the placeholder in `app/page.tsx`

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Import the repo at vercel.com → deploy (zero config needed)
3. Add your custom domain in Vercel → Settings → Domains

## To-do after deploy

- [ ] Add `public/resume.pdf`
- [ ] Add `public/profile.jpg` and wire it in the hero
- [ ] Export wireframe images from Notion/Figma into `public/wireframes/` (Groww filenames already wired)
- [ ] Add IBM cert credential URL in `content/certifications.ts` when completed
