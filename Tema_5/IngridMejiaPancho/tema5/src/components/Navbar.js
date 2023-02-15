import './../styles/Navbar.css';
import { Button } from '../components/Button';

export const Navbar = () => {
    return <div className="navbar">
        <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
                <Button texto="Mi Perfil"/>
                <Button texto="Viajes"/>
                <Button texto="Comidas"/>
                <Button texto="Estudios"/>
            </form>
        </nav>
    </div>
};