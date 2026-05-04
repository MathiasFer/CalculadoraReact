import type { Anime } from "../../types/anime";

type Props = {
  anime: Anime;
};

const AnimeDetail = ({ anime }: Props) => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <div className="flex justify-center">
        <img
          src={anime.images.jpg.image_url}
          alt={anime.title}
          className="h-auto w-64 rounded shadow"
        />
      </div>
      <div className="flex max-w-2xl flex-col gap-4">
        <h1 className="text-2xl font-bold">{anime.title}</h1>

        <p className="text-sm text-gray-600">
          {anime.type ?? "—"} • {anime.episodes ?? "?"} eps •{" "}
          {anime.status ?? "—"}
        </p>

        <p className="text-sm leading-relaxed">
          {anime.synopsis || "No description available"}
        </p>

        <p className="font-semibold">
          Rating: {anime.score != null ? String(anime.score) : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default AnimeDetail;
