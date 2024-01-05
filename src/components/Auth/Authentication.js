import React, { useState, useRef, useContext } from 'react'
import stylesheet from "./Authentication.module.css";
import { Container, Form, Button } from 'react-bootstrap';
import AuthContext from '../../Store/AuthContext';

function Authentication() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authContext = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredpassword = passwordInputRef.current.value;

    let errorMessage = <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>

    setIsLoading(true);

    let url;

    if (isLogin) {

      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAnRSUmmfLlwv7LudrF4lS190XTMY8i4PA";

    } else {

      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAnRSUmmfLlwv7LudrF4lS190XTMY8i4PA";

    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredpassword,
        returnSecureToken: true,
      }),
      headers: {
        "content-Type": "application/json",
      },

    }).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        console.log(res);
        return res.json();
      } else {
        return res.json().then((data) => {
         errorMessage = "Authentication failed !";
          throw new Error(errorMessage);
        });
      }

    }).then((data) => {
      console.log(data);
      authContext.login(data.idToken)

    }).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <>
      <Container>
        <div className={stylesheet["form-container"]}>
          <h2 style={{ marginBottom: "20px" }}>
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder=" Email "
                required
                ref={emailInputRef}
              />
             
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                ref={passwordInputRef}
              />
            </Form.Group>
            <Form.Group>
              {!isLoading && (
                <Button type="submit" className={stylesheet.loginButton} >
                  {isLogin ? "Login" : "Create Account"}
                </Button>
              )}
              {isLoading && (
                <Button className={stylesheet.refreshing}>
                  Sending Requerst...
                </Button>
              )}
            </Form.Group>

            <Button
              type="button"
              className={stylesheet.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </Button>
          </Form>
        </div>
      </Container>
    </>
  )
}

export default Authentication