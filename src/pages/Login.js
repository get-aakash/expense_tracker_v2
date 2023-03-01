import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';
import { CustomInput } from '../components/CustomInput';


export default function Login() {
    const navigate = useNavigate()
    const inputs = [
        {
            label: "Email",
            name: "email",
            type: "email",
            required: true,
            placeholder: "sam@gmail.com",
        },
        {
            label: "Password",
            name: "password",
            type: "password",
            required: true,
            placeholder: "*****",

        }
    ]
    const handleOnSubmit = (e)=>{
        e.preventDefault()
        navigate("/dashboard")
    }
    return (
        <Layout>
            <div className='w-50 m-auto'>

                <Form onSubmit={handleOnSubmit} className='mt-5 border p-3 py-5 rounded shadow-lg '>
                    <h3>Welcome back!</h3>
                    <hr />
                    {inputs.map((item, i) => (
                        <CustomInput key={i} {...item} />
                    ))}

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
