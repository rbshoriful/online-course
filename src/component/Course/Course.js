import React, { useState, useEffect } from 'react';
import data from '../../data/data.json';
import './Course.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Course = (props) => {
    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        console.log("product-click", product);
        const newCart= [...cart, product];
        setCart(newCart);
    }

 useEffect(() => {
   setCourses(data);
 }, []);

    return (
        <div className="course-container">
            <div className="product-container">
                {
                    courses.map(course => <Product 
                        handleAddProduct={handleAddProduct}
                        product={course}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                    <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Course;