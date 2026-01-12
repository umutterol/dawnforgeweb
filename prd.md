You are Claude Opus. Build a single-page, human-feeling landing page for a game studio called “Dawnforge” on the domain dawnforge.games.

GOAL
Create a minimal “coming soon” landing page that feels crafted and intentional (not AI/template/SaaS). The page should be fast, static, and easy to host. The only motion is a slow rotating gear/sun logo at the center, implying work in progress.

OUTPUT REQUIREMENTS
- Output the complete code for:
  - index.html
  - styles.css
  - (optional) script.js only if absolutely needed (prefer no JS)
- Use plain HTML/CSS (no frameworks, no heavy libraries).
- Use semantic HTML and accessibility best practices.
- Provide clear instructions at the top of index.html on where to insert social URLs.
- Include reduced motion support: if prefers-reduced-motion is set, rotation stops.
- Ensure responsive design; on mobile it is slightly simplified (smaller logo, tighter spacing, socials wrap/stack neatly).
- Provide no placeholder AI-copy beyond what’s specified below.

CONTENT (LOCKED COPY)
Headline (centered, primary):
“The forge is hot.”
“Something is coming.”

Optional small subline under headline:
“Dawnforge Games”

Email (visible and clickable):
hello@dawnforge.games
- Make it a mailto link.

SOCIALS (SHOW ALL)
Create clean buttons for:
- X / Twitter
- Discord
- LinkedIn
- YouTube
- Instagram
Buttons should be monochrome, minimal, accessible. Use inline SVG icons (no external icon libs). If a URL is missing, either:
- keep the button but disable it visually (reduced opacity, no pointer), OR
- link to “#” but add aria-disabled and prevent focus confusion.
Prefer a simple approach but keep the layout clean.

LOGO
We have a logo image (gear/sun) provided as a file (e.g., logo.png). Assume it will live next to index.html.
- Place it centered above the headline.
- Rotate it clockwise continuously, slow but noticeable.
- Use CSS animation only (no JS).

ANIMATION VALUES (LOCKED)
- Clockwise rotation
- One full rotation every 30 seconds
- Linear easing
CSS:
@keyframes dawnforge-rotate { from {transform: rotate(0deg);} to {transform: rotate(360deg);} }
.logo { animation: dawnforge-rotate 30s linear infinite; transform-origin: 50% 50%; will-change: transform; }
Reduced motion:
@media (prefers-reduced-motion: reduce) { .logo { animation: none; } }

MICRO STYLE GUIDE (LOCKED)
Typography:
- Use Space Grotesk for headline and Inter for UI (Google Fonts). If you must reduce, use Space Grotesk only.
Type scale:
- Headline: 32–44px desktop, 24–32px mobile; line-height 1.05–1.15; letter-spacing -0.02em
- Subline and UI: 14–16px; line-height 1.4–1.6
Colors:
- Background: charcoal off-black #141414
- Primary text: #F2F2F2
- Secondary text: #B8B8B8
- Border: #2A2A2A
Buttons:
- 40–44px touch targets
- Radius 10–14px
- Border 1px #2A2A2A
- Background transparent or rgba(255,255,255,0.03)
Hover: background rgba(255,255,255,0.06) and/or border to #3A3A3A, optional scale 1.03
Transitions: 150–220ms, easing cubic-bezier(0.2,0.8,0.2,1)
Layout:
- Centered column, max-width 720px
- Generous whitespace; top/bottom padding 64–120px depending on viewport
- Spacing: logo→headline 24–32px; headline→socials 24px; socials→email 16–20px

BACKGROUND
Use off-black/charcoal (#141414). No gradients, no parallax, no particles, no stock photos. Avoid “futuristic AI” effects.

ACCESSIBILITY
- Ensure focus states are visible.
- Ensure contrast is readable.
- Provide alt text for logo (“Dawnforge gear-sun logo”).
- Buttons must have aria-labels and tooltips if helpful.

DELIVERABLE
Return code blocks for index.html and styles.css (and script.js only if you used it). Keep it clean, commented, and ready to deploy.

Also include a short “How to deploy” note (e.g., host as static files, point DNS to static host) without recommending any specific provider unless asked.
