import '../../styles/Hamburguer.css'

function Mission(){

    return(

        <section className="main">
      
            <div className="divContainer" id="divContainer" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/nzMmMevQsL6HvHfi4rwNT0xLNuu.jpg)`,
                backgroundAttachment: 'scroll',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>

                <div className="content">


                <div className="divTxt">
                <h1 id="titleAbout">À Procura da Felicidade</h1>
                
                <a href="#iframe" id="btnWatch">Assistir</a>
                </div>

                </div>    
            </div>

            <div className="about">
            <p id="textAbout">
            Chris enfrenta sérios problemas financeiros e Linda, sua esposa,
             decide partir. Ele agora é pai solteiro e precisa cuidar de Christopher,
              seu filho de 5 anos. Chris tenta usar sua habilidade como vendedor para
               conseguir um emprego melhor, mas só consegue um estágio não remunerado.
                Seus problemas financeiros não podem esperar uma promoção e eles acabam
                 despejados. Chris e Christopher passam a dormir em abrigos ou onde quer
                  que consigam um refúgio, mantendo a esperança de que dias melhores virão.
                </p>
            
            <div className="infoAbout">
            <p className="yearRelease">Lançamento: 2006</p>
            <p className="typeGenres">Genêro: Drama </p>
            <p className="durationTime">Duração: 1h:57min</p>
            </div>

            </div>

                <div id="videoContent" className="videoContent">
                <iframe id="iframe" width="760" height="415" src="https://www.youtube.com/embed/KS3vxhFzwjQ?si=Lv4nF8MQ-7K7kjva" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                 </div>
       
        </section>
        
    )
}
export default Mission