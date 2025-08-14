import { fetchData } from "./handleFetch";

export const fetchTranslate = async (text, language) => {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
    text
  )}&langpair=en|${language}`;
  const [data, error] = await fetchData(url);

  if (error)
    throw new Error(
      "Translation request failed. Please check your internet connection."
    );

  return data;
};

export const fetchJoke = async () => {
  const url = "https://official-joke-api.appspot.com/random_joke";
  const [data, error] = await fetchData(url);

  //console.log("JOKE DATA:", data);

  if (error) throw new Error("Failed to fetch");

  return data;
};
