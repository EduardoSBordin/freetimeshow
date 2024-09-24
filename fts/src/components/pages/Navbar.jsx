import '../styles/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar({to, title}){

    function showModal(){
        document.querySelector('.menuModal').classList.toggle('active');
        document.querySelector('.btnModal').classList.toggle('active');
    }

    return(
    <>
        <nav>

            <h1 className='logo'> <p className='freeText'>Free</p> TimeShow </h1>

            <div className="links">

            <Link to='/' className='linkMenu' href="#upHome">Inicio</Link>
            <Link to='/hamburguer' className='linkMenu'>Desenhos</Link>

            </div>

            <div className="linkMobile">
                <button className='btnModal' onClick={showModal}></button>

                <div className="menuModal">
                <Link to='/' className='linkMenu'>Inicio</Link>
                <Link to='/hamburguer'  className='linkMenu'>Desenhos</Link>
                </div>
            </div>
    
        </nav>
    </>
    )
}
export default Navbar