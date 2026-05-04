export const searchAnime = async (query: string) => {
  const text = query.trim();

  if (text === "") {
    return [];
  }

  const response = await fetch(
    `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(text)}&limit=8`
  );

  if (!response.ok) {
    return [];
  }

  const json = await response.json();

  if (Array.isArray(json.data)) {
    return json.data;
  }

  return [];
};