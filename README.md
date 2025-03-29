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

---

# Comments

<!-- gesamtinahlt des kapitels in variable speichern -->

const contentNovelChapter= document.queryselector("div.content-inner")

<!-- wert als text auslesen mit .innertext -->

contentNovelChapter.innerText

<!-- cheerio library google nachlesen zum FOrmatieren des Texytes, Lesbarkeit optimieren, aufhübschen -->
