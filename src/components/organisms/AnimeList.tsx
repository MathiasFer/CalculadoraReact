import type { Anime } from "../../types/anime";
import AnimeCard from "../molecules/AnimeCard";

type Props = {
  list: Anime[];
  goDetail: (anime: Anime) => void;
};

const AnimeList = ({ list, goDetail }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {list.map((anime) => (
        <AnimeCard
          key={anime.mal_id}
          anime={anime}
          onClick={() => goDetail(anime)}
        />
      ))}
    </div>
  );
};

export default AnimeList;
