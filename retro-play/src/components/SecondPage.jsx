1;
import { Link } from "react-router-dom";

function SecondPage() {
  return (
    <div className="second-page-container">
      <h1>Welcome to Page 2</h1>
      <div className="button-container">
        <Link to="/" className="back-link">
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default SecondPage;

//2
// import { Link } from "react-router-dom";
// import "./secondPage.css"; // Make sure to link your CSS file

// function SecondPage() {
//   return (
//     <div className="page-container">
//       <div className="glass-container">
//         <h1>Welcome to Page 2</h1>
//         <Link to="/" style={{ fontSize: "24px", textDecoration: "none" }}>
//           Go back
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default SecondPage;

//3
// import { Link } from "react-router-dom";
// import "./app.css"; // Ensure your CSS file is imported

// function SecondPage() {
//   return (
//     <div className="second-page-container">
//       <div className="glass-container">
//         <h1>Welcome to Page 2</h1>

//         <div className="button-container">
//           <Link to="/" className="back-link">
//             Go Back to Home
//           </Link>
//           <Link to="/page1" className="back-link">
//             Go Back to Page 1
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SecondPage;
