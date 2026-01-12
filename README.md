# Dawnforge Games

A minimal "coming soon" landing page for Dawnforge Games.

## Configuration

Edit the social media URLs at the top of `src/app/page.tsx`:

```typescript
const SOCIAL_URLS = {
  twitter: "",      // e.g., "https://twitter.com/dawnforgegames"
  discord: "",      // e.g., "https://discord.gg/your-invite"
  linkedin: "",     // e.g., "https://linkedin.com/company/dawnforge"
  youtube: "",      // e.g., "https://youtube.com/@dawnforgegames"
  instagram: "",    // e.g., "https://instagram.com/dawnforgegames"
};
```

## Logo

Replace `public/logo.svg` with your actual gear/sun logo. Recommended format: SVG for best quality at all sizes, or PNG at 256x256 or larger.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Deployment

This site is configured for Vercel deployment:

1. Push to GitHub
2. Import the repo in Vercel
3. Set custom domain to `dawnforge.games`

The site will auto-deploy on every push to main.
