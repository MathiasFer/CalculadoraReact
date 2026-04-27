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
    <div style={{ padding: "20px", textAlign: "center" }}>
      
      <h1>Search Anime</h1>

      {/* search bar */}
      <div style={{ marginBottom: "20px" }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search anime..."
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginRight: "10px"
          }}
        />
        <button
          style={{
            padding: "10px 15px",
            borderRadius: "8px",
            border: "none",
            background: "#333",
            color: "white",
            cursor: "pointer"
          }}
        >
          Search
        </button>
      </div>

      {/* grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          padding:"10px"
        }}
      >
        {animelist.map((anime) => (
          <div
            key={anime.mal_id}
            onClick={()=>goDetail(anime)}
            style={{
              borderRadius: "10px",
              padding: "10px",
              background: "#f9f9f9",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              cursor: "pointer",
              transition: "transform 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            {/* top */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={anime.images.jpg.image_url}
                style={{
                  width: "70px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "6px"
                }}
              />

              <h4 style={{ marginLeft: "10px", fontSize: "14px" }}>
                {anime.title}
              </h4>
            </div>

            {/* middle */}
            <p style={{ fontSize: "12px", marginTop: "10px" }}>
              {anime.synopsis
                ? anime.synopsis.slice(0, 100) + "..."
                : "No description"}
            </p>
          </div>
        ))}
      </div>

      <br />

      <button onClick={goHome}>Back</button>
    </div>
  );
}

export default App3;