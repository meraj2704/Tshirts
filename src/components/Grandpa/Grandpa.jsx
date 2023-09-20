import React from 'react';
import './Grandpa.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

const Grandpa = () => {
    const ring = 'diamon';
    const gold = 'gold';
    return (
        <div className='family'>
            <h2>Grandpa</h2>
            <div className="flex">
                <Father ring={ring}></Father>
                <Uncle gold={gold}></Uncle>
                <Aunty></Aunty>
            </div>
        </div>
    );
};

export default Grandpa;