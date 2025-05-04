# novelscrape

## Test with

- Battle through the Heavens:
  https://novelbuddy.com/novel/battle-through-the-heavens/chapter-1-genius-no-more
- Renegade Immortal:
  https://novelbuddy.com/novel/renegade-immortal/chapter-1-leaving-home

## Helpful repos

- Aniscrape (cheerio): https://github.com/bjesuiter/aniscrape
- TK Suche Scraper (mit denocheerio):
  https://github.com/bjesuiter/tk-suche-scraper
- Deno Scraping Template (puppeteer):
  https://github.com/codemonument/deno-scraping-template

---

# Repo Log

## 01 Fresh Setup

- https://fresh.deno.dev/ with fresh 1.6

## Fresh server starten, z.b. deno task start, deno task ... im terminal mit Strg+ links click link öffnen: Local: http://localhost:8000/

# Comments

<!-- gesamtinahlt des kapitels in variable speichern -->

const contentNovelChapter= document.queryselector("div.content-inner")

<!-- einfacher die p einzeln auslesen.= reiner text value -->

<!-- wert als text auslesen mit .innertext -->

contentNovelChapter.innerText

<!-- cheerio library google nachlesen zum FOrmatieren des Texytes, Lesbarkeit optimieren, aufhübschen -->

<!-- load function erstellen, also parseNovelbuddy function aufteilen anch aufgaben -->

Nächster Schritt: Pfeil Button Rechts auf novelbuddy seite am ende des kapitels
auslesen analog zu vorher, sh. parseNovelbuddy function

<!-- code einfügen in MD mit backticks und angabe der programmiersprache -->

```ts
const contentNovelChapter = document.queryselector("div.content-inner");
```
