import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
export default function Registration() {
  return (
    <Container>
      <h2 className='mt-3 text-center'>Register Here</h2>
      <hr />
      <Form className=' d-flex flex-column align-items-center justify-content-center  mt-3 '>
      <Form.Group className="mb-3" >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" />

      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />

      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Re-Enter Password</Form.Label>
        <Form.Control type="password" placeholder="Re Enter Password" />
      </Form.Group>

      <Link to="/">
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Link>

    </Form>
    </Container>
    
  )
}
