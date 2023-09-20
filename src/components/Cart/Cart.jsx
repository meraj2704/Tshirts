import React from 'react';
import './Cart.css'

const Cart = ({carts,handleRemoveToCart}) => {
    let message;
    if(carts.length===0)
    {
        message = <p>You didn't select ant product for buy.</p>
    }
    else{
        message = <p>Thanks for buy.</p>
    }
    return (
        <div>
            <h2>Cart : {carts.length}</h2>
            {carts.length>2 ? <h4 className={carts.length>4 ? 'gold' : 'light-gold'}>Primium</h4> : <h4>Silver</h4>}
            {carts.length===4 && <h3>Buy one more and get Bonus</h3>}
            {carts.length >4 && <h2>You get a free t-shirt</h2>}
            {
                carts.map(cart=> <p
                key={cart._id}
                >
                    {cart.name}
                    <button onClick={(()=>handleRemoveToCart(cart._id))}>X</button>
                </p>)
            }
            {message}
        </div>
    );
};

export default Cart;