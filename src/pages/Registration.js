import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { CustomInput } from '../components/CustomInput';
import Layout from '../components/Layout';
export default function Registration() {
  const inputs = [
    {
      label: "First Name",
      name: "fname",
      type: "text",
      placeholder: "Enter First name",
      required: true
    },
    {
      label: "Last Name",
      name: "lname",
      type: "text",
      placeholder: "Enter Last name",
      required: true

    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "sam@example.com ",
      required: true
    },
    {
      label: "Password",
      name: "password",
      type: "text",
      placeholder: "*****",
      required: true
    },
    {
      label: "Re-enter Password",
      name: "rpassword",
      type: "text",
      placeholder: "*****",
      required: true

    }
  ]
  return (
    <Layout>
      <div className='w-50 m-auto'>

        <Form className=' mt-5 border p-3 py-5 rounded shadow-lg '>
          <h2 className='mt-3 text-center'>Register Here</h2>
          <hr />
          {
            inputs.map((item, i) => (
              <CustomInput {...item} />
            ))
          }


          <Link to="/">
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Link>

        </Form>
      </div>
    </Layout>


  )
}
