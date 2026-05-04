import type { Anime } from "../../types/anime";

type Props = {
  anime: Anime;
  onClick: () => void;
};

const AnimeCard = ({ anime, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="p-3 bg-white rounded shadow hover:scale-105 transition cursor-pointer"
    >
      <div className="flex gap-2">
        <img
          src={anime.images.jpg.image_url}
          className="w-16 h-24 object-cover rounded"
        />
        <h4 className="text-sm font-semibold">
          {anime.title}
        </h4>
      </div>

      <p className="text-xs mt-2">
        {anime.synopsis
          ? anime.synopsis.slice(0, 80) + "..."
          : "No description"}
      </p>
    </div>
  );
};

export default AnimeCard;