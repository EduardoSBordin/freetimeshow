import '../styles/Navbar.css'
import { Link } from 'react-router-dom';
import logo from './logo2.png'
import React, { useState } from 'react';

function Navbar({black}){


    const [isModalActive, setIsModalActive] = useState(false);
   
    const showModal = () => {
        setIsModalActive(!isModalActive);
    };

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
                <button className={`btnModal ${isModalActive ? 'active' : ''}`} onClick={showModal}></button>

                <div className={`menuModal ${isModalActive ? 'active' : ''}`}>
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