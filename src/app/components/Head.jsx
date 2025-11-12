export default function Head({ className }) {
  return (
    <>
      <div className="flex flex-row text-(--text) justify-between w-[100%] cursor-default">
        <section>
          <h1 className="text-6xl font-medium font-['Kameron']">LectIQ</h1>
          <h2 className="text-2xl font-['Kameron']">
            The Quantitative Lectin-Glycan Affinity Database
          </h2>
          <p className="mt-2 font-['Geist'] text-sm font-medium max-w-lg">
            {/* LectIQ is a searchable database of quantitative measurements of lectin–glycan affinities determined by native mass spectrometry (nMS). It provides a centralized resource for exploring how glycan-binding proteins (GBPs)—including lectins, antibodies, and the carbohydrate-binding modules of carbohydrate-active enzymes—recognize glycans. By compiling dissociation constants (Kd) from rigorously curated nMS studies, LectIQ enables direct comparison of affinities across lectin families and glycan motifs. The database offers insights into specificity and cooperativity in glycan recognition, supporting efforts to uncover the quantitative principles underlying glycan-mediated recognition in biology, immunity, and host–pathogen interactions  */}
            {/* Database search engine for binding data for carbohydrate libraries and compounds.
          This is a living database, with data primarily sourced from <a href="https://pubs.acs.org/doi/10.1021/acs.analchem.6b05169">these papers</a>. */}
            {/* TODO: LINK PAPERS */}
          </p>
        </section>
        <section className="w-fit text-(--text-dim) font-medium text-sm cursor-default">
          <a href="https://www.ualberta.ca/en/index.html">
            University of Alberta
          </a>
        </section>
      </div>
      <p className="mt-2 font-['Geist'] text-sm font-medium max-w-4xl">
        LectIQ is a searchable database of quantitative measurements of
        lectin–glycan affinities determined by native mass spectrometry (nMS).
        It provides a centralized resource for exploring how glycan-binding
        proteins (GBPs)—including lectins, antibodies, and the
        carbohydrate-binding modules of carbohydrate-active enzymes—recognize
        glycans. By compiling dissociation constants (K<sub>d</sub>) from rigorously
        curated nMS studies, LectIQ enables direct comparison of affinities
        across lectin families and glycan motifs. The database offers insights
        into specificity and cooperativity in glycan recognition, supporting
        efforts to uncover the quantitative principles underlying
        glycan-mediated recognition in biology, immunity, and host–pathogen
        interactions
        {/* Database search engine for binding data for carbohydrate libraries and compounds.
      This is a living database, with data primarily sourced from <a href="https://pubs.acs.org/doi/10.1021/acs.analchem.6b05169">these papers</a>. */}
        {/* TODO: LINK PAPERS */}
      </p>
    </>
  );
}
