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
        {/* Define routes for the pages */}
        <Route path="/" element={<GiveMeList />} />
        <Route path="/translate" element={<TranslationAndJokePage />} />
      </Routes>
    </Router>
  );
}

export default App;
