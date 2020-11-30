import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Process = ({data}) => {
    const { title, p1, p2, p3, p4, p5_1, p5_2 } = data;

    return (
        <section id="process">
            <Container>
                <Fade bottom duration={1000} delay={100} distance="30px">
                    <Title title={title || ""} />
                    <p>{p1}</p>
                    <p>{p2}</p>
                    <p>{p3}</p>
                    <p>{p4}</p>
                    <p>{p5_1}<a href="https://opsq.org/" target="_blank">OPSQ</a>{p5_2}.</p>
                </Fade>
            </Container>
        </section>
    )
}

export default Process;