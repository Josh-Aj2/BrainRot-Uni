import { fetchData } from "./handleFetch.js";

export const fetchTopAnime = async (page = 1) => {
  const url = `https://api.jikan.moe/v4/top/anime?page=${page}`;
  const [data, error] = await fetchData(url); // Use fetchData here

  if (error) throw new Error("Failed to fetch anime"); // Handle error

  return data; // Return the fetched anime data
};

export const fetchTopCharacters = async (page) => {
  const url = `https://api.jikan.moe/v4/top/characters?page=${page}`;
  const [data, error] = await fetchData(url);

  if (error) throw new Error("Failed to fetch");

  return data;
};

export const fetchUpcoming = async (page) => {
  const url = `https://api.jikan.moe/v4/seasons/upcoming?page=${page}`;
  const [data, error] = await fetchData(url);

  if (error) throw new Error("Failed to fetch");

  return data;
};

export const fetchAnimeSearch = async (searchQuery, page) => {
  const url = `https://api.jikan.moe/v4/anime?q=${searchQuery}&page=${page}`;
  const [data, error] = await fetchData(url);

  if (error) throw new Error("Failed to Fetch");

  return data;
};
