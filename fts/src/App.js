import React from 'react';
import Home from './components/pages/Home';
import Hamburguer from './components/pages/Hamburguer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function App() {
  return (
   <>
   <Router>
    <section className="container">

    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/hamburguer' element={<Hamburguer />} />
    </Routes> 

 
    </section>


   </Router>
   </>
  );
}

export default App;
