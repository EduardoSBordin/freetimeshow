import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

function NavbarCategories({to, title}){

    return(
    <>
        <nav>
           
            <Link to='/'>Inicio</Link>
            <Link to='/'>Desenhos</Link>
            <Link to='/'>Filmes</Link>
    
        </nav>
    </>
    )
}
export default NavbarCategories