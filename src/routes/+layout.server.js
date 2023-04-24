import GhostContentAPI from "@tryghost/content-api";
import { error } from "@sveltejs/kit";
// import { GHOST_URL, GHOST_API_KEY } from "$env/static/private";

export async function load() {
  const api = new GhostContentAPI({
    url: "https://elnacional.link",
    key: "fff2aa11a8f827564141b78e9d",
    version: "v5.0",
  });
  const tags = await api.tags.browse().catch((e) => {
    throw error(e);
    console.error(e);
  });
  return {
    tags,
  };
}
