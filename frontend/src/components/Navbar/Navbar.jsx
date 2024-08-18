import './NavBar.css'// Custom CSS for additional styling

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary"> {/* Changed to a dark theme */}
      <div className="container-fluid">
        {/* Logo and Title */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="./src/assets/images/HomeHaven-logo.png" alt="HomeHaven Logo" width="100" height="100" className="mx-5 d-inline-block align-text-top" />
          {/* <span className="ms-2">HomeHaven</span> */}
        </a>

        {/* Toggle button for mobile view */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

          {/* Search Bar */}
          <form className="d-flex me-3">
            <input className="form-control search-bar" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success ms-2" type="submit">Search</button>
          </form>

          {/* Cart Icon */}
          <a href="#" className="btn btn-outline-primary me-2">
            <i className="bi bi-cart"></i>
          </a>

          {/* User Icon */}
          <a href="#" className="btn btn-outline-secondary">
            <i className="bi bi-person"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
