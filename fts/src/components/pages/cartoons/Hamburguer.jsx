import '../../styles/Hamburguer.css'

function Hamburguer(){

    return(

        <section className="main">
      
            <div className="divContainer" id="divContainer" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/jjiJ1f5B973rgSEUhk72CwyWMsJ.jpg)`,
                backgroundAttachment: 'scroll',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>

                <div className="content">


                <div className="divTxt">
                <h1 id="titleAbout">Tá Chovendo Hambúrguer 2</h1>
                
                <a href="#iframe" id="btnWatch">Assistir</a>
                </div>

                </div>    
            </div>

            <div className="about">
            <p id="textAbout">
                Após a desastrosa tempestade de comida no primeiro filme, 
                Flint (Bill Hader) e seus amigos são obrigados a deixar 
                a cidade de Boca Grande. Sem saída, ele aceita o convite de seu ídolo,
                 Chester V (Will Forte), e junta-se à The Live Corp Company, que reúne
                  os melhores inventores do mundo. Porém, quando descobre que sua máquina
                   ainda funciona e agora cria perigosas comidas animalescas mutantes,
                    Flint decide retornar e tentar salvar o mundo.
                </p>
            
            <div className="infoAbout">
            <p className="yearRelease">Lançamento: 2013</p>
            <p className="typeGenres">Genêro: Comédia</p>
            <p className="durationTime">Duração: 1h:30min</p>
            </div>

            </div>

                <div id="videoContent" className="videoContent">
                <iframe id="iframe" width="760" height="415" src="https://www.youtube.com/embed/nWjtB6Qbzao?si=aryQW2QTOxcLgh3g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                 </div>
       
        </section>
        
    )
}
export default Hamburguer