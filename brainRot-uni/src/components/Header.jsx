import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <h1>BrainRot Universe</h1>

      <nav>
        <Link to="/handleview">Jokes & Translator</Link>
        {location.pathname === "/handleview" && (
          <Link to="/">
            <button className="home-btn">Back To Anime</button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
