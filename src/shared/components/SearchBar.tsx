import { useEffect, useState } from "react";

interface Props {
  placeHolder: string;
  onQuery: (query: string) => void;
}
export const SearchBar = ({ placeHolder, onQuery }: Props) => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
  };

  const handleKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onQuery(query);
      setQuery("");
    }
  };
  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        placeholder={placeHolder}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeydown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};
