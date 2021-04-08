import React, {Component} from 'react';
import YouTube from 'react-youtube';
import {Button, Col, Row, Table, Container} from "reactstrap";
import rocketModel from '../assets/imgs/modelisation.png';


class Index extends Component {

    render() {
        return(
            <div className={'page'}>
                <div className={'welcome'}>
                    <Table>
                        <Col md={1}></Col>
                        <Col md={4}>
                            <Row><h2 className={"title_font"}>UTC Rocket Propulsion Laboratory</h2></Row>
                            <Row><p className={"text_font"}>Student Rocketry Team of the Technological University of Compiègne (UTC), France, that aims space</p></Row>
                            <Row className={'welcome_button_row'}><Button className={'welcome_button dark_blue_button'} href="/polaris">See more</Button></Row>
                        </Col>
                        <Col md={7}></Col>
                    </Table>
                </div>
                <Container className={'index_page'}>
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
                        </Row>
                    <Row className={"space_separation"}></Row>
                    <Row>
                        <Col md={7}>
                            <p><b>Our goal</b>: to learn about space engineering although we are not in a space school,
                                by taking advantage of our multidisciplinary skills.
                                We want to exchange with industrials, to develop our knowledge with professional guests
                                from engineering and space research and then, to promote our passion.</p>
                            <Button href="/">About us</Button>
                        </Col>
                        {/*<Col md={1} className={"space_separation"}></Col>*/}
                        <Col md={5}>
                            <>
                                <YouTube className={"youtube_video"} videoId={"rwt5GhylwOA"}/>
                                <h10>Vidéo de présentation de la filière aérospatiale de l'Université de Technologie de
                                    Compiègne.</h10>
                            </>
                        </Col>
                    </Row>
                    <Row className={"space_separation_big"}></Row>
                    <Row className={"space_wallpaper"}>
                        <Col md={7}><img src={rocketModel} alt={'A galaxy'}/></Col>
                        <Col md={5} className={"align_center text_font"}>
                            <p><b>Our project</b>: to make a hybrid engine and try to reach space thanks to our knowledge,
                                our desire for innovation, our curiosity and our ability to learn!</p>
                        </Col>
                    </Row>
                    <Row className={"space_separation_big"}></Row>
                    <Row>
                        <Col md={6} className={"box_style_shadow"}>
                            <Row md={1}><h4>Our teams :</h4></Row>
                            <Row md={1}>
                                    <Col md={4}>Team 1</Col>
                                    <Col md={4}>Team 2</Col>
                                    <Col md={4}>Team 3</Col>
                                    <Col md={4}>Team 4</Col>
                                    <Col md={4}>Team 5</Col>
                            </Row>
                        </Col>
                        <Col md={6} className={"box_style_image"}>
                            <Row md={1}><h4>Our partner :</h4></Row>
                            <Row md={1}>
                                <Col md={4}>Partner 1</Col>
                                <Col md={4}>Partner 2</Col>
                                <Col md={4}>Partner 3</Col>
                                <Col md={4}>Partner 4</Col>
                                <Col md={4}>Partner 5</Col>
                                <Col md={4}>Partner 6</Col>
                                <Col md={4}>Partner 7</Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className={"space_separation_big"}></Row>
                    <Row>
                        <Col md={12}>
                            <h3>Our last news :</h3>
                        </Col>
                        <Col>
                            <p>TO DO TO DO TO DO TO DO</p>
                        </Col>
                    </Row>
                    <Row className={"space_separation"}></Row>
                </Container>
            </div>
        )
    };
}

export {Index};