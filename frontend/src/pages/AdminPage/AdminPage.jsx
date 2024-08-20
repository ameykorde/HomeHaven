import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOffcanvasOpen(false); // Close the offcanvas after navigation
  };

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(prev => !prev);
  };

  return (
    <>
      <button
        className="btn btn"
        onClick={toggleOffcanvas}
        aria-controls="offcanvasExample"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>
      <div
        className={`offcanvas offcanvas-start${isOffcanvasOpen ? ' show' : ''}`}
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={toggleOffcanvas}
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <button
            className="btn btn-link"
            onClick={() => handleNavigation("/admin/products")}
          >
            Products
          </button>
          <button
            className="btn btn-link mt-3"
            onClick={() => handleNavigation("/admin/users")}
          >
            Users
          </button>
        </div>
      </div>
      <Outlet /> {/* This will render the nested routes */}
    </>
  );
};

export default AdminPage;
