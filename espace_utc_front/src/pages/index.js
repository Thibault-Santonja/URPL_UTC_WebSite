import React, {Component} from 'react';
import YouTube from 'react-youtube';
import {Col, Row, Table} from "reactstrap";
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
                        </Col>
                        <Col md={7}></Col>
                    </Table>

                </div>
                <article> {/*!--intro--*/}
                    <p>Étudiants passionnés de l'Université de Technologie de Compiègne (UTC) dans les Hauts-de-France,
                        nous nous sommes lancés depuis 2019 dans l'aventure spatiale.</p>
                    <p>Notre projet : faire un moteur hybride et tenter d'atteindre l'espace grace à nos connaissances,
                        notre esprit et envie d'innovations, notre curiosité et notre capacité d'apprentissage !</p>
                </article>
                <article> {/*!--intro video --*/}
                    <YouTube videoId={"rwt5GhylwOA"}/>
                    <p>Vidéo de présentation de la filière aérospatiale de l'Université de Technologie de Compiègne.</p>
                </article>
                <article>
                    <Row>
                        <Col md={4}><img src={galaxy} alt={'A galaxy'}/></Col>
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