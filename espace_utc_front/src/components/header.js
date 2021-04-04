import React, { useState } from 'react';
import logo from '../logo.svg';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    Dropdown
} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);



    // Style
    const navItemClass = 'mr-2 ml-2'
    const navLinkClass = 'menu_nav_link'
    const navDropdownItem = 'menu_dropdown_item'

    return(
        // remove `expand="md"` from <Navbar ...> to allow toggle
        <>
            <Navbar className={'menu_nav'} expand="md">
                <NavbarBrand href="/" className="mr-auto" style={{color: 'var(--alice-blue)'}}>
                    UTC Rocket Propulsion Laboratory
                    <img src={logo} className="App-logo" alt="logo" style={{maxHeight: 50, maxWidth: 100}} />
                </NavbarBrand>
                <Nav navbar className="ml-auto" >
                    <NavItem className={navItemClass}>
                        <NavLink href="/" className={navLinkClass}>URPL</NavLink>
                    </NavItem>
                    <NavItem className={navItemClass}>
                        <NavLink href="/news" className={navLinkClass}>News</NavLink>
                    </NavItem>
                    <Dropdown className={navItemClass} isOpen={isOpen} onMouseEnter={() => setIsOpen(true)}
                              onMouseLeave={() => setIsOpen(false)} toggle={() => setIsOpen(!isOpen)}>
                        <DropdownToggle nav caret className={navLinkClass}>The team</DropdownToggle>
                        <DropdownMenu className={'menu_dropdown'}>
                            <DropdownItem tag="a" href="/polaris" className={navDropdownItem}>Polaris</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem tag="a" href="/team/AOCS" className={navDropdownItem}>Attitude and Orbit Control System</DropdownItem>
                            <DropdownItem tag="a" href="/team/ASE" className={navDropdownItem}>Avionics and System Engineering</DropdownItem >
                            <DropdownItem tag="a" href="/team/LLT" className={navDropdownItem}>Launch and Landing Team</DropdownItem>
                            <DropdownItem tag="a" href="/team/MED" className={navDropdownItem}>Mechanical Engineering and Design</DropdownItem>
                            <DropdownItem tag="a" href="/team/MFDS" className={navDropdownItem}>MFDS</DropdownItem>
                        </DropdownMenu>
                    </Dropdown >
                    <NavItem className={navItemClass}>
                        <NavLink href="/gallery" className={navLinkClass}>Gallery</NavLink>
                    </NavItem>
                    <NavItem className={navItemClass}>
                        <NavLink href="/contact" className={navLinkClass}>Contact</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </>
    )
};

export {Header};