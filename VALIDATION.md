# Validation record

Completed locally on 25 September 2026. Preview: http://127.0.0.1:3000

| Check | Result |
| --- | --- |
| npm install | Passed; zero vulnerabilities reported by install audit |
| npm run lint | Passed, no errors or warnings |
| npm run typecheck | Passed |
| npm run test:seo | Passed |
| npm run build | Passed; all seven informational pages statically pre-rendered, plus 404 and metadata routes |
| npm run test:browser | Passed in headless Chromium |
| Responsive pages | All seven routes checked at 375, 768, 1440 and 1920 pixels; no horizontal overflow |
| Navigation | Nine distinct internal route/query links returned HTTP 200 |
| Images | All three local production asset paths returned HTTP 200; rendered images loaded and include alt attributes |
| Page semantics | One H1 per page; important headings present in server-rendered HTML |
| Metadata | Unique titles/descriptions; Open Graph, Twitter and valid Organization/WebSite JSON-LD on all pages |
| Preview SEO | All pages noindex/nofollow; no invented canonical origin; robots disallows crawling; sitemap has no entries |
| Production SEO configuration | Reserved test-domain fixture confirms canonical URLs, approved-page-only sitemap, draft noindex, preview override, invalid-origin rejection |
| Mobile navigation | Keyboard open, Tab to first link, Escape close and focus restoration, click close, navigation closes menu |
| Reduced motion | CSS scroll behavior becomes auto |
| 404 | Unknown route returned HTTP 404 |
| Browser runtime | No page JavaScript exceptions observed |

Screenshots and the machine-readable report are in `artifacts/`. Home screenshots were visually inspected at all four requested widths; mobile optical and contact pages were also inspected. The wide hero crop was adjusted to preserve the full head.

## Limits

- The selected desktop reference and PRYDE logo were not supplied, so exact reference fidelity and final brand-logo rendering could not be verified.
- Photos are explicitly labelled AI-generated illustrative placeholders; actual PRYDE frame information and brand copy need approval.
- No contact form/service, verified contact details or stockists were supplied. There is no simulated submission or delivery claim.
- Production-domain metadata was exercised using an isolated reserved-domain test fixture, not a live domain. Recheck deployed canonical/social URLs after the real domain and approved assets are configured.
- Browser checks used Chromium. Real-device Safari/Firefox testing and a complete assistive-technology accessibility audit were not performed.
- No deployment, DNS changes or Search Console submission was performed.

## Reference revision
The natural-colour layout and logo variants are now visible in chat. The homepage was updated to match the composition; exact logo installation is pending local source paths. The revised build, lint, TypeScript and browser checks passed. Four currently rendered image assets passed checks; older assets remain preserved. Desktop and mobile screenshots were inspected. Temporary image prompts and source paths are recorded in ASSETS.md.

