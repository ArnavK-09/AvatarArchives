// imports
import { getCollection } from "astro:content";

// api route
export const prerender = false;

/**
 * Shuffles array contents
 * @param array unknown[]
 */
const shuffleArray = (array) => {
  // While there remain elements to shuffle.
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  // return
  return array;
};

// GET /api
export async function GET(request) {
  // Parse the query parameter from the URL
  const url = new URL(request.url);
  let queryParam = url.searchParams.get("query");

  // collections
  const avatars = await getCollection(
    "avatars",
    ({ data }) => data.draft == false,
  );
  // if nope
  if (!queryParam) {
    return new Response(JSON.stringify(shuffleArray(avatars)), { status: 406 });
  }

  // Split the query into parts
  const queryParts = queryParam.split(" ");

  // Define filters
  let featuredFilter;
  let tagFilter;
  let typeFilter;
  let latestFilter;

  // Loop through query parts to extract filters
  queryParts.forEach((part) => {
    part = part.toLowerCase();
    if (part.startsWith("featured")) {
      queryParam = queryParam.replace(part, "");
      featuredFilter = ["true", "false"].includes(
        part.replace("featured:", "").trim().toLowerCase(),
      )
        ? part.replace("featured:", "").toLowerCase().trim()
        : undefined;
    } else if (part.startsWith("type:")) {
      queryParam = queryParam.replace(part, "");
      typeFilter = ["static", "animated"].includes(
        part.replace("type:", "").trim().toLowerCase(),
      )
        ? part.replace("type:", "").toLowerCase().trim()
        : undefined;
    } else if (part.startsWith("tag:")) {
      queryParam = queryParam.replace(part, "");
      tagFilter =
        part.replace("tag:").trim().length > 0
          ? part.replace("tag:").trim()
          : undefined;
      tagFilter = tagFilter.replace("undefined", "");
    } else if (part.startsWith("latest:")) {
      queryParam = queryParam.replace(part, "");
      latestFilter = true;
    }
  });
  // Filter the avatars based on the query parameters
  let filteredAvatars = avatars.filter((avatar) => {
    // check
    const tagMatch = tagFilter
      ? avatar.data.tags
          ?.map((k) => k.trim().toLowerCase())
          .includes(tagFilter.toLowerCase())
      : true;
    const featuredMatch = featuredFilter
      ? avatar.data.featured
          .toString()
          .toLowerCase()
          .trim()
          .includes(featuredFilter.toLowerCase().trim())
      : true;
    const typeMatch = typeFilter
      ? avatar.data.type.toLowerCase() === typeFilter.toLowerCase()
      : true;
    // return
    return featuredMatch && typeMatch && tagMatch;
  });

  // results
  filteredAvatars = filteredAvatars.filter((a) =>
    a.data.title.trim().toLowerCase().includes(queryParam.toLowerCase().trim()),
  );

  // random 
  if(tagFilter == true && latestFilter == undefined) {
    filteredAvatars = shuffleArray(filteredAvatars)
  }

  // sort
  if (latestFilter !== undefined) {
    filteredAvatars = filteredAvatars.sort((a, b) => {
      return (
        new Date(b.data.published).valueOf() -
        new Date(a.data.published).valueOf()
      );
    });
  }
  return new Response(JSON.stringify(filteredAvatars));
}
