import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/pages/Navbar";
import "./components/styles/Navbar.css";
import "./App.css";
import "./components/styles/Home.css";

import Router1 from "./components/pages/Router1";

function App() {
  return (
    <>
      <Router>
        <Router1 />
      </Router>
    </>
  );
}

export default App;
