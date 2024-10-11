import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "./logo4.png";
import React, { useState, useEffect } from "react";

function NavbarCategories({ black, to, nameBtn }) {
  const [isModalActive, setIsModalActive] = useState(false);

  const showModal = () => {
    setIsModalActive(!isModalActive);
  };

  // Adding the header black effect
  const [blackHeader, setBlackHeader] = useState(false);

  // useEffet to black
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.addEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <>
      <nav className={blackHeader ? "black" : ""}>
        <img src={logo} alt="Not suported" className="logoImg" />

        <div className="links">
          <Link to="/" className="linkMenu">
            <span class="material-symbols-outlined">undo</span>
          </Link>
        </div>

        <div className="linkMobile">
          <Link to="/" className="linkMenu">
            <span class="material-symbols-outlined">undo</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
export default NavbarCategories;
