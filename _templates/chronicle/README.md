# 岁序 · Personal chronicle demo

The page lives at `/chronicle/`. Its small star entrance appears only in the
homepage footer. It is omitted from navigation, site search and the sitemap.

The initial demo passcode is `202303`. The browser checks it in
`assets/js/chronicle.js` and remembers the result for the tab's session.
This is a decorative entrance, **not access control or encryption**. The generated
HTML, event data and source are public. Do not add confidential content here.

## Update the story

Edit `_data/chronicle.yml`. Years and events display in their listed order.
Each event has an ID (unique HTML anchor), display date, ISO `datetime`, category,
title, description, note, layout style and sequence number.

Use `demo: true` for placeholder events, and remove it or set it to false only
after replacing the event with a real memory. The course in March 2023 and ARM
collaboration beginning in November 2025 come from the author's supplied dates;
the remaining three events are labeled examples.

Available styles: `origin`, `reflection`, `chapter`, `research`, `open`.
Set `ongoing: true` to show the ongoing marker.

The independent template is `_pages/chronicle.html`; its CSS and favicon live in
`assets/chronicle/`. It intentionally does not load al-folio's styles or scripts.
No new build dependencies are needed. Commit and push to `main` to use the normal
GitHub Actions deployment.
