# Developer Portfolio (Next.js App Router, multi-page)

Fixed profile sidebar on every page. Pages: / , /about , /experience , /projects , /projects/[slug] , /education , /contact , /cv

1. `npm install`
2. Edit `data/profile.ts` (all content lives there; add a project by adding an entry with a unique `slug`).
3. Add `public/resume_file.pdf` (and optionally `public/profile.jpg`, then set `avatar`).
4. `npm run dev`, then open http://localhost:3000
5. Deploy: push to GitHub and import the repo in Vercel.
