import React, { useState } from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Me", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Technical Skills", id: "skills" },
    { name: "Contact Me", id: "contact" },
  ];

  const handleActive = (id) => {
    setActiveLink(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    // Close the navbar in mobile view
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: true,
      });
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <img src={logo} alt="logo" />
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 body-font">
            {navLinks.map((link, index) => (
              <li className="nav-item" key={index}>
                <a
                  className={`nav-link ${
                    activeLink === link.id ? "active" : ""
                  }`}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleActive(link.id);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
