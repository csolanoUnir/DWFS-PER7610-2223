import '../styles/Card.css';

const CardInformation= () => {
    return(
        <div className="container">
            <div class="card" style={{width: '18re'}}>
                <div className="container">
                <img className="card-img-top" src="./igor.png" alt="Card image"/>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Ígor</h5>
                    <p class="card-text">Ígor (llamado originalmente Eeyore) es un personaje de la serie de libros, películas y series animadas Winnie the Pooh. 
                    Generalmente se le representa como un viejo burro de 
                    peluche gris bastante pesimista y melancólico, amigo del protagonista, Pooh.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Tigger</li>
                    <li class="list-group-item">Puerquito</li>
                    <li class="list-group-item">Rabbit</li>
                </ul>
                <div class="card-body">
                    <a href="https://disney.fandom.com/es/wiki/Igor" class="card-link">Igor wiki</a>
                </div>
            </div>
       </div>
    );
};
export default CardInformation