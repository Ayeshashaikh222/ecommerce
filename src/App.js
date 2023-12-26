import "./App.css";
import Header from "./components/Header/Header";
import ProductStore from "./components/ProductStore/ProductStore";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {

  const [openCart, setOpenCart] = useState(false);


  const openCartHandler = () => {
      setOpenCart(true);
  };

  const HideCartHandler = () => {
      setOpenCart(false);
  };

  return (
    <>
    <CartProvider>
        {openCart && <Cart openCart={openCart} onHideCart={HideCartHandler}/>}
      <Header onOpenCart={openCartHandler}/>
      <ProductStore />
      </CartProvider>
    </>
  );
}

export default App;
