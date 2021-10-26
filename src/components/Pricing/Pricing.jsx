import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Pricing = ({data}) => {
    const { title, individual_1, individual_2, couple_1, couple_2, receipt, star, star2 } = data;

    return (
        <Fade bottom duration={1000} delay={300} distance="0px">
            <section id="pricing">
                <Container>
                    <Title title={title || ""} />
                    <p><strong>{individual_1} </strong>{individual_2}<br /><strong>{couple_1} </strong>{couple_2}</p>
                    <p>{receipt}</p>
                    <p className="price-note">{star}</p>
                    <p className="price-note">{star2}</p>
                </Container>
            </section>
        </Fade>
    );
}

export default Pricing;