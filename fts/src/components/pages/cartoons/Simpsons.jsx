import '../../styles/Hamburguer.css'

function Simpsons(){

    return(

        <section className="main">
      
            <div className="divContainer" id="divContainer" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/evOGWG3fqgjIpsAKJaVF7d6of1K.jpg)`,
                backgroundAttachment: 'scroll',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>

                <div className="content">


                <div className="divTxt">
                <h1 id="titleAbout">Os Simpsons</h1>
                
                <a href="#iframe" id="btnWatch">Assistir</a>
                </div>

                </div>    
            </div>

            <div className="about">
            <p id="textAbout">
            Uma animação sobre uma típica família dos Estados Unidos. Homer é o pai de família
             nada saudável ou inteligente, que adora beber cerveja. Marge é a esposa e mãe de
              família dedicada. Bart é o filho de 10 anos, que não leva a escola a sério e tem 
              orgulho disso. Lisa é a garota de 8 anos, um gênio não apreciado. E Maggie é o bebê que não larga a chupeta.
                </p>
            
            <div className="infoAbout">
            <p className="yearRelease">Lançamento: 1989</p>
            <p className="typeGenres">Genêro: Comédia</p>
            <p className="durationTime">Duração: 30min</p>
            </div>

            </div>

                <div id="videoContent" className="videoContent">
                <iframe id="iframe" width="760" height="415" src="https://www.youtube.com/embed/Dx77tTFVJ40?si=bKUnQpeJl0wpDS8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                 </div>
       
        </section>
        
    )
}
export default Simpsons