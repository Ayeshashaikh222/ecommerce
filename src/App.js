import "./App.css";
import Header from "./components/Header/Header";
import ProductStore from "./components/ProductStore/ProductStore";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import {Routes, Route} from "react-router-dom";
import About from "./Pages/About";

function App() {

  const [openCart, setOpenCart] = useState(false);


  const openCartHandler = () => {
      setOpenCart(true);
  };

  const HideCartHandler = () => {
      setOpenCart(false);
  };

  return (
  
    <CartProvider>
      <Header onOpenCart={openCartHandler}/>
      {openCart && <Cart openCart={openCart} onHideCart={HideCartHandler}/>}
      {/* <ProductStore /> */}
      <Routes>
        <>
         <Route path="/" element={<ProductStore />} />
         <Route path="/about" element={<About />}/>
        </>
      </Routes>
      </CartProvider>
  
  );
}

export default App;
