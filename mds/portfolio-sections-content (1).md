# Portfolio Website — Section-by-Section Content Spec

Companion to `portfolio-design-system-v2-grounded.md`. That file is the visual system; this file is what actually goes in each section, written and ready to drop into components.

---

## 1. Nav

Logo mark: `AK` in IBM Plex Mono, accent green, links to top.
Links: About · Projects · Skills · Reach me
Behavior: fixed glass strip, active section underlined in `--accent` as user scrolls.

---

## 2. Hero

**Headline:** Anandha Kaarthick S
**Subhead:** Full-stack developer & hardware tinkerer
**Pitch (one line, your voice, not ad copy):**
> I build full-stack apps for real problems on campus, and in my spare time I turn dead phones into Linux servers.

**CTAs:**
- Primary: "See what I've built" → scrolls to Projects
- Secondary: "Resume" → opens PDF in new tab

**Motion:** headline fades/rises in first, subhead + pitch stagger in ~80ms after, CTAs last. Lab Status tile begins its type-out only after this sequence finishes (see design system §1.5).

---

## 3. About

**Body copy (3–4 sentences, draft):**
> I'm a second-year Computer Science and Business Systems student at Rajalakshmi Institute of Technology, Chennai. Most of what I build starts as a problem I actually have — RIT students not knowing when the campus bus will show up, or two old Galaxy J7 phones sitting in a drawer that could be doing something useful instead. I care more about a project actually working end-to-end than about it looking impressive on paper.

**Quick facts panel (right side, glass panel, plain list — not icon-bullet kit):**
- Second-year CSBS, RIT Chennai
- CGPA 7.82 (Anna University, R2023)
- Based in Tamil Nadu
- Currently: full-stack web dev + a home lab running on repurposed phones

---

## 4. Projects (bento grid — six tiles)

Grid sizing (largest = most complete/impressive, per design system §1.3):

| Project | Size | Reason |
|---|---|---|
| College Bus Tracker | Large | Hackathon-winning flagship, most complete build |
| MSME MATE | Medium | Direct reframe of Bus Tracker for a different hackathon — pairs with it |
| Phone → Linux Server | Medium | Your most personal/distinctive project |
| SIH-DigiLand | Medium | *(need a one-liner + stack from you — see note at end)* |
| Vault | Small–Medium | *(need a one-liner + stack — see note)* |
| Coffee Shop Webpage | Small | Simpler project, smaller tile is honest sizing |

### 4.1 College Bus Tracker
**One-line problem:** RIT students had no way to know when the campus bus was actually arriving.
**Description:**
> A real-time bus tracking system for RIT's campus routes. Built the live map with Leaflet and OpenStreetMap plus the public OSRM routing engine — deliberately avoided Google Maps API costs. Backend serves live position updates over WebSockets so the map updates without polling.
**Tech tags:** `React` `FastAPI` `MySQL/SQLite` `WebSockets` `Leaflet.js` `OSRM`
**Notable:** Won Freshathon 2.0. Submitted to MSME Idea Hackathon 6.0.
**Links:** GitHub · Live demo (add when deployed)

### 4.2 MSME MATE
**One-line problem:** Small transport operators (not just campuses) need the same real-time visibility, plus a way to see where they're losing money.
**Description:**
> A reframe of Bus Tracker's core system for MSME-scale transport operators, built for AppleXfest. Adds idle-time and fuel-waste detection as a named feature, surfaces quantified impact metrics instead of just a map, and stubs out multi-tenant support so more than one operator could use it.
**Tech tags:** `React` `FastAPI` `MySQL/SQLite` `WebSockets`
**Notable:** Built for AppleXfest hackathon.
**Links:** GitHub

### 4.3 Phone → Linux Server
**One-line problem:** Two old Galaxy J7 phones were sitting unused — could they run real infrastructure instead of landfill?
**Description:**
> Converted two Samsung Galaxy J7 phones into functioning Linux servers. Runs Termux and Kali NetHunter Rootless for the base environment, nginx and Gunicorn/Flask for serving, SSH for access, and Tailscale plus Cloudflare tunnels for remote reachability without exposing a home IP. Currently building a small app layer with Expo/React Native, and a honeypot dashboard is next on the infrastructure.
**Tech tags:** `Termux` `Kali NetHunter` `nginx` `Flask` `SSH` `Tailscale` `Cloudflare Tunnels`
**Notable:** This is the project the site's Lab Status tile is built around — it's live, not archived.
**Links:** GitHub (if you have a repo/writeup for it)

### 4.4 SIH-DigiLand
*(placeholder — need details from you, see note at end of this file)*
**Tech tags:** TBD
**Links:** GitHub

### 4.5 Vault
*(placeholder — need details from you)*
**Tech tags:** TBD
**Links:** GitHub

### 4.6 Coffee Shop Webpage
*(placeholder — you likely have enough on this one that a one-liner from you is enough to fill in: what it is, and whether it's a UI-only build or has any backend)*
**Tech tags:** TBD
**Links:** GitHub · Live demo

---

## 5. Skills

Grouped pill tags, no percentages/progress bars.

- **Languages:** *(confirm your current list — e.g. Python, JavaScript/TypeScript, C, SQL)*
- **Frontend:** React, Tailwind CSS
- **Backend:** FastAPI, Flask
- **Infra / Tools:** Git, Render, Vercel, Tailscale, nginx, Docker *(confirm which you actually use)*

**Bandit Progress tile (small, monospace, honest):**
> Working through OverTheWire Bandit — currently on level *(fill in current level)*.

---

## 6. Lab Status tile (recap from design system)

Static, hand-edited monospace block styled like an SSH banner:
```
$ uptime
lab: 2 nodes (galaxy-j7-01, galaxy-j7-02)
services: nginx · tailscale · honeypot (dev)
status: online
```
Update this by hand whenever the lab setup changes — it's meant to be a true snapshot, not a live feed.

---

## 7. Contact ("Reach me")

Plain links, no form:
- Email → mailto link
- GitHub → github.com/AnandhaKaarthick
- LinkedIn → linkedin.com/in/anandha-kaarthick

One line above the links, in your voice:
> Best way to reach me is email or GitHub — I check both more than LinkedIn.

---

## 8. Footer

> © 2026 Anandha Kaarthick S · Built with Next.js

---

## Still need from you before this is fully build-ready

To keep the site honest (no fabricated project details), I've left three items as placeholders rather than guessing:
1. **SIH-DigiLand** — one-line problem it solves + tech stack
2. **Vault** — what it is (password manager? file storage? something else?) + tech stack
3. **Coffee Shop Webpage** — quick confirm: static frontend only, or does it have a backend/cart/booking logic?

Also flagged as TBD: your current Languages list, Infra/Tools list, and current Bandit level — quick facts I don't want to guess at either.
