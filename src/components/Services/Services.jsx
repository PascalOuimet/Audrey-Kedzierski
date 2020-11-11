import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Services = () =>
    <section id="services">
        <Container>
        <Fade bottom duration={1000} delay={800} distance="30px">
            <Title title="Services" />
            <p>Les services sont offerts pour les adolescents, adultes et personés âgés.</p>
            <p>Les thèmes possibles sont vastes et dépendent de vous.<br />À titre indicatif, nous pouvons aborder des difficultés émotionnelles ou relationnelles telles que: les difficultés amoureuses, les problèmes de communication, le manque de confiance ou d'estime de soi, les séparations, le stress et l'anxiété de performance, l'image corporelle déficitaire, etc.</p>
            <p>Ceci n’est pas une liste exhaustive, mais il m’est possible de vous accompagner dans des contextes multiples incluant : </p>
            <ul>
                <li>Affirmation de soi</li>
                <li>Agression sexuelle / harcèlement sexuel (victime)</li>
                <li>Alcoolisme / Toxicomanie</li>
                <li>Cadre juridique</li>
                <li>Dépendance affective</li>
                <li>Dépendance et compulsivité sexuel</li>
                <li>Deuil</li>
                <li>Développement et fonctionnement sexuel</li>
                <li>Développement de l’imaginaire et de l’intimité</li>
                <li>Difficultés d’adaptation en lien avec la situation de pandémie (COVID-19)</li>
                <li>Difficultés relationnelles</li>
                <li>Difficultés conjugales</li>
                <li>Dysfonctions sexuelles</li>
                <li>Estime de soi</li>
                <li>Expression des émotions et des désirs</li>
                <li>Gestion des émotions</li>
                <li>Hyper sexualisation</li>
                <li>Idées suicidaires</li>
                <li>Identité et orientation sexuelle</li>
                <li>Image corporelle / épanouissement sexuelle</li>
                <li>Intimité / Communication / Séduction</li>
                <li>Jalousie</li>
                <li>Ménopause / Andropause</li>
                <li>Périnatalité</li>
                <li>Personnes trans / Non-binaires</li>
                <li>Pratique culturelle et normes sociales</li>
                <li>Santé physique, sexuelle et reproductive</li>
                <li>Satisfaction et affirmation de soi</li>
                <li>Séparation / Rupture</li>
                <li>Stress, anxiété (anxiété de performance)</li>
                <li>Troubles alimentaires</li>
                <li>Violence conjugale / Conflits dans les relations amoureuses</li>
                <li>Et plus encore</li>
            </ul>
            </Fade>
        </Container>
    </section>
export default Services;