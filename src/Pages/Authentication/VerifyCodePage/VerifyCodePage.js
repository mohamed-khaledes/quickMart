import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import '../ForgetPasswordPage/ForgetPasswordPage.css'
import ButtonComponent from '../../../Components/Utility/ButtonComponent/ButtonComponent'
import { ToastContainer } from 'react-toastify'
import SpinnerComponent from '../../../Components/Utility/SpinnerComponent/SpinnerComponent'
import VerifyCodeHook from '../../../CustomHooks/Auth/VerifyCodeHook'
const VerifyCodePage = () => {
  const [code,onChangeCode,onSubmit,loading,isPress] = VerifyCodeHook()
  return (
    <Container className='page login-page'>
      <Row className='w-100'>
      <Col xs="12">
      <div>
        <h4 className='login-title'>Verify code</h4>
      </div>
       <Form className='login-form'>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="verify-code" value={code} onChange={onChangeCode}/>
      </Form.Group>
      <div className='btn-box' onClick={onSubmit}>
      <ButtonComponent btnValue={"submit code"}/>
      </div>
    </Form>
      </Col>
      </Row>
      {isPress===true?loading===true?<SpinnerComponent/>:null:null}
      <ToastContainer />
    </Container>
  )
}
export default VerifyCodePage
