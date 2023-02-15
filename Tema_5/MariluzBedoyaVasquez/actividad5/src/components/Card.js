//import logo from './logo.svg';
import '../styles/Card.css';

function Card() {
  return (
    <div class="card-container">
      <div class="card">
        <img class="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div class="button-container">
            <a href="#" class="card-button">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;