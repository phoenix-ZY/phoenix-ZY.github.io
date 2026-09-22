# 岁序 · GN Chronicle

The page lives at `/chronicle/`. Its small star entrance appears only in the
homepage footer. It is omitted from navigation, site search and the sitemap.

The passcode is `202304`, with the hint “还记得第一次成立群的那个年月吗？”.
The browser checks it in `assets/js/chronicle.js` and remembers the result for the
tab's session. The GN session key is separate from the original demo key, so old
demo sessions return to the updated gate.
This is a decorative entrance, **not access control or encryption**. The generated
HTML, event data and source are public. Do not add confidential content here.

## Update the story

Edit `_data/chronicle.yml`. Years and events display in their listed order.
The 2022 entry is a prologue; the main GN story starts in April 2023. The current
19 events use the author's supplied dates and wording, in chronological order.
No personal research entries or demo placeholders remain.

Each event has an ID (unique HTML anchor), display date, ISO `datetime`, category,
title, layout style and sequence number. Description and note are optional; no
empty text areas are rendered. Keep IDs unique and dates in ascending order.

Available styles: `origin`, `reflection`, `travel`, `gathering`.
Groups have a `label` for the year navigation; `prelude: true` marks the prologue.

The independent template is `_pages/chronicle.html`; its CSS and favicon live in
`assets/chronicle/`. It intentionally does not load al-folio's styles or scripts.
No new build dependencies are needed. Commit and push to `main` to use the normal
GitHub Actions deployment.
