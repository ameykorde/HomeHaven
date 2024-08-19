import React, { useState, useEffect, useRef } from 'react';
import './DropdownMenu.css';

const DropdownMenu1 = ({ userInfo, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <i className="bi bi-person"></i>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {userInfo ? (
            <>
              <a href="/profile" className="dropdown-item">{userInfo.name}</a>
              <a href="/contact" className="dropdown-item">Contact Us</a>
              <button className="dropdown-item" onClick={onLogout}>Logout</button>
            </>
          ) : (
            <a href="/login" className="dropdown-item">Login</a>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu1;
