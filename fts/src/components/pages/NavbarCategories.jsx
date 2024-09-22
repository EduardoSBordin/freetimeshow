import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

function NavbarCategories({to, title}){

    return(
    <>
        <nav>

            <h1 className='logo'> <p className='freeText'>Free</p> TimeShow </h1>

            <div className="links">
            <a href="/">INICIO</a> 
            <a href="#cartoon">DESENHOS</a>

            </div>
    
        </nav>
    </>
    )
}
export default NavbarCategories