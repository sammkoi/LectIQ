import Image from "next/image";
import { Search } from 'lucide-react';
import SearchBar from "./components/SearchBar";

export const host = `http://localhost:8000/api`; // TODO: change to env variable

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

export default async function Home() {
  const data = await fetch(`${host}/lectins`).then((res) => res.json());
  const lectins = data.lectins;

  return (
    <>
    <div className="hidden md:flex flex-col w-full">
      <Head />
      <div className="flex flex-col m-8 mt-12">
        <SearchBar lectins={lectins} />
      </div>

    </div>
    {/* TODO: reactive */}
    <div className="flex w-full h-full md:hidden justify-center items-center">
      <p className="center font-medium">Please open on a larger screen</p>
    </div>
    </>
  );
}
