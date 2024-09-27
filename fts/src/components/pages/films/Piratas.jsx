import '../../styles/Hamburguer.css'

function Piratas(){

    return(

        <section className="main">
      
            <div className="divContainer" id="divContainer" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/2Qwb7EayKsD2cuB3I2u2k2VU3Lb.jpg)`,
                backgroundAttachment: 'scroll',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>

                <div className="content">


                <div className="divTxt">
                <h1 id="titleAbout">Piratas do Caribe: A Vingança de Salazar</h1>
                
                <a href="#iframe" id="btnWatch">Assistir</a>
                </div>

                </div>    
            </div>

            <div className="about">
            <p id="textAbout">
            O Capitão Jack, que anda passando por uma onda de azar, sente os 
            ventos da má sorte soprando com muita força quando os marinheiros 
            fantasmas assassinos, liderados pelo aterrorizante Capitão Salazar
             (Javier Bardem), escapam do triângulo do diabo decididos a matar todos 
             os piratas em seu caminho, especialmente Jack.
                </p>
            
            <div className="infoAbout">
            <p className="yearRelease">Lançamento: 2017</p>
            <p className="typeGenres">Genêro: Aventura, Ação, Fantasia</p>
            <p className="durationTime">Duração: 2h:9min</p>
            </div>

            </div>

                <div id="videoContent" className="videoContent">
                <iframe id="iframe" width="760" height="415" src="//www.youtube.com/embed/S2uBq-K6Ymw?si=bTIGLEJIpnlIA6Hc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                 </div>
       
        </section>
        
    )
}
export default Piratas