import { Link } from "react-router-dom";
import Footer from "./footer";

function Navbar() {
  return (
    <div>
      <nav className="bat-navbar">
      <div className="nav-left">
        <img 
          src="data/assets/Logo.png" 
          alt="Batman Logo"
          className="bat-logo"
        />
        <h2 className="nav-title">Learn with Batman</h2>
      </div>
      <div className="nav-right">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/Course">Courses</Link>
        <Link className="nav-link" to="/About">About</Link>
        <Link className="nav-btn" to="/login">Login</Link>
      </div>
    </nav>
       <br></br>
       <br/>
       <br/>
      <span className="banner-image">
        <img 
          src="data/assets/WhatsApp Image 2025-12-04 at 11.34.26 PM.jpeg"  
          alt="Institute Banner"
          className="banner-img"
        />
      </span>
      <div>
        <p className="cardHome">learn grow succeed </p>
      </div>
    </div>
    
  );
}

export default Navbar;
