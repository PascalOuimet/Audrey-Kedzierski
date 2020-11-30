import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Contact = ({data}) => {
  const { cta, methods, fname, fphone, femail, fagree, fmessage, fsend, fsuccessPage } = data;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>            
            <form method="post" data-netlify="true" name="contact" action={fsuccessPage}>
              <div className="field half first">
                <label htmlFor="name">{fname}</label><br/>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field half">
                <label htmlFor="phone">{fphone}</label><br/>
                <input type="tel" name="phone" id="phone" />
              </div>
              <div className="field half">
                <label htmlFor="email">{femail}</label><br/>
                <input type="email" name="email" id="email" />
              </div>
              <div className="field checkbox">
                <label htmlFor="voicemail">{fagree}</label>
                <input type="checkbox" name="voicemail" id="voicemail" />
              </div>
              <div className="message">
                <label htmlFor="message">{fmessage}</label>
                <textarea name="message" id="message" rows="4"></textarea>
              </div>
              <p className="actions">
                <button className="cta-btn cta-btn--resume special" type="submit">{fsend}</button>
              </p>
              <input type="hidden" name="subject" value="Pratique autonome" />
              <input type="hidden" name="form-name" value="contact" />
            </form>
            <p>{methods}</p>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
