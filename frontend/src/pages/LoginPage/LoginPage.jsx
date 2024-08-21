import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';
import {BASE_URL} from '../../../services/url'
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    try {
      const response = await axios.post(`${BASE_URL}/users/login`, {
        email,
        password,
      });
  
      if (response.status === 200) {
        // Assuming the response contains userId and adminStatus
        const { userId, adminStatus } = response.data;
  
        // Store user information in local storage
        localStorage.setItem('userData', JSON.stringify({
          userId,
          adminStatus,
          isLoggedIn: true
        }));
  
        alert('Login successful!');
        navigate('/'); // Redirect to home page after login
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };
  


  return (
    <div className="container login-container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 login-box">
          <h2 className="text-center mb-4">Login</h2>
          {error && <p className="alert alert-danger">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="formBasicEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="formBasicEmail"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="formBasicPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="formBasicPassword"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              {loading ? 'Loading...' : 'Login'}
            </button>
          </form>
          <div className="text-center mt-3">
            <p>
              Don't have an account? <a href="/register">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
