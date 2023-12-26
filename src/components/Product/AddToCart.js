import { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../Store/CartContext";
import stylesheet from "./AddToCart.module.css";
const AddToCart = (props) => {

    const defaultQty = 1;
  
  const cartContext = useContext(CartContext);

  const addItemToCart = (event) => {
    event.preventDefault();

    cartContext.addProduct({
      ...props.item,
      quantity:defaultQty,
      id: props.id
    });
  };

  return (
    <>
     <Button
        as="input"
        type="submit"
        className={stylesheet.button}
        defaultValue={defaultQty}
        onClick={addItemToCart}
        value="Add To Cart"
        product={props}
        id={"amount_" + props.id}
      ></Button>
    </>
);

};



export default AddToCart;