import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const MyForm = ({addTransaction})=>{
    const [formData, setFormData] = useState({})
    const handleChange = (e)=>{
        const {name, value} = e.target
        setFormData({
            ...formData, [name]:value
            
        })
    }
    const handleOnSubmit = (e) =>{
        e.preventDefault()
        addTransaction(formData)
    }
   
    return(
    <Form onSubmit={handleOnSubmit} className='border p-2 rounded shadow-lg'>
      <Row className='gap-2'>
        <Col md={2}>
        <Form.Select onChange={handleChange} name='type' >
            <option value="">Type...</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Control onChange={handleChange} required name='title' placeholder="Transaction Title" />
        </Col>
        <Col md={2}>
          <Form.Control onChange={handleChange} required name='amount' type='number' placeholder="111" />
        </Col>
        <Col md={2}>
          <Form.Control onChange={handleChange} required type='date' name='date' />
        </Col>
        <Col md={2}>
          <Button  type='submit'>
            <i className='fa-solid fa-plus'></i>Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

