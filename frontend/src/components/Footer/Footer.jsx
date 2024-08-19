import React from 'react';
import { Container, Row, Col, Button, ListGroup, Image } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaDribbble } from 'react-icons/fa';
import { MdKeyboardArrowUp } from 'react-icons/md';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid className="footer-container">
        <Row className="footer-row py-4">
          <Col md={3} className="mb-4">
            <h6 className="footer-header">HomeHaven</h6>
            <ListGroup >
              <ListGroup.Item action href="#">About Us</ListGroup.Item>
              <ListGroup.Item action href="#">Culture</ListGroup.Item>
              <ListGroup.Item action href="#">Investors</ListGroup.Item>
              <ListGroup.Item action href="#">Careers</ListGroup.Item>
              <ListGroup.Item action href="#">Contact</ListGroup.Item>
              <ListGroup.Item action href="#">Our Benefits</ListGroup.Item>
              <ListGroup.Item action href="#">Sitemap</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="footer-header">INFORMATION</h6>
            <ListGroup  >
              <ListGroup.Item action href="#">Blog</ListGroup.Item>
              <ListGroup.Item action href="#">FAQs</ListGroup.Item>
              <ListGroup.Item action href="#">Documents Required</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="footer-header">POLICIES</h6>
            <ListGroup>
              <ListGroup.Item action href="#">Shipping Policy</ListGroup.Item>
              <ListGroup.Item action href="#">Cancellation & Return</ListGroup.Item>
              <ListGroup.Item action href="#">Privacy Policy</ListGroup.Item>
              <ListGroup.Item action href="#">Rental Terms & Conditions</ListGroup.Item>
              <ListGroup.Item action href="#">Referral Terms & Conditions</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <h6 className="footer-header">NEED HELP?</h6>
            <Button variant="outline-dark" className="footer-button">Chat with us (9am - 6pm)</Button>
            <div className="d-flex align-items-center mb-3">
              <Image src="https://cdn-icons-png.flaticon.com/512/4205/4205570.png" width="18" />
              <a href="mailto:jo@rentomojo.com" className="ms-2 footer-email">Home@Haven.com</a>
            </div>
            <h6 className="footer-header mb-2">DOWNLOAD APP</h6>
            <div className="d-flex gap-3 footer-download">
              <a href="https://apps.apple.com/in/app/rentomojo-products-on-rent/id1404801676?_branch_match_id=1052087403742522196&utm_source=automation&utm_campaign=App%20Download&utm_medium=Website&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8rNz8rXy8zTNyu1MM8wL3bzigIAWVRPyxsAAAA%3D" target="_blank" rel="noopener noreferrer">
                <Image src="https://static.vecteezy.com/system/resources/previews/022/484/501/original/google-play-store-icon-logo-symbol-free-png.png" alt="google store" className="store-icon" />
              </a>
              <a href="https://apps.apple.com/in/app/rentomojo-products-on-rent/id1404801676?_branch_match_id=1052087403742522196&utm_source=automation&utm_campaign=App%20Download&utm_medium=Website&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8rNz8rXy8zTNyu1MM8wL3bzigIAWVRPyxsAAAA%3D" target="_blank" rel="noopener noreferrer">
                <Image src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-app-store-icon-ios-style-iconset-iynque-0.png" alt="ios store" className="store-icon" />
              </a>
            </div>
          </Col>
        </Row>

        <Row className="border-top py-3">
          <Col className="text-center text-muted footer-text-muted">
            © 2022. Edunetwork Pvt. Ltd.
          </Col>
          <Col className="text-center">
            <div className="d-flex justify-content-center gap-3 footer-social-icons">
              <a href="https://www.facebook.com/rentomojo" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com/rentomojo" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/company/rentomojo/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://www.youtube.com/c/RentomojoOfficial" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com/rentomojo/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://dribbble.com/RentoMojo" target="_blank" rel="noopener noreferrer">
                <FaDribbble />
              </a>
            </div>
          </Col>
          <Col className="text-center">
            <Button variant="outline-dark" size="sm" className="d-flex align-items-center mx-auto footer-go-up-button">
              <span className="me-2">Go Up</span>
              <MdKeyboardArrowUp />
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
