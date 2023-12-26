import React from 'react';

const CartContext = React.createContext({
   products: [],
   totalQuantity: 0,
   addProduct: (product) => {},
   removeProduct: (id) => {} 
});

export default CartContext;