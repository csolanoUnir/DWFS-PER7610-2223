import './../styles/navbar.css';

const Navbar = ()=>{
  return <div class="bd-example">
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Tarjeta de Credito</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="https://www.visa.com.co/">Visa</a>
          <a class="nav-link" href="https://www.mastercard.com.co/es-co.html">Mastercard</a>
          <a class="nav-link disabled">American Expres (proximamente)</a>
        </div>
      </div>
    </div>
  </nav>
  </div>
;
};  


  
  /*return <div className="navbar-container">
    <ul className="navbar">
      <li className="navbar-item"><a href="#">Home</a></li>
      <li className="navbar-item"><a href="#">Seguridad</a></li>
      <li className="navbar-item"><a href="#">Auditoria</a></li>
      <li className="navbar-item"><a href="#">Parametros</a></li>
      <li className="navbar-item"><a href="#">Interfaces</a></li>
      <li className="navbar-item"><a href="#">Ayuda</a></li>
    </ul>
  </div>*/


  export default Navbar;