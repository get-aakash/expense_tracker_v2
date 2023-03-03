import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { CustomInput } from './CustomInput'

export const PassResetForm = () => {
    const [formDt, setFormDt] = useState({})
    const [error, setError] = useState('')

    const handleOnChange = (e) => {
        const { name, value } = e.target
        if (name === "password") {
            setError('')
            value.length < 6 && setError("Passowrd must have atleast 6 characters")
            !/[0-9]/.test(value) && setError("Atleast one number required")
            !/[a-z]/.test(value) && setError("Atleast one lower case required")
            !/[A-Z]/.test(value) && setError("Atleast one upper case required")
        }
        setFormDt({ ...formDt, [name]: value })

    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const { confirmPassword, ...rest } = formDt
        if (confirmPassword !== rest.password) {
            return toast.error("password doesnot match")
        }
        console.log(rest)

        //get the data from local storage
        const userStr = localStorage.getItem("users")
        if (userStr) {
            //parse the json data to object
            let users = JSON.parse(userStr)

            if (users.length) {
                // check if there is any user who has the same email
                const userExist = users.find((item) =>  item.email === rest.email )
                
                if (userExist?.email) {
                    //loop through the array and update the password, t should create the new array 
                    const tempUsers = users.map(item=>{
                        if(item.email === rest.email){
                            item.password = rest.password
                        }
                        return item
                    })
                    //store that new array to local storage
                    localStorage.setItem("users", JSON.stringify(tempUsers))
                    toast.success("New password has been updated, you may login")
                    return;

                }
            } }
        toast.error("user not found")
    }
    return (
        <div className='border p-3 py-4 rounded shadow-lg'>
            <h3 className='text-center'> Reset Your Password</h3>
            <hr />

            <Form onSubmit={handleOnSubmit}>
                <CustomInput onChange={handleOnChange} label="Email*" name="email" placeholder="sam@sam.com" required={true} />
                <CustomInput onChange={handleOnChange} label="New Password*" type="password" name="password" placeholder="******" required={true} />
                <CustomInput onChange={handleOnChange} label="Confirm Password*" type="password" name="confirmPassword" placeholder="*****" required={true} />

                <Form.Text>
                    Password Should atleast contain 6 characters, one upper and lower case and one number
                    {
                        error && <ul>
                            <li className='text-danger fw-bolder fs-4'>{error}</li>
                        </ul>
                    }

                </Form.Text>
                <div className='d-grid py-3'>
                    <Button type='submit' variant='outline-danger' disabled={error}>Reset Password</Button>

                </div>

            </Form>
        </div>
    )
}


