# Portfolio Website — Design System & Architecture (v2, grounded)

Anandha Kaarthick S · Full-Stack Developer & Hardware Tinkerer

**The actual subject matter this design is built from:** you don't just write CRUD apps — you turned two dead Samsung Galaxy J7 phones into a working Linux server rack (Termux, Kali NetHunter, nginx, Tailscale), you're building a honeypot on that same hardware, and you're grinding OverTheWire Bandit for fun. That's the personality. The site should feel like it was built by someone who runs a home lab out of old phones, not by someone who filled in a portfolio template.

---

## 0. Why this isn't the default glass/bento template

Generic version of this brief (what to avoid): dark background, one soft-teal accent picked because it "looks nice," Space Grotesk + Inter, bento tiles filled with stock icons, copy like "passionate developer building impactful solutions." That's legible on any of a thousand student portfolios.

This version instead:
- **Accent color has a source**, not just a vibe (§1.1)
- **Type pairing nods to terminal culture** without going full ASCII-art gimmick (§1.2)
- **One bento tile is genuinely yours** — a live lab-status readout, not a generic "GitHub stats" widget (§1.3)
- **Copy is written in your voice with your real specifics** — phone models, actual hackathon names, the actual wargame you're on (§3)
- **Micro-copy uses terminal/systems language** consistently as a small structural device, because it's true to what you build, not decoration bolted on

---

## PART 1 — Design System

### 1.1 Color — sourced, not arbitrary
| Token | Hex | Source |
|---|---|---|
| `--bg-base` | `#0A0E0C` | Near-black with a faint green cast — the color of a phone screen that's off but still has a charging LED nearby |
| `--bg-gradient` | `#101B14 → #0A0E0C` | Subtle, like a terminal window with a barely-there glow |
| `--glass-fill` | `rgba(200,255,220,0.05)` | Green-tinted glass, not neutral white-tinted — ties every panel back to the palette source |
| `--glass-border` | `rgba(200,255,220,0.14)` | Same tint, higher opacity |
| `--text-primary` | `#E8F5EC` | Slight green-white, not pure `#EAEFF5` |
| `--text-muted` | `#7C9284` | Desaturated green-grey |
| `--accent` | `#39FF88` | Pulled directly from the Kali NetHunter / terminal-green family — the actual color on your phone-server terminals, not a stock "AI teal" |

This is a genuine risk: green-on-near-black reads "hacker terminal" hard. That's correct here — own it rather than softening it into a safe teal, because the subject matter (repurposed phones, NetHunter, a honeypot) earns it. If it ever feels too on-the-nose, the fallback is desaturating `--accent` to `#5ED9A0`, not swapping to teal.

### 1.2 Type — terminal-adjacent, not costume
- **Headings:** `IBM Plex Sans` — has a technical, slightly mechanical character without being a joke monospace font
- **Body:** `IBM Plex Sans` (same family, lighter weight) — using one family throughout is itself the distinctive choice here, since most portfolios reach for two
- **One deliberate monospace moment:** `IBM Plex Mono` used only for: the nav logo mark, the lab-status tile's readout text, and code-tag chips (React, FastAPI, etc.) — never for body copy or headings. This is the single typographic accent, used consistently, not scattered.
- Sentence case everywhere. No ALL-CAPS eyebrows.

### 1.3 The Bento Grid — one tile is genuinely yours

```
┌─────────────────────────┬───────────┐
│                         │           │
│   BUS TRACKER            │  LAB      │
│   (large — hackathon-    │  STATUS   │
│   winning flagship)      │  (tall —  │
│                          │  see      │
├────────────┬─────────────┤  below)  │
│  CGPA CALC │  PHONE→LINUX│           │
│  (medium)  │  SERVER     │           │
│            │  (medium)   ├───────────┤
│            │             │  BANDIT   │
│            │             │  PROGRESS │
├────────────┴─────────────┤  (small) │
│   NOW — one line, what    │           │
│   you're building this    │           │
│   week                    │           │
└────────────────────────────┴──────────┘
```

**The Lab Status tile is the one non-generic idea in this grid.** Instead of a GitHub-contributions widget (which every portfolio has), it's a small monospace readout styled like an SSH session banner, showing real, static facts about your actual home lab:

```
$ uptime
lab: 2 nodes (galaxy-j7-01, galaxy-j7-02)
services: nginx · tailscale · honeypot (dev)
status: online
```

This doesn't need to be live-polling anything (no backend required — see Part 2) — it's a styled, hand-written block that reads as a genuine artifact of what you've built, not a decorative UI pattern. Update it by hand when the lab setup changes.

