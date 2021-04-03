import React, { useState } from 'react';
import logo from '../logo.svg';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown
} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        // remove `expand="md"` from <Navbar ...> to allow toggler
        <>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/" className="mr-auto">
                    UTC Rocket Propulsion Laboratory
                    <img src={logo} className="App-logo" alt="logo" style={{maxHeight: 50, maxWidth: 100}} />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} className="mr-2" />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/news">News</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>The team</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem tag="a" href="/polaris">Polaris</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem tag="a" href="/team/AOCS">Attitude and Orbit Control System</DropdownItem>
                                <DropdownItem tag="a" href="/team/ASE">Avionics and System Engineering</DropdownItem >
                                <DropdownItem tag="a" href="/team/LLT">Launch and Landing Team</DropdownItem>
                                <DropdownItem tag="a" href="/team/MED">Mechanical Engineering and Design</DropdownItem>
                                <DropdownItem tag="a" href="/team/MFDS">MFDS</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="/gallery">Gallery</NavLink>
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