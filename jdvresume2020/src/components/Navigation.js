import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const Navigation = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <Navbar color="info" light >
            <NavbarBrand style={{ color: 'white' }} href="/" className="mr-auto">
                <h1>Jennifer Vest 2020</h1>
            </NavbarBrand>
            <Link to='/digitalArt'>
                <Button color='info' >My Digital Art</Button>
            </Link>
            <Link to='/'>
                <Button color='info' size='lg'>
                    Home
          </Button>
            </Link>
            <Link to='/aboutMe'>
                <Button color='info' >More About Me</Button>
            </Link>
            <h5 style={{ color: 'white', marginLeft: '20%' }} >Contact Me => </h5>
            <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={!collapsed} navbar >
                <Nav navbar>
                    <NavItem>
                        <NavLink href="/contactForm" className='text-white'>
                            <h4>Click for the Contact Form</h4>
                            <h4>Address</h4>
                            <p>111 E. 2nd Street,<br>
                            </br> Desoto, MO<br>
                                </br>63020</p>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/contactForm" className='text-white'>
                            <h4>Phone</h4>
                            <p>(573)210-2934</p>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/contactForm" className='text-white'>
                            <h4>Email</h4>
                            <p>Primary: jenvest2019@gmail.com</p>
                            <p>Scholastic: jennifer-vest@lambdastudents.com </p>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Navigation;