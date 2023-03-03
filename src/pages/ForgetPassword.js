import React from 'react'
import Layout from '../components/Layout'
import { PassResetForm } from '../components/PassResetForm'

export const ForgetPassword = () => {
    return (
        <Layout>
            <div className='w-50 m-auto mt-5'>
                <PassResetForm />
            </div>

        </Layout>
    )
}


