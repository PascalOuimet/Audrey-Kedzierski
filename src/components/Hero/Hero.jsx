import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero, process, pricing, about } = useContext(PortfolioContext);
  const { title, name, subtitle } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
            <br />
            <span className="subtitle">{subtitle || "I'm the Unknown Developer."}</span>
          </h1>
          <p className="hero-quote"><q>Our wounds are often the openings into the best and most beautiful parts of us.</q><br/>– David Richo</p>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <nav className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="process" smooth duration={1000}>
                {process.title}
              </Link>
            </span>
            <span className="cta-btn cta-btn--hero">
              <Link to="services" smooth duration={1000}>
                Services
              </Link>
            </span>
            <span className="cta-btn cta-btn--hero">
              <Link to="pricing" smooth duration={1000}>
              {pricing.title}
              </Link>
            </span>
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
              {about.title}
              </Link>
            </span>
            <span className="cta-btn cta-btn--hero">
              <Link to="contact" smooth duration={1000}>
                Contact
              </Link>
            </span>
          </nav>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
