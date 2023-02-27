import './../styles/Card.css';

function Card({userData}) {
  const tags = userData.tags.map((tag)=><span class="tag">{tag}</span>)
  return (
    <div className="Card">
      <div class="card mx-auto">
        <img class="card-img-top" src={userData.img} alt="Lago_di_Braies" />
        <div class="card-body">
          <span>{tags}</span>
          <h4 class="card-title">{userData.title}</h4>
          <p class="card-text">{userData.content}</p>
          <a href="/" class="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
