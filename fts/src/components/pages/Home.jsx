import CartoonsHome from './CartoonsHome';
import MoviesHome from './MoviesHome';
import SeriesHome from './SeriesHome';

import '../styles/Home.css'
import { Link } from 'react-router-dom';
import React, {useEffect, useState}from 'react';


function Home(){

  

    return(
        <div className='mainHome' id='home'>


    <section id='home' className='upHome' style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/4InwNJ8yl1L4kf7rZvPHWJFQpSV.jpg)`,
        backgroundAttachment: 'scroll',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }}>
        <div className="contentHome">

            <div className="textHome">

                <h1 className='txtTitle'>Os Simpsons</h1>

                {/* <div className="divBtnAboveTitle">
                </div> */}
                <p className='txtResume'>The Simpsons é uma série animada norte americana transmitida
                     pelo canal FOX. A comédia acompanha a família Simpsons,
                      uma família da classe trabalhadora na cidade desajustada
                       de Springfield. Homer, o pai, trabalha como inspetor de
                        segurança na usina nuclear local; Marge, a mãe, tenta 
                        manter a paz na família.
                </p>

            <Link to='/simpsons' className='toWath'>Assistir</Link>
            </div>

        </div>
    </section>
 
    <section id='cartoon'>
    <CartoonsHome id='cartoonSlider'/> 
    </section>

    <section id='movies'>
    <MoviesHome />
    </section>

    <section id='series'>
    <SeriesHome />
    </section>

        </div>
 
  
    )
}
export default Home