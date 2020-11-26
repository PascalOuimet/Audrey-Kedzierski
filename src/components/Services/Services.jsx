import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const Services = () =>{
    const { services } = useContext(PortfolioContext);
    const { p1, p2, p3, servicesList} = services;

    return(
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