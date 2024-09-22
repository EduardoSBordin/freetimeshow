import '../styles/Navbar.css'

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
            <a href="#home">INICIO</a> 
            <a href="#cartoon">DESENHOS</a>

            </div>

            <div className="linkMobile">
                <button className='btnModal' onClick={showModal}></button>

                <div className="menuModal">
                <a href="#home">INICIO</a> 
                <a href="#cartoon">DESENHOS</a>
                </div>
            </div>
    
        </nav>
    </>
    )
}
export default Navbar