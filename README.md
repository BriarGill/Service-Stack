# Service-Stack — Car Maintenance Dashboard

Overview
This repository contains the code and prototypes for the Car Maintenance Dashboard (owner: BriarGill). The goal is an interactive dashboard for car owners to track maintenance, inspections, service history, reminders, and a parts inventory.

Getting started (local)
1. Clone repo:
   git clone git@github.com:BriarGill/Service-Stack.git
   cd Service-Stack

2. Install (frontend example):
   cd frontend
   pnpm install   # or npm/yarn

3. Run dev server:
   pnpm dev        # or npm run dev

Branch strategy
- main (protected)
- develop
- feature/<name>
- prototype/cursor — for Cursor-driven prototyping (ephemeral)

Cursor prototyping flow
1. Sign in to Cursor and connect to GitHub.
2. Open the repository and switch to the prototype/cursor branch:
   git checkout -b prototype/cursor
3. Run the dev server inside the Cursor workspace (npm run dev).
4. Implement UI from Figma screens and commit regularly.
5. Push branch and open a PR when ready.

Figma
- Figma file: <ADD YOUR FIGMA LINK HERE>
- Export icons and images into frontend/public/assets
- Keep a design tokens page in the Figma file (colors, spacing, font sizes).

CI / Deployment
- CI is set up in .github/workflows/ci.yml
- Preview deployments: connect to Vercel or Netlify (create preview deployments per PR)

Useful commands
- Create prototype branch: git checkout -b prototype/cursor
- Commit & push: git add . && git commit -m "proto: ..." && git push -u origin prototype/cursor

Contact / ownership
- Owner: BriarGill
- Repo: github.com/BriarGill/Service-Stack
