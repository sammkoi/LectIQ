"use client";
import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import SortSelection from "./SortSelection";
import SearchResults from "./SearchResults";
import Fuse from "fuse.js";
// import { motion } from "motion/react";

const fuseOptions = {
  includeScore: true, // Include a score indicating similarity
  threshold: 0.2,
  location: 0,
  distance: 100,
  ignoreLocation: true
}

export default function SearchBar({ lectins, onSearch }) {
  const fuse = new Fuse(lectins, fuseOptions);
  const [query, setQuery] = useState("");
  const [queriedLectin, setQueriedLectin] = useState([]);
  const sz = lectins.length;
  useEffect(() => {
    if (!query) {
      setQueriedLectin(lectins);
      return; 
    }
    const filtered = fuse.search(query).map(res => res.item);
    setQueriedLectin(filtered);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  // TODO: add animation for search bar focus
  const handleChange = (ev) => {

  };
  return (<>
    <form
      onSubmit={handleSubmit}
      className="flex flex-col"
    >
      <div className="flex flex-row items-center search p-4 gap-2 rounded-2xl focus-within:shadow-sm transition ease-in-out">
        <input
          type="text"
          className="flex-1 bg-transparent outline-none text-base placeholder:text-muted-foreground pt-2 pb-2"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <SortSelection /> */}
        {/* <button
          type="submit"
          className="ml-2 rounded-xl px-3 py-2 hover:text-white hover:bg-primary/90 transition"
        >
          <Send size={18} />
        </button> */}
      </div>
    </form>
    {(lectins.length === 0) && (
      <div className="flex flex-row justify-center gap-4">
        <h1>No lectins available.</h1>
      </div>
    )}
    {(lectins.length > 0) && (
      <SearchResults lectins={queriedLectin} total={sz} />
    )}
  </>);
}
