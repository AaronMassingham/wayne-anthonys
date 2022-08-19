import React from 'react'
import PokerPriceBlock from './PokerPriceBlock'

import { container } from '../pokernights/pokertable.module.css'

export default function PokerPriceTable() {
  return (
    <div className={ container }>
      <PokerPriceBlock
      tier="Silver"
      price="30"
      prize="100">
        <li>Host Service</li>
        <li>Nibbles</li>
        <li>5 Beers Each</li>
      </PokerPriceBlock>
      <PokerPriceBlock
      tier="Platinum"
      price="75"
      prize="200"
      extraInfo="Lounge Suits Please!">
        <li>Same as Gold+</li>
        <li>Female Burlesque Hostess</li>
        <li>Canapés</li>
      </PokerPriceBlock>
      <PokerPriceBlock
      tier="Gold"
      price="50"
      prize="150">
        <li>Same as Silver+</li>
        <li>Brandy</li>
        <li>Cigar Each</li>
      </PokerPriceBlock>

    </div>
  )
}
