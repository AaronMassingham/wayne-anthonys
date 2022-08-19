import React from 'react'

//Style
import { container } from '../pokernights/pokerblock.module.css'

export default function PokerPriceBlock( { 
    tier, 
    price, 
    prize, 
    extraInfo, 
    children 
} ) {

    let lowercase = tier.toLowerCase()

    return (
        <div className={` ${ container } ${ tier }` }>
            <h3 className={`fancy ${ lowercase } `}>{ tier }</h3>
            <span>{ extraInfo }</span>
            <div>
                <h4>
                    <span className='chonky primaryColour'>10 People</span>
                </h4>
                £{ price } per person
                
            </div>
            <div className='bdr-tb-solid'>
                <ul>{ children }</ul>
            </div>
            <div className='chonky'>
                <h4>
                    Prize Fund <span className={ lowercase }>£{ prize }</span>
                </h4>
            </div>
        </div>
    )
}
