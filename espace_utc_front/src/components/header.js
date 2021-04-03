import React, { useState } from 'react';
import logo from '../logo.svg';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    <img src={logo} className="App-logo" alt="logo" />
    return(
        // remove `expand="md"` from <Navbar ...> to allow toggler
        <>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/" className="mr-auto">
                    UTC Rocket Propulsion Laboratory
                    <img src={logo} className="App-logo" alt="logo" style={{maxHeight: 50, maxWidth: 100}} />
                </NavbarBrand>
                <NavbarToggler onClick={toggle}  className="mr-2" />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/polaris">Polaris</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/team">The team</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
};

export {Header};