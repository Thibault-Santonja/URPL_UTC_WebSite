import React, {Component} from 'react';

import galaxy from '../assets/Andromeda_Galaxy.jpg';
import {Button, Col, Container} from "reactstrap";


const images = [
    {'source': '', 'title': 'Lorem ipsum dolor sit amet'},
    {'source': '', 'title': 'Excepteur sint occaecat cupidatat non proident,'},
    {'source': '', 'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {'source': '', 'title': 't enim ad minim veniam'},
    {'source': '', 'title': 'Excepteur sint occaecat cupidatat non proident,'},
    {'source': '', 'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {'source': '', 'title': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'},
];

class Gallery extends Component {

    render() {
        return(
            <div className={'page'}>
                <h2 className={'page_title'}>Gallery</h2>
                <Container className={'card_container'}>
                    {images.map(value =>
                        <Col className={'card_gallery'} sm="4">
                            <img src={galaxy}/>
                            <p>{value.title}</p>
                            <Button>See more</Button>
                        </Col>
                    )
                    }
                </Container>
            </div>
        )
    };

}

export {Gallery};