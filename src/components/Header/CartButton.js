import { AiOutlineShoppingCart } from "react-icons/ai";
import {Badge ,Button} from 'react-bootstrap';
import stylesheet from './CartButton.module.css';


const CartButton = (props) => {
   console.log(props.totalQuantity)
 
  return (
     <>
     <Button className={stylesheet["cart-button"]} 
     onClick={props.onOpenCart}>
        <AiOutlineShoppingCart />
     </Button>
     <Badge pill bg='#ff3f6c' 
     className={stylesheet["total-item"]}>
      {props.totalQuantity}</Badge>
      
     </>
  );
  console.log(props.totalQuantity)
}

export default CartButton;