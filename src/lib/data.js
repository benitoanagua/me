import GhostContentAPI from "@tryghost/content-api";
import { GHOST_URL, GHOST_API_KEY } from "$env/static/private";

const api = new GhostContentAPI({
  url: GHOST_URL,
  key: GHOST_API_KEY,
  version: "v5.0",
});

export async function getTags() {
  try {
    const tags = await api.tags.browse({ order: "slug ASC" });
    return {
      tags,
    };
  } catch (err) {
    console.error(err);
    return {
      error: new Error(`Could not get tags`),
    };
  }
}
