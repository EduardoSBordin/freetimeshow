import '../../styles/Hamburguer.css'

function Sorte(){

    return(

        <section className="main">
      
            <div className="divContainer" id="divContainer" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/U4cn12skz6rhZM4XnQIq7g5Hwu.jpg)`,
                backgroundAttachment: 'scroll',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>

                <div className="content">


                <div className="divTxt">
                <h1 id="titleAbout">Até que a Sorte nos Separe</h1>
                
                <a href="#iframe" id="btnWatch">Assistir</a>
                </div>

                </div>    
            </div>

            <div className="about">
            <p id="textAbout">
            Tino (Leandro Hassum) é um pai de família comum que vê sua vida virar de
             ponta a cabeça após ganhar na loteria. Levando uma vida de ostentação 
             ao lado da mulher, Jane (Danielle Winits), ele gasta todo o dinheiro em 15 anos. 
             Ao se ver quebrado, Tino aceita a ajuda do vizinho Amauri (Kiko Mascarenhas), 
             um consultor de finanças super burocrático e que por sinal vive seu próprio drama
              ao enfrentar uma crise no casamento com Laura (Rita Elmôr). Tentando evitar que
               Jane descubra a nova situação financeira, afinal ela está grávida do terceiro 
               filho não pode passar por fortes emoções, Tino se envolve em várias confusões
                para fingir que tudo continua bem. Para isso, conta com ajuda do melhor amigo,
                 Adelson (Aílton Graça), e dos filhos.
                </p>
            
            <div className="infoAbout">
            <p className="yearRelease">Lançamento: 2012</p>
            <p className="typeGenres">Genêro: Comédia </p>
            <p className="durationTime">Duração: 1h:44min</p>
            </div>

            </div>

                <div id="videoContent" className="videoContent">
                <iframe id="iframe" width="760" height="415" src="https://www.youtube.com/embed/q0gZOGoRRnc?si=mf5l5u2t5epPDnt9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                 </div>
       
        </section>
        
    )
}
export default Sorte