import { Link } from "react-router-dom";

function SecondPage() {
  return (
    <div>
      <h1>Welcome to Page 2</h1>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/" style={{ fontsize: "24px", textDecoration: "none" }}>
          Go back
        </Link>
      </div>
    </div>
  );
}

export default SecondPage;
