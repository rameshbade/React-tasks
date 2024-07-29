import { useRef } from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const Uncontrolled=()=>{
    
    const emailRef=useRef();
    const passwordRef=useRef();
    const handler=(event)=>{
        event.preventDefault()
     const emailEntered=emailRef.current.value;
     const passwordEntered=passwordRef.current.value
     console.log(emailEntered,passwordEntered,"on submitting form")
    };

    return(
        <Form onSubmit={handler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
         type="email" 
        placeholder="Enter email"
        ref={emailRef}
         />

        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group> 

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
         type="password" 
         placeholder="Password"
         ref={passwordRef}
          />
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    )
};
export default Uncontrolled;