import * as cheerio from "cheerio";

export async function parseNovelbuddy() {
  /* async: muss asynchron sein wegen dem nachfolgenden "await"
  HTML der Seite Novelbuddy Novelname (z.b. Renegade Immortal) downloaden
gesamtinhalt des kapitels in variable speichern
wert als text auslesen mit .innertext

  */
  //   const contentNovelChapter = document.queryselector("div.content-inner");
  //   contentNovelChapter.innerText;
  const url =
    "https://novelbuddy.com/novel/renegade-immortal/chapter-478-seeking-dao";
  const response = await fetch(url);
  const html = await response.text();
  //   console.log(html);
  //   cheerio parsed html, elemente suchen mit queryselector möglich
  const $ = cheerio.load(html);

  const contentNovelChapter = $("div.content-inner");

  const text = contentNovelChapter.text();
  console.log(text);
  return text;
}
