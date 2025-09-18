import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
// import { mockGifs } from "./mock-data/gifs-mock";
import { CustomeHeader } from "./shared/components/CustomeHeader";
import { SearchBar } from "./shared/components/SearchBar";

import { useGifs } from "./hooks/useGifs";

export const GifsApp = () => {
  const { gifs, previousTerms, handleSearch, handleClickedTerm } = useGifs();

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
      <GifList gifs={gifs} />
    </>
  );
};
