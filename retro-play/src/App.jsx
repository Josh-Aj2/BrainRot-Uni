import { useEffect, useState } from "react";
import "./App.css";
import fetchData from "./adapters/fetchdata";
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GameListPage } from "./adapters"; // Game list page
//import TranslationAndJokePage from "./pages/TranslationAndJokePage"; // Translation & Joke page

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for the pages */}
        <Route path="/" element={<GameListPage />} />
        <Route path="/translate" element={<TranslationAndJokePage />} />
      </Routes>
    </Router>
  );
}

export default App;

// function App() {
//   // Create state for the fetched data
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const [result, err] = await fetchData(
//           "https://free-to-play-games-database.p.rapidapi.com/api/games",
//           {
//             method: "GET",
//             headers: {
//               "x-rapidapi-key":
//                 "5a29b66daemsh4d2c0f82c1cfb33p1fed14jsnf4306b9497e0",
//               "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
//             },
//           }
//         );
//         if (err) {
//           setError(err.message);
//           return;
//         }

//         // CHECKING DATA
//         console.log(result[0]);
//         console.log(result[0].game_url);
//         // CHECKING DATA

//         setData(result);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getData();
//   }, []);

//   // Conditional Rendering

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h1>Free-to-Play Games</h1>
//       <ol>
//         {/* Check if data is available */}
//         {data && data.length > 0 ? (
//           data.map((game) => (
//             <li key={game.id}>
//               {game.title} - {game.genre}
//             </li>
//           ))
//         ) : (
//           <li>No games found.</li>
//         )}
//       </ol>
//     </div>
//   );
// }

// import { useState } from "react";

// function TranslationPage() {
//   const [text, setText] = useSTate("");
//   const [translatedText, setTranslatedText] = useState("");
//   const [langauge, setLangauge] = useState("es");
//   const [error, setError] = useState(null);

//   const translateText = async () => {
//     try {
//       const response = await fetch("https://libretranslate.com/translate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           q: text,
//           source: "en",
//           target: language,
//         }),
//       });
//       const result = await response.json();
//       setTranslatedText(result.translatedText);
//     } catch (error) {
//       setError("Translation failed. Please try again.");
//     }
//   };
//   return (
//     <div className="app">
//       <h1>Text Translator</h1>
//       <label htmlFor="text-input">Enter text to translate:</label>
//       <textarea
//         id="text-input"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         rows="4"
//         cols="50"
//       ></textarea>
//       <br />
//       <label htmlFor="language-select">Choose Language:</label>
//       <select
//         id="language-select"
//         value={language}
//         onChange={(e) => setLangauge(e.target.value)}
//       >
//         <option value="es">Spanish</option>
//         <option value="fr">French</option>
//         <option value="de">German</option>
//         <option value="it">Italian</option>
//         <option value="pt">Portuguese</option>
//       </select>
//       <br />
//       <button onClick={translateText}>Translate</button>
//       {error && <div className="error">{error}</div>}
//       {translatedText && (
//         <div>
//           <h2>Translated Text:</h2>
//           <p2>{translatedText}</p2>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
