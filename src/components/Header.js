import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/pic/logo.png" alt="Logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Solution">Solution</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Product">Product</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Contact">Contact US</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Services">Services</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Career">Career</Link></li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;