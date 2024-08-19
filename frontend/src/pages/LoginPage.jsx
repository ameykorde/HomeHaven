import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  login } from '../components/redux/actions/authActions'; 
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, userInfo } = useSelector((state) => state.auth);



  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Container className="login-container my-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4} className="login-box">
          <h2 className="text-center mb-4">Login</h2>
          {error && <p>{error}</p>}
          <Form onSubmit={handleSubmit}>
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

            <Button variant="primary" type="submit">
              {loading ? 'Loading...' : 'Login'}
            </Button>
          </Form>
          <div className="text-center mt-3">
            <p>Don't have an account? <a href="/register">Sign up</a></p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
