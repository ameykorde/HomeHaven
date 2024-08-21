import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./RegisterPage.css";
import {BASE_URL} from '../../../services/url'
const RegisterPage = () => {
  const [name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/users/signup`, {
        name, 
        email,
        password,
      });
      console.log(response);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="container register-container my-5">
      <div className="register-box">
        <h2 className="text-center mb-4">Register</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="formBasicFullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="formBasicFullName"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

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

          <div className="mb-3">
            <label htmlFor="formBasicConfirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="formBasicConfirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
        <div className="text-center mt-3">
          <a href="/" className="back-to-home-link">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
