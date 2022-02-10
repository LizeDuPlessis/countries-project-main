import { Link } from "react-router-dom";

function Navbar({ title }) {
  return (
    <nav className="nav-group">
      <div className="home">
        <Link style={{ textDecoration: "none" }} to="/home">
          Home
        </Link>
      </div>
      <div className="about">
        <Link style={{ textDecoration: "none" }} to="/about">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
