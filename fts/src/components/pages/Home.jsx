import CartoonsHome from './CartoonsHome';
import MoviesHome from './MoviesHome';
import '../styles/Home.css'
import { Link } from 'react-router-dom';

function Home(){

    return(
        <div className='mainHome'>

    <section id='home' className='upHome' style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/4InwNJ8yl1L4kf7rZvPHWJFQpSV.jpg)`,
        backgroundAttachment: 'scroll',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }}>
        <div className="contentHome">
            <div className="textHome">
                <h1 className='txtTitle'>Os Simpsons</h1>

                <div className="divBtnAboveTitle">
                <Link to='/simpsons' className='toWath'>Assistir</Link>
                <button className="modalInf">Mais Informações</button>
                </div>
                <p className='txtResume'>The Simpsons é uma série animada norte americana transmitida
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
    {/* <MoviesHome /> */}
    
    </section>
        </div>
 
  
    )
}
export default Home