import { Link, useNavigate } from "react-router-dom";
import logo from "/src/assets/images/HomeHaven-logo.png";
import "./Navbar.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu1";

const NavBar = () => {
  const navigate = useNavigate();

  // Retrieve user info and admin status from local storage
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const isAdmin = userInfo?.admin === "YES";

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="HomeHaven Logo"
            width="100"
            height="50"
            className="mx-5 d-inline-block align-text-top"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarContent"
        >
          <form className="d-flex me-3">
            <input
              className="form-control search-bar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success ms-2" type="submit">
              Search
            </button>
          </form>

          {/* Conditionally render based on admin status */}
          {isAdmin ? (
            <button
              className="icon-button me-2"
              onClick={() => navigate("/admin/products")}
            >
              <span className="material-icons">add</span> {/* Google Icon */}
            </button>
          ) : (
            <Link to="/cart" className="icon-button mx-3">
              <span className="material-symbols-outlined">shopping_cart</span>{" "}
              {/* Google Icon */}
            </Link>
          )}

          <DropdownMenu userInfo={userInfo} onLogout={handleLogout} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
