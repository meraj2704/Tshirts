import React from 'react';
import './Shirt.css'

const Shirt = ({tShirt,handleAddToCart}) => {
    const {name,price,picture} = tShirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price : $<span className='price'>{price}</span></p>
            <button onClick={()=>handleAddToCart()}>Buy Now</button>
        </div>
    );
};

export default Shirt;