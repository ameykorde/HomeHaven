// src/pages/RegisterPage.jsx

import React, { useEffect } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // For navigation
import { useDispatch, useSelector } from 'react-redux'; // Import Redux hooks
import { register } from '../components/redux/actions/authActions'; // Import the register action
import './RegisterPage.css'; // Import the CSS file

const RegisterPage = () => {
  const [name, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { error, success } = useSelector(state => state.auth); // Access Redux state

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      // Dispatch error if passwords do not match
      dispatch({
        type: 'REGISTER_FAIL',
        payload: 'Passwords do not match',
      });
      return;
    }

    // Dispatch the register action
    dispatch(register(name, email, password));
  };

  useEffect(() => {
    if (success) {
      // Redirect to login page after a short delay
      setTimeout(() => navigate('/login'), 2000);
    }
  }, [success, navigate]);

  return (
    <Container className="register-container">
      <div className="register-box">
        <h2 className="text-center mb-4">Register</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter your full name" 
              value={name}
              onChange={(e) => setFullName(e.target.value)}
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Confirm your password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required 
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <div className="text-center mt-3">
          <a href="/" className="back-to-home-link">Back to Home</a>
        </div>
      </div>
    </Container>
  );
};

export default RegisterPage;
