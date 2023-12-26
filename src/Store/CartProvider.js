import React, { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = (props) => {
    
    const [cart, setCart] = useState([]);

    //adding products in cart
    const addProductToCartHandler = (product,index) => {
        let cartProducts = [...cart];
        let isProductPresent = false;
        // const updateProduct = [...product];

       // Create a new object with the updated quantity
        cartProducts.forEach((item) => {
            if (product.id === item.id){
                isProductPresent = true;
                // Increment the quantity of the existing product
                item.quantity += Number(product.quantity);
            }
        });
        
        if(isProductPresent) {
            setCart(...cartProducts);
    
        } else {
            setCart((prevProducts)=> {
                return [...prevProducts, product];
            });
        }
    };

    // calculation the total amount
    const totalAmount = cart.reduce((total, item)=>{
        return total + item.price * item.quantity;
    }, 0);

    //calculating the total quantity
    const totalQuantity =  cart.reduce((total, item) => {
        return total + item.quantity 
    },0);
    
    const removeProductToCartHandler = () => {

    };
    const cartContext = {
         products: cart,
         totalQuantity: totalQuantity,
         totalAmount: totalAmount,
         addProduct: addProductToCartHandler,
         removeProduct: removeProductToCartHandler,

    };

    return (
        
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
        
    );
};

export default CartProvider;

