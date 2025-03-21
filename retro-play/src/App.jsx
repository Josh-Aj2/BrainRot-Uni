// import { useEffect, useState } from "react";
// import "./App.css";
// import { Link } from "react-router-dom";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GiveMeList from "./components/GameListPage"; // Game list page
import TranslationAndJokePage from "./components/TranslationAndJokePage"; // Translation & Joke page

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
