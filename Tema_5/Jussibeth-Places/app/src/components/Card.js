import "./../styles/Card.css";
import heartland from "./../heartland.jpg";
export const Card = () => {
  return (
    <div className="row principal vh-80">
      <div className="col-lg-4 justify-content-center mx-auto vh-80 p-3 ">
        <div className=" row rounded border border-light bg-light  vh-80 p-1">
          <div className="col-lg-12 text-center">
            <img src={heartland} className="rounded img-thumbnail"></img>
          </div>
          <div className="col-lg-3">
            <span class="badge text-dark rounded border">Naturaleza</span>
          </div>
          <div className="col-lg-2">
            <span class="badge text-dark rounded border">Caballos</span>
          </div>
          <h2>Ranch Heartland.</h2>
          <p>
            Heartland has become the most-watched horse TV show in the
            equestrian world.
            <br></br>
            The actors, producers, and directors do an incredible job throughout
            the fourteen seasons of this hit series that includes love, loss,
            family, ranch life, and of course, horses.
            <br></br>
            The show is set on a picturesque ranch in Canada that features
            beautiful horses and scenery. As it has become a popular TV show,
            people are eager to know more about where the show is filmed, the
            actors, and other fun facts.
          </p>
          <a
            href="https://horseyhooves.com/heartland-ranch/"
            target="_blank"
            className="btn btn-outline-secondary"
          >
            Leer más...
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
