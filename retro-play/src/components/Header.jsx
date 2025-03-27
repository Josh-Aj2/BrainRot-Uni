import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>BrainRot Universe</h1>

      <nav>
        <Link to="/handleview">Jokes & Translator</Link>
      </nav>
    </header>
  );
};

export default Header;
