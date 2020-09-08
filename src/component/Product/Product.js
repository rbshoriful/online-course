import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const {name, image, price} = props.product;
    return (
        <div className="product">
            <div>
                <img src={image} alt=""/>
            </div>
            <div className="product-name-area">
                <h1 className="product-name"> Course Name: {name}</h1>
                <h4>Course Price: {price}</h4>
                <button className="main-button"
                    onClick={() => props.handleAddProduct(props.product)}
                    >
                    Buy Now</button>
            </div>
        </div>
    );
};

export default Product;