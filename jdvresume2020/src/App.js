import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import ContactForm from './ContactForm';

const App = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Route exact path='/'>
        <Navbar color="info" light >
          <NavbarBrand style={{ color: 'white' }} href="/" className="mr-auto">
            <h1>Jennifer Vest 2020</h1>
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} />
          <Collapse isOpen={!collapsed} navbar >
            <Nav navbar>
              <NavItem>
                <NavLink href="/contactForm" className='text-white'>
                  <h4>Address</h4>
                  <p>111 E. 2nd Street,</p>
                  <p>Desoto, MO</p>
                  <p>63020</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contactForm" className='text-white'>
                  <h4>Phone</h4>
                  <p>(913)237-2829</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contactForm" className='text-white'>
                  <h4>Email</h4>
                  <p>jenvest2019@gmail.com</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Route>
      <Route path='/contactForm'>
        <ContactForm />
      </Route>
    </div>
  );
}

export default App;
