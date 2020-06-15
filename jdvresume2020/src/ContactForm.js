import React from 'react';
import { Card, CardImg, Form, FormGroup, Input, Button } from 'reactstrap';

const ContactForm = () => {
    return (
        <div>
            <Card color='info' light style={{ display: 'flex', textAlign: 'center' }}>
                <h1 style={{ color: 'white' }}>Contact Jennifer Vest 2020</h1>
                <CardImg src='' />
            </Card>
            <Form style={{ width: '80%', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#cceeff', border: '5px ridge #006699' }}>
                <FormGroup>
                    <legend style={{ color: '#006699', fontWeight: 'bold' }}>
                        Name
                    </legend>
                    <Input style={{ border: '2px ridge #006699' }}
                        type='name'
                        name='name' />
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