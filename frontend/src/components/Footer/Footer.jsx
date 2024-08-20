import React from 'react';
import { Container, Row, Col, Button, ListGroup, Image } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import { MdKeyboardArrowUp } from 'react-icons/md';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid className="footer-container">
        <Row className="footer-row py-4">
          <Col md={3} className="mb-4">
            <h6 className="footer-header">Company</h6>
            <ListGroup className="footer-list-group">
              <ListGroup.Item action href="#">About Us</ListGroup.Item>
              <ListGroup.Item action href="#">Careers</ListGroup.Item>
              <ListGroup.Item action href="#">Contact</ListGroup.Item>
              <ListGroup.Item action href="#">Sitemap</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="footer-header">Support</h6>
            <ListGroup className="footer-list-group">
              <ListGroup.Item action href="#">FAQs</ListGroup.Item>
              <ListGroup.Item action href="#">Shipping Policy</ListGroup.Item>
              <ListGroup.Item action href="#">Returns</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="footer-header">Follow Us</h6>
            <div className="footer-social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </Col>

          <Col md={3}>
            <h6 className="footer-header">Get in Touch</h6>
            <Button variant="primary" className="footer-button">Chat with Us</Button>
            <div className="footer-contact">
              <a href="mailto:contact@company.com" className="footer-email">contact@company.com</a>
            </div>
          </Col>
        </Row>

        <Row className="border-top py-3">
          <Col className="text-center text-muted footer-text-muted">
            © 2024 Company Name. All rights reserved.
          </Col>
          <Col className="text-center">
            <Button variant="outline-dark" size="sm" className="footer-go-up-button">
              <MdKeyboardArrowUp /> Go Up
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
