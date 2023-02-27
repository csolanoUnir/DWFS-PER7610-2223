import '../styles/Card.css'
const CardInformation = () => {
    return (
        <div className='container'>
            <div className="card" style={{ width: "38rem" }}>
                <div className="container2">
                    <img src="../../templo.jpg" className="card-img-top" alt='...'
                    style={{ width: "300px", height: "300px" }} />
                </div>

                <div className="card-body">
                    <h5 className="card-title">Templos de Angkor (Camboya)</h5>
                    <p className="card-text">Por unanimidad, los templos de Angkor superaron a todos los destinos 
                    del mundo en esta lista. Angkor Wat es el mayor templo del mundo consagrado al dios Visnú y 
                    puede parecer fuera de lugar en la Camboya budista, pero este magnífico monumento es el 
                    principal tesoro del reino hindú que en otros tiempos abarcó hasta Birmania. Es un lugar 
                    extraordinario: una alegoría del cielo en la tierra, tallado sobre miles de bloques de 
                    arenisca y esculpidos de arriba abajo con representaciones de las leyendas del Tamayana, el 
                    Mahabhárata y los Puranas. Angkor Wat es la principal atracción de un complejo con más de 
                    1000 templos, santuarios y tumbas en mitad de la jungla del norte de Camboya. Uno de los 
                    destinos imprescindibles que todo viajero debe apuntar en su lista de deseos. </p>
                </div>
                <ul clasclassNames="list-group list-group-flush">
                    <li className="list-group-item">Historia</li>
                    <li className="list-group-item">Planes turísticos</li>
                    <li className="list-group-item">Temporadas de viajes</li>
                </ul>
                <div className="card-body">
                    <a href="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o9yipv1bp9jv032twvol.png" 
                    className="card-link">Más información</a>
                    <br />
                    <a href="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o9yipv1bp9jv032twvol.png" 
                    className="card-link">Contactar agencia viajes</a>
                </div>
            </div>
        </div>
    );
};
export default CardInformation;