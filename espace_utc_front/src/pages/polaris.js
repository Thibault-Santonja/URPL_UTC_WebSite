import React, {Component} from 'react';
import {Button, Col, Row} from "reactstrap";


import galaxy from '../assets/Andromeda_Galaxy.jpg';
import horizon from '../assets/imgs/earth-horizon-from-space - Copy.jpg';
import rocket from '../assets/imgs/clouds-rocket.jpg';
import clouds from '../assets/imgs/space-clouds.jpg';

class Polaris extends Component {
    render() {
        const teamArticle = 'polaris_teams';
        const teamPresentation = 'polaris_teams_presentation';

        return(
            <div className={'page'}>
                <h2 className={'page_title'}>Polaris</h2>
                <article>
                    <p>
                        Polaris est un projet de fusée expérimentale au sein de l'Université de Technologie de Compiègne.
                        Nous cherchons à développer un moteur hybride permettant de coupler la puissance d'un moteur à
                        propulsion solide avec la flexibilité d'un moteur liquide.
                    </p>
                    <p>
                        Le projet est divisé en plusieurs sous parties s'occupant de différents points clefs du
                        développement d'une fusée et de son utilisation. Nous avons ainsi une équipe spécialisée dans la
                        partie controle de l'attitude de la fusée, une autre se focalisant sur l'electronique de bord ou
                        encore une autre se concentrant sur la partie lancement et récupération.
                    </p>
                </article>
                <article>
                    <Row className={teamArticle}>
                        <Col md={6}>
                            <img src={galaxy} alt={'A galaxy'}/>
                        </Col>
                        <Col md={6} className={teamPresentation}>
                            <h3>AOCS</h3>
                            <p>Lorem Ipsum balbalbalblleklskfne kjs lfhsmlfsej</p>
                            <Button href="/team/AOCS">Read more</Button>
                        </Col>
                    </Row>
                    <Row className={teamArticle}>
                        <Col md={6}>
                            <img src={horizon} alt={'A galaxy'}/>
                        </Col>
                        <Col md={6} className={teamPresentation}>
                            <h3>Avionics</h3>
                            <p>Lorem Ipsum balbalbalblleklskfne kjs lfhsmlfsej</p>
                            <Button href="/team/ASE">Read more</Button>
                        </Col>
                    </Row>
                    <Row className={teamArticle}>
                        <Col md={6}>
                            <img src={rocket} alt={'A galaxy'}/>
                        </Col>
                        <Col md={6} className={teamPresentation}>
                            <h3>Launch & Landing</h3>
                            <p>Lorem Ipsum balbalbalblleklskfne kjs lfhsmlfsej</p>
                            <Button href="/team/LLT">Read more</Button>
                        </Col>
                    </Row>
                    <Row className={teamArticle}>
                        <Col md={6}>
                            <img src={clouds} alt={'A galaxy'}/>
                        </Col>
                        <Col md={6} className={teamPresentation}>
                            <h3>Mechanical Engineering</h3>
                            <p>Lorem Ipsum balbalbalblleklskfne kjs lfhsmlfsej</p>
                            <Button href="/team/MED">Read more</Button>
                        </Col>
                    </Row>
                    <Row className={teamArticle}>
                        <Col md={6}>
                            <img src={rocket} alt={'A galaxy'}/>
                        </Col>
                        <Col md={6} className={teamPresentation}>
                            <h3>Simulations</h3>
                            <p>Lorem Ipsum balbalbalblleklskfne kjs lfhsmlfsej</p>
                            <Button href="/team/MFDS">Read more</Button>
                        </Col>
                    </Row>
                </article>
            </div>
        )
    };

}

export {Polaris};