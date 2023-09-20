import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({children,hasfrined, gold}) => {
    return (
        <div className='family'>
            <h2>Cousin</h2>
            <p><small>{children}</small></p>
            <div className="flex">
                {hasfrined && <Friend gold={gold}></Friend>}
            </div>
        </div>
    );
};

export default Cousin;