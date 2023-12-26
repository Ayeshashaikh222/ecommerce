import React, {useContext} from "react";
import { Card, Button, Col } from "react-bootstrap";
import stylesheet from "./ProductItem.module.css";
import CartContext from "../../Store/CartContext";


const ProductItem = (props) => {
  const price = `₹ ${props.price.toFixed(2)}`;

  const defaultQty = 1;
  
  const cartContext = useContext(CartContext);

  const addItemToCart = (event) => {
    event.preventDefault();

    cartContext.addProduct({
      ...props,
      quantity:defaultQty,
      id: Math.random().toString(36),
    });
  };


  return (
    <Col style={{ margin: "3rem 0" }}>
      <Card style={{ width: "18rem" }}>
        <div className={stylesheet["image-container"]}>
          <Card.Img
            variant="top"
            src={props.imageUrl}
            className={stylesheet.image}
          />
        </div>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className={stylesheet.price}>$ {price}</Card.Text>

          <Button
            as="input"
            type="submit"
            className={stylesheet.button}
            defaultValue={defaultQty}
            onClick={addItemToCart}
            value={"Add To Cart"}
            product={props}
            id={props.id}
          >
            {/* Add to Cart */}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;
