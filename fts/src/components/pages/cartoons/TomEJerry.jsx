import '../../styles/Hamburguer.css'

function TomEJerry(){

    return(

        <section className="main">
      
            <div className="divContainer" id="divContainer" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/km6wy5CpLul51F3eh6fEBQ0UoJE.jpg)`,
                backgroundAttachment: 'scroll',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>

                <div className="content">


                <div className="divTxt">
                <h1 id="titleAbout">Show de Tom e Jerry</h1>
                
                <a href="#iframe" id="btnWatch">Assistir</a>
                </div>

                </div>    
            </div>

            <div className="about">
            <p id="textAbout">
            Tom, um gato cinzento atrapalhado, está sempre perseguindo Jerry, um pequeno e esperto ratinho marrom. 
            Juntos, os dois aprontam e vivem as mais hilariantes aventuras, ao lado de Spike e Tyke (dois cachorros), 
            Butch (um gato preto), Tuffy (um ratinho cinza-claro), Quacker (um simpático patinho amarelo) e muitos outros.
                </p>
            
            <div className="infoAbout">
            <p className="yearRelease">Lançamento: 1999</p>
            <p className="typeGenres">Genêro: Família, Animação, Comédia, Kids</p>
            <p className="durationTime">Duração: 30min</p>
            </div>

            </div>

                <div id="videoContent" className="videoContent">
                <iframe id="iframe" width="760" height="415" src="https://www.youtube.com/embed/5b5HJDa_Z2o?si=_R9eSAUFnEYVjAht" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                 </div>
       
        </section>
        
    )
}
export default TomEJerry