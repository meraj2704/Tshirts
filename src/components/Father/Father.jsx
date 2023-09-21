import React, { useContext } from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
import { Money } from '../Grandpa/Grandpa';

const Father = ({ring}) => {
    const [money,setMoney] = useContext(Money);
    return (
        <div className='family'>
            <h2>Father</h2>
            <p>Grandpa Cash : {money}</p>
            <button onClick={()=>setMoney(money+2000)}>Send 2000tk</button>
            <div className="flex">
                <Myself ring={ring}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </div>
        </div>
    );
};

export default Father;