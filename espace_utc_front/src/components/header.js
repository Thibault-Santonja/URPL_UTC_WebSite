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
                <NavbarToggler onClick={toggle}  className="mr-2" />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/polaris">Polaris</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar >
                            <DropdownToggle nav caret>
                                The team
                            </DropdownToggle>
                            <DropdownMenu >
                                <DropdownItem >
                                    <NavLink href="/team" >Polaris</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink href="/team/AOCS">Attitude and Orbit Control System</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/team/ASE">Avionics and System Engineering</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/team/LLT">Launch and Landing Team</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/team/MED">Mechanical Engineering and Design</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/team/MFDS">MFDS</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
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