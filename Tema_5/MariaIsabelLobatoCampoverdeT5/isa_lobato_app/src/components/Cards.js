import logo from './../yo.PNG';
import './../styles/Cards.css';
import 'bootstrap/dist/css/bootstrap.css';

function Cards() {
  return (
    <div class="card  contcard">
      <img src={logo}  alt="logo" />
 
      <div class="card-body">
        <h5 class="card-title">Datos Personales</h5>
        <p class="card-text">Descripción de los datos basicos de una persona.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Nombre: María Isabel Lobato Camoverde</li>
        <li class="list-group-item">Ciudad: Quito</li>
        <li class="list-group-item">Pais: Ecuador</li>
        <li class="list-group-item">Profesión: Ingeniera de Sistemas e Informática</li>
      </ul>
    </div>
  );
}

export default Cards;
