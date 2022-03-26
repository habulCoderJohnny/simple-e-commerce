import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
const Product = (props) => {
    const {product,handleAddtoCart}= props;
    const {title,img,price} = product;
 
    return (
        <div className='product-list'>
            <img src={img} alt=""></img>
          <div className='product-info'>
            <p className='product-name'>{title}</p>
            <p className='price'>Price : ${price}</p>
           </div>
           <button onClick={()=>handleAddtoCart(product)} className='btn-cart'>
            <p className='btn-text'>Add To Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

            
            </button> 
        </div>
    );
};

export default Product;