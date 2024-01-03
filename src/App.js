import "./App.css";
import Header from "./components/Header/Header";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import {Routes, Route} from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";

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
      
      <Routes>
        <>
        <Route path="/home" element={<Home />} />
         <Route path="/" element={<Store />} />
         <Route path="/about" element={<About />}/>
         <Route path="/contact" element={<Contact />}/>
         <Route path="/product/:productId" element={<Product />} />
        </>
      </Routes>
      </CartProvider>
  
  );
}

export default App;
