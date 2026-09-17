function generateURL(id) {
  // return `https://image.glycosmos.org/snfg/png/${id}`;
  return `https://api.glygen.org/glycan/image_svg/${id}/`;
}

export default async function fetchGlycanImage(glytoucanId) {
  try {
    const res = await fetch(generateURL(glytoucanId), { cache: "force-cache" });
    if (!res.ok) return null;
    return await res.text();
  } catch (err) {
    console.error(`Failed to fetch glycan image for ${glytoucanId}:`, err);
    return null;
  }
}
