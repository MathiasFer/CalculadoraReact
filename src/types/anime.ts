export type Anime = {
  mal_id: number;
  title: string;
  synopsis?: string;
  type?: string;
  episodes?: number | null;
  status?: string;
  score?: number | null;
  images: {
    jpg: {
      image_url: string;
    };
  };
};