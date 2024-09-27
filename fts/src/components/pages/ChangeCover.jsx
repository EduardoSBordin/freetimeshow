import CartoonsHome from './CartoonsHome';
import MoviesHome from './MoviesHome';
import SeriesHome from './SeriesHome';

import '../styles/Home.css'
import { Link } from 'react-router-dom';
import React, {useEffect, useState}from 'react';

function ChangeCover(){

    useEffect(() => {
        
        let el1 = document.querySelector('.upHome1');
        let el2 = document.querySelector('.upHome1');

        if(el1 && el2){

            let counter1 = 0;
            let myInterval1;
            let speed = 500;
            function cover1(){
        
                myInterval1 = setInterval(() => {
                    counter1++;
                    if(counter1 === 10){
                        counter1 = 0;
                        clearInterval(myInterval1);
                        window.document.querySelector('.upHome1').style.display = 'none';
                        window.document.querySelector('.upHome2').style.display = 'block';
                        window.document.querySelector('.upHome3').style.display = 'none';
    
                        cover2();
                    }
                    console.log(counter1);
                }, speed)
            }
        
            function cover2(){
                myInterval1 = setInterval(() => {
                    counter1++;
                    if(counter1 === 10){
                        counter1 = 0;
                        clearInterval(myInterval1);
                       window.document.querySelector('.upHome1').style.display = 'none';
                       window.document.querySelector('.upHome2').style.display = 'none';
                       window.document.querySelector('.upHome3').style.display = 'block';
    
                        cover3();
                    }
                    console.log(counter1);
                }, speed)
            }

            function cover3(){
                myInterval1 = setInterval(() => {
                    counter1++;
                    if(counter1 === 10){
                        counter1 = 0;
                        clearInterval(myInterval1);
                       window.document.querySelector('.upHome1').style.display = 'block';
                       window.document.querySelector('.upHome2').style.display = 'none';
                       window.document.querySelector('.upHome3').style.display = 'none';
    
                        cover1();
                    }
                    console.log(counter1);
                }, speed)
            }
            cover1();

            return () => {
                clearInterval(myInterval1); // Limpa o intervalo ativo
                
              };
        
        }

        // changeCover();
    }, []);
    return(
        <>
        <section id='home' className='upHome1' style={{
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

    <section id='home' className='upHome2' style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/wE04of3oVs47rJjEsTvc7LfrWZl.jpg)`,
        backgroundAttachment: 'scroll',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'none',
    }}>
        <div className="contentHome">

            <div className="textHome">

                <h1 className='txtTitle'>Bob Esponja Calça Quadrada</h1>

                {/* <div className="divBtnAboveTitle">
                </div> */}
                <p className='txtResume'>Uma esponja-do-mar chamada Bob Esponja Calça Quadrada mora com 
            seu caracol de estimação na Fenda do Biquíni, no fundo do oceano.
             Bob trabalha no Siri Cascudo e, nas horas vagas, vive arrumando 
             confusões com seu melhor amigo, a estrela-do-mar Patrick.
                </p>

            <Link to='/bobesponja' className='toWath'>Assistir</Link>
            </div>

        </div>
    </section>

    <section id='home' className='upHome3' style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/2Qwb7EayKsD2cuB3I2u2k2VU3Lb.jpg)`,
        backgroundAttachment: 'scroll',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'none',
    }}>
        <div className="contentHome">

            <div className="textHome">

                <h1 className='txtTitle'>Piratas do Caribe: A Vingança de Salazar</h1>

                {/* <div className="divBtnAboveTitle">
                </div> */}
                <p className='txtResume'> O Capitão Jack, que anda passando por uma onda de azar, sente os 
            ventos da má sorte soprando com muita força quando os marinheiros 
            fantasmas assassinos, liderados pelo aterrorizante Capitão Salazar
             (Javier Bardem), escapam do triângulo do diabo decididos a matar todos 
             os piratas em seu caminho, especialmente Jack.
                </p>

            <Link to='/piratas' className='toWath'>Assistir</Link>
            </div>

        </div>
    </section>
        </>
    )
}
export default ChangeCover