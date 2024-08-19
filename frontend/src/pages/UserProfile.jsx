import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';

const UserProfile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="user-profile">
      <img src="user-logo.png" alt="User Logo" className="user-logo" />
      <div className="user-menu">
        <p>{userInfo?.name}</p>
        <ul>
        
          <li>Contact Us</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
