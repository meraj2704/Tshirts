import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({ring}) => {
    return (
        <div className='family'>
            <h2>Father</h2>
            <div className="flex">
                <Myself ring={ring}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </div>
        </div>
    );
};

export default Father;