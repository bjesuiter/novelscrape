import { parseNovelbuddy } from "../src/parseNovelbuddy.ts";
// function import um die function parseNovelbuddy aufrufen zu können,
// die function downloaded das html auf den server in der variablen als string
export default async function Home() {
  const text = await parseNovelbuddy();
  // textSize in px
  const textSize = 32;

  return (
    <div style={"font-size:" + textSize + "px"} class="">
      {text}
    </div>
  );
}
