import { Button, Modal } from "react-bootstrap";
import CartItem from "./CartItem";
import stylesheet from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../Store/CartContext";

const Cart = (props) => {
 

  const cartcontext = useContext(CartContext);
  
  // const cartItemAddHandler = () => {};
    // const isCartHaveItems = cartcontext.products.length > 0;
  
    const totalAmount = cartcontext.products? cartcontext.products.reduce(
      (prevValue, currItem) =>{
        const quantity = Number(currItem.quantity)
        const price = Number(currItem.price)
        if(isNaN(quantity)|| isNaN(price)){
          return prevValue
        }
        const itemTotal = quantity * price
        return prevValue + itemTotal
      } ,0
  
    ):0;


  const cartItemList = cartcontext.products.map((product) => (
    <CartItem
    key={product.id}
      title={product.title}
      price={product.price}
      imageUrl={product.imageUrl}
      quantity={product.quantity}
      onRemove={() => cartcontext.removeProduct(product.id)}
    />
  ));

  

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
          Total: {`₹ ${cartcontext.totalAmount}`}
          <Button className={stylesheet["place-order-btn"]}>Place Order</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Cart;
