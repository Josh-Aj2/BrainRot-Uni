import Header from "./components/Header";
import AnimeList from "./pages/AnimePage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HandleView from "./pages/JokeNTranslatePage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AnimeList />} />
        <Route path="/handleview" element={<HandleView />} />
      </Routes>
    </Router>
  );
};

export default App;
