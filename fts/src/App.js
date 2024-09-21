import React from 'react';
import './App.css';
import Navbar from './components/pages/Navbar';
import CartoonsHome from './components/pages/CartoonsHome';

function App() {
  return (
   <>
   <Navbar />

  <section className="container">

   <section id='home'>
    
   </section>

   <section id='cartoon'>
   <CartoonsHome />
   </section>

  </section>

   </>
  );
}

export default App;
