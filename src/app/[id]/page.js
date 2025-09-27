
export default async function LectinPage({ params }) {
  const { id } = await params;

  // const res = await fetch(`http://localhost:3000/api/glycans`, { cache: "no-store" });
  // const data = await res.json();
  // console.log(data);

  return (
    <div>
      <h1 className="text-2xl font-[500] mb-4">Lectin {id}</h1>
      <p>This is the page for lectin with ID: {id}</p>
    </div>
  );
}