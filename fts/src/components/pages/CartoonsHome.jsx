import sim from '../imgs/sim1.jpg'
import courage from '../imgs/couragedog.png'
import bob from '../imgs/spongebob.jpg'
import ham from '../imgs/ham2.jpg'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import '../styles/CartoonsHome.css'

import { Link } from 'react-router-dom'
// import '../styles/Lab.css'

function CartoonsHome(){

    let settings = {
        
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        variableWidth: true,
        useCss: true
      };

    return(
        <div className='container'>
            <h1>DESENHOS</h1>
        <Slider {...settings}>
                
                <div className="img_hover_zoom">
                    <Link to='/hamburguer'>
                        {/* <span className="material-symbols-outlined">play_circle</span> */}
                    <img src={ham} alt="Not suported" />
                    </Link>
                </div>

                <div className="img_hover_zoom">
                    <Link to='/'>
                        {/* <span className="material-symbols-outlined">play_circle</span> */}
                    <img src={sim} alt="Not suported" />
                    </Link>
                </div>


                <div className="img_hover_zoom">
                    {/* <span className="material-symbols-outlined">play_circle</span> */}
                    <img src={courage} alt="Not suported" />
                </div>

                <div className="img_hover_zoom">
                    {/* <span className="material-symbols-outlined">play_circle</span> */}
                    <img src={bob} alt="Not suported" />
                </div>

            
        </Slider>

        </div>
    )
}
export default CartoonsHome