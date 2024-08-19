import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate for routing
import { useSelector, useDispatch } from 'react-redux'; // For accessing Redux state and dispatching actions
import { logout } from '../redux/actions/authActions'; // Import the logout action
import logo from '/src/assets/images/HomeHaven-logo.png'; // Correct image import

const NavBar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    navigate('/login'); // Redirect to login page after logout
  };

  const handleUserIconClick = () => {
   console.log("working");
      navigate('/login'); // Redirect to login if user is not authenticated
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary"> {/* Changed to a dark theme */}
      <div className="container-fluid">
        {/* Logo and Title */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="HomeHaven Logo" width="100" height="50" className="mx-5 d-inline-block align-text-top" />
          {/* <span className="ms-2">HomeHaven</span> */}
        </Link>

        {/* Toggle button for mobile view */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Add more nav items here if needed */}
          </ul>

          {/* Search Bar */}
          <form className="d-flex me-3">
            <input className="form-control search-bar" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success ms-2" type="submit">Search</button>
          </form>

          {/* Cart Icon */}
          <Link to="/cart" className="btn btn-outline-primary me-2">
            <i className="bi bi-cart"></i>
          </Link>

          {/* User Icon with conditional rendering based on authentication */}
          {userInfo ? (
  <div className="btn-group">
    <button 
      type="button" 
      className="btn btn-outline-secondary" 
      onClick={handleUserIconClick}
    >
      <i className="bi bi-person"></i>
    </button>
    <ul className="dropdown-menu">
      <li><Link className="dropdown-item" to="/profile">{userInfo.name}</Link></li>
      <li><Link className="dropdown-item" to="/contact">Contact Us</Link></li>
      <li><hr className="dropdown-divider" /></li>
      <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
    </ul>
  </div>
) : (
  <button 
    className="btn btn-outline-secondary"
    onClick={handleUserIconClick}
  >
    <i className="bi bi-person"></i>
  </button>
)}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
