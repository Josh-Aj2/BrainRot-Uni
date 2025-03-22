// export const fetchData = async (url, options = {}) => {
//   try {
//     const response = await fetch(url, options);
//     const { ok, status, statusText, headers } = response;
//     //console.log("response:", { ok, status, statusText, headers });
//     if (!ok)
//       throw new Error(`Fetch failed with status - ${status}, ${statusText}`);

//     // figure out the type of response (JSON or non-JSON)
//     const isJson = (headers.get("content-type") || "").includes(
//       "application/json"
//     );

//     // use response.json() for JSON responses and response.text() for all other content types
//     const responseData = await (isJson ? response.json() : response.text());

//     // return a "tuple" representing [data, error]. Here the data exists and the error is null.
//     return [responseData, null];
//   } catch (error) {
//     console.warn(error);

//     // return a "tuple" representing [data, error]. Here the data is null and the error exists.
//     return [null, error];
//   }
// };

export async function fetchAnimeList() {
  try {
    const BASE_URL = "https://api.jikan.moe/v4/anime";
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch anime: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data; // Returns the list of anime
  } catch (error) {
    console.error("Error fetching anime:", error);
    return [];
  }
}
