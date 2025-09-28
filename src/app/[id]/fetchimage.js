function generateURL(id) {
  return `https://image.glycosmos.org/snfg/png/${id}`
}

export default async function fetchGlycanImage({ glytoucanId }) {
  const res = await fetch(generateURL(glytoucanId), { cache: "default" });
  

}