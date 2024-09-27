import '../styles/CartoonsHome.css'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

function MoviesHome(){

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
            <h1 className='titleRow'>FILMES</h1>
        
            <Slider className='slider' {...settings}>

        
        
                <div className="img_hover_zoom">
                    <Link to='/piratas' href="#divContainer" className='boxImg'>
                        <span className="material-symbols-outlined spanPlay">play_circle</span>
                    <img src="https://image.tmdb.org/t/p/original/xCV0CTZqVBduQqylkelvbDxOdLO.jpg" alt="Not suported" />
                    </Link>
                </div>

                <div className="img_hover_zoom">
                    <Link to='/mission' href="#divContainer" className='boxImg'>
                        <span className="material-symbols-outlined spanPlay">play_circle</span>
                    <img src="https://image.tmdb.org/t/p/original/cNFHTxLRT35vYqAUpZ3LaZrbvbQ.jpg" alt="Not suported" />
                    </Link>
                </div>


                <div className="img_hover_zoom">
                    <Link to='/sorte' href="#divContainer" className='boxImg'>
                    <span className="material-symbols-outlined spanPlay">play_circle</span>
                    <img src="https://image.tmdb.org/t/p/original/ywj468m2EOFx3ZTzhIum2OcxHBi.jpg" alt="Not suported" />
                    </Link>
                </div>

                <div className="img_hover_zoom">
                    <Link to='/dose' href="#divContainer" className='boxImg'>
                    <span className="material-symbols-outlined spanPlay">play_circle</span>
                    <img src="https://image.tmdb.org/t/p/original/u5X9qjUfIZDmlVJXJ7xJVyyHZFa.jpg" alt="Not suported" />
                    </Link>
                </div>

                <div className="img_hover_zoom">
                    <Link to='/mafia' href="#divContainer" className='boxImg'>
                    <span className="material-symbols-outlined spanPlay">play_circle</span>
                    <img src="https://image.tmdb.org/t/p/original/78brsalBRfBg1ivGtpJ2BUUNKJe.jpg" alt="Not suported" />
                    </Link>
                </div>
        
                </Slider>

        </div>
    )
}
export default MoviesHome