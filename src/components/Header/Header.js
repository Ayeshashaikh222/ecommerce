import React from "react";
import stylesheet from "./Header.module.css";
import {Container, Badge, Navbar, Nav, Button} from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = (props) => {
    return (
        <>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#" className="b">
            EcommerceSite
          </Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Store</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
          </Nav>
          <div className="d-flex w-auto mb-3">
            <Button className={stylesheet["cart-button"]} onClick={props.onOpenCart}>
              <AiOutlineShoppingCart />
            </Button>
            {/* <span>0</span> */}
            <Badge pill className={stylesheet["total-item"]}>0</Badge>
          </div>
        </Container>
      </Navbar>
        </>
    );
}
export default Header;
