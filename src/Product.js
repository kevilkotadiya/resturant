import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Product() {


    const osubmitHnadler=(event)=>{
        console.log("Event",event);
        event.preventDefault()
        const Logindata = {
            email : event.target.email.value,
            password : event.target.password.value
        }
        console.log("Data",Logindata);
    }



  return (
    <Form onSubmit={osubmitHnadler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Product;