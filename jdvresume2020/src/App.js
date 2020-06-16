import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Card, CardImg, CardBody, CardText, CardLink, CardTitle, CardSubtitle, Button } from 'reactstrap';
import LambdaRedLogoFull from './LambdaRedLogoFull.png';
import crossFlagMine from '../src/crossFlagMine.jpg';
import ContactForm from './ContactForm';
import DigitalArt from './DigitalArt';

const App = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div style={{ background: 'linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)' }}>
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
                <p>111 E. 2nd Street,<br>
                </br> Desoto, MO<br>
                  </br>63020</p>
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
                <p>Primary: jenvest2019@gmail.com</p>
                <p>Scholastic: jennifer-vest@lambdastudents.com </p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div style={{ display: 'flex', backgroundImage: 'linear-gradient( #9fb8ad, #1fc8db, #2cb5e8)' }}>
        <Route exact path='/'>
          <Card style={{ width: '50%', display: 'flex', justifyContent: 'center', textAlign: 'center', border: '2px ridge #006699' }}>
            <CardImg src={LambdaRedLogoFull} alt="Lambda School logo in red" style={{ width: '50%', margin: '0 auto' }} />
            <CardBody>
              <CardTitle><h4>Lambda School Student</h4></CardTitle>
              <CardSubtitle>Since: March 9, 2020 </CardSubtitle>
              <CardText>
                <h5>Completed Studies</h5>
                <ul style={{ listStyleType: 'none' }}>
                  <li>User Interface and Git</li>
                  <li>HTML</li>
                  <li>Advanced CSS</li>
                  <li>JavaScript</li>
                  <li>Applied JavaScript</li>
                  <li>React JS</li>
                  <li>Single Page Applications</li>
                  <li>React Router</li>
                  <li>Advanced Form Management</li>
                  <li>Cypress.io</li>
                </ul>
              </CardText>
              <Link to='https://github.com/JenVest2020'>
                <Button color='info' >GitHub Repos</Button>
              </Link>
            </CardBody>
          </Card>
          <Card style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', border: '2px ridge #006699' }}>
            <CardBody>
              <CardTitle><h4>Program Fluency</h4></CardTitle>
              <CardText>
                <ul style={{ listStyleType: 'none' }}>
                  <li>IDE: VsCode</li>
                  <li>Com tool: Slack</li>
                  <li>Version Control System: GitHub</li>
                  <li>Digital Art: Adobe CS:</li>
                  <li>Illustrator, PhotoShop,& InDesign</li>
                </ul>
              </CardText>
              <Link to=''>
                <Button color='info' >More About Me</Button>
              </Link>
            </CardBody>
          </Card>
          <Card style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', border: '2px ridge #006699' }}>
            <CardBody>
              <CardTitle><h4>Areas of Interest</h4></CardTitle>
              <CardText>
                <h5>Top 5</h5>
                <ul style={{ listStyleType: 'none' }}>
                  <li>Front End Design</li>
                  <li>CSS/Reactstrap</li>
                  <li>Advanced CSS</li>
                  <li>Front End Advanced Forms</li>
                  <li>Digital Manipulation/Image Creation</li>
                </ul>
              </CardText>
              <Link to='/digitalArt'>
                <Button color='info' >Click to See My Digital Art</Button>
              </Link>
              <br />
              <CardImg style={{ width: '50%', border: '2px double red', marginTop: '2%' }} src={crossFlagMine} alt='christian cross in the spotlight decorated with the American flag and captioned with the phrase In God We Trust' />
            </CardBody>
          </Card>
        </Route>
      </div>
      <Route path='/contactForm'>
        <ContactForm />
      </Route>
      <Route path='/digitalArt'>
        < DigitalArt />
      </Route>
    </div>
  );
};

export default App;
