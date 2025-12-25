import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { to: "/", label: "Головна" },
    { to: "/occupational-health", label: "Охорона праці" },
    { to: "/worker-training", label: "Навчання за професіями" },
    { to: "/workshop", label: "Газова майстерня" },
    { to: "/car-diagnostics", label: "Діагностика авто" },
  ];

  return (
    <header className="navbar-container">
      <nav className="navbar" aria-label="Головна навігація">
        <Link to="/" className="navbar-logo" aria-label="Головна сторінка">
          <span className="logo-text">ТОВ "ФОРТ"</span>
          <span className="logo-subtext">Навчання та сервіс</span>
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню навігації"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${pathname === link.to ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
