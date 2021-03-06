import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    let intialValue = [];
    // Fetching data
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    // Adding product in cart

    const handleAddtoCart = (product) => {
        // exist product restriction
      const exist= cart.find(item =>item.id ===product.id);
      if (exist) {
        alert('Madam! Your product already Exist!!')
        return;
      }
      const newCart = [...cart, product];
      if(newCart.length > 4){
        alert("You Can't add more than 4 item!!")
        return;
         }
        setCart(newCart)
    }
    
    // Removing all items in cart
    const handleReset = () => {
        setCart(intialValue)
    }
    // Choosing a random item from cart
    const handleRandom = () => {
        setCart([cart[parseInt(Math.random() * cart.length)]])
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id}
                        product={product} handleAddtoCart={handleAddtoCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleReset={handleReset} handleRandom={handleRandom}></Cart>
            </div>
        </div>
    );
};

export default Shop;