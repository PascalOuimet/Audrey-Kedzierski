import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Footer = () =>
  <footer className="footer navbar-static-bottom">
    <Container>
      <span className="back-to-top">
        <Link to="hero" smooth duration={1000}>
          <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
        </Link>
      </span>
      <hr />
      <p className="footer__text">
        © {new Date().getFullYear()} - {' '}
        <a href="https://github.com/cobidev" target="_blank" rel="noopener noreferrer">
          Jacobo Martínez
          </a>
      </p>
    </Container>
  </footer>


export default Footer;
