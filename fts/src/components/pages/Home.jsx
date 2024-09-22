
import Navbar from './Navbar';
import CartoonsHome from './CartoonsHome';
import '../styles/Home.css'

function Home(){

    return(
        <div>

    <Navbar />
    <section id='home'></section>
 
    <section id='cartoon'>
    <CartoonsHome />
    <CartoonsHome />
    </section>
        </div>
 
  
    )
}
export default Home