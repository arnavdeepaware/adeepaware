# Portfolio maintenance

The portfolio is a static site: `index.html`, `styles.css`, and `script.js`. No package installation or build step is required. The root entry point, existing résumé filename, original image URLs, and section anchors (`#hero`, `#projects`, `#experience`, `#about`, `#involvement`, `#contact`) are preserved. Deployment and domain settings have not been changed.

Preview locally:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

## Design

- Project-first hierarchy with exactly four cards, a two-column desktop grid, and one column on phones.
- Off-white paper, deep teal, system fonts, quiet borders, and restrained architecture illustrations.
- Three professional experience entries; programs remain secondary. Beyond Code uses three static columns.
- Native anchor links work without JavaScript. JavaScript only enhances mobile navigation, with Escape, focus restoration, and breakpoint handling.
- External links use the same tab, avoiding unexpected new-window behavior. Repeated project links have project-specific accessible names.
- No icon font, animation library, carousel, trackers, or externally loaded runtime assets. Reduced motion disables smooth scrolling.

## Content sources and audit — September 12, 2026

The user's redesign brief is authoritative for newly supplied professional details. Repository documents were read, but the project test suites and performance benchmarks were not rerun as part of this portfolio redesign.

| Content | Source / decision |
| --- | --- |
| StreamForge | [Current README](https://github.com/arnavdeepaware/streamforge/blob/main/README.md): Java 21, Spring Boot, PostgreSQL, React dashboard, canonical model, STP/JSONL/CSV ingestion, safe transformations, versioned definitions, bounded local runs, monitoring, and local dead letters. Marked In Development. Do not imply distributed execution, distributed dead letters, or authenticated production deployment. |
| LLM Control Plane | [README](https://github.com/arnavdeepaware/LLM-Control-Plane/blob/main/README.md) and [testing guide](https://github.com/arnavdeepaware/LLM-Control-Plane/blob/main/docs/testing.md). The guide documents 93 passing tests. The implemented provider is deterministic MockProvider; real provider adapters remain future work. Copy explicitly states the mock-provider scope. |
| SitRight | [Current README](https://github.com/arnavdeepaware/SitRight/blob/main/README.md) documents browser inference, 929 parameters, seven features, and observed local inference under 50 ms. The old 400–600 ms figure includes server/network round-trip; copy distinguishes the measurements. No accuracy or medical-outcome claims are made. |
| A-eye | [README](https://github.com/arnavdeepaware/A-eye/blob/main/README.md), frontend page/components, existing site, and user brief support camera input, voice interaction, Gemini, ElevenLabs, and product-information assistance. No safety, navigation accuracy, allergy-detection accuracy, or independent user-validation claims are made. |
| truCurrent | Role, EV platform, 8,760/8,784-point load profiles, scheduling/optimization, 100% coverage configurations, and Open States/LegiScan workflow come from the user's brief. Not independently verified against private work artifacts. Dates match the existing site and résumé. Coverage is presented as a configuration capability, not a measured universal outcome. |
| The Difference | Both the existing site and local résumé establish Jul–Aug 2024, retained under the brief's source-of-truth exception. Omitted the old 23 endpoints and 1,000+ users metrics. |
| CCNY tutor | Feb 2024–May 2025 in existing site and résumé; subject coverage and communication emphasis from the brief. Student-count metrics omitted. |
| Graduation | May 2027 in the local résumé; displayed as Spring 2027. |
| Programs | Names from the brief; Google program previously identified as Google x Basta. No selection statistics retained. |
| Beyond Code | User brief and existing site; résumé also documents an eight-hour TEDx conference with 650+ attendees. Conservative 600+ wording retained. No sponsorship-growth or selection metrics. |
| Contact | Existing Gmail, LinkedIn, and GitHub destinations retained. No email was sent. |

## Link checks

All four GitHub repository pages, GitHub profile, LinkedIn, TEDxCUNY, and both existing Devpost URLs returned HTTP 200. A-eye Devpost title is `AEye`; TEDxCUNY title is `TEDxCUNY l Home`. HTTP success is a point-in-time availability check, not a guarantee of future uptime or of every embedded third-party video.

- [SitRight original demo](https://devpost.com/software/sitright-6ov7ef) is labeled **Original demo**, because that page describes the earlier architecture.
- [A-eye demo](https://devpost.com/software/untitled-project-gyn7erd28cqt) retains the previous destination and is labeled **Demo on Devpost**.
- The separate SitRight URL in its README, `https://sitright-zz9r.onrender.com`, timed out during verification. It is not added as a live-demo button.
- The canonical domain [www.arnavd.co](https://www.arnavd.co/) resolved to the existing production portfolio. This redesign has not been pushed or deployed.
- The local résumé, stylesheet, script, favicon, social preview, and every internal anchor passed checks.

## Assets to provide

No professional headshot exists in this repository. A real portrait can be added after `.hero-content` as `<img class="hero-portrait" src="images/headshot.webp" width="640" height="800" alt="Arnav Deepaware">`. CSS switches to a two-column hero when the portrait exists and stacks it on mobile. Recheck phone and tablet widths after adding it.

No usable dashboard screenshots were found in the inspected project trees. SitRight contains a branded `SIT RIGHT.png` asset, but no posture interface screenshot. LLM Control Plane lists proposed screenshot filenames that do not yet exist. The four current figures are explicitly labeled architecture/interaction diagrams, not fabricated product screens.

Optional replacements:

- StreamForge dashboard showing a real local run.
- LLM Control Plane Grafana dashboard after genuine demo traffic.
- SitRight interface showing local inference (with consent for any person visible).
- A-eye camera/product interaction UI.

Use optimized WebP/PNG, explicit dimensions, meaningful alt text, and `loading="lazy"` for below-the-fold screenshots. Preserve aspect ratio and recheck card alignment. Existing legacy image files are retained to avoid breaking their public URLs, but are not requested by the page.

`images/social-preview.svg` is the editable source for the 1200×630 PNG social card. Update and re-export it if the positioning changes. Social metadata uses an absolute production URL; the PNG will become public when the site is deployed.

The existing résumé PDF still has the old SitRight server architecture, older truCurrent wording/title, and previous project selection. Supply an updated résumé under the same filename to bring the download into line with the portfolio. The redesign intentionally does not rewrite the résumé or GitHub-profile README.

## Validation performed

- `node --check script.js` and `git diff --check`.
- Local Python HTTP server and isolated headless Chrome via bundled Playwright. The suggested agent-browser CLI was unavailable, so browser verification used Playwright directly without adding project dependencies.
- Responsive assertions at 320, 390, 430, 768, 1024, 1440, and 1920 px: exactly four projects, correct grid columns, and no horizontal overflow or elements extending beyond the viewport.
- Visual inspection of desktop and mobile screenshots and the social card.
- Keyboard: skip link, menu opening with Enter, Tab to links, visible focus, Escape returns focus, selected section receives focus, sticky header does not obscure the target, and breakpoint transitions restore desktop navigation.
- JavaScript-disabled mobile navigation and content remain accessible.
- Reduced-motion preference turns off smooth scrolling.
- No browser page errors or console errors.
- axe-core WCAG 2 A/AA and WCAG 2.1 AA checks at 320, 390, 768, and 1440 px, plus the expanded mobile menu: zero violations. Automated checks do not replace a screen-reader review.
- Public link HTTP checks, local asset HTTP checks, and all anchor targets.

No deployment was triggered. Publish through the existing deployment workflow when ready.
