import { error } from "@sveltejs/kit";
import { GHOST_URL, GHOST_API_KEY } from "$env/static/private";

async function checkData() {
  try {
    const response = await fetch(
      `${GHOST_URL}/ghost/api/content/tags/?key=${GHOST_API_KEY}`
    );
    return await response.json();
  } catch (e) {
    throw error(e);
  }
}
export async function load() {
  return {
    promise: checkData(),
  };
}
