import "./../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div className="row menunavegacion">
      <div className="col-lg-12">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Inicio
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contactos
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
