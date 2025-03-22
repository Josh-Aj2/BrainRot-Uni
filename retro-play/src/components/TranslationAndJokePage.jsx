//1
// import { useState, useEffect } from "react";
// import axios from "axios";

// function TranslationAndJokePage() {
//   const [text, setText] = useState("");
//   const [translatedText, setTranslatedText] = useState("");
//   const [language, setLanguage] = useState("es"); // Default to Spanish
//   const [error, setError] = useState(null);

//   // Random joke state
//   const [joke, setJoke] = useState(null);

//   // State to manage the visibility of each feature
//   const [showTranslation, setShowTranslation] = useState(true);
//   const [showJoke, setShowJoke] = useState(true);

//   // Fetch translation
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

//   // Fetch random joke
//   const fetchJoke = async () => {
//     try {
//       const response = await axios.get(
//         "https://official-joke-api.appspot.com/random_joke"
//       );
//       setJoke(response.data.setup + " " + response.data.punchline);
//     } catch (error) {
//       setJoke("Failed to fetch a joke. Please try again.");
//     }
//   };

//   // Trigger joke fetch when component mounts
//   useEffect(() => {
//     fetchJoke();
//   }, []);

//   return (
//     <div className="app">
//       <h1>Text Translator and Random Joke Generator</h1>

//       <div>
//         <label>
//           <input
//             type="checkbox"
//             checked={showTranslation}
//             onChange={() => setShowTranslation(!showTranslation)}
//           />
//           Show Translation
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={showJoke}
//             onChange={() => setShowJoke(!showJoke)}
//           />
//           Show Joke
//         </label>
//       </div>

//       {/* Translation Section */}
//       {showTranslation && (
//         <div className="translation-section">
//           <h2>Translate Text</h2>
//           <label htmlFor="text-input">Enter text to translate:</label>
//           <textarea
//             id="text-input"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             rows="4"
//             cols="50"
//           ></textarea>
//           <br />
//           <label htmlFor="language-select">Choose Language: </label>
//           <select
//             id="language-select"
//             value={language}
//             onChange={(e) => setLanguage(e.target.value)}
//           >
//             <option value="es">Spanish</option>
//             <option value="fr">French</option>
//             <option value="de">German</option>
//             <option value="it">Italian</option>
//             <option value="pt">Portuguese</option>
//           </select>
//           <br />
//           <button onClick={translateText}>Translate</button>

//           {error && <div className="error">{error}</div>}

//           {translatedText && (
//             <div>
//               <h2>Translated Text:</h2>
//               <p>{translatedText}</p>
//             </div>
//           )}
//         </div>
//       )}

//       {/* Joke Section */}
//       {showJoke && (
//         <div className="joke-section">
//           <h2>Random Joke</h2>
//           <p>{joke}</p>
//           <button onClick={fetchJoke}>Get Another Joke</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default TranslationAndJokePage;

//2
import { useState, useEffect } from "react";
import axios from "axios";

function TranslationAndJokePage() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [language, setLanguage] = useState("es"); // Default to Spanish
  const [error, setError] = useState(null);

  // Random joke state
  const [joke, setJoke] = useState(null);

  // State to manage the visibility of each feature
  const [showTranslation, setShowTranslation] = useState(true);
  const [showJoke, setShowJoke] = useState(true);

  // Fetch translation using MyMemory API
  const translateText = async () => {
    if (!text.trim()) {
      setError("Please enter some text to translate.");
      return;
    }
    setError(null);

    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          text
        )}&langpair=en|${language}`
      );

      const result = await response.json();
      setTranslatedText(result.translatedText);
    } catch (error) {
      setError(
        "Translation request failed. Please check your internet connection."
      );
    }
  };

  // Fetch random joke
  const fetchJoke = async () => {
    try {
      const response = await axios.get(
        "https://official-joke-api.appspot.com/random_joke"
      );
      setJoke(response.data.setup + " " + response.data.punchline);
    } catch (error) {
      setJoke("Failed to fetch a joke. Please try again.");
    }
  };

  // Trigger joke fetch when component mounts
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app">
      <h1>Text Translator and Random Joke Generator</h1>

      <div>
        <label>
          <input
            type="checkbox"
            checked={showTranslation}
            onChange={() => setShowTranslation(!showTranslation)}
          />
          Show Translation
        </label>
        <label>
          <input
            type="checkbox"
            checked={showJoke}
            onChange={() => setShowJoke(!showJoke)}
          />
          Show Joke
        </label>
      </div>

      {/* Translation Section */}
      {showTranslation && (
        <div className="translation-section">
          <h2>Translate Text</h2>
          <label htmlFor="text-input">Enter text to translate:</label>
          <textarea
            id="text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="4"
            cols="50"
          ></textarea>
          <br />
          <label htmlFor="language-select">Choose Language: </label>
          <select
            id="language-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="pt">Portuguese</option>
          </select>
          <br />
          <button onClick={translateText}>Translate</button>

          {error && <div className="error">{error}</div>}

          {translatedText && (
            <div>
              <h2>Translated Text:</h2>
              <p>{translatedText}</p>
            </div>
          )}
        </div>
      )}

      {/* Joke Section */}
      {showJoke && (
        <div className="joke-section">
          <h2>Random Joke</h2>
          <p>{joke}</p>
          <button onClick={fetchJoke}>Get Another Joke</button>
        </div>
      )}
    </div>
  );
}

export default TranslationAndJokePage;
