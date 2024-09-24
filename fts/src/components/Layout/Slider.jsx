import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Slider(){

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
    <Slider {...settings}>

    </Slider>
    )
}
export default Slider