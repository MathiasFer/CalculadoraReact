import { useEffect, useState } from "react";

function App3({ goHome, goDetail }) {
  const [query, setQuery] = useState("");
  const [animelist, setAnimeList] = useState([]);

  useEffect(() => {
    if (query.trim() === "") {
      setAnimeList([]);
      return;
    }

    const timeout = setTimeout(() => {
      fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=8`)
        .then(res => res.json())
        .then(data => setAnimeList(data.data))
        .catch(err => console.log(err));
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="p-5">

      <h1 className="text-2xl font-semibold text-center mb-6">
        Search Anime
      </h1>

      {/* search */}
      <div className="flex justify-center gap-2 mb-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search anime..."
          className="border p-2 rounded w-64"
        />

        <button className="px-4 py-2 bg-black text-white rounded">
          Search
        </button>
      </div>

      {/* grid */}
      <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
        {animelist.map((anime) => (
          <div
            key={anime.mal_id}
            onClick={() => goDetail(anime)}
            className="bg-white rounded-lg p-3 shadow-sm cursor-pointer transition hover:scale-105"
          >
            {/* top */}
            <div className="flex items-center">
              <img
                src={anime.images.jpg.image_url}
                className="w-16 h-24 object-cover rounded"
              />

              <h3 className="ml-3 text-sm font-semibold">
                {anime.title}
              </h3>
            </div>

            {/* middle */}
            <p className="text-xs mt-2 text-gray-600">
              {anime.synopsis
                ? anime.synopsis.slice(0, 100) + "..."
                : "No description"}
            </p>
          </div>
        ))}
      </div>

      {/* back */}
      <div className="flex justify-center mt-6">
        <button
          onClick={goHome}
          className="text-sm text-gray-500"
        >
          Back
        </button>
      </div>

    </div>
  );
}

export default App3;