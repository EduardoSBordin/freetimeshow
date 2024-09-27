import '../../styles/Hamburguer.css'

function Dose(){

    return(

        <section className="main">
      
            <div className="divContainer" id="divContainer" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/m65Wy85rsYVFPw56kgGiKE9b4Yb.jpg)`,
                backgroundAttachment: 'scroll',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>

                <div className="content">


                <div className="divTxt">
                <h1 id="titleAbout">Dose Dupla </h1>
                
                <a href="#iframe" id="btnWatch">Assistir</a>
                </div>

                </div>    
            </div>

            <div className="about">
            <p id="textAbout">
            Bobby e Stig são dois agentes à paisana escalados para roubar um banco que serve 
            de fachada para Máfia. O detalhe é que um não sabe da real identidade do outro.
             Quando eles descobrem, o mandande da tarefa demite ambos, deixando a dupla 
             a mercê dos bandidos.
                </p>
            
            <div className="infoAbout">
            <p className="yearRelease">Lançamento: 2013</p>
            <p className="typeGenres">Genêro: Ação, Comédia, Crime </p>
            <p className="durationTime">Duração: 1h:49min</p>
            </div>

            </div>

                <div id="videoContent" className="videoContent">
                <iframe id="iframe" width="760" height="415" src="https://www.youtube.com/embed/vUtmQH5o5KE?si=j37wvVO9-d0RNRnB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                 </div>
       
        </section>
        
    )
}
export default Dose