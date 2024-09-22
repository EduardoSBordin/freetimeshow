
import Navbar from './Navbar';
import CartoonsHome from './CartoonsHome';
import '../styles/Home.css'

function Home(){

    return(
        <div className='mainHome'>

    <Navbar />
    <section id='home'>
        <div className="contentHome">
            <div className="textHome">
                <h1>Os Simpsons</h1>
                <p>The Simpsons é uma série animada norte americana transmitida
                     pelo canal FOX. A comédia acompanha a família Simpsons,
                      uma família da classe trabalhadora na cidade desajustada
                       de Springfield. Homer, o pai, trabalha como inspetor de
                        segurança na usina nuclear local; Marge, a mãe, tenta 
                        manter a paz na família.</p>
            </div>
        </div>
    </section>
 
    <section id='cartoon'>
    <CartoonsHome />
    </section>
        </div>
 
  
    )
}
export default Home