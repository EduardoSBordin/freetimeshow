import React from 'react';
import Home from './components/pages/Home';

import Hamburguer from './components/pages/cartoons/Hamburguer';
import Simpsons from './components/pages/cartoons/Simpsons';
import Coragem from './components/pages/cartoons/Coragem';
import BobEsponja from './components/pages/cartoons/BobEsponja';
import TomEJerryy from './components/pages/cartoons/TomEJerry';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Navbar from './components/pages/Navbar';
import './App.css'

function App() {
  return (
   <>
   <Router>
    <Navbar />
    <section className="container">

    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/hamburguer' element={<Hamburguer />} />
        <Route exact path='/Coragem' element={<Coragem />} />
        <Route exact path='/BobEsponja' element={<BobEsponja />} />
        <Route exact path='/tomejerry' element={<TomEJerryy />} />
        <Route exact path='/simpsons' element={<Simpsons />} />
    </Routes> 

 
    </section>


   </Router>
   </>
  );
}

export default App;
