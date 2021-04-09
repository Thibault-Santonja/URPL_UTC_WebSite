import React from 'react';
import {FormGroup, Col, Label, Form, Input, Row, Button, Card, CardText, CardTitle} from "reactstrap";

/*
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const ContactMap = () => {
    const UTCPosition = [49.415324, 2.819025]

    return(
        <>
            <MapContainer style={{width: "100%"}} center={UTCPosition} zoom={10} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={UTCPosition}>
                    <Popup>
                        Université de Technologie de Compiègne
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    );
};
*/

const Contact  = () => {
        return(
            <div className={'page'}>
                <h2 className={'page_title'}>Contact</h2>

                <Row xs="1" style={{width: "70%"}}>
                    <Col md={9}>
                        <Form>
                            <FormGroup>
                                <Label for="Name">Name *</Label>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input type="text" name="lastName" id="lastName" placeholder="Last Name" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Label for="Email">Email Address *</Label>
                                <Input type="email" name="email" id="email" placeholder="Your email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Subject">Subject *</Label>
                                <Input type="text" name="subject" id="subject" placeholder="Your message subject" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Message">Message *</Label>
                                <Input type="textarea" name="message" id="message" placeholder="Your message" />
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </Col>
                    <Col md={3}>
                        <Row className={"space_separation"}></Row>
                        <Card body outline color="primary">
                            <CardTitle>Postal</CardTitle>
                            <CardText>
                                <p>URPL Space<br/>
                                    Rue Roger Couttolenc<br/>
                                    60200 Compiègne, France</p>
                            </CardText>
                            {/*<ContactMap/>*/}
                        </Card>
                        <Row className={"space_separation"}></Row>
                        <Card body outline color="primary">
                            <CardTitle>eMail</CardTitle>
                            <CardText>
                                <a style={{color: "black"}} href={"mailto: contact@urpl.space"}>Send us an Email</a>
                            </CardText>
                        </Card>
                    </Col>
                </Row>

                {/* Form alone}
                <Form>
                    <FormGroup>
                        <Label for="Name">Name *</Label>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Input type="text" name="lastName" id="lastName" placeholder="Last Name" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Email">Email Address *</Label>
                        <Input type="email" name="email" id="email" placeholder="Your email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Subject">Subject *</Label>
                        <Input type="text" name="subject" id="subject" placeholder="Your message subject" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Message">Message *</Label>
                        <Input type="textarea" name="message" id="message" placeholder="Your message" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
                {/* */}
            </div>
        )

}

export {Contact};