import React, { createContext, useState } from 'react';
import './Grandpa.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
export const ReactContext = createContext('gold');
export const Money = createContext(0);

const Grandpa = () => {
    const ring = 'diamond';
    const gold = 'gold';
    const [money, setMoney]  = useState(0)
    return (
        <div className='family'>
            <Money.Provider value={[money,setMoney]}>
                <ReactContext.Provider value='diamond square'>
                    <h2>Grandpa</h2>
                    <p>Cash : {money}</p>
                    <div className="flex">
                        <Father ring={ring}></Father>
                        <Uncle gold={gold}></Uncle>
                        <Aunty></Aunty>
                    </div>
                </ReactContext.Provider>
            </Money.Provider>
        </div>
    );
};

export default Grandpa;