import '../../styles/Hamburguer.css'

function BobEsponja(){

    return(

        <section className="main">
      
            <div className="divContainer" id="divContainer" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/wE04of3oVs47rJjEsTvc7LfrWZl.jpg)`,
                backgroundAttachment: 'scroll',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>

                <div className="content">


                <div className="divTxt">
                <h1 id="titleAbout">Bob Esponja Calça Quadrada</h1>
                
                <a href="#iframe" id="btnWatch">Assistir</a>
                </div>

                </div>    
            </div>

            <div className="about">
            <p id="textAbout">
            Uma esponja-do-mar chamada Bob Esponja Calça Quadrada mora com 
            seu caracol de estimação na Fenda do Biquíni, no fundo do oceano.
             Bob trabalha no Siri Cascudo e, nas horas vagas, vive arrumando 
             confusões com seu melhor amigo, a estrela-do-mar Patrick.
                </p>
            
            <div className="infoAbout">
            <p className="yearRelease">Lançamento: 1999</p>
            <p className="typeGenres">Genêro: Animação, Comédia, Família</p>
            <p className="durationTime">Duração: 30min</p>
            </div>

            </div>

                <div id="videoContent" className="videoContent">
                <iframe id="iframe" width="760" height="415" src="https://www.youtube.com/embed/xIFgKBUYODo?si=IQsk3N2SwTNi4FnW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                 </div>
       
        </section>
        
    )
}
export default BobEsponja