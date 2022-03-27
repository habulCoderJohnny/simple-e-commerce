import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart,handleReset, handleRandom} = props;
    return (
        <div className='selected-product'>
            <h2><u>Order Summary</u></h2>
            {/* Showing name and image in cart */}
                {cart.map((choosenProduct)=>[
                  <div className='img-name'>
                    <img className=''src={choosenProduct.img} alt="books"/>
                    <h4 className='' key={choosenProduct.id}>{choosenProduct.title}</h4>
                    <hr/>
                </div>
                ])}    
           <div>
                {/* Choosing item randomly from cart */}
                <button onClick={handleRandom} style={{color: 'white',backgroundColor:'#f16623',margin:'3px',padding:'3px'}}
                   >Choose with AI</button>
                {/* Clearing cart */}
                <button onClick={handleReset} style={{color: 'white',backgroundColor:'#f16623',margin:'3px',padding:'3px'}}>Shopping Again</button>
            </div>              
        </div>
    );
};

export default Cart;