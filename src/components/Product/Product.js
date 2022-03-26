import React from 'react';
import './Product.css';
const Product = (props) => {
    const {product}= props;
    const {img} = product;
 
    return (
        <div className='product-list'>
            <img src={img} alt=""></img>
          <div className='product-info'>

           </div> 
        </div>
    );
};

export default Product;