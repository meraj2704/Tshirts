import React, { useContext } from 'react';
import { ReactContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const gift = useContext(ReactContext);
    return (
        <div className='family'>
            <h2>Special</h2>
            <h4>{ring}</h4>
            <h3>{gift}</h3>
        </div>
    );
};

export default Special;