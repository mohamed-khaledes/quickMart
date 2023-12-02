import React from 'react'
import './ForgetPasswordPage.css'
import { Col, Container, Form, Row } from 'react-bootstrap'
import ButtonComponent from '../../../Components/Utility/ButtonComponent/ButtonComponent'
import ForgetPasswordHook from '../../../CustomHooks/Auth/ForgetPasswordHook'
import SpinnerComponent from '../../../Components/Utility/SpinnerComponent/SpinnerComponent'
const ForgetPasswordPage = () => {
  const [email,onChangeEmail,onSubmit,loading,isPress] = ForgetPasswordHook()
  return (
    <Container className='page login-page'>
      <Row className='w-100'>
      <Col xs="12">
      <div>
        <h4 className='login-title'>Forget Password</h4>
      </div>
       <Form className='login-form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" value={email} onChange={onChangeEmail}/>
      </Form.Group>
      <div className='btn-box w-100' onClick={onSubmit}>
      <ButtonComponent btnValue={"Get code"}/>
      </div>
    </Form>
      </Col>
      </Row>
      {isPress?loading===false?<SpinnerComponent/>:null:null}
    </Container>
  )
}
export default ForgetPasswordPage
