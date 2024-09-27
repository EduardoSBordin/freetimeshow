import React, {useEffect, useState}from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Navbar from './components/pages/Navbar';
import './components/styles/Navbar.css'
import './App.css'
import './components/styles/Home.css'

import Router1 from './components/pages/Router1';
import Router2 from './components/pages/Router2';


function App() {
  

  // Adding the header black effect
  const [blackHeader, setBlackHeader] = useState(false);

  // useEffet to black 
  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.addEventListener('scroll', scrollListener);
    }
  }, [])


  return (
   <>
    <Router>
      <Navbar black={blackHeader}/>
    <Router1 />
    </Router>
   
   </>
  );
}

export default App;
