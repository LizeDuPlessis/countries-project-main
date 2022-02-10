import { Link } from "react-router-dom";

function Navbar({ title }) {
  return (
    <nav className="nav-group">
      <div>
        <Link to="/home">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
