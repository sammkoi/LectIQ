function generateURL(id) {
  // return `https://image.glycosmos.org/snfg/png/${id}`;
  return `https://api.glygen.org/glycan/image_svg/${id}/`;
}

export default async function fetchGlycanImage(glytoucanId) {
  const svg = await fetch(generateURL(glytoucanId), { cache: "default" }).then(
    (res) => res.text()
  );
  // console.log(svg);
  // return encodeURIComponent(svg);
  return svg;
}
