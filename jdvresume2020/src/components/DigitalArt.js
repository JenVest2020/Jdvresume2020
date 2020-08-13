import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Card, CardImg, CardBody, CardText, CardLink, CardTitle, CardSubtitle, Button } from 'reactstrap';
import EduPortfolioDesign from './images/EduPortfolioDesign.png';
import FamilyThenandNow from './images/FamilyThenandNow.jpg';
import AandJLoveOfMusic from './images/AandJLoveOfMusic.jpg';
import FamilyHeartTattoo from './images/FamilyHeartTattoo.jpg';
import HeartandPianoKeysTattoo from './images/HeartandPianoKeysTattoo.jpg';

const DigitalArt = () => {
    return (
        <div style={{ display: 'flex' }} >
            <Card style={{ textAlign: 'center', color: '#006699', border: '2px ridge #006699' }} >
                <CardTitle style={{ textShadow: '2px 2px grey' }} >
                    <h4>Digital Manipulation</h4>
                </CardTitle>
                <CardSubtitle style={{ fontWeight: 'bold' }} >
                    *PhotoShop*
                    </CardSubtitle>
                <img style={{ border: '2px ridge #17a2b8' }}
                    src={EduPortfolioDesign} alt='' />
                <img style={{ border: '2px ridge #17a2b8' }}
                    src={FamilyThenandNow} alt='' />
            </Card>
            <Card style={{ width: '50%', textAlign: 'center', color: '#006699', border: '2px ridge #006699' }} >
                <CardTitle style={{ textShadow: '2px 2px grey' }} >
                    <h4>Digital Creation</h4>
                </CardTitle>
                <CardSubtitle style={{ fontWeight: 'bold' }} >
                    *PhotoShop & Illustrator*
                    </CardSubtitle>
                <img style={{ width: '50%', margin: '0 auto', border: '2px ridge #17a2b8' }}
                    src={AandJLoveOfMusic} alt='' />
                <div style={{ display: 'flex', justifyContent: 'center' }} >
                    <img style={{ width: '30%', border: '2px ridge #17a2b8' }} src={FamilyHeartTattoo} alt='' />
                    <img style={{ width: '30%', border: '2px ridge #17a2b8' }} src={HeartandPianoKeysTattoo} alt='' />
                </div>
            </Card>



        </div>
    )
};

export default DigitalArt;