const host = `http://localhost:8000/api`; // TODO: change to env variable

export async function LectinContent({ id }) {
  // const { id } = await params;

  const res = await fetch(`${host}/lectins/${id}`, { cache: "default" });
  if (!res.ok) {
    return (
      <div>
      <h1 className="text-2xl font-[500] mb-4">Error: 400</h1>
      <p>"{id}" is not a valid lectin.</p>
    </div>
    )
  }
  const data = await res.json();
  
  return (
    <div>
      <h1 className="text-2xl font-[500] mb-4">Lectin {id}</h1>
      <p>This is the page for lectin with ID: {id}</p>
    </div>
  );
}

// export function LectinContentWrapper({ id }) {
//   return <LectinContent id={id} />;
// }
