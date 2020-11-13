import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import profilepicture2020 from './images/profilepicture2020.png';

const AboutMe = () => {
    return (
        <>
            <Card color='info' light style={{ display: 'flex', textAlign: 'center', color: 'white', alignItems: 'flexStart' }}>
                <h3>My Employment Goals:</h3><span>
                    <ul style={{ listStyleType: 'none' }}>
                        <li>Remote Work from Home</li>
                        <li>Front End Design/Advanced CSS/React js</li>
                        <li><h5>Salary:</h5>60,000/year Full-Time or 30,000/year Part-Time</li>
                        <li><h5>Benefits:</h5>Medical, Dental, Vision, Life, Vacation/Personal/Sick Time</li>

                    </ul>
                </span>
            </Card>
            <Card style={{ display: 'flex', flexDirection: 'row', border: '2px ridge #006699' }} >
                <CardImg style={{ width: '30%', height: '30rem' }} src={profilepicture2020} alt='' />
                <CardBody style={{ width: '50%', textAlign: 'center' }} >
                    <CardTitle style={{ color: '#006699', textShadow: '2px 2px grey' }} ><h3>About My Journey</h3></CardTitle>
                    <CardText> Hi, from the little town of Desoto, MO!
                    I haven't always lived here, in fact, my home town is Overland Park, KS (a suburb of the Kansas City area). I was only privilaged to move down here with my fiance in February of 2019. For most of my 40 something years, I was working in the customer service industry of various companies from fast food to human resources (between the times I was the caregiver for elderly family members or an At-Home-Mom). During one of my honored At-Home-Mom periods of time, I was able to attend online courses with
                    <span style={{ color: 'red' }}>
                            The Art Institute of Pittsburgh (2007-2008)
                     </span>.  It was in that certificate course for
                     <span style={{ color: 'red' }}>
                            Digital Design
                    </span>
                     that I fell in love with computers, creative design, and became fascinated to find out how people created such wonderful applications for the common artist minded people.
                    <p>By 2011, my whole world was completely changed and I had not been able to finish my certificate program at the Art Institute.  Since in that situation, I was no longer married and needed to find a decent paying and yet enjoyable employment, I took the advice of some people who didn't really know me very well and began classes at <span style={{ color: 'red' }}>
                            Colorado Technical University(2001-2013)
                    </span> online for <span style={{ color: 'red' }}>
                                Science/Criminal Justice/Social Work & Advocacy
                    </span>
                    . With my passion for helping people who have been deemed social pariahs through no fault of their own, and my current experience of caring for my own grandmother in her home, I pursued this line of work with my all. However, My Lord had other more wonderful plans for my life (even in such a late stage as I was in already). My full-time class schedual was very demanding and very little of what I was studying had anything to do with the occupation I wanted to end up in and finally my student loans ran dry.</p>
                        <p>Then in the winter of
                    <span style={{ color: 'red' }}>
                                2017
                    </span>
                    , my father suffered a major stroke and I was asked to care for him at home. I did so with pleasure and love for my family and no regrets to this day. But all through the years and changes, I would use my <span style={{ color: 'red' }}>
                                Adobe Creative Suite
                    </span> programs as a relaxing and enjoyable hobby.  Family and friends enjoyed the personalized gifts I would make them for Christmas or birthdays using my knowledge of Adobe for designing and also card making. I never lost my passion for digital art or my curiosity of computer application coding.
                    </p>
                        <p>By
                    <span style={{ color: 'red' }}>
                                2018 </span>
                    , I had become the main caregiver of my father's house, was deeply involved in my church, worked off and on outside the house for a little extra money with various temporary staffing companies sometimes in
                    <span style={{ color: 'red' }}>
                                customer service
                    </span>
                    and sometimes in
                    <span style={{ color: 'red' }}>
                                warehouse associate
                    </span>
                    positions. And then my mother also became very ill and was diagnosed with cancer.
                    It was a time of a lot of prayer and even blessings through tears for my entire family.  In late August, I had reconnected on social media with an old friend of mine and we fell in love.</p>
                        <p>In the Spring of
                    <span style={{ color: 'red' }}>
                                2019
                    </span>
                    , momma went home to Heaven, Daddy went to live with my sister, and I moved down here to Desoto to get married for the last time. And in February of <span style={{ color: 'red' }}>
                                2020
                    </span>
                    , I found an advertisement for
                    <span style={{ color: 'red' }}>
                                Lambda School
                    </span>
                    on Face Book and immediately did my research and prayed about it. As the Lord willed it, I am now in the midst of learning to master <span style={{ color: 'red' }}>
                                Full Stack Web Developement
                    </span>
                    with some of the brightest minds in the industry.</p>
                    </CardText>
                </CardBody>
            </Card>
        </>
    )
};

export default AboutMe;