import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
         total = total + product.price;
        
    }
    return (
        <div>
            <h2>Course Iteams</h2>
            <h4>Order Summary: {cart.length}</h4>
            <p>Total Price: {total}</p>
            <button className="main-button">Order Now</button>
        </div>
    );
};

export default Cart;