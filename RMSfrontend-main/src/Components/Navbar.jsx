import React, { useState, useEffect } from "react";
import "../Styles/Navbar.css";
import { Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token); // ✅ use jwtDecode instead of jwt_decode
        setUserEmail(decoded.sub); // decoded.sub = email from Spring JWT
      } catch (err) {
        console.error("Invalid token:", err);
        localStorage.removeItem("token");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    setUserEmail(null);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-logo">Rental Management System</h1>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {/* <li>
            <Link to="/tracking">Tracking</Link>
          </li>
          <li>
            <Link to="/">Landing</Link>
          </li>
          <li>
            <Link to="/random">Page 3</Link>
          </li> */}
          {!userEmail ? (
            <li>
              <Link to="/login">Login</Link>
            </li>
          ) : (
            <>
              <li><Link to="/services">Browse Rentals</Link></li>
              <li className="user-info">{userEmail}</li>
              <li>
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={28} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
