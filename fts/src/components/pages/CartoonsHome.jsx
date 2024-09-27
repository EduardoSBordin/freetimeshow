import '../styles/CartoonsHome.css'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function CartoonsHome({id}){

    let settings = {
        
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        variableWidth: true,
        useCss: true
      };

    return(
        <div className='container'>
            <h1 className='titleRow'>DESENHOS</h1>
        
            <Slider className='slider' {...settings}>

        
        
                <div className="img_hover_zoom">
                    <Link to='/hamburguer' href="#divContainer" className='boxImg'>
                        <span className="material-symbols-outlined spanPlay">play_circle</span>
                    <img src="https://image.tmdb.org/t/p/original/jyIWUZCtt3pRxi727NxFjhcdzNd.jpg" alt="Not suported" />
                    </Link>
                </div>

                <div className="img_hover_zoom">
                    <Link to='/simpsons' href="#divContainer" className='boxImg'>
                        <span className="material-symbols-outlined spanPlay">play_circle</span>
                    <img src="https://image.tmdb.org/t/p/original/1jGPgDDcmg3Xgs3WO8sfYfbnFoA.jpg" alt="Not suported" />
                    </Link>
                </div>


                <div className="img_hover_zoom">
                    <Link to='/coragem' href="#divContainer" className='boxImg'>
                    <span className="material-symbols-outlined spanPlay">play_circle</span>
                    <img src="https://image.tmdb.org/t/p/original/yLn8nI9Ec3LZ1WflYxo9MjF4BBg.jpg" alt="Not suported" />
                    </Link>
                </div>

                <div className="img_hover_zoom">
                    <Link to='/bobesponja' href="#divContainer" className='boxImg'>
                    <span className="material-symbols-outlined spanPlay">play_circle</span>
                    <img src="https://image.tmdb.org/t/p/original/eTTsOyXm49jixiQJ93L97CCvVBk.jpg" alt="Not suported" />
                    </Link>
                </div>

                <div className="img_hover_zoom">
                    <Link to='/tomejerry' href="#divContainer" className='boxImg'>
                    <span className="material-symbols-outlined spanPlay">play_circle</span>
                    <img src="https://image.tmdb.org/t/p/original/t0VTMU4UI8XlaryymvNKjnD1TXc.jpg" alt="Not suported" />
                    </Link>
                </div>
        
                </Slider>

        </div>
    )
}
export default CartoonsHome