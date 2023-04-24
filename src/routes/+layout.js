// import GhostContentAPI from "@tryghost/content-api";
import { error } from "@sveltejs/kit";
// import { GHOST_URL, GHOST_API_KEY } from "$env/static/private";

async function checkData() {
  try {
    const response = await fetch(
      "https://elnacional.link/ghost/api/content/tags/?key=fff2aa11a8f827564141b78e9d"
    );
    return await response.json();
  } catch (error) {
    throw error(error);
  }
}
export async function load() {
  return {
    promise: checkData(),
  };
}
