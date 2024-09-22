import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

function NavbarCategories({to, title}){

    function showModal() {
        document.querySelector('.menuModal').classList.toggle('active');
        document.querySelector('.btnModal').classList.toggle('active');
    }

    return (
        <>
            <nav>

                <h1 className='logo'> <p className='freeText'>Free</p> TimeShow </h1>

                <div className="links">
                    <a href="/">INICIO</a>
                    <a href="#cartoon">DESENHOS</a>

                </div>

                <div className="linkMobile">
                    <button className='btnModal' onClick={showModal}></button>

                    <div className="menuModal">
                        <a href="/">INICIO</a>
                        <a href="#cartoon">DESENHOS</a>
                    </div>
                </div>

            </nav>
    </>
    )
}
export default NavbarCategories