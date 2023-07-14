'use client'

import './PickAmount.css';

export default function PickAmountToBuy({ amount, setAmount }) {
    return (
        <div className='tobuysetAmount' style={{height: 'min-content'}}>
            <div className='tobuysetAmountContainer'>
                <span className="tobuyamountButtonLeft" onClick={()=>{setAmount(value => value === 1 ? 1 : value -1)}}>{'-'}</span>
                <p>{amount}</p>
                <span className="tobuyamountButtonRight" onClick={()=>{setAmount(value => value +1)}}>{'+'}</span>
            </div>
        </div>
    )
}
