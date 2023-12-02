import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RigesterPage.css'
const RigesterPage = () => {
  return (
    <Container className='page rigester-page'>
      <div className='login-page py-3'>
      <h2>Welcome</h2>
      <h3 className='login-title'>Create an acount</h3>
       <Form className='login-form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
    <div className='help-links my-2'>
      <p>Already have an acount?
        <Link to={"/loginPage"}>sign In</Link>
      </p>
    </div>
    </div>
    </Container>
  )
}
export default RigesterPage;
