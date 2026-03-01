import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near the top - show header
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide header
        setIsHeaderVisible(false);
        setIsMenuOpen(false); // Close mobile menu when hiding
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${isHeaderVisible ? "visible" : "hidden"}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" onClick={closeMenu}>
            <img
              className="logo"
              src="https://olivehomeco.com/images/olive-logo.png"
              alt="Olive Home Co. Logo"
            />
          </Link>

          <div
            className={`hamburger-menu ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <Link
                  to="/"
                  className={`nav-link ${isActiveLink("/") ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`nav-link ${isActiveLink("/services") ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/window-coverings"
                  className={`nav-link ${isActiveLink("/window-coverings") ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  Window Coverings
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className={`nav-link ${isActiveLink("/about-us") ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/promotions"
                  className={`nav-link ${isActiveLink("/promotions") ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  Promotions
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`nav-link ${isActiveLink("/contact") ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
