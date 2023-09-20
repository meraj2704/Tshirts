import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = ({gold}) => {
    return (
        <div className='family'>
            <h2>Uncle</h2>
            <div className="flex">
                <Cousin>Arif</Cousin>
                <Cousin hasfrined={true} gold={gold}>Alamin</Cousin>
            </div>
        </div>
    );
};

export default Uncle;