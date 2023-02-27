//import logo from './logo.svg';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div class="navbar-container">
            <ul class="navbar">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a href="#">Mision</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Nosotros</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Contactos</a>
                </li>
            </ul>
        </div>
    );
}
export default Navbar;
