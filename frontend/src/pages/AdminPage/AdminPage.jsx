import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminPage = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

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
        style={{ visibility: isOffcanvasOpen ? 'visible' : 'hidden' }} // Ensure offcanvas visibility is toggled
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
          <Link
            to="/admin/products"
            className="btn btn-link"
            onClick={toggleOffcanvas} // Close offcanvas on link click
          >
            Products
          </Link>
          <Link
            to="/admin/users"
            className="btn btn-link mt-3"
            onClick={toggleOffcanvas} // Close offcanvas on link click
          >
            Users
          </Link>
        </div>
      </div>
      <Outlet /> {/* This will render the nested routes */}
    </>
  );
};

export default AdminPage;
