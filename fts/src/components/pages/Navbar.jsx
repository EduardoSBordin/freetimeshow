import '../styles/Navbar.css'
import { Link } from 'react-router-dom';
import logo from './logo2.png'
import React, { useState, useEffect } from 'react';

function Navbar({black}){

    function showModal(){
        document.querySelector('.menuModal').classList.toggle('active');
        document.querySelector('.btnModal').classList.toggle('active');
    }

   

    return(
    <>
        <nav className={black ? 'black' : ''}>
            <img src={logo} alt="Not suported" className='logoImg'/>

            <div className="links">

            <Link to='/' className='linkMenu'>Inicio</Link>
            <Link to='/cartoonshome' className='linkMenu'>Desenhos</Link>
            <Link to='/movieshome' className='linkMenu'>Filmes</Link>
            <Link to='/serieshome' className='linkMenu'>Series</Link>

            </div>

            <div className="linkMobile">
                <button className='btnModal' onClick={showModal}></button>

                <div className="menuModal">
                <Link to='/' className='linkMenu'>Inicio</Link>
            <a href="#cartoon" className='linkMenu'>Desenhos</a>
            <a href="#movies" className='linkMenu'>Filmes</a>
            <a href="#series" className='linkMenu'>Séries</a>
                </div>
            </div>
    
        </nav>
    </>
    )
}
export default Navbar