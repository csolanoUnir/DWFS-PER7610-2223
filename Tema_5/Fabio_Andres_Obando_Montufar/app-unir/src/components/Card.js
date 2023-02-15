import './../styles/card.css';

const Card = ({cardData})=>
{
  const tagsList= cardData.tags.map((tag)=><li className="tag">{tag}</li>);
  return (
    <div className="tarjeta">
      <h2>{cardData.head}</h2>
      <img src={cardData.image} className="tarjeta-imagen" alt="logo" />
      <p>{cardData.texto}</p>
      <ul className="tags">
          {tagsList}
      </ul>
      <div className="button-container">
          <a className="card-button" href="#">{cardData.link}</a>          
      </div>      
    </div>
  );
};  
export default Card;