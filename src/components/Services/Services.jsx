import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Services = ({ data }) => {
    const { p1, p2, p3, servicesList } = data;

    return (
        <section id="services">
            <Container>
                <Fade bottom duration={1000} delay={500} distance="30px">
                    <Title title="Services" />
                    <p>{p1}</p>
                    <p>{p2}</p>
                    <p>{p3}</p>
                    <ul>
                        {servicesList ? servicesList.map(row => <li key={row}>{row}</li>) : ""}
                    </ul>
                </Fade>
            </Container>
        </section>
    );
}

export default Services;