# Roisin Breen — portfolio

A plain static site: HTML pages and one stylesheet. No build step, nothing to install. Vercel serves the files as they are.

## Pages

- `index.html` — Home
- `work/index.html` — Work list
- `work/<project>.html` — one page per project
- `about.html`, `contact.html`

## Adding a photo

1. Put the image in `images/` (JPG, about 2000px wide is plenty).
2. In the page, replace a placeholder like
   `<div class="media"><span class="placeholder label">Image to come · …</span></div>`
   with
   `<div class="media"><img src="../images/your-photo.jpg" alt="What the photo shows"></div>`
   (use `images/…` without `../` on pages at the top level, like `index.html`).
3. Captions follow the charter: `CLIENT · ROLE · YEAR`.

## Adding a project

Copy one of the files in `work/`, rename it, change the words, then add a card for it in `work/index.html` (and on the home page if it's a favourite).

## Draft notes

Dashed boxes (`<p class="todo">…</p>`) are notes for you. Delete each one once the real text is in.

## Brand

Built from the brand charter: Anton / Archivo / Space Mono, black and white, square corners, 3px rules.
To add a colour later, change `--accent` (and `--on-accent` if the colour is light) at the top of `assets/site.css`. Nothing else needs to change.