**Bandit Progress tile:** similarly plain — just states which level you're on in OverTheWire Bandit as a small honest line, not a progress bar (progress bars on subjective learning read as filler).

Grid rules unchanged from before: tile size = real weight, one shared glass treatment, responsive 3→2→1 columns, large tiles first on mobile.

### 1.4 Glass Panel (shared primitive)
```css
.glass {
  background: var(--glass-fill);
  border: 1px solid var(--glass-border);
  border-radius: 12px;             /* slightly tighter than v1 — less "soft SaaS," more "terminal window" */
  backdrop-filter: blur(14px);
  box-shadow: 0 8px 28px rgba(0,0,0,0.35);
  transition: background 200ms ease, border-color 200ms ease;
}
```

### 1.5 Motion
- One entrance: hero fades in, then the terminal-style Lab Status tile "types out" its readout line by line (a genuine callback to the terminal identity, not a generic fade-up)
- Everything else static on load
- Hover: border/fill brighten only
- Respects `prefers-reduced-motion`

### 1.6 Copy voice
Write every line like you'd explain it to another CS student, not like ad copy:
- Hero pitch: state what you actually do — e.g. "I build full-stack apps and occasionally turn dead phones into servers." Specific and slightly funny beats "passionate developer."
- Project blurbs: lead with the real problem (RIT students not knowing when the bus arrives), not "an innovative solution leveraging..."
- Contact section label: "Reach me" not "Get in touch" — plain verb, no filler.

---

## PART 2 — System Architecture

### 2.1 Stack
| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 14 (App Router), static export | Portfolio content doesn't change per-request — no server needed |
| Styling | Tailwind + `globals.css` for the `.glass` primitive and CSS variables | |
| Fonts | `IBM Plex Sans` + `IBM Plex Mono` via `next/font` (self-hosted, no runtime Google Fonts request) | Keeps the terminal identity consistent, no FOUT |
| Content | `data/projects.js`, `data/skills.js`, `data/lab-status.js` (hand-edited, not live-polled) | No CMS/backend needed at this scale |
| Animation | Framer Motion — used only for the hero + lab-status type-out | One deliberate moment, not a library-wide dependency |
| Deployment | Vercel, matching your Render+Vercel pattern (frontend-only, no backend here) | Free tier, auto-deploy on push |
| Assets | Project screenshots as `.webp` in `/public` | `next/image` handles responsive sizing |

No backend. `lab-status.js` and `bandit-progress.js` are static data you update by hand when your actual lab or wargame progress changes — deliberately not a live API call, since polling your own phone-servers from a public site is unnecessary exposure for a display value that changes rarely.

### 2.2 Folder Structure
```
portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── BentoGrid.tsx
│   ├── BentoTile.tsx
│   ├── ProjectTile.tsx
│   ├── LabStatusTile.tsx      # the terminal-style readout, with the type-out effect
│   ├── BanditProgressTile.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   ├── projects.js
│   ├── skills.js
│   ├── lab-status.js           # hand-edited: nodes, services, status line
│   └── bandit-progress.js      # hand-edited: current level
├── public/images/
├── tailwind.config.ts
└── next.config.js
```

### 2.3 Data Flow
```
data/*.js ──► BentoGrid ──► individual tiles (sized per data.size field)
page.tsx: Hero → About → BentoGrid → Contact
layout.tsx: Nav + Footer + fixed background gradient wrap everything
```
New project = one object in `projects.js`. Lab changes = edit `lab-status.js` by hand — this is a feature, not a limitation: it keeps the tile honest and avoids building/maintaining a status API for a personal site.

### 2.4 Accessibility & Performance Floor
- Static export, `next/image` lazy loading
- Accent-colored visible focus ring on all interactive elements
- Contrast checked: `--text-primary` on `--bg-base` and `--glass-fill` both meet WCAG AA (green-on-near-black needs an actual contrast check, not an assumption — verify before shipping)
- `prefers-reduced-motion`: hero and lab-status type-out both collapse to instant appearance

### 2.5 Deployment
1. Push to GitHub
2. Import to Vercel, Next.js preset auto-detected
3. Auto-deploy on push to `main`, PR previews for free
4. Custom domain optional later

---

## Build Order
1. `globals.css` — variables + `.glass`, get the green-tinted palette right first since it drives everything
2. Fonts wired via `next/font` (Plex Sans + Plex Mono)
3. `Nav`, `layout.tsx`, background gradient
4. `Hero` + entrance
5. `BentoGrid`/`BentoTile` shell, then `LabStatusTile` (the type-out effect is the trickiest piece — get it working in isolation first)
6. Remaining tiles wired to `data/`
7. `About`, `Contact`, `Footer`
8. Contrast check on the green palette, reduced-motion pass, mobile stacking check
