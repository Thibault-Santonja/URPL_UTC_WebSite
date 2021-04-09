import React, {Component} from 'react';
import {Button, Col, Row} from "reactstrap";
import error404 from "../assets/imgs/404-stage.svg"


class NotFound extends Component {

    render() {
        return(
            <div className={'page'}>
                <div className={'not_found'}>
                    <Row className={"space_separation_big"}></Row>
                    <Row>
                        <Col md={3}></Col>
                        <Col md={6}>
                            <Row>
                                <Col md={6}><img src={error404} style={{width: "100%"}} alt={"404 error"}/></Col>
                                <Col md={6}>
                                    <h2 className={"title_font"}>
                                        Sorry, page not found</h2>
                                </Col>
                            </Row>
                            <Row className={"space_separation"}></Row>
                            <Row><p className={"text_font"}>We're sorry but the page you're looking for is unavailable,
                                was renamed or no longer exists. Also, please be sure that you're using the correct URL.</p></Row>
                            <Row className={'welcome_button_row'}>
                                <Button className={'welcome_button dark_blue_button'} href="/">Back to index ?</Button></Row>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                </div>
            </div>
        )
    };

}

export {NotFound};