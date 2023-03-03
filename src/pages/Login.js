import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';
import { CustomInput } from '../components/CustomInput';
import { toast } from 'react-toastify';


export default function Login() {
    const navigate = useNavigate()
    const [formDt, setFormDt] = useState({});
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

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setFormDt({
            ...formDt,
            [name]: value,
        });
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(formDt);

        const usersStr = localStorage.getItem("users");
        const userList = usersStr ? JSON.parse(usersStr) : [];

        const user = userList.find(({ email, password }) => {
            return email === formDt.email && password === formDt.password;
        });

        user?.email ? navigate("/dashboard") : toast.error("Invalid login details");
    }
    return (
        <Layout>
            <div className='w-50 m-auto'>

                <Form onSubmit={handleOnSubmit} className='mt-5 border p-3 py-5 rounded shadow-lg '>
                    <h3>Welcome back!</h3>
                    <hr />
                    {inputs.map((item, i) => (
                        <CustomInput key={i} {...item} onChange={handleOnChange} />
                    ))}


                    <div className="d-grid mb-3">
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </div>


                    <div className='text-end'>
                        Forget Password? <a href='/password-reset'>Reset</a>
                    </div>
                </Form>

            </div>
        </Layout>


    )
}
