# Jason Cruz — Portfolio

A dark, minimal, terminal-inspired portfolio built with React, Vite, and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Deploy to Vercel

**Option A — via GitHub (recommended)**
1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com, sign in, and click "Add New… → Project".
3. Import the GitHub repo. Vercel auto-detects Vite — leave the default build settings
   (Build Command: `npm run build`, Output Directory: `dist`).
4. Click "Deploy". You'll get a live URL in about a minute.

**Option B — via Vercel CLI**
```bash
npm install -g vercel
vercel
```
Follow the prompts, then run `vercel --prod` to publish.

## Editing content

All the text, project list, and skills live in `src/App.jsx` near the top of the file
(`PROJECTS`, `SKILLS`, `TECH_GROUPS`, `STRENGTHS` arrays) — edit those and the page updates.
