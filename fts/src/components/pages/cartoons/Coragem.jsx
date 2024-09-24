import '../../styles/Hamburguer.css'

function Coragem(){

    return(

        <section className="main">
      
            <div className="divContainer" id="divContainer" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/cFuk3BU0sid8dby05eyyBPtK4dD.jpg)`,
                backgroundAttachment: 'scroll',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>

                <div className="content">


                <div className="divTxt">
                <h1 id="titleAbout">Coragem, o Cão Covarde</h1>
                
                <a href="#iframe" id="btnWatch">Assistir</a>
                </div>

                </div>    
            </div>

            <div className="about">
            <p id="textAbout">
            Coragem é um cão incrivelmente tímido e muito fácil de assustar 
            que precisa defender um velho casal de aposentados de acontecimentos
             paranormais que ameaçam a segurança e a estabilidade da sua casa.
                </p>
            
            <div className="infoAbout">
            <p className="yearRelease">Lançamento: 1999</p>
            <p className="typeGenres">Genêro: Família, Sci-Fi & Fantasy, Animação, Comédia</p>
            <p className="durationTime">Duração: 30min</p>
            </div>

            </div>

                <div id="videoContent" className="videoContent">
                <iframe id="iframe" width="760" height="415" src="https://www.youtube.com/embed/gbeCLHUUin8?si=ZCWwunyiIlfFRkyi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                 </div>
       
        </section>
        
    )
}
export default Coragem