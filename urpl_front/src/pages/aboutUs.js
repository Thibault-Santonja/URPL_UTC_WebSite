import React, {Component} from 'react';
import {Button, Col, Container, DropdownItem, Row} from "reactstrap";


class AboutUs extends Component {

    render() {
        return(
            <Container className={'page'}>
                <h2 className={'page_title'}>About us</h2>

                <Row className={"space_separation"}></Row>

                <Row xs="1">
                    <p>Mais, vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je
                        devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres, des
                        gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez
                        moi. Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée…
                        Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau
                        geste, parfois on ne trouve pas l’interlocuteur en face, je dirais, le miroir qui vous aide à
                        avancer.</p>
                </Row>
                <Row className={"space_separation_big"}></Row>

                <Row xs="1">
                    <h3>URPL history</h3>
                    <p>Mais, vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je
                        devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres, des
                        gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez
                        moi. Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée…
                        Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau
                        geste, parfois on ne trouve pas l’interlocuteur en face, je dirais, le miroir qui vous aide à
                        avancer. Alors ce n’est pas mon cas, comme je le disais là, puisque moi au contraire, j’ai pu ;
                        et je dis merci à la vie, je lui dis merci, je chante la vie, je danse la vie… Je ne suis
                        qu’amour ! Et finalement, quand beaucoup de gens aujourd’hui me disent : « Mais comment fais-tu
                        pour avoir cette humanité ? » Eh bien je leur réponds très simplement, je leur dis que c’est ce
                        goût de l’amour, ce goût donc qui m’a poussé aujourd’hui à entreprendre une construction
                        mécanique, mais demain, qui sait, peut-être simplement à me mettre au service de la communauté,
                        à faire le don, le don de soi…</p>
                </Row>
                <Row className={"space_separation_big"}></Row>

                <Row xs="1">
                    <h3>Polaris organisation</h3>
                    <p>Mais, vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je
                        devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres, des
                        gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez
                        moi. </p>
                    <Row className={"space_separation"}></Row>
                    <Col md={4}>
                        <h3>AOCS</h3>
                        <p>Mais, vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je
                        devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres, des
                        gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez
                        moi.</p>
                        <Button href="/team/AOCS">See more</Button>
                        <Row className={"space_separation"}></Row>
                    </Col>
                    <Col md={4}>
                        <h3>ASE</h3>
                        <p>Mais, vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je
                            devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres, des
                            gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez
                            moi.</p>
                        <Button href="/team/ASE">See more</Button>
                        <Row className={"space_separation"}></Row>
                    </Col>
                    <Col md={4}>
                        <h3>LLT</h3>
                        <p>Mais, vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je
                            devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres, des
                            gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez
                            moi.</p>
                        <Button href="/team/LLT">See more</Button>
                        <Row className={"space_separation"}></Row>
                    </Col>
                    <Col md={4}>
                        <h3>MED</h3>
                        <p>Mais, vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je
                            devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres, des
                            gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez
                            moi.</p>
                        <Button href="/team/MED">See more</Button>
                        <Row className={"space_separation"}></Row>
                    </Col>
                    <Col md={4}>
                        <h3>MFDS</h3>
                        <p>Mais, vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je
                            devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres, des
                            gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez
                            moi.</p>
                        <Button href="/team/MFDS">See more</Button>
                        <Row className={"space_separation"}></Row>
                    </Col>
                </Row>
            </Container>
        )
    };

}

export {AboutUs};