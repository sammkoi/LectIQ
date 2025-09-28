"use client";
import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import SortSelection from "./SortSelection";


export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (ev) => {

  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col"
    >
      <div className="flex flex-row items-center search p-4 gap-2 rounded-2xl focus-within:shadow-sm">
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
  );
}
