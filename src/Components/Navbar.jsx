// Navbar.js
import React, { useState } from "react";

const Navbar = ({ setCategory }) => {
  const [activeCategory, setActiveCategory] = useState("general");

  const handleCategoryChange = (category) => {
    setCategory(category);
    setActiveCategory(category);
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="badge bg-light text-dark fs-4">News</span>
          </a>
          <button
            className="navbar-toggler"
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeCategory === "general" ? "active" : ""}`}
                  aria-current="page"
                  href="#"
                  onClick={() => handleCategoryChange("general")}
                >
                  General
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeCategory === "technology" ? "active" : ""}`}
                  aria-current="page"
                  href="#"
                  onClick={() => handleCategoryChange("technology")}
                >
                  Technology
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeCategory === "business" ? "active" : ""}`}
                  aria-current="page"
                  href="#"
                  onClick={() => handleCategoryChange("business")}
                >
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeCategory === "science" ? "active" : ""}`}
                  aria-current="page"
                  href="#"
                  onClick={() => handleCategoryChange("science")}
                >
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeCategory === "sports" ? "active" : ""}`}
                  aria-current="page"
                  href="#"
                  onClick={() => handleCategoryChange("sports")}
                >
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeCategory === "health" ? "active" : ""}`}
                  aria-current="page"
                  href="#"
                  onClick={() => handleCategoryChange("health")}
                >
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeCategory === "entertainment" ? "active" : ""}`}
                  aria-current="page"
                  href="#"
                  onClick={() => handleCategoryChange("entertainment")}
                >
                  Entertainment
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
