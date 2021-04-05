import React, {Component} from 'react';
import {Button, Col, Container} from "reactstrap";

import galaxy from '../assets/Andromeda_Galaxy.jpg';
import horizon from '../assets/imgs/earth-horizon-from-space - Copy.jpg';
import rocket from '../assets/imgs/clouds-rocket.jpg';
import clouds from '../assets/imgs/space-clouds.jpg';


const images = [
    {'source': rocket, 'title': 'Lorem ipsum dolor sit amet'},
    {'source': clouds, 'title': 'Excepteur sint occaecat cupidatat non proident,'},
    {'source': horizon, 'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {'source': galaxy, 'title': 't enim ad minim veniam'},
    {'source': horizon, 'title': 'Excepteur sint occaecat cupidatat non proident,'},
    {'source': rocket, 'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {'source': clouds, 'title': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'},
];

class Gallery extends Component {

    render() {
        return(
            <div className={'page'}>
                <h2 className={'page_title'}>Gallery</h2>
                <Container className={'card_container'}>
                    {images.map(value =>
                        <Col className={'card_gallery'} sm="4">
                            <img src={value.source} alt={'A galaxy'}/>
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