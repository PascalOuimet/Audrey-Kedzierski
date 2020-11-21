import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Pricing = () =>
    <Fade bottom duration={1000} delay={300} distance="0px">
        <section id="pricing">
            <Container>
                <Title title="Tarification" />
                <p><strong>Individuelle : </strong>85$ (Rencontre de 50 minutes)<br /><strong>Couple : </strong>105$ (Rencontre 1hr15 minutes)</p>
                <p>Je vous remets un reçu pour vos assurances ou crédits d’impôt à la réception du paiement.</p>
                <p className="price-note">** Tarification ajusté au revenu aussi disponible. Me contacter pour plus d'informations.</p>
            </Container>
        </section>
    </Fade>

export default Pricing;