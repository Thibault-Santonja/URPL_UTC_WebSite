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
                    <Row className={"space_separation_big"}></Row>
                    <Row xs="1">
                        <h3>Some students passionate by space</h3>
                    </Row>

                    <Row className={"space_separation"}></Row>
                    <Row xs="3">
                        <Col><h3>20+</h3> Students</Col>
                        <Col><h3>5</h3> Teams</Col>
                        <Col>Since <h3>2019</h3></Col>
                    </Row>
                    <Row className={"space_separation_big"}></Row>
                    <Row xs="1">
                        <h3>Who we are ?</h3>
                    </Row>
                    <Row xs="1">
                        <p>Space passionated students from the University of Technology of Compiègne (UTC) in the
                            Hauts-de-France (France), we have embarked since 2019 on the adventure of creating an engine
                            and testing it in a launcher.</p>
                        <p><b>Our project</b>: to make a hybrid engine and try to reach space thanks to our knowledge,
                            our desire for innovation, our curiosity and our ability to learn!</p>
                    </Row>
                    <Row className={"space_separation"}></Row>
                    <Row xs="2">
                        <Col>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper ligula pellentesque
                                odio convallis, ut pellentesque lacus laoreet. Integer dapibus diam sed magna imperdiet, eu
                                ultrices erat aliquam.
                            </p>
                            <Button href="/polaris" className={"light_blue_button"}>About us</Button>
                        </Col>
                        <Col>
                            <>
                                <YouTube className={"youtube_video"} videoId={"rwt5GhylwOA"}/>
                                <h10>Vidéo de présentation de la filière aérospatiale de l'Université de Technologie de Compiègne.</h10>
                            </>
                        </Col>
                    </Row>
                </Container>
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