import React from 'react';
import "./App.css";
import Header from "./components/Header/Header";
import { Suspense, useState, useContext, lazy } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import { Routes, Route, Navigate} from "react-router-dom";
// import About from "./Pages/About";
// import Home from "./Pages/Home";
// import Store from "./Pages/Store";
// import Contact from "./Pages/Contact";
// import Product from "./Pages/Product";
import AuthContext from "./Store/AuthContext";
import Authentication from "./components/Auth/Authentication";


const Home = lazy(()=> import('./Pages/Home'));
const About = lazy(()=> import('./Pages/About'));
const Store = lazy(()=> import('./Pages/Store'));
const Product = lazy(()=> import('./Pages/Product'));
const Contact = lazy(()=> import('./Pages/Contact'));

function App() {

  const authcontext = useContext(AuthContext);

  const [openCart, setOpenCart] = useState(false);


  const openCartHandler = () => {
    setOpenCart(true);
  };

  const HideCartHandler = () => {
    setOpenCart(false);
  };

  return (

    <CartProvider>
      <Header onOpenCart={openCartHandler} />
      <Suspense fallback={<div>Loading...</div>}>
      {openCart && <Cart openCart={openCart} onHideCart={HideCartHandler} />}

      <Routes>
        <>

          {authcontext.isLoggedIn && <Route path="/auth" element={<Navigate to="/home" />} />}

          {authcontext.isLoggedIn && (
            <>
              <Route path='/' element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:productId" element={<Product />} />
              
            </>
          )}
          

          {!authcontext.isLoggedIn && <Route path="/auth" element={<Authentication />} />}
          
          {!authcontext.isLoggedIn &&(
        <>
         <Route path="/" element={< Authentication />} />
         <Route path="/home" element={<Authentication />} />
         <Route path="/store" element={<Authentication />} />
         <Route path="/about" element={<Authentication />} />
         <Route path="/contact" element={<Authentication />} />
         <Route path="/auth" element={<Authentication />} />

        </>
          )}


        </>
      </Routes>
      </Suspense>
    </CartProvider>

  );
}

export default App;
