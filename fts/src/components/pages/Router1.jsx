import React, {useEffect, useState}from 'react';
import Home from './Home';
import Hamburguer from './cartoons/Hamburguer';
import Simpsons from './cartoons/Simpsons';
import Coragem from './cartoons/Coragem';
import BobEsponja from './cartoons/BobEsponja';
import TomEJerry from './cartoons/TomEJerry';
import Piratas from './films/Piratas';
import Mission from './films/Mission';
import Sorte from './films/Sorte';
import Dose from './films/Dose';
import Mafia from './films/Mafia';
import Patroa from './series/Patroa';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CartoonsHome from './CartoonsHome';
import MoviesHome from './MoviesHome';
import SeriesHome from './SeriesHome';

import ChangeCover from './ChangeCover';

import '../styles/Home.css'

function Router1(){

    return (
<>  

        <Routes>
        
        <Route exact path='/' element={<Home />} />
        <Route  path='/cartoonshome' element={<CartoonsHome />} />
        <Route  path='/movieshome' element={<MoviesHome />} />
        <Route  path='/serieshome' element={<SeriesHome />} />

        <Route  path='/hamburguer' element={<Hamburguer />} />
        <Route  path='/Coragem' element={<Coragem />} />
        <Route  path='/BobEsponja' element={<BobEsponja />} />
        <Route  path='/tomejerry' element={<TomEJerry />} />
        <Route  path='/simpsons' element={<Simpsons />} />

        <Route  path='/piratas' element={<Piratas />} />
        <Route  path='/mission' element={<Mission />} />
        <Route  path='/sorte' element={<Sorte />} />
        <Route  path='/dose' element={<Dose />} />
        <Route  path='/mafia' element={<Mafia />} />

        <Route  path='/patroa' element={<Patroa />} />

        <Route  path='/changecover' element={<ChangeCover />} />

    </Routes> 
 
   
    </>
    )
}
export default Router1