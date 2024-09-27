import '../styles/CartoonsHome.css'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function SeriesHome(){

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
            <h1 className='titleRow'>SÉRIES</h1>
        
            {/* <Slider className='slider' {...settings}> */}

            <div className="contentSeriesRow">
                
            
                <div className="img_hover_zoom">
                    <Link to='/patroa' href="#divContainer" className='boxImg'>
                        <span className="material-symbols-outlined spanPlay">play_circle</span>
                    <img src="https://image.tmdb.org/t/p/original/huMehRjXBkFkO9BWPly1635y0J0.jpg" alt="Not suported" />
                    </Link>
                </div>

                {/* <div className="img_hover_zoom">
                    <Link to='/chaves' href="#divContainer" className='boxImg'>
                        <span className="material-symbols-outlined spanPlay">play_circle</span>
                    <img src="https://image.tmdb.org/t/p/original/4ZbsELAmHFNszidJPhRw1H9FYG6.jpg" alt="Not suported" />
                    </Link>
                </div> */}
            
            </div>      
        
                {/* </Slider> */}

        </div>
    )
}
export default SeriesHome