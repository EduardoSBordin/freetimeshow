import sim from '../imgs/sim1.jpg'
import courage from '../imgs/couragedog.png'
import bob from '../imgs/spongebob.jpg'

import '../styles/CartoonsHome.css'

function CartoonsHome({screenTxt}){

    return(
        <div>
        <h1>Desenhos</h1>
        <div className="block1">

                <div className="img-hover-zoom">
                <span className="material-symbols-outlined">play_circle</span>
                    <img src={sim} alt="Not suported" />
                </div>
           

            <div className="img-hover-zoom">
            <span className="material-symbols-outlined">play_circle</span>
                 <img src={courage} alt="Not suported" />
            </div>

            <div className="img-hover-zoom"> 
            <span className="material-symbols-outlined">play_circle</span>
                <img src={bob} alt="Not suported" />
            </div>
        </div>
        </div>
    )
}
export default CartoonsHome