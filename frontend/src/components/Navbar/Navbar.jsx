import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';
import logo from '/src/assets/images/HomeHaven-logo.png';
import './Navbar.css';
import DropdownMenu from '../DropdownMenu/DropdownMenu1';

const NavBar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="HomeHaven Logo" width="100" height="50" className="mx-5 d-inline-block align-text-top" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          <form className="d-flex me-3">
            <input className="form-control search-bar" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success ms-2" type="submit">Search</button>
          </form>

          <Link to="/cart" className="btn btn-outline-primary me-2">
            <i className="bi bi-cart"></i>
          </Link>

          <DropdownMenu userInfo={userInfo} onLogout={handleLogout} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
