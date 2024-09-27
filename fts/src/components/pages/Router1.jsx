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

function Router1(){

    return (
<>  

        <Routes>
        
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cartoonshome' element={<CartoonsHome />} />
        <Route exact path='/movieshome' element={<MoviesHome />} />
        <Route exact path='/serieshome' element={<SeriesHome />} />

        <Route exact path='/hamburguer' element={<Hamburguer />} />
        <Route exact path='/Coragem' element={<Coragem />} />
        <Route exact path='/BobEsponja' element={<BobEsponja />} />
        <Route exact path='/tomejerry' element={<TomEJerry />} />
        <Route exact path='/simpsons' element={<Simpsons />} />

        <Route exact path='/piratas' element={<Piratas />} />
        <Route exact path='/mission' element={<Mission />} />
        <Route exact path='/sorte' element={<Sorte />} />
        <Route exact path='/dose' element={<Dose />} />
        <Route exact path='/mafia' element={<Mafia />} />

        <Route exact path='/patroa' element={<Patroa />} />

    </Routes> 
 
   
    </>
    )
}
export default Router1