import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs-mock";
import { CustomeHeader } from "./shared/components/CustomeHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState([
    "Mario Bros",
    "dragon ball",
  ]);
  const handleClickedTerm = (term: string) => {
    console.log(term);
  };

  const handleSearch = (query: string = "") => {
    const clearQuery = query.trim().toLocaleLowerCase();
    if (clearQuery.length === 0) return;
    const clearTerms = previousTerms.map((term) => {
      return term.trim().toLocaleLowerCase();
    });

    if (clearTerms.includes(clearQuery)) return;
    setPreviousTerms(
      [query.charAt(0).toUpperCase() + query.slice(1), ...previousTerms].splice(
        0,
        3
      )
    );
    console.log(clearQuery, clearTerms);
  };

  return (
    <>
      <CustomeHeader
        title="Buscador de Gifs"
        description="Descubre y comparte Gifs"
      />
      <SearchBar placeHolder="Buscar Gifs.." onQuery={handleSearch} />
      <PreviousSearches
        title="Busquedas Previas"
        searches={previousTerms}
        onLabelClicked={handleClickedTerm}
      />
      <GifList gifs={mockGifs} />
    </>
  );
};
