import React from 'react'

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

//Styles 
import { cartPrompt } from './productblock.module.css'

export default function CartIcon() {

  return (
    <div className={ cartPrompt }>
      <button>
        <FontAwesomeIcon icon={ faCartShopping }/>
      </button>
      <div>
        <a class="snipcart-checkout">View Cart</a>
      </div>
    </div>
  )
}
