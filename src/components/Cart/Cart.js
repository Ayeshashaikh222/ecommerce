import { Button, Modal } from "react-bootstrap";
import CartItem from "./CartItem";
import stylesheet from "./Cart.module.css";

const Cart = (props) => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

  const cartItemList = cartElements.map((item) => (
    <CartItem
      title={item.title}
      price={item.price}
      imageUrl={item.imageUrl}
      quantity={item.quantity}
    />
  ));
  return (
    <>
      <Modal fullscreen="xxl-down" show={props.openCart} hide={props.onHideCart} size='lg' aria-labelledby='example-custom-modal-style-title'>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>{cartItemList}</Modal.Body>
        <Modal.Footer>
            Total: 0
            <Button className={stylesheet["place-order-btn"]}>Place Order</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Cart;
