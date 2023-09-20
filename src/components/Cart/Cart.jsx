import React from 'react';

const Cart = ({carts,handleRemoveToCart}) => {
    return (
        <div>
            <h2>Cart : {carts.length}</h2>
            {
                carts.map(cart=> <p
                key={cart._id}
                >
                    {cart.name}
                    <button onClick={(()=>handleRemoveToCart(cart._id))}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;