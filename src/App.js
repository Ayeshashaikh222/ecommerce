import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { useState } from "react";
import Cart from "./components/Cart/Cart";

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
        {openCart && <Cart openCart={openCart} onHideCart={HideCartHandler}/>}
      <Header onOpenCart={openCartHandler}/>
      <Home />
    </>
  );
}

export default App;
