import { Button, Container, FloatingLabel, Form, FormControl } from "react-bootstrap";
import Title from "../Body/Title";
import './ContactUs.css'
import { useRef } from "react";
export default (props) => {
  const nameRef=useRef()
  const phoneRef=useRef()
  const emailRef=useRef()
  
  function formHandler(event){
    event.preventDefault();
    const obj={
      name:nameRef.current.value,
      phone:phoneRef.current.value,
      email:emailRef.current.value
    }
    add2Firebase(obj)
    nameRef.current.value=''
    phoneRef.current.value=''
    emailRef.current.value=''
  }

  function add2Firebase(obj){
    fetch(
      "https://react-e-commerce-website-67544-default-rtdb.firebaseio.com/client.json",
      {
        "Content-Type": "application/json",
        body: JSON.stringify(obj),
        method: "POST",
      }
    )
      .then((result) => {
        if (!result.ok) {
          throw new Error("Something went wrong");
        }
        return result.json();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <Container className="mt-5 text-center">
        <h2 className="pt-2 h1 fw-bold">Contact Us</h2>
        <center>
          <FloatingLabel label="Name" className="input-width">
            <FormControl size="sm" type="text" ref={nameRef} placeholder="Enter your name" />
          </FloatingLabel>
          <FloatingLabel label="Phone Number" className="my-2 input-width">
            <FormControl
              size="sm"
              type="number"
              ref={phoneRef}
              placeholder="Enter your name"
            />
          </FloatingLabel>
          <FloatingLabel label="Email Address" className="mb-2 input-width">
            <FormControl ref={emailRef} size="sm" type="email" placeholder="Enter your name" />
          </FloatingLabel>
          <Button onClick={formHandler}>Submit</Button>
        </center>
      </Container>
    </>
  );
};
