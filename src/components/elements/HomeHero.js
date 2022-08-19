import React from 'react'

//Styles
import { title, small, large, fancy } from '../elements/titles.module.css'

export default function HomeHero( {wingedText, largeText, fancyText} ) {
  return (

    <h1 className={`text-center ${ title }`}>
        <span className={`${ small } withBorders`}>{ wingedText }</span>
        <span className={large}>{ largeText }</span>
        <span className={`fancy ${ fancy }`} data-before={ fancyText }>{ fancyText }</span>
        <span className={small}>Est 1985</span>
    </h1>

  )
}
