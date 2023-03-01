import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CustomInput } from '../components/CustomInput';
import Layout from '../components/Layout';
import { ToastContainer, toast } from 'react-toastify';
import {randomStrGenerator} from 'src/utils.js'

const initialState = {
  fname:"",
  lname:"",
  email:"",
  password:"",
  confirmPassword:""
}

export default function Registration() {
  const [frm, setFrm] = useState({})
  const[error, setError] = useState("")

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setError('')
    if(name === "password"){
      value.length< 6 && setError("password must be 6 character long")
      !/[0-9]/.test(value) && setError("Number is required")
      !/[a-z]/.test(value) && setError("Atleast one lower case")
      !/[A-Z]/.test(value) && setError("At least one upper case")
    }
    setFrm({ ...frm, [name]: value })

  }
  const handleOnSubmit = (e)=>{
    e.preventDefault()
    const {confirmPassword, ...rest} = frm
    if(confirmPassword !== rest.password){
      return toast.error("Password doesnot match!")
    }
    
    // reading data from local storage
    const oldUsersStr = localStorage.getItem("users")
    const oldUsers = oldUsersStr ? JSON.parse(oldUsersStr):[]
    //lets check if user already exist

    const isExist = oldUsers.find(({email})=>email === rest.email)
    if(isExist){
      return toast.success("This email already exist")
    }

    localStorage.setItem("users",JSON.stringify([...oldUsers,{...rest,id:randomStrGenerator(6)}]))
    toast.success("password match continue to login")
    setFrm(initialState)
  }
  
  const inputs = [
    {
      value: frm.fname,
      label: "First Name",
      name: "fname",
      type: "text",
      placeholder: "Enter First name",
      required: true
    },
    {
      value: frm.lname,
      label: "Last Name",
      name: "lname",
      type: "text",
      placeholder: "Enter Last name",
      required: true

    },
    {
      value: frm.email,
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "sam@example.com ",
      required: true
    },
    {
      value: frm.password,
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "*****",
      required: true
    },
    {
      value: frm.confirmPassword,
      label: "Re-enter Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "*****",
      required: true

    }
  ]
  return (
    <Layout>
      <div className='w-50 m-auto'>

        <Form onSubmit={handleOnSubmit} className=' mt-5 border p-3 py-5 rounded shadow-lg '>
          <h3>Join our system now!</h3>
          <hr />
          {
            inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))
          }
          <Form.Group>
            <Form.Text>
              Your password must contain atleast 6 characters including at least 1 number upper and lower case
            </Form.Text>
            {
              error && <ul><li className='text-danger fw-bolder mt-3'>{error}</li></ul>
            }

          </Form.Group>
          <div className='d-grid py-3'>
            <Button disabled={error} variant="primary" type="submit">
              Register
            </Button>
          </div>
        </Form>
      </div>
    </Layout>


  )
}
