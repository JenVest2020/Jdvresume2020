import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Card, CardImg, CardBody, CardText, CardLink, CardTitle, CardSubtitle, Button } from 'reactstrap';
import EduPortfolioDesign from '../src/EduPortfolioDesign.png';
import FamilyThenandNow from '../src/FamilyThenandNow.jpg';

const DigitalArt = () => {
    return (
        <div style={{ display: 'flex' }} >
            <Card><img src={EduPortfolioDesign} alt='' />
                <img src={FamilyThenandNow} alt='' />
            </Card>


        </div>
    )
};

export default DigitalArt;