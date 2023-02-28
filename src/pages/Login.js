import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';
export default function Login() {
    const input =[
        {
            label:"Email",
            name:"email",
            type:"email",
            required: true,
            placeholder:"sam@gmail.com",
        },
        {
            label:"Password",
            name:"password",
            type:"password",
            required: true,
            placeholder:"*****",

        }
    ]
    return (
    <Layout>
        <div className='w-50 m-auto'>
            
            <Form className='mt-5 border p-3 py-5 rounded shadow-lg '>
                <h3>Welcome back!</h3>
                <hr />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Link to="/dashboard">
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Link>

            <div className='text-end'>
                Forget Password? <a href='/password-reset'>Reset</a>
            </div>
            </Form>

        </div>
    </Layout>
        

    )
}
