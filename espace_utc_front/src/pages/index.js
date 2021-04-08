import React, {Component} from 'react';
import YouTube from 'react-youtube';
import {Button, Col, Row, Table, Container, Card, CardTitle, CardText} from "reactstrap";
import rocketModel from '../assets/imgs/modelisation.png';
import satIcon from '../assets/imgs/satallite_icon100.png';


function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
const tmp_news = [
    {
        'title': 'Une nouvelle TX publiée.',
        'date': randomDate(new Date(2019, 0, 1), new Date()),
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus diam sed magna imperdiet.'
    },
    {
        'title': 'Update du site web !',
        'date': randomDate(new Date(2019, 0, 1), new Date()),
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        'title': 'MAJ MBSE avec Capella.',
        'date': randomDate(new Date(2019, 0, 1), new Date()),
        'content': 'With supporting text below as a natural lead-in to additional content.'
    }
]


class Index extends Component {

    render() {
        return(
            <div className={'page'}>
                {/* ----- AWESOME WELCOME PART ----- */}
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

                    {/* ----- NUMBERS PART ----- */}
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

                    {/* ----- "Who are we ?" PART ----- */}
                    <Row xs="1">
                        <h3>Who we are ?</h3>
                    </Row>
                    <Row xs="1">
                        <p>Space passionated students from the University of Technology of Compiègne (UTC) in the
                            Hauts-de-France (France), we have embarked since 2019 on the adventure of creating an engine
                            and testing it in a launcher.</p>
                        </Row>
                    <Row className={"space_separation"}></Row>

                    {/* ----- GOAL PART ----- */}
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

                    {/* ----- AWESOME PROJECT PRESENTATION PART ----- */}
                    <Row className={"space_wallpaper"}>
                        <Col md={7}><img src={rocketModel} className="App-logo" alt={'A galaxy'}/></Col>
                        <Col md={5} className={"align_center text_font"}>
                            <p><b>Our project</b>: to make a hybrid engine and try to reach space thanks to our knowledge,
                                our desire for innovation, our curiosity and our ability to learn!</p>
                        </Col>
                    </Row>
                    <Row className={"space_separation_big"}></Row>

                    {/* ----- ICONS PART ----- */}
                    <Row>
                        <Col md={6}>
                            <Row md={1} className={"box_style_shadow"}>
                                <Row md={1}><h4>Our teams :</h4></Row>
                                <Row md={1}>
                                    <Col md={4}>
                                        <div>
                                            <img src={satIcon} alt={'random icon'}/>
                                            <p>AOCS</p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div>
                                            <img src={satIcon} alt={'random icon'}/>
                                            <p>ASE</p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div>
                                            <img src={satIcon} alt={'random icon'}/>
                                            <p>LLT</p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div>
                                            <img src={satIcon} alt={'random icon'}/>
                                            <p>MED</p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div>
                                            <img src={satIcon} alt={'random icon'}/>
                                            <p>MFDS</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Row>
                            <Row className={"space_separation"}></Row>
                            <Row md={1} className={"box_style_shadow"}>
                                <Col>
                                    <Row md={1}><h4>Our library :</h4></Row>
                                    <Row md={1}><p>
                                        pqfnslen zqlk h ihqmkzj hqkjh kqjhg hge jhegjhgq  l l   gfkfkgfgf hf k f f hg h fkfkyfkhf  f
                                        pqfnslen zqlk h ihqmkzj hqkjh kqjhg hge jhegjhgq  l l   gfkfkgfgf hf k f f hg h fkfkyfkhf  f
                                        pqfnslen zqlk h ihqmkzj hqkjh kqjhg hge jhegjhgq  l l   gfkfkgfgf hf k f f hg h fkfkyfkhf  f
                                        pqfnslen zqlk h ihqmkzj hqkjh kqjhg hge jhegjhgq  l l   gfkfkgfgf hf k f f hg h fkfkyfkhf  f
                                    </p></Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6} className={"box_style_image"}>
                            <Row md={1}><h4>Our partners :</h4></Row>
                            <Row md={1}>
                                <Col md={4}>
                                    <div>
                                        <img src={satIcon} alt={'random icon'}/>
                                        <p>Kerbal Space Agency</p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div>
                                        <img src={satIcon} alt={'random icon'}/>
                                        <p>National Alien Space Agency</p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div>
                                        <img src={satIcon} alt={'random icon'}/>
                                        <p>Moon Lander Systems</p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div>
                                        <img src={satIcon} alt={'random icon'}/>
                                        <p>Very Extremely Big Deep Space Company</p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div>
                                        <img src={satIcon} alt={'random icon'}/>
                                        <p>666G World Network</p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div>
                                        <img src={satIcon} alt={'random icon'}/>
                                        <p>Blue Incorporation</p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div>
                                        <img src={satIcon} alt={'random icon'}/>
                                        <p>GitS & Cie</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className={"space_separation_big"}></Row>

                    {/* ----- NEWS PART ----- */}
                    <Row>
                        <Col md={12}>
                            <h3>Our last news :</h3>
                        </Col>
                        <Col className={'card_container'}>
                            {tmp_news.map(entry =>
                                <Col sm="4">
                                    <Card body>
                                        <CardTitle tag="h5" className={"card_title"}>{entry.title}</CardTitle>
                                        <p>{entry.date.toDateString()}</p>
                                        <CardText>{entry.content}</CardText>
                                        <Button>Go somewhere</Button>
                                    </Card>
                                </Col>
                            )}
                        </Col>
                    </Row>
                    <Row className={"space_separation"}></Row>
                </Container>
            </div>
        )
    };
}

export {Index};