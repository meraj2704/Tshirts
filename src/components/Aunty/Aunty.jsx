import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = () => {
    return (
        <div className='family'>
            <h2>Aunty</h2>
            <div className="flex">
                <Cousin>Rumki</Cousin>
                <Cousin>Rubi</Cousin>
            </div>
        </div>
    );
};

export default Aunty;