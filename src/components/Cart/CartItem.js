import stylesheet from "./CartItem.module.css";
import { Card, Button, Row, Col } from "react-bootstrap";

const CartItem = (props) => {

    return (
        <>
          <Card style={{ width: "100%" }}>
        <Row>
          <Col sm={4}>
            <Card.Img
              variant="top"
              style={{ height: "100%", width: "200px" }}
              src={props.imageUrl}
            />
          </Col>
          <Col sm={8}>
            <Card.Body className="d-flex justify-content-between align-items-start">
              <Card.Title>{props.title}</Card.Title>
              <>
                <Card.Text> ${props.price}</Card.Text>
                {/* <Button variant="danger">-</Button> */}
                <Card.Text>Quantity : {props.quantity}</Card.Text>
                {/* <Button variant="danger">+</Button> */}
              </>

              <Button className={stylesheet["remove-item-btn"]}>Remove</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
        </>
    );
};

export default CartItem;