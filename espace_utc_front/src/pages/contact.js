import React, {Component} from 'react';
import {FormGroup, Col, Label, Form, Input, Row, Button} from "reactstrap";


class Contact extends Component {

    render() {
        return(
            <div className={'page'}>
                <h2 className={'page_title'}>Contact</h2>
                <Form>
                    <FormGroup>
                        <Label for="Name">Name</Label>
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
                        <Label for="Email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Subject">Subject</Label>
                        <Input type="text" name="subject" id="subject" placeholder="Subject" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Message">Message</Label>
                        <Input type="textarea" name="message" id="message" placeholder="Message" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        )
    };

}

export {Contact};