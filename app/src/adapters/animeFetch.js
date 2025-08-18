import { fetchData } from "./handleFetch.js";

export const fetchTopAnime = async (page = 1) => {
  try {
    const url = `https://api.jikan.moe/v4/top/anime?page=${page}`;
    const [data, error] = await fetchData(url);

    if (error) {
      // Use the enhanced error message from handleFetch
      throw new Error(
        error.userMessage ||
          "Failed to fetch top anime. Please try again later."
      );
    }

    return data;
  } catch (error) {
    // Re-throw with context for the specific endpoint
    const enhancedError = new Error(`Top Anime: ${error.message}`);
    enhancedError.originalError = error;
    enhancedError.endpoint = "top-anime";
    throw enhancedError;
  }
};

export const fetchTopCharacters = async (page) => {
  try {
    const url = `https://api.jikan.moe/v4/top/characters?page=${page}`;
    const [data, error] = await fetchData(url);

    if (error) {
      throw new Error(
        error.userMessage ||
          "Failed to fetch top characters. Please try again later."
      );
    }

    return data;
  } catch (error) {
    const enhancedError = new Error(`Top Characters: ${error.message}`);
    enhancedError.originalError = error;
    enhancedError.endpoint = "top-characters";
    throw enhancedError;
  }
};

export const fetchUpcoming = async (page) => {
  try {
    const url = `https://api.jikan.moe/v4/seasons/upcoming?page=${page}`;
    const [data, error] = await fetchData(url);

    if (error) {
      throw new Error(
        error.userMessage ||
          "Failed to fetch upcoming anime. Please try again later."
      );
    }

    return data;
  } catch (error) {
    const enhancedError = new Error(`Upcoming Anime: ${error.message}`);
    enhancedError.originalError = error;
    enhancedError.endpoint = "upcoming-anime";
    throw enhancedError;
  }
};

export const fetchAnimeSearch = async (searchQuery, page) => {
  try {
    if (!searchQuery || searchQuery.trim() === "") {
      throw new Error("Please enter a search term to find anime.");
    }

    const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(
      searchQuery.trim()
    )}&page=${page}`;
    const [data, error] = await fetchData(url);

    if (error) {
      throw new Error(
        error.userMessage ||
          "Failed to search for anime. Please try again later."
      );
    }

    return data;
  } catch (error) {
    const enhancedError = new Error(`Anime Search: ${error.message}`);
    enhancedError.originalError = error;
    enhancedError.endpoint = "anime-search";
    enhancedError.searchQuery = searchQuery;
    throw enhancedError;
  }
};
