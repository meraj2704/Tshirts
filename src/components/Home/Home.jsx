import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Shirt from '../Shirt/Shirt';
import './Home.css'


const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);
const handleAddToCart =(shirt) =>{
    console.log(shirt);
}
    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                        tShirts.map(tShirt => <Shirt
                            key = {tShirt._id}
                            tShirt = {tShirt}
                            handleAddToCart = {handleAddToCart}
                        ></Shirt>)
                }
            </div>
            <div className="cart-container">
                <h1>thsi is cart</h1>
            </div>
        </div>
    );
};

export default Home;