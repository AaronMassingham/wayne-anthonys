import React from 'react'

import { title, small, large, fancy } from '../elements/titles.module.css'

export default function SubPageTitle( { largeText, wingedText, fancyText } ) {
  return (

    <h1 className={ `text-center ${ title }` }>

      {largeText ? <span className={ large }>{ largeText }</span> : null}

      {wingedText ? <span className={ `${ small } withBorders ` }>{ wingedText }</span> : null}

      {fancyText ? <span className={ `fancy ${ fancy }` } data-before={ fancyText }>{ fancyText }</span> : null}

    </h1>

  )
}
