"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SearchSection from "./SearchSection";
import Head from "./Head";

export default function HomeContent({ lectins }) {
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <div className="hidden md:flex flex-col w-full h-full">
      <div
        // TODO: use motion.div instead of style
        style={{
          maxHeight: isSearchActive ? 0 : "500px",
          overflow: "hidden",
          marginBottom: isSearchActive ? 0 : "2rem",
          transition:
            "max-height 0s, margin-bottom 0s, opacity 0.3s ease-in-out",
          opacity: isSearchActive ? 0 : 1,
        }}
      >
        <Head />
      </div>
      <div
        // todo: motion.div animate
        className="flex flex-col overflow-scroll"
        // style={{
        //   flex: isSearchActive ? "1 1 0%" : "0 1 auto",
        //   minHeight: isSearchActive ? 0 : "auto",
        //   padding: isSearchActive ? "1rem" : "2rem",
        //   paddingTop: isSearchActive ? "1rem" : "3rem",
        //   gap: isSearchActive ? "0" : "1rem",
        //   transition: "padding 0s, margin 0s, flex 0s, min-height 0s, gap 0s",
        // }}
      >
        <SearchSection
          lectins={lectins}
          onSearchActiveChange={setIsSearchActive}
        />
      </div>
    </div>
  );
}
