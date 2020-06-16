import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Card, CardImg, CardBody, CardText, CardLink, CardTitle, CardSubtitle, Button } from 'reactstrap';
import profilepicture2020 from '../src/profilepicture2020.png';

const AboutMe = () => {
    return (
        <>
            <Card style={{ display: 'flex', flexDirection: 'row', border: '2px ridge #006699' }} >
                <CardImg style={{ width: '30%' }} src={profilepicture2020} alt='' />
                <CardBody style={{ width: '50%', textAlign: 'center' }} >
                    <CardTitle style={{ color: '#006699', textShadow: '2px 2px grey' }} ><h3>About My Journey</h3></CardTitle>
                    <CardText>lkjakuyujg;lkhkujgkjbhkjghlkjgklwhw;kjh
                    klh;kag;kjbh;iug;ka'lkhf;kjug;oeiruh'lkhnd;klsgh;
                    </CardText>
                </CardBody>
            </Card>
        </>
    )
};

export default AboutMe;