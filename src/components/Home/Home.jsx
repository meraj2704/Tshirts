import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Shirt from '../Shirt/Shirt';
import './Home.css'
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';


const Home = () => {
    const tShirts = useLoaderData();
    const [carts, setCart] = useState([]);
    const handleAddToCart = (shirt) => {
        // console.log(shirt);
        const exist = carts.find(ts => ts._id === shirt._id);
        if (exist) {
            toast('You have already added this t-shirt');
        }
        else {

            const newCarts = [...carts, shirt];
            setCart(newCarts);
        }
    }
    const handleRemoveToCart = id => {
        // console.log(id);
        const remaining = carts.filter(ts => ts._id !== id);
        setCart(remaining);
    }
    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tShirts.map(tShirt => <Shirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></Shirt>)
                }
            </div>
            <div className="cart-container">
                {
                    <Cart
                        carts={carts}
                        handleRemoveToCart={handleRemoveToCart}
                    ></Cart>
                }
            </div>
        </div>
    );
};

export default Home;