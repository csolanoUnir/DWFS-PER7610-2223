import '../../styles/navbar/navbar.css';
import logo from '../../images/logo.png';

function Navbar() {
    return (
      <div className="navbar-container">
        <img src={logo} className="navbar-logo" alt="logo" />
        <ul className="navbar">
            <li className="navbar-item"><a href="#">Inicio</a></li>
            <li className="navbar-item"><a href="#">Mi cuenta</a></li>
            <li className="navbar-item"><a href="#">Actualizar datos</a></li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;