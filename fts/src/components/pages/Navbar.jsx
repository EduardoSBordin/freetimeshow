import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "./logo4.png";
import React, { useState, useEffect } from "react";

function Navbar({ black, to, nameBtn }) {
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
          <a href="#" className="linkMenu">
            Inicio
          </a>
          <a href="#cartoon" className="linkMenu">
            Desenhos
          </a>
          <a href="#movies" className="linkMenu">
            Filmes
          </a>
          <a href="#series" className="linkMenu">
            Series
          </a>
        </div>

        <div className="linkMobile">
          <button
            className={`btnModal ${isModalActive ? "active" : ""}`}
            onClick={showModal}
          ></button>

          <div className={`menuModal ${isModalActive ? "active" : ""}`}>
            <a href="#" className="linkMenu">
              Inicio
            </a>
            <a href="#cartoon" className="linkMenu">
              Desenhos
            </a>
            <a href="#movies" className="linkMenu">
              Filmes
            </a>
            <a href="#series" className="linkMenu">
              Series
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
