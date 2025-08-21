"use client";
import { useState, useEffect } from "react";
import { Send } from "lucide-react";

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
      <div className="flex flex-row items-start search p-4 gap-2 rounded-2xl shadow-sm">
        <input
          type="text"
          className="flex-1 bg-transparent outline-none text-base placeholder:text-muted-foreground pt-2 pb-2"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SortSelection />
        {/* <button
          type="submit"
          className="ml-2 rounded-xl bg-primary px-3 py-2 text-white hover:bg-primary/90 transition"
        >
          <Send size={18} />
        </button> */}
      </div>
    </form>
  );
}


function SortSelection() {
  return (
    <select name="Sort_Motif" className="p-2 border-1 border-(--background-dim) color-(--text-dim) rounded-lg">
      <option value="">Sort Motif</option>
      <option value="2,6-sialyl-Sulfo-LN"> 2,6-sialyl-Sulfo-LN</option>
      <option value="2-Fucosyl-GM1"> 2-Fucosyl-GM1</option>
      <option value="3'-Sulfo-Lewis a"> 3'-Sulfo-Lewis a</option>
      <option value="3'-Sulfo-Lewis x"> 3'-Sulfo-Lewis x</option>
      <option value="3-Sialyl-LN (type 2)"> 3-Sialyl-LN (type 2)</option>
      <option value="4'-sulfated LDN"> 4'-sulfated LDN</option>
      <option value="6'-Sulfo-sialyl Lewis x"> 6'-Sulfo-sialyl Lewis x</option>
      <option value="6,6'-bisSulfo-Lewis x"> 6,6'-bisSulfo-Lewis x</option>
      <option value="6-Sialyl-GalNAc"> 6-Sialyl-GalNAc</option>
      <option value="6-Sulfo-sialyl Lewis x"> 6-Sulfo-sialyl Lewis x</option>
      <option value="A antigen (type 3)"> A antigen (type 3)</option>
      <option value="Asialo-GM1"> Asialo-GM1</option>
      <option value="Biantennary N-Glycan"> Biantennary N-Glycan</option>
      <option value="Bisecting N-Glycan"> Bisecting N-Glycan</option>
      <option value="Blood group A (type 1)"> Blood group A (type 1)</option>
      <option value="Blood group A (type 1) - Lewis b"> Blood group A (type 1) - Lewis b</option>
      <option value="Blood group A (type 2)"> Blood group A (type 2)</option>
      <option value="Blood group A (type 2) - Lewis y"> Blood group A (type 2) - Lewis y</option>
      <option value="Blood group A (type 4)"> Blood group A (type 4)</option>
      <option value="Blood group A1 (type 3)"> Blood group A1 (type 3)</option>
      <option value="Blood group A2 (A-associated H type 3)"> Blood group A2 (A-associated H type 3)</option>
      <option value="Blood group B (type 1)"> Blood group B (type 1)</option>
      <option value="Blood group B (type 1) - Lewis b"> Blood group B (type 1) - Lewis b</option>
      <option value="Blood group B (type 2)"> Blood group B (type 2)</option>
      <option value="Blood group H (type 1)"> Blood group H (type 1)</option>
      <option value="Blood group H (type 2)"> Blood group H (type 2)</option>
      <option value="Ceramide dihexosyl sulfate"> Ceramide dihexosyl sulfate</option>
      <option value="Cytolipin R"> Cytolipin R</option>
      <option value="Di-sialyl T antigen"> Di-sialyl T antigen</option>
      <option value="Diphosphorylated Man6"> Diphosphorylated Man6</option>
      <option value="Forssman glycolipid"> Forssman glycolipid</option>
      <option value="Fucosylated LDN"> Fucosylated LDN</option>
      <option value="GD1a"> GD1a</option>
      <option value="GD1b"> GD1b</option>
      <option value="GD2"> GD2</option>
      <option value="GD3"> GD3</option>
      <option value="GL-6 fucosylated"> GL-6 fucosylated</option>
      <option value="GL-7 globoseries ganglioside"> GL-7 globoseries ganglioside</option>
      <option value="GM1"> GM1</option>
      <option value="GM2"> GM2</option>
      <option value="GM3"> GM3</option>
      <option value="GM4"> GM4</option>
      <option value="GQ1b"> GQ1b</option>
      <option value="GT1a"> GT1a</option>
      <option value="GT1b"> GT1b</option>
      <option value="GT1c"> GT1c</option>
      <option value="GT2"> GT2</option>
      <option value="GT3"> GT3</option>
      <option value="GalNAc-Lactose Ceramide"> GalNAc-Lactose Ceramide</option>
      <option value="Galactosylceramide"> Galactosylceramide</option>
      <option value="Ganglioside"> Ganglioside</option>
      <option value="Gb5"> Gb5</option>
      <option value="Globo Glycosphingolipid"> Globo Glycosphingolipid</option>
      <option value="Globoside"> Globoside</option>
      <option value="Glucosylceramide"> Glucosylceramide</option>
      <option value="H antigen (type 3)"> H antigen (type 3)</option>
      <option value="High Mannosyl Core"> High Mannosyl Core</option>
      <option value="I antigen"> I antigen</option>
      <option value="LacdiNAc"> LacdiNAc</option>
      <option value="Lacto Glycosphingolipid"> Lacto Glycosphingolipid</option>
      <option value="Lactose Ceramide"> Lactose Ceramide</option>
      <option value="Lactosylceramide"> Lactosylceramide</option>
      <option value="Lactotriaosylceramide"> Lactotriaosylceramide</option>
      <option value="Lewis a"> Lewis a</option>
      <option value="Lewis b"> Lewis b</option>
      <option value="Lewis x"> Lewis x</option>
      <option value="Lewis y"> Lewis y</option>
      <option value="Lex-Lex"> Lex-Lex</option>
      <option value="Mannose a2 Dimer"> Mannose a2 Dimer</option>
      <option value="Monosulfated gangliotetraosylceramide"> Monosulfated gangliotetraosylceramide</option>
      <option value="N-Glycan"> N-Glycan</option>
      <option value="N-Glycan a6 Core Fucose"> N-Glycan a6 Core Fucose</option>
      <option value="Neolacto Glycosphingolipid"> Neolacto Glycosphingolipid</option>
      <option value="O-GalNAc"> O-GalNAc</option>
      <option value="O-GalNAc Core 1"> O-GalNAc Core 1</option>
      <option value="O-GalNAc Core 2"> O-GalNAc Core 2</option>
      <option value="O-GalNAc Core 3"> O-GalNAc Core 3</option>
      <option value="O-GalNAc Core 4"> O-GalNAc Core 4</option>
      <option value="O-GalNAc Core 6"> O-GalNAc Core 6</option>
      <option value="O-GalNAc Core 7"> O-GalNAc Core 7</option>
      <option value="O-GalNAc Core 8"> O-GalNAc Core 8</option>
      <option value="O-GalNAc Sialyl GalNAc Core 1"> O-GalNAc Sialyl GalNAc Core 1</option>
      <option value="O-Linked mannose"> O-Linked mannose</option>
      <option value="P1 antigen"> P1 antigen</option>
      <option value="Paragloboside"> Paragloboside</option>
      <option value="Paucimannose"> Paucimannose</option>
      <option value="Pk antigen"> Pk antigen</option>
      <option value="SDLex"> SDLex</option>
      <option value="SLex Core 2 O-glycan"> SLex Core 2 O-glycan</option>
      <option value="Sda/CT antigen"> Sda/CT antigen</option>
      <option value="Seminolipid"> Seminolipid</option>
      <option value="Sialyl Lewis a"> Sialyl Lewis a</option>
      <option value="Sialyl Lewis x"> Sialyl Lewis x</option>
      <option value="Sialyl T antigen"> Sialyl T antigen</option>
      <option value="Sialyl Tn antigen"> Sialyl Tn antigen</option>
      <option value="Sialylated LDN"> Sialylated LDN</option>
      <option value="Sulfo-isogloboside"> Sulfo-isogloboside</option>
      <option value="T antigen"> T antigen</option>
      <option value="Terminal LacDiNAc"> Terminal LacDiNAc</option>
      <option value="Terminal Mannose"> Terminal Mannose</option>
      <option value="Terminal N-Acetyl Galactosamine"> Terminal N-Acetyl Galactosamine</option>
      <option value="Terminal N-Acetyl Glucosamine"> Terminal N-Acetyl Glucosamine</option>
      <option value="Terminal alpha-Galactose"> Terminal alpha-Galactose</option>
      <option value="Tetraantennary N-Glycan"> Tetraantennary N-Glycan</option>
      <option value="Tn antigen"> Tn antigen</option>
      <option value="Triantennary 3' N-Glycan"> Triantennary 3' N-Glycan</option>
      <option value="Triantennary 6' N-Glycan"> Triantennary 6' N-Glycan</option>
      <option value="Triantennary N-Glycan"> Triantennary N-Glycan</option>
      <option value="Type 1 LN"> Type 1 LN</option>
      <option value="Type 1 LN2"> Type 1 LN2</option>
      <option value="Type 2 LN"> Type 2 LN</option>
      <option value="Type 2 LN2"> Type 2 LN2</option>
      <option value="VIM-2"> VIM-2</option>
      <option value="a-Gal antigen"> a-Gal antigen</option>
      <option value="a3 Sialyl Galactose"> a3 Sialyl Galactose</option>
      <option value="a6 Sialyl Galactose"> a6 Sialyl Galactose</option>
      <option value="cisGM1"> cisGM1</option>
      <option value="i antigen"> i antigen</option>
      <option value="Terminal N-Actyl Galactosamine"> Terminal N-Actyl Galactosamine</option>
      <option value="Tn Antigen"> Tn Antigen</option>
    </select>
  )
}