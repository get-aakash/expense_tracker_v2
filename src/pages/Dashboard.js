import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import DisplayTable from '../components/DisplayTable';
import Layout from '../components/Layout';
import { MyForm } from '../components/MyForm';

export default function Dashboard() {
    const [lists, setList] = useState([])
    const [user, setUser] = useState({});
    useEffect(() => {
        const userStr = sessionStorage.getItem("logedInUser");
        if (userStr) {
          setUser(JSON.parse(userStr));
        }
      }, []);
    const addTransaction = (data) => {
        setList([...lists, data])
    }
    const hadleOnDelete = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            const tempArg = lists.filter((item, i) => i !== id)
            setList(tempArg)
        }

    }
    return (
        <Layout>
            <Container>
                <Row>
                    <Col>
                    <div>Welcome {user.fname}</div>
                        <h2 className='text-center mt-5'>Expense Tracker</h2>

                    </Col>
                </Row>
                <hr />
                <MyForm addTransaction={addTransaction} />
                <hr />
                <DisplayTable lists={lists} handleOnDelete={hadleOnDelete} />
            </Container>
        </Layout>
    )
}
