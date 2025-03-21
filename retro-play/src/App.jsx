// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import GiveMeList from "./components/GameListPage"; // Game list page
// import TranslationAndJokePage from "./components/TranslationAndJokePage"; // Translation & Joke page

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Define routes for the pages */}
//         <Route path="/" element={<GiveMeList />} />
//         <Route path="/translate" element={<TranslationAndJokePage />} />
//       </Routes>
//     </Router>
//   );
// }

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GiveMeList from "./components/GameListPage";
import TranslationAndJokePage from "./components/TranslationAndJokePage";
import SecondPage from "./components/SecondPage"; // Import Second Page

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Games List Page */}
        <Route path="/" element={<GiveMeList />} />

        {/* Translation and Joke Page */}
        <Route path="/translate" element={<TranslationAndJokePage />} />

        {/* Second Page for Pagination */}
        <Route path="/page2" element={<SecondPage />} />
      </Routes>
    </Router>
  );
}

export default App;
