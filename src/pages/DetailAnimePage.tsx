import type { Anime } from "../types/anime";
import AnimeDetail from "../components/organisms/AnimeDetail";
import Button from "../components/atoms/Button";

type Props = {
  anime: Anime | null;
  goBack: () => void;
};

const DetailAnimePage = ({ anime, goBack }: Props) => {
  if (!anime) {
    return (
      <div className="flex w-full flex-col items-center justify-center gap-4 py-12">
        <h2 className="text-lg text-gray-600">No data</h2>
        <Button text="Back" onClick={goBack} />
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <Button text="← Back" onClick={goBack} />

      <AnimeDetail anime={anime} />
    </div>
  );
};

export default DetailAnimePage;
