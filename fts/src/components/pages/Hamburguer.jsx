import NavbarCategories from "./NavbarCategories"
import '../styles/Hamburguer.css'

import ham from '../imgs/ham2.jpg';
function Hamburguer(){

    return(
        <>
        <NavbarCategories />

        <section className="main">
      
            <section className="divContainer">

                <div className="content">

                <img src={ham} alt="Not Suported" className="imgAd"/>

                <div className="divTxt">
                <h1>Ta Chovendo Hamburguer</h1>
                <p>
                Flint e seus amigos são obrigados a deixar Boca Grande após a desastrosa 
                tempestade de comida atingir a cidade. Sem saída, ele aceita o convite de seu 
                ídolo, Chester V., e se junta à The Live Corp Company, que reúne os melhores 
                inventores do mundo. No entanto, ao descobrir que sua máquina ainda está funcionando 
                e agora cria perigosas comidas animalescas mutantes, Flint decide retornar e tentar salvar o mundo.
                </p>
                </div>

                </div>

                <div className="videoContent">
                <iframe width="760" height="415" src="https://www.youtube.com/embed/nWjtB6Qbzao?si=aryQW2QTOxcLgh3g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                 </div>
                
            </section>
       
        </section>
        
        </>
    )
}
export default Hamburguer