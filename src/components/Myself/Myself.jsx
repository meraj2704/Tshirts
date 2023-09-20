import React from 'react';
import Special from '../Special/Special';

const Myself = ({ring}) => {
    return (
        <div className='family'>
            <h2>Myself</h2>
            <div className="flex">
                <Special ring={ring}></Special>
            </div>
        </div>
    );
};

export default Myself;