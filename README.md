# Bolt Driver Ayutthaya: Independent Driver Guide

Thai-language, mobile-first, static informational site for people considering Bolt passenger-driving work in Ayutthaya. This is **not** an official Bolt website or endorsement.

## Source structure
- `index.html` — conversion landing page, benefits, sign-up steps, FAQ.
- `documents.html` — qualifications, required documents, motorcycle guidance, public-license information.
- `driver-guide.html` — learning content, earnings methodology, and local-only cost calculator.
- `assets/css/styles.css` — site-wide responsive CSS.
- `assets/js/main.js` — optional calculator, no tracking or network requests.
- `assets/favicon.svg` — independent artwork.
- `robots.txt`, `sitemap.xml` and each page's canonical / Open Graph / JSON-LD — search-engine technical basics.
- `SOURCES.md` — official editorial sources and known discrepancies.
- `.nojekyll` — static publishing.

## Publishing
A GitHub Actions workflow lives in `.github/workflows/deploy.yml`. Commits to `main` or a manual workflow dispatch build the static files and attempt to deploy through GitHub Pages.

**First-time repository configuration:** Settings → Pages → Build and deployment → Source: **GitHub Actions**. Verify that the deployment workflow succeeds under **Actions**. A successful commit alone does not prove Pages is live.

Intended public URL: https://washupman.github.io/bolt-ayutthaya/

Verify the public URL and HTTPS, page links, modal, and direct referral CTA before distributing traffic. No production launch should be claimed without a successful live check.

## Referral flow
All principal application CTAs have a direct anchor to:
`https://partners.bolt.eu?refid=AAA1046694`
Use `rel="sponsored noopener noreferrer"`. Do not change the URL, add intermediate redirects, use cookie stuffing or ask users to enter a referral code manually.

## Maintenance
- Update wording in the corresponding HTML page.
- Update styles in `assets/css/styles.css`.
- Recheck official links and requirements recorded in `SOURCES.md` before publishing claims.
- Update the sitemap / canonical URLs when migrating to a custom domain.
- No backend, form submission, cookies, analytics, or personal data collection.

## QA
Review all links, verify HTTPS, mobile and desktop layouts, test interactive calculator, inspect each canonical and structured data, check sitemap/robots, and confirm Bolt referral attribution in the real application journey before declaring the final project complete.