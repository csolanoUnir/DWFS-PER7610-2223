import './../styles/Card.css';
import foto from '../img/foto.jpg';
import './../styles/App.css';

export const Card = () => {
    return <div className="card">
         <img src={foto} class="card-foto" alt="foto"></img>
            <div className="card-body">
                <h5 className="card-title">Mi perfil</h5>
                <p className="card-text">Me gusta conocer nuevas culturas, gente y disfrustar de las comidas tipicas, te invito a que visites mis redes sociales.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Ingrid Mejia Pancho</li>
                <li className="list-group-item">31 años</li>
                <li className="list-group-item">Viajera por el mundo</li>
            </ul>
            <div className="card-body">
                <a href="https://www.facebook.com/ingridirenem" className="card-link">Facebook</a>
                <a href="https://www.instagram.com/ingridirenem/" className="card-link">Instagram</a>
            </div>
    </div>
};