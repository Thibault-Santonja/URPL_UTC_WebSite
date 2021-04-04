import React, { useState } from 'react';
import {
    Row,
    Col
} from 'reactstrap';
import instagram from '../assets/instagram.png';
import youtube from '../assets/youtube.png';


const Footer = () => {
    return (
        <>
            <div expand="md">
                <Row expand="md" className={'footer_style'}>
                    <Col md={6}>
                        <h4>UTC Rocket Propulsion Laboratory</h4>
                        <p>A University of Technology of Compiègne, France, student association, aiming space with passion, innovation and imagination.</p>
                    </Col>
                    <Col md={3}>
                        <h4>Links</h4>
                        <ul>
                            <li className="list-unstyled">
                                <img src={instagram}/>
                                <a href="#">Instagram</a>
                            </li>
                            <li className="list-unstyled">
                                <img src={youtube}/>
                                <a href="https://www.youtube.com/channel/UCBGBLGHoft6vqKS9sQFXOxw">Youtube</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <h4>Contact</h4>
                            <ul className={'footer_contact'}>
                                <li className="list-unstyled">mail : <a href="#">contact.urpl</a></li>
                                <li className="list-unstyled"><a href="https://www.utc.fr/">Université de Technologie de Compiègne (France)</a></li>
                            </ul>
                        </Row>
                    </Col>
                </Row>
                <div className={'footer_copyright'}>
                    &copy; {new Date().getFullYear()} Copyright
                </div>
            </div>
        </>
    )
};

export {Footer};