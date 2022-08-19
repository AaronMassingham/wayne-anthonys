import React from 'react'

export default function PriceItem(props) {
  return (

    <>
        <h4>{props.title}<span>From £{props.price}</span></h4>
        <p>{props.details}</p> 
    </>
  )
}
