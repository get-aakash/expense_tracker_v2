import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const MyForm = ({addTransaction})=>{
  const initialState = {
    type:'',
      title:'',
      amount:'',
      date:''
  }
    const [formData, setFormData] = useState(initialState)
    const handleChange = (e)=>{
        const {name, value} = e.target
        setFormData({
            ...formData, [name]:value
            
        })
    }
    const handleOnSubmit = (e) =>{
        e.preventDefault()
        addTransaction(formData)
        setFormData(initialState)
    }
   console.log(formData)
    return(
    <Form onSubmit={handleOnSubmit} className='border p-2 rounded shadow-lg'>
      <Row className='gap-1'>
        <Col md={2}>
        <Form.Select onChange={handleChange} name='type' required >
            <option value="">Type...</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </Form.Select>
        </Col>
        <Col md={3}>
          <Form.Control value={formData.title} onChange={handleChange} required name='title' placeholder="Transaction Title" />
        </Col>
        <Col md={2}>
          <Form.Control value={formData.amount} onChange={handleChange} required name='amount' type='number' placeholder="111" />
        </Col>
        <Col md={2}>
          <Form.Control value={formData.date} onChange={handleChange} required type='date' name='date' />
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

