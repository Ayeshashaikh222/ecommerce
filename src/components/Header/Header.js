import React, { useContext } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import CartButton from "./CartButton";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../Store/AuthContext";
import { FiLogOut } from "react-icons/fi";


const Header = (props) => {

  const authContext = useContext(AuthContext);

  const navigate = useNavigate()

  // const loginHandler = () => {
  //   navigate('/auth', {replace: true})
  // };

  const logoutHandler = () => {
    authContext.logout();
    navigate('/auth', {replace: true})
  };

  const location = useLocation();


  return (
    <>
      <Navbar className="bg-body-tertiary" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
        <Container>
          <Navbar.Brand href="#" className="b">
            The Generics
          </Navbar.Brand>
          <Nav className="me-auto ">
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <NavLink to="/home" className="nav-link">
                Home
              </NavLink>
            </NavLink>

            <NavLink to="/store" className="nav-link">
              Store
            </NavLink>

            <NavLink to="/about" className="nav-link">
              About
            </NavLink>

            <NavLink to="/contact" className="nav-link">
              Contact Us
            </NavLink>

            {/* {!authContext.isLoggedIn && location.pathname !== "/auth" && (<Button onClick={loginHandler} style={{
              fontSize: "1.3rem",
              marginLeft: "0.50rem",
              backgroundColor: "transparent",
              border: "none",
              color: "#ff3f6c"
            }}>
              Login
            </Button>
            )
            } */}

          </Nav>
         
          {authContext.isLoggedIn &&
            location.pathname !== "/home" &&
            location.pathname !== "/about" &&
            location.pathname !== "/contact" &&
            location.pathname !== "/auth" && (
              <div className="d-flex w-auto mb-3">
                <CartButton onOpenCart={props.onOpenCart} />
              </div>
            )}

          {authContext.isLoggedIn && location.pathname !== "/auth" && (<Button style={{
            fontSize: "1.3rem",
            marginLeft: "0.50rem",
            backgroundColor: "transparent",
            border: "none",
          }}
            className="d-flex w-auto mb-3 "
            onClick={logoutHandler} >
            <FiLogOut style={{ color: "#ff3f6c" }} />
          </Button>
          )}

        </Container>
      </Navbar>
    </>
  );
};
export default Header;
