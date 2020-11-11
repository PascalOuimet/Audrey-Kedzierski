import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <p>Les modes de paiement sont par transfert interac /bancaire.</p>
            <form method="post" data-netlify="true" name="contact" action="/success">
              <div className="field half first">
                <label htmlFor="name">Nom</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field half">
                <label htmlFor="phone">Téléphone</label>
                <input type="tel" name="phone" id="phone" />
              </div>
              <div className="field half">
                <label htmlFor="email">Courriel</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="field half">
                <label htmlFor="voicemail">Acceptez-vous que je vous laisse un message sur votre boîte vocale?</label>
                <input type="checkbox" name="voicemail" id="voicemail" />
              </div>
              <div className="field message">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
              </div>
              <p className="actions">
                <button className="cta-btn cta-btn--resume special" type="submit">Envoyer</button>
              </p>
              <input type="hidden" name="subject" value="Pratique autonome" />
              <input type="hidden" name="form-name" value="contact" />
            </form>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
