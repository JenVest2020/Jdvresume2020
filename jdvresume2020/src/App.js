import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle, Button } from 'reactstrap';
import LambdaRedLogoFull from './components/images/LambdaRedLogoFull.png';
import crossFlagMine from '../src/components/images/crossFlagMine.jpg';
import DigitalArt from './components/DigitalArt';
import AboutMe from './components/AboutMe';
import Navigation from './components/Navigation';

const App = () => {


  return (
    <div style={{ background: 'linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)' }}>
      <Navigation />
      <div style={{ display: 'flex', backgroundImage: 'linear-gradient( #9fb8ad, #1fc8db, #2cb5e8)', textAlign: 'center' }}>
        <Route exact path='/'>
          <Card style={{ width: '50%', display: 'flex', justifyContent: 'center', textAlign: 'center', border: '2px ridge #006699' }}>
            <CardImg src={LambdaRedLogoFull} alt="Lambda School logo in red" style={{ width: '50%', margin: '0 auto' }} />
            <CardBody style={{ textAlign: 'center' }}>
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
                  <li>Cypress.io</li>
                  <li>Advanced React</li>
                  <li>Advanced State Management(Redux)</li>
                  <li>Advanced Web Applications</li>
                  <li>Web API: Node</li>
                  <li>Building a Web Api</li>
                  <li>Data Persistence</li>
                  <li>Authentication and Testing</li>
                  <li>Testing the Backend</li>
                </ul>
              </CardText>
              <Button href='https://github.com/JenVest2020' color='info' >
                GitHub Repos
              </Button>
            </CardBody>
          </Card>
          <Card style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', border: '2px ridge #006699' }}>
            <CardBody>
              <CardTitle><h4>Program Fluency</h4></CardTitle>
              <CardText>
                <ul style={{ listStyleType: 'none' }}>
                  <li>IDE: VsCode</li>
                  <li>Com tool: Slack & Zoom</li>
                  <li>Version Control System: GitHub</li>
                  <li>Digital Art: Adobe CS:</li>
                  <li>Illustrator, PhotoShop,& InDesign</li>
                </ul>
              </CardText>
              <Link to='/aboutMe'>
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
                  <li>Digital Manipulation/Image Creation</li>
                  <li>Backend Database creation with Node.js and Express</li>
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
      <Route path='/digitalArt'>
        < DigitalArt />
      </Route>
      <Route path='/aboutMe'>
        <AboutMe />
      </Route>
    </div>
  );
};

export default App;
