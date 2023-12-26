import { Button, Modal } from "react-bootstrap";
import CartItem from "./CartItem";
import stylesheet from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../Store/CartContext";

const Cart = (props) => {
 

  const cartcontext = useContext(CartContext);
  
  // const cartItemAddHandler = () => {};
    // const isCartHaveItems = cartcontext.products.length > 0;
  

  const cartItemList = cartcontext.products.map((product) => (
    <CartItem
    key={product.id}
      title={product.title}
      price={product.price}
      imageUrl={product.imageUrl}
      quantity={product.quantity}
    />
  ));

  //calculating the total products amount
    let totalAmount = 0;
    cartcontext.products.forEach((product)=>{
      totalAmount = totalAmount + Number(product.price * product.quantity);
    });

  return (
    <>
      <Modal
        fullscreen="xxl-down"
        show={props.openCart}
        hide={props.onHideCart}
        size="lg"
        aria-labelledby="example-custom-modal-style-title"
      >
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>{cartItemList}</Modal.Body>
        <Modal.Footer>
          Total: {`₹ ${totalAmount.toFixed(2)}`}
          <Button className={stylesheet["place-order-btn"]}>Place Order</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Cart;
