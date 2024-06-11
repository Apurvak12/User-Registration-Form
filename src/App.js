import './App.css';
import { Container, Button, Col, Form, Row } from 'react-bootstrap';
import Popup from './alert';

function App() {
  return (
    <>
      <section className='container'>
        <h3>User Registration Form</h3>
        <Row className="mb-3">
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control id='first-name' type='text' placeholder='Enter your first name' />
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control id='last-name' type='text' placeholder='Enter your last name' />
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control id='email' type='email' placeholder='xyz@gmail.com' />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control id='password' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" id='address' placeholder="Enter your address" />
        </Form.Group>
        <Button onClick={Popup}>Submit</Button>
      </section>
    </>
  );
}

export default App;

