import '../../styles/card/card.css';

function Card({cardData}) {
    const tagsList= cardData.tags.map((tag)=><li className="tag">{tag}</li>);
    return (
      <div className="card">
        <img src={cardData.image} className="card-logo" alt="logo" />
        <ul className="tags">
            {tagsList}
        </ul>
        <h2>{cardData.title}</h2>
        <p>{cardData.paragraph}</p>
        <div className="button-container">
            <a className="card-button" href="#">{cardData.buttonText}</a>
        </div>
      </div>
    );
  }
  
  export default Card;