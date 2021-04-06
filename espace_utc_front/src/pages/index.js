import React, {Component} from 'react';
import YouTube from 'react-youtube';
import {Button, Col, Row, Table, Container} from "reactstrap";
import galaxy from '../assets/Andromeda_Galaxy.jpg';


class Index extends Component {

    render() {
        return(
            <div className={'page'}>
                <div className={'welcome'}>
                    <Table>
                        <Col md={1}></Col>
                        <Col md={4}>
                            <Row><h2>UTC Rocket Propulsion Laboratory</h2></Row>
                            <Row><p>Student Rocketry Team of the Technological University of Compiègne (UTC), France, that aims space</p></Row>
                            <Row className={'welcome_button_row'}><Button className={'welcome_button'} href="/polaris">See more</Button></Row>
                        </Col>
                        <Col md={7}></Col>
                    </Table>
                </div>
                <Container className={'welcome_numbers'}>
                    <Row xs="1">
                        <h3>Some students passionate by space</h3>
                    </Row>
                    <Row xs="3">
                        <Col><h4>20+</h4> Students</Col>
                        <Col><h4>5</h4> Teams</Col>
                        <Col>Since <h4>2019</h4></Col>
                    </Row>
                    <Row xs="1">
                        <h3>Who we are ?</h3>
                    </Row>
                    <Row xs="1">
                        <p>Étudiants passionnés de l'Université de Technologie de Compiègne (UTC) dans les Hauts-de-France,
                            nous nous sommes lancés depuis 2019 dans l'aventure spatiale.</p>
                        <p>Notre projet : faire un moteur hybride et tenter d'atteindre l'espace grace à nos connaissances,
                            notre esprit et envie d'innovations, notre curiosité et notre capacité d'apprentissage !</p>
                    </Row>
                </Container>

                <article> {/*!--intro video --*/}
                    <YouTube videoId={"rwt5GhylwOA"}/>
                    <p>Vidéo de présentation de la filière aérospatiale de l'Université de Technologie de Compiègne.</p>
                </article>
                <article>
                    <Row>
                        <Col md={7}><img src={galaxy} alt={'A galaxy'}/></Col>
                        <Col md={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper ligula pellentesque
                            odio convallis, ut pellentesque lacus laoreet. Integer dapibus diam sed magna imperdiet, eu
                            ultrices erat aliquam. Maecenas suscipit venenatis vestibulum. Pellentesque purus ipsum,
                            vulputate vitae semper sit amet, bibendum sit amet quam. Etiam volutpat commodo risus a faucibus.
                            Cras porta, leo quis aliquet euismod, sapien neque ornare tortor, non dictum neque ante in libero.
                            Nam dictum aliquam nibh vitae interdum. Morbi fermentum, ipsum non condimentum viverra, est nisl
                            suscipit magna, ut sollicitudin mi massa a justo. Pellentesque hendrerit eleifend turpis non pretium.
                            Donec non diam nisl. Donec odio sem, dapibus quis leo ut, dignissim porttitor urna. Class aptent
                            taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ut consequat
                            urna, in tincidunt justo. Sed hendrerit leo lacus, dictum posuere est ullamcorper vel. Duis laoreet
                            est eu auctor volutpat. Aliquam felis magna, varius varius porta in, pretium non massa.</Col>
                    </Row>
                </article>
                <article>
                    <Row>
                        <Col md={8}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper ligula pellentesque
                            odio convallis, ut pellentesque lacus laoreet. Integer dapibus diam sed magna imperdiet, eu
                            ultrices erat aliquam. Maecenas suscipit venenatis vestibulum. Pellentesque purus ipsum,
                            vulputate vitae semper sit amet, bibendum sit amet quam. Etiam volutpat commodo risus a faucibus.
                            Cras porta, leo quis aliquet euismod, sapien neque ornare tortor, non dictum neque ante in libero.
                            Nam dictum aliquam nibh vitae interdum. Morbi fermentum, ipsum non condimentum viverra, est nisl
                            suscipit magna, ut sollicitudin mi massa a justo. Pellentesque hendrerit eleifend turpis non pretium.
                            Donec non diam nisl. Donec odio sem, dapibus quis leo ut, dignissim porttitor urna. Class aptent
                            taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ut consequat
                            urna, in tincidunt justo. Sed hendrerit leo lacus, dictum posuere est ullamcorper vel. Duis laoreet
                            est eu auctor volutpat. Aliquam felis magna, varius varius porta in, pretium non massa.</Col>
                        <Col md={4}><img src={galaxy} alt={'A galaxy'}/></Col>
                    </Row>
                </article>
            </div>
        )
    };
}

export {Index};