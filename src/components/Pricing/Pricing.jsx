import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const Pricing = () => {
    const { pricing } = useContext(PortfolioContext);
    const { title, individual_1, individual_2, couple_1, couple_2, receipt, star } = pricing;

    return (
        <Fade bottom duration={1000} delay={300} distance="0px">
            <section id="pricing">
                <Container>
                    <Title title={title || ""} />
                    <p><strong>{individual_1} </strong>{individual_2}<br /><strong>{couple_1} </strong>{couple_2}</p>
                    <p>{receipt}</p>
                    <p className="price-note">{star}</p>
                </Container>
            </section>
        </Fade>
    );
}

export default Pricing;