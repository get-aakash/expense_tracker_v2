
import { useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import './App.css';
import DisplayTable from './components/DisplayTable';
import { MyForm } from './components/MyForm';

function App() {
  const [lists, setList] = useState([])
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
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h2 className='text-center mt-5'>Expense Tracker</h2>

          </Col>
        </Row>
        <hr />
        <MyForm addTransaction={addTransaction} />
        <hr />
        <DisplayTable lists={lists} handleOnDelete={hadleOnDelete} />
      </Container>
    </div>
  );
}

export default App;
