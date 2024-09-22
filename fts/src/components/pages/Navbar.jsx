import '../styles/Navbar.css'

function Navbar({to, title}){

    return(
    <>
        <nav>

            <h1 className='logo'> <p className='freeText'>Free</p> TimeShow </h1>

            <div className="links">
            <a href="#home">INICIO</a> 
            <a href="#cartoon">DESENHOS</a>

            </div>
    
        </nav>
    </>
    )
}
export default Navbar