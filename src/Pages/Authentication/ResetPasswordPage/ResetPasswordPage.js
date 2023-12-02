import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import '../ForgetPasswordPage/ForgetPasswordPage.css'
import ButtonComponent from '../../../Components/Utility/ButtonComponent/ButtonComponent'
import { ToastContainer } from 'react-toastify'
import SpinnerComponent from '../../../Components/Utility/SpinnerComponent/SpinnerComponent'
import ResetPasswordHook from '../../../CustomHooks/Auth/ResetPasswordHook'
const ResetPasswordPage = () => {
  const [email,onChangeEmail,newPass,onChangeNewPass,onSubmit,loading,isPress] = ResetPasswordHook()
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
      <Form.Group className="mb-3">
        <Form.Control type="password" placeholder="Enter new password" value={newPass} onChange={onChangeNewPass}/>
      </Form.Group>
      <div className='btn-box' onClick={onSubmit}>
      <ButtonComponent btnValue={"submit"}/>
      </div>
    </Form>
      </Col>
      </Row>
      {isPress?loading===false?<SpinnerComponent/>:null:null}
      <ToastContainer />
    </Container>
  )
}
export default ResetPasswordPage
