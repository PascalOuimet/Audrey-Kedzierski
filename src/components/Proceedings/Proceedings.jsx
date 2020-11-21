import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Proceedings = () =>
    <section id="proceedings">
        <Container>
            <Fade bottom duration={1000} delay={100} distance="30px">
                <Title title="Déroulement" />
                <p>Il arrive à tous de vivre des moments plus difficiles dans notre parcours de vie, et à certains moments il peut être pertinent de venir chercher de l’aide et du soutien d’un/une sexologue. Vous n'avez pas besoin d'être dans une relation amoureuse pour consulter en sexologie. En effet, toute personne souhaitant améliorer sa vie personnelle et interpersonnelle peut bénéficier d'une consultation avec un sexologue puisque plusieurs sujets peuvent être abordés.</p>
                <p>Le nombre de rencontres peut varier d’un besoin à l’autre, dépendamment de l’ampleur des problématiques et de votre cheminement.</p>
                <p>J’offre des consultations individuelles ou de couples, principalement téléphone ou en visioconférence, pouvant offrir en présentiel au besoin, pour des personnes éprouvant diverses difficultés personnelles, relationnelles et/ou sexuelles. J’offre les consultations en français et en anglais.</p>
                <p>Lors des suivis psychosociaux, j’utilise les approches suivantes : Cognitivo comportementale, existentielle-humaniste, théories et pratiques féministes, orienté vers les solutions.</p>                
                <p>Pour en savoir plus sur le rôle des sexologues, consultez le site de l’<a href="https://opsq.org/" target="_blank">OPSQ</a>.</p>
            </Fade>
        </Container>
    </section>

export default Proceedings;