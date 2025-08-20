import Image from "next/image";

function Head() {
  return (
    <div className="flex flex-row text-(--text) justify-between w-[100%] cursor-default">
      <section>
        <h1 className="text-6xl font-['Kameron']">
        ChemDB Search
        </h1>
        <p className="mt-2 font-['Geist'] text-sm font-medium max-w-lg">
          Database search engine for binding data for carbohydrate libraries and compounds.
          This is a living database, with data primarily sourced from <a>these papers</a>.
          {/* TODO: LINK PAPERS */}
        </p>
      </section>
      <section className="text-(--text-dim) font-medium text-sm cursor-default">
        <p>University of Alberta</p>
      </section>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Head />
      <div className="flex flex-col m-8 mt-12">
        <div className="search p-4 pl-8 pr-8">
          Search
        </div>
        hello world
      </div>

    </div>
  );
}
