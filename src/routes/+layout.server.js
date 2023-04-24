import GhostContentAPI from "@tryghost/content-api";
import { GHOST_URL, GHOST_API_KEY } from "$env/static/private";

const api = new GhostContentAPI({
  url: GHOST_URL,
  key: GHOST_API_KEY,
  version: "v5.0",
});

export async function load() {
  const tags = await api.tags.browse().catch((e) => {
    throw error(e.status, e.message);
  });
  return {
    tags,
  };
}
