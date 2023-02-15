import './../styles/Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">MyProfileApp</a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">Profile</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">Friends</a>
              </li>
            </ul>
            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
            </form>
            <div>
              <button type="button" class="btn btn-outline-light me-2">Login</button>
              <button type="button" class="btn btn-primary">Sign-up</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
