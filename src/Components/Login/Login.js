import { Button, Container, FloatingLabel, FormControl } from "react-bootstrap";

import "./ContactUs.css";
import { useContext, useRef } from "react";
import ModuleContext from "../../Store/module-context";

export default (props) => {
  const passwordRef = useRef();
  const emailRef = useRef();

  const moduleContext=useContext(ModuleContext)

  function formHandler(event) {
    event.preventDefault();
    const obj = {};
    add2Firebase(obj);

    // passwordRef.current.value = "";
    // emailRef.current.value = "";
  }

  function add2Firebase(obj) {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJ0k2sA98HmFw3BLKGykV5ySGLZYVcy1E",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
          returnSecureToken: true,
        }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result.error) {
          const data = result;
          let errorMessage = "Authentication failed";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          throw new Error(errorMessage);
        } else {
          
          moduleContext.setIsLoggedIn(true)
          moduleContext.setIdToken(result['idToken'])
          localStorage.setItem('idToken',result['idToken'])
          localStorage.setItem('email',result.email)

          moduleContext.fetchCartData(moduleContext.setCartItems,result.email)
        }
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <>
      <Container className="mt-5 text-center">
        <h2 className="pt-2 h1 fw-bold">Login</h2>
        <center>
          <FloatingLabel label="Email Address" className="mb-2 input-width">
            <FormControl
              ref={emailRef}
              size="sm"
              type="email"
              placeholder="Enter your name"
            />
          </FloatingLabel>
          <FloatingLabel label="Password" className="mb-2 input-width">
            <FormControl
              ref={passwordRef}
              size="sm"
              type="password"
              placeholder="Enter your password"
            />
          </FloatingLabel>
          <Button onClick={formHandler}>Submit</Button>
        </center>
      </Container>
    </>
  );
};
