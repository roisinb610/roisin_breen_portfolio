# Roisin Breen — portfolio

A plain static site: HTML pages and one stylesheet. No build step, nothing to install. Vercel serves the files as they are.

## Pages

- `index.html` — Home
- `work/index.html` — Work, in the same four sections as the PDF portfolio: Collaborations, Campaigns & Editorials, Runway, Special Projects
- `work/<project>.html` — one page per project (Louvre, Under Armour, Repetto, Campaigns & Editorials, FW25, SS25, Hannam House Seoul)
- `about.html`, `contact.html`

## Adding a photo

1. Put the image in `images/` (JPG, about 2000px on the long side is plenty). The current photos come from the Sept 2026 PDF portfolio.
2. In the page, replace a placeholder like
   `<div class="media"><span class="placeholder label">Image to come · …</span></div>`
   with
   `<div class="media"><img src="../images/your-photo.jpg" alt="What the photo shows"></div>`
   (use `images/…` without `../` on pages at the top level, like `index.html`).
3. Captions follow the charter: `CLIENT · ROLE · YEAR`.

## Adding a project

Copy one of the files in `work/`, rename it, change the words, then add a card for it in `work/index.html` (and on the home page if it's a favourite).

## Brand

Built from the brand charter: Anton / Archivo / Space Mono, black and white, square corners, 3px rules.
To add a colour later, change `--accent` (and `--on-accent` if the colour is light) at the top of `assets/site.css`. Nothing else needs to change.
