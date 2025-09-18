import { useRef, useState } from "react";
import { getGifsByQuery } from "../gifs/actions/get-gifs-by-query.action";
import type { Gif } from "../gifs/interfaces/gif.interface";

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);
  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleClickedTerm = async (term: string) => {
    // console.log(term);
    // console.log(gifsCache);
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }
    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string = "") => {
    const clearQuery = query.trim().toLocaleLowerCase();
    if (clearQuery.length === 0) return;
    const clearTerms = previousTerms.map((term) => {
      return term.trim().toLocaleLowerCase();
    });

    if (clearTerms.includes(clearQuery)) return;
    setPreviousTerms([query, ...previousTerms].splice(0, 3));
    const gifs = await getGifsByQuery(query);
    setGifs(gifs);
    gifsCache.current[clearQuery] = gifs;
  };
  return {
    gifs,
    previousTerms,
    handleClickedTerm,
    handleSearch,
  };
};
