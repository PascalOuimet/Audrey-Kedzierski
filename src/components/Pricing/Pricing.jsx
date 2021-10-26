import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Pricing = ({data}) => {
    const { title, individual1, individual2, couple1, couple2, receipt, star, star2 } = data;

    return (
        <Fade bottom duration={1000} delay={300} distance="0px">
            <section id="pricing">
                <Container>
                    <Title title={title || ""} />
                    <p><strong>{individual1} </strong>{individual2}<br /><strong>{couple1} </strong>{couple2}</p>
                    <p>{receipt}</p>
                    <p className="price-note">{star}</p>
                    <p className="price-note">{star2}</p>
                </Container>
            </section>
        </Fade>
    );
}

export default Pricing;