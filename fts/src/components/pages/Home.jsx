import CartoonsHome from "./CartoonsHome";
import MoviesHome from "./MoviesHome";
import SeriesHome from "./SeriesHome";

import "../styles/Home.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ChangeCover from "./ChangeCover";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="mainHome" id="home">
        <ChangeCover />

        <section id="cartoon">
          <CartoonsHome id="cartoonSlider" />
        </section>

        <section id="movies">
          <MoviesHome />
        </section>

        <section id="series">
          <SeriesHome />
        </section>
      </div>
    </>
  );
}
export default Home;
