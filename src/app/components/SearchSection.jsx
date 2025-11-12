"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
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
  ignoreLocation: true,
};

export default function SearchSection({
  lectins,
  onSearch,
  onSearchActiveChange,
}) {
  const fuse = new Fuse(lectins, fuseOptions);
  const [query, setQuery] = useState("");
  const [queriedLectin, setQueriedLectin] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const sz = lectins.length;

  useEffect(() => {
    if (!query) {
      setQueriedLectin(lectins);
      return;
    }
    const filtered = fuse.search(query).map((res) => res.item);
    setQueriedLectin(filtered);
  }, [query]);

  // Track if search is active (focused or has query)
  useEffect(() => {
    const isActive = isFocused || query.length > 0;
    if (onSearchActiveChange) {
      onSearchActiveChange(isActive);
    }
  }, [isFocused, query, onSearchActiveChange]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (ev) => {
    setQuery(ev.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const isSearchActive = isFocused || query.length > 0;
  const hasQuery = query.length > 0;

  return (
    <div className={`flex flex-col gap-8 ${hasQuery ? "flex-1 min-h-0" : ""}`}>
      {/* todo: scroll only table body */}
      <form onSubmit={handleSubmit} className="flex flex-col flex-shrink-0 sticky top-0 z-10">
        <div className="flex flex-row items-center search p-4 gap-2 rounded-2xl focus-within:shadow-sm">
          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-base placeholder:text-muted-foreground pt-2 pb-2"
            placeholder="Search"
            value={query}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
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
      {lectins.length === 0 && (
        <div className="flex flex-row justify-center gap-4">
          {/* <h1>No lectins available.</h1> */}
        </div>
      )}
      {lectins.length > 0 && isFocused && (
        <SearchResults lectins={lectins.length > 0 ? queriedLectin : lectins} total={sz} className="" />
      )}
    </div>
  );
}
