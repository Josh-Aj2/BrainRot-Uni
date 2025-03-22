//1;
import "./App.css";
import SecondPage from "./components/SecondPage";
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

//2
// import { Link, useNavigate } from "react-router-dom";
// import "./App.css";

// function SecondPage() {
//   const navigate = useNavigate(); // Hook for navigation

//   return (
//     <div className="second-page-container">
//       <div className="glass-container">
//         <h1>Welcome to Page 2</h1>

//         <div className="button-container">
//           {/* Go Back to Page 1 using <Link> */}
//           <Link to="/" className="back-link">
//             Go Back to Page 1
//           </Link>

//           {/* Go Back to Previous Page using navigate(-1) */}
//           <button className="back-button" onClick={() => navigate(-1)}>
//             Go Back
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SecondPage;
