import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'
import { GoogleLoginButton } from "react-social-login-buttons";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from '../Config/Firebase';
import { async } from '@firebase/util';

function Registration() {

  const OnsubmitHnadle = (event) => {
    event.preventDefault()
  }

  const OnclickGoogle = async () => {
    const data = await signInWithEmailAndPassword(auth,provider)
    const user = {
      email : data.user.email,
      

    }

  }



  return (
    <div className='col-md-4 mx-auto mt-5 p-5'>
      <h1 className='text-dark'>Registration</h1>
      <Form onSubmit={OnsubmitHnadle}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <GoogleLoginButton onClick={OnclickGoogle} />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Registration;