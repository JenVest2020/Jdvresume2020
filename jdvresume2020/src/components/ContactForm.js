import React from 'react';
import { Card, Form, FormGroup, Input, Button } from 'reactstrap';
import LambdaRedSmall from './images/LambdaRedSmall.png';

const ContactForm = () => {
    return (
        <div>
            <Card color='info' light style={{ display: 'flex', textAlign: 'center', alignItems: 'flexStart' }}>
                <h1 style={{ color: 'white', margin: '0' }}><img src={LambdaRedSmall} style={{ width: '5%' }} alt='Lambda sheild logo in red' /> Contact Jennifer Vest <img src={LambdaRedSmall} style={{ width: '5%' }} alt='Lambda sheild logo in red' /></h1>
            </Card>
            <Form style={{ width: '80%', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#cceeff', border: '5px ridge #006699' }}>
                <FormGroup>
                    <legend style={{ color: '#006699', fontWeight: 'bold' }}>
                        Name & Title
                    </legend>
                    <Input style={{ border: '2px ridge #006699' }}
                        type='name'
                        name='name'
                        placeholder='Joe Smith/Lead Designer' />
                    <p style={{ fontWeight: 'bold' }}>Joe Smith/Lead Designer</p>
                </FormGroup>
                <FormGroup>
                    <legend style={{ color: '#006699', fontWeight: 'bold' }}>
                        Company
                        </legend>
                    <Input style={{ border: '2px ridge #006699' }}
                        type='text'
                        name='comp' />

                </FormGroup>
                <FormGroup>
                    <legend style={{ color: '#006699', fontWeight: 'bold' }}>
                        Phone
                        </legend>
                    <Input style={{ border: '2px ridge #006699' }}
                        type='phone'
                        name='phone'
                        placeholder='(xxx)xxx-xxxx' />
                    <p style={{ fontWeight: 'bold' }}>(xxx)xxx-xxxx</p>
                </FormGroup>
                <FormGroup>
                    <legend style={{ color: '#006699', fontWeight: 'bold' }}>
                        Email
                        </legend>
                    <Input style={{ border: '2px ridge #006699' }}
                        type='email'
                        name='email' />
                </FormGroup>
                <FormGroup>
                    <legend style={{ color: '#006699', fontWeight: 'bold' }}>
                        Comments/Instructions
                    </legend>
                    <Input style={{ border: '2px ridge #006699' }}
                        type='textarea'
                        name='text' />
                </FormGroup>
                <Button color='primary' size='lg'>
                    Send
                </Button>
            </Form>
        </div>
    );
};

export default ContactForm;