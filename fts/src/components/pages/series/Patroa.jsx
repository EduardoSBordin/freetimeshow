import '../../styles/Series.css'
import React , {useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import SeasonHome from './SeasonHome';
import Season1 from './Season1';

import App from '../../../App';

import Router2 from '../Router2';

function Patroa(){

    function openModalSeasons(){

        document.querySelector('.modalSeasons').style.display = 'block';

    }

    function openModalS1(){
        document.querySelector('.firstSeasonLinks').style.display = "block";
        document.querySelector('.secondSeasonLinks').style.display = "none";
    }
    function openModalS2(){
        document.querySelector('.firstSeasonLinks').style.display = "none";
        document.querySelector('.secondSeasonLinks').style.display = "block";
    }


    function ep1S1(){
        document.querySelector('.ep1S1').style.display = "block";
        document.querySelector('.ep2S1').style.display = "none";
        document.querySelector('.ep1S2').style.display = "none";
        document.querySelector('.ep2S2').style.display = "none";

        document.querySelector('.modalSeasons').style.display = 'none';
    }
    function ep2S1(){
        document.querySelector('.ep1S1').style.display = "none";
        document.querySelector('.ep2S1').style.display = "block";
        document.querySelector('.ep1S2').style.display = "none";
        document.querySelector('.ep2S2').style.display = "none";

        document.querySelector('.modalSeasons').style.display = 'none';
    }

    function ep1S2(){
        document.querySelector('.ep1S1').style.display = "none";
        document.querySelector('.ep2S1').style.display = "none";
        document.querySelector('.ep1S2').style.display = "block";
        document.querySelector('.ep2S2').style.display = "none";

        document.querySelector('.modalSeasons').style.display = 'none';
    }
    function ep2S2(){
        document.querySelector('.ep1S1').style.display = "none";
        document.querySelector('.ep2S1').style.display = "none";
        document.querySelector('.ep1S2').style.display = "none";
        document.querySelector('.ep2S2').style.display = "block";

        document.querySelector('.modalSeasons').style.display = 'none';
    }


    return(

        <section className="main">
      
            <div className="divContainer" id="divContainer" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/zFLXhCcJKTgKnafXmHlF1p7SCok.jpg)`,
                backgroundAttachment: 'scroll',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>

                <div className="content">


                <div className="divTxt">
                <h1 id="titleAbout">Eu, a Patroa e as Crianças</h1>
                
                <a href="#navSeason" id="btnWatch">Assistir</a>
                </div>

                </div>    
            </div>

            <div className="about">
            <p id="textAbout">
            Jay Kyle precisa se dedicar exclusivamente a carreira na contabilidade, 
            porém Michael acredita que esse não é o melhor caminho para Jay, pois acredita 
            que a mesma usa do trabalho para desvirtuar-se de sua família. A menina Kady
             está sob os cuidados da babá Rosa, uma mulher mexicana que nunca caiu aos 
             encantos do patrão. Claire vive o período da pré-adolescência e costuma ser
              um pouco arrogante em suas atitudes. Júnior demonstra seu gosto pelo Hip-Hop,
               porém é desvirtuado da ideia pelo seu pai, que costuma extrapolar, quando o
                quesito é disciplina.
                </p>
            
            <div className="infoAbout">
            <p className="yearRelease">Lançamento: 2001</p>
            <p className="typeGenres">Genêro: Comédia, Família, Drama </p>
            <p className="durationTime">Duração: 5 Temporadas</p>
            </div>

            </div>

            <div className="navSeason" id='navSeason'>
                
                <div className="divbtnSeasons">
                    <button onClick={openModalSeasons} className='btnSeasons'>Temporadas</button>

                    <div className="modalSeasons">
                        <button className='btnSeasons' onClick={openModalS1}>1° Temporada</button>
                        <button className='btnSeasons' onClick={openModalS2}>2° Temporada</button>
                    </div>
                </div>

                <div className="btnEp">
                    <div className="firstSeasonLinks">
                        <button className='btsnEp' onClick={ep1S1}>EP-1</button>
                        <button className='btsnEp' onClick={ep2S1}>EP-2</button>
                    </div>

                    <div className="secondSeasonLinks">
                        <button className='btsnEp' onClick={ep1S2}>EP-1-S2</button>
                        <button className='btsnEp' onClick={ep2S2}>EP-2-S2</button>
                    </div>
                </div>


  
            </div>

                <div id="videoContent" className="videoContent">
                <iframe className='ep1S1' id="iframe" width="760" height="415" src="https://www.youtube.com/embed/K-6qBLSmDx8?si=0Nw09nqThSFlk1RY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe className='ep2S1' id="iframe" width="760" height="415" src="https://www.youtube.com/embed/qD0dTMHA30U?si=RGKRe2zHFYt59t1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                <iframe className='ep1S2' id="iframe" width="760" height="415" src="https://www.youtube.com/embed/HWb4M1gAdmo?si=59BENb-7TjgGBhHH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe className='ep2S2' id="iframe" width="760" height="415" src="https://www.youtube.com/embed/OjhDkAteWio?si=xnx1O7IO8CUFeUUW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                </div>
       
        </section>
    )
}
export default Patroa