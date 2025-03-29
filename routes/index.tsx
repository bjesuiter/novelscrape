import { parseNovelbuddy } from "../src/parseNovelbuddy.ts";
// function import um die function parseNovelbuddy aufrufen zu können,
// die function downloaded das html auf den server in der variablen als string
export default async function Home() {
  await parseNovelbuddy();
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
    </div>
  );
}
