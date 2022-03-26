import React from 'react';
import './Product.css';
const Product = (props) => {
    const {product}= props;
    const {title,img,price} = product;
 
    return (
        <div className='product-list'>
            <img src={img} alt=""></img>
          <div className='product-info'>
            <p className='product-name'>{title}</p>
            <p className='price'>Price : ${price}</p>
           </div> 
        </div>
    );
};

export default Product;