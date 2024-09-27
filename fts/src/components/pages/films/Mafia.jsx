import '../../styles/Hamburguer.css'

function Mafia(){

    return(

        <section className="main">
      
            <div className="divContainer" id="divContainer" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/1g0EZDJkJMXa0fJyIOJGiJegSUC.jpg)`,
                backgroundAttachment: 'scroll',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>

                <div className="content">


                <div className="divTxt">
                <h1 id="titleAbout">O Homem da Máfia </h1>
                
                <a href="#iframe" id="btnWatch">Assistir</a>
                </div>

                </div>    
            </div>

            <div className="about">
            <p id="textAbout">
            Nova Orleans. Um assalto a um jogo de pôquer ilegal, cujos participantes eram
             integrantes da máfia, abala o submundo do crime. O matador profissional Jackie
              Coogan (Brad Pitt) logo é contratado para investigar o caso, já que os chefões 
              da máfia desejam que os responsáveis sejam punidos, mas sem estardalhaço.
               Entretanto, a hesitação de alguns dos participantes coloca a situação ainda 
               mais fora de controle.
                </p>
            
            <div className="infoAbout">
            <p className="yearRelease">Lançamento: 2012</p>
            <p className="typeGenres">Genêro: Crime </p>
            <p className="durationTime">Duração: 1h:37min</p>
            </div>

            </div>

                <div id="videoContent" className="videoContent">
                <iframe id="iframe" width="760" height="415" src="https://www.youtube.com/embed/2PLeK36ZRpg?si=NA3S_F3XrgKzEsIQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                 </div>
       
        </section>
        
    )
}
export default Mafia