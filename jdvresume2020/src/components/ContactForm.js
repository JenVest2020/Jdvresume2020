import React, { useState, useEffect } from 'react';
import { Card, Form, FormGroup, Input, Button } from 'reactstrap';
import * as yup from 'yup';
import axios from 'axios';
import LambdaRedSmall from './images/LambdaRedSmall.png';

const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        comp: '',
        phone: '',
        email: '',
        text: ''
    });

    const [buttonisDisabled, setButtonisDisabled] = useState(true);
    const [post, setPost] = useState([]);
    const [errors, setErrors] = useState({
        name: '',
        comp: '',
        phone: '',
        email: ''
    });

    const validateChange = (e) => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then((valid) => {
                setErrors({ ...errors, [e.target.name]: '' });
                console.log('success');
            })
            .catch((err) => {
                setErrors({ ...errors, [e.target.name]: err.errors[0] });
                console.log('error', err);
            });
    };

    const inputChange = (e) => {
        e.persist();
        console.log('changes were made');
        const contactMe = {
            ...formState,
            [e.target.name]: e.target.value
        };
        setFormState(contactMe);
        validateChange(e);
    }

    const SubmitForm = (e) => {
        e.preventDefault();
        axios.post('https://jdvresume2020.herokuapp.com', formState)
            .then((res) => {
                console.log('from SubmitForm: submit successful:', res);
                setPost(res.data);
            })
            .catch((err) => {
                console.log('oops...something happened!');
            });
    };

    const formSchema = yup.object().shape({
        name: yup.string().required('Name is required'),
        comp: yup.string().required('Company name is Required'),
        phone: yup.string().required('Phone number is required'),
        email: yup.string().required('Valid email address is required'),
        text: yup.string()
    });

    useEffect(() => {
        formSchema.isValid(formState).then((valid) => {
            console.log('Is this form valid?', valid);
            setButtonisDisabled(!valid);
        });
    }, [formState]);

    return (
        <div>
            <Card color='info' light style={{ display: 'flex', textAlign: 'center', alignItems: 'flexStart' }}>
                <h1 style={{ color: 'white', margin: '0' }}><img src={LambdaRedSmall} style={{ width: '5%' }} alt='Lambda sheild logo in red' /> Contact Jennifer Vest <img src={LambdaRedSmall} style={{ width: '5%' }} alt='Lambda sheild logo in red' /></h1>
            </Card>
            <Form onSubmit={SubmitForm} style={{ width: '80%', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#cceeff', border: '5px ridge #006699' }}>
                <FormGroup>
                    <legend style={{ color: '#006699', fontWeight: 'bold' }}>
                        Name & Title
                    </legend>
                    <Input style={{ border: '2px ridge #006699' }}
                        type='name'
                        name='name'
                        placeholder='Joe Smith/Lead Designer'
                        onChange={inputChange} />
                    <p style={{ fontWeight: 'bold' }}>Joe Smith/Lead Designer</p>
                </FormGroup>
                <FormGroup>
                    <legend style={{ color: '#006699', fontWeight: 'bold' }}>
                        Company
                        </legend>
                    <Input style={{ border: '2px ridge #006699' }}
                        type='text'
                        name='comp'
                        onChange={inputChange} />

                </FormGroup>
                <FormGroup>
                    <legend style={{ color: '#006699', fontWeight: 'bold' }}>
                        Phone
                        </legend>
                    <Input style={{ border: '2px ridge #006699' }}
                        type='phone'
                        name='phone'
                        placeholder='(xxx)xxx-xxxx'
                        onChange={inputChange} />
                    <p style={{ fontWeight: 'bold' }}>(xxx)xxx-xxxx</p>
                </FormGroup>
                <FormGroup>
                    <legend style={{ color: '#006699', fontWeight: 'bold' }}>
                        Email
                        </legend>
                    <Input style={{ border: '2px ridge #006699' }}
                        type='email'
                        name='email'
                        onChange={inputChange} />
                </FormGroup>
                <FormGroup>
                    <legend style={{ color: '#006699', fontWeight: 'bold' }}>
                        Comments/Instructions
                    </legend>
                    <Input style={{ border: '2px ridge #006699' }}
                        type='textarea'
                        name='text'
                        onChange={inputChange} />
                </FormGroup>
                <Button color='primary' size='lg'
                    type='submit'
                    disabled={buttonisDisabled}>
                    Send
                </Button>
            </Form>
        </div>
    );
};

export default ContactForm;