import '../styles/Home.css'
import { Link } from 'react-router-dom';
import React, {useEffect, useState}from 'react';

function ChangeCover(){

    useEffect(() => {
        
        let el1 = document.querySelector('.upHome1');
        let el2 = document.querySelector('.upHome2');
        let el3 = document.querySelector('.upHome3');
             
        let currentVisible = 1; 
        const intervalTime = 3000; 
        const transitionTime = 1000;

    const hideAllCovers = () => {
        el1.style.display = 'none';
        el2.style.display = 'none';
        el3.style.display = 'none';
        el1.style.opacity = '0';
        el2.style.opacity = '0';
        el3.style.opacity = '0';
    };

    const showNextCover = () => {
        hideAllCovers(); //

        if (currentVisible === 1) {
            el1.style.display = 'block';
            setTimeout(() => {
                el1.style.opacity = '1';
                el2.style.opacity = '0';
                el3.style.opacity = '0';
            }, 10); 
        } else if (currentVisible === 2) {
            el2.style.display = 'block';
            setTimeout(() => {
                el2.style.opacity = '1';
                el1.style.opacity = '0';
                el3.style.opacity = '0';
            }, 10);
        } else if (currentVisible === 3) {
            el3.style.display = 'block';
            setTimeout(() => {
                el1.style.opacity = '0';
                el2.style.opacity = '0';
                el3.style.opacity = '1';

            }, 10);
        }

        currentVisible = currentVisible === 3 ? 1 : currentVisible + 1;

        setTimeout(() => {
            showNextCover();
        }, intervalTime + transitionTime); 
    };

    showNextCover();
    }, []);
    return(

        <>
        
    <section  className='upHome1' style={{
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

    <section className='upHome2' style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/wE04of3oVs47rJjEsTvc7LfrWZl.jpg)`,
        backgroundAttachment: 'scroll',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'none'
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

    <section className='upHome3' style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/2Qwb7EayKsD2cuB3I2u2k2VU3Lb.jpg)`,
        backgroundAttachment: 'scroll',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'none'
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