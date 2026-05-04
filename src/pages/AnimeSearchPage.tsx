import { useState } from "react";
import { searchAnime } from "../api/animeApi";
import type { Anime } from "../types/anime";
import SearchBar from "../components/molecules/SearchBar";
import AnimeList from "../components/organisms/AnimeList";
import Button from "../components/atoms/Button";

type Props = {
  goHome: () => void;
  goDetail: (anime: Anime) => void;
};

const AnimeSearchPage = ({ goHome, goDetail }: Props) => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState<Anime[]>([]);

  const handleSearch = async () => {
    const results = await searchAnime(query);
    setList(results);
  };

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <h1 className="text-2xl font-bold text-center">Search Anime</h1>

      <div className="flex w-full max-w-md flex-col items-stretch gap-3">
        <SearchBar value={query} onChange={setQuery} />
        <Button text="Search" onClick={handleSearch} />
      </div>

      <div className="w-full">
        <AnimeList list={list} goDetail={goDetail} />
      </div>

      <button
        type="button"
        onClick={goHome}
        className="text-sm text-gray-500 hover:text-gray-800"
      >
        Back
      </button>
    </div>
  );
};

export default AnimeSearchPage;
