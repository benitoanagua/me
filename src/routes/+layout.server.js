// import { error } from "@sveltejs/kit";
import { getTags } from "../lib/data";

export async function load() {
  const { tags } = await getTags();

  return {
    tags: tags || null,
  };
}

// async function checkData() {
//   try {
//     const response = await fetch(
//       `${GHOST_URL}/ghost/api/content/tags/?key=${GHOST_API_KEY}`
//     );
//     return await response.json();
//   } catch (e) {
//     throw error(e);
//   }
// }
// export async function load() {
//   return {
//     promise: checkData(),
//   };
// }
