import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import paypal from "../../imgs/paypal.png";
import visa from "../../imgs/visa.png";
import credit from "../../imgs/credit-card.png";
import logo from "../../imgs/logo02.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <Container className="container">
        <Row className="footer-links">
          <Col sm="6" lg="3">
            <div className="footer-about">
              <div className="footer-logo mb-4">
                <Link to="/">
                  <img src={logo} loading="lazy" alt="quickmart-logo"></img>
                </Link>
              </div>
              <p>
                The customer is at the heart of our unique business model, which
                includes design.
              </p>
              <div className="footer-payment-methods">
                <a href="#">
                  {" "}
                  <img src={paypal} alt="payment"></img>
                </a>
                <a href="#">
                  {" "}
                  <img src={visa} alt="payment"></img>
                </a>
                <a href="#">
                  {" "}
                  <img src={credit} alt="payment"></img>
                </a>
              </div>
            </div>
          </Col>
          <Col sm="6" lg="3">
            <div className="footer__widget">
              <h4>Shopping</h4>
              <ul>
                <li>
                  <Link to="/shopProductsPage">Clothing Store</Link>
                </li>
                <li>
                <Link to="/shopProductsPage">Trending Shoes</Link>
                </li>
                <li>
                     <Link to="/shopProductsPage">Accessories</Link>
                </li>
                <li>
                     <Link to="/shopProductsPage">Sale</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm="6" lg="3">
            <div className="footer__widget">
              <h4>Shopping</h4>
              <ul>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Payment Methods</a>
                </li>
                <li>
                  <a href="#">Delivary</a>
                </li>
                <li>
                  <a href="#">Return &amp; Exchanges</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm="6" lg="3">
            <div className="footer__widget">
              <h4>NewLetter</h4>
              <div className="footer__newslatter">
                <p>
                  Be the first to know about new arrivals, look books, sales
                  &amp; promos!
                </p>
                <form className="position-relative" action="#">
                  <input type="text" placeholder="Your email"></input>
                  <button type="submit">
                    <span>
                      <i className="fa-regular fa-envelope"></i>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="footer-copyright">
          <Col lg="12" className="text-center">
            <div className="footer__copyright__text">
              <p>
                Copyright © All rights reserved | This project is made with{" "}
                <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                <a
                  href="https://www.linkedin.com/in/mohamed-khaledes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mohamed Khaled
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
