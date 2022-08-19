import React, { useState } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

//Components
import Modal from '../modal/Modal'

//Styles
import { product, content, imageContainer, shopModal } from '../shopProduct/productblock.module.css'
import { AnimatePresence } from 'framer-motion';

export default function ProductBlock({ 
    sku, 
    productName, 
    productPrice, 
    productSize, 
    productDescription, 
    productImage 
}) {
 

    // Create excerpt from productDescription
    //const more = <span onClick={ () => setModal(true) }>More</span>
    const str = productDescription.substring(0, 150) + '...';

    // Get image helper
    const image = getImage(productImage)

    //Modal State
    const [modal, setModal] = useState(false);
    
    return (
        <div className={ product }>
            <div className={ content }> 

                <div className={ imageContainer }>  
                    <GatsbyImage objectPosition="50% 50%" image={ image } alt={`image of ${ productName }`}/>
                    { productSize ? <span>{ productSize }</span> : '' } 
                </div>

                <h4>{ productName }</h4>
                <div dangerouslySetInnerHTML={{ __html: str }} />

                <div className='flex-center-row bdr-b-solid'>
                    <h4 className='chonky'>£{ productPrice }</h4>
                    <button 
                        className="snipcart-add-item productButton"
                        
                        data-item-id={ sku }
                        data-item-price={ productPrice } 
                        data-item-url="/" 
                        data-item-name={ productName }  
                    >
                        Add to cart
                    </button>
                    <button className='productButton' style={{marginLeft: 'auto'}} onClick={ () => setModal(true) }>More Info</button>
                </div>
                   
            </div>
            <AnimatePresence>
                { modal && (
                    <Modal setModal={ setModal }>
                        <div className={ shopModal }>
                            <div>
                                <GatsbyImage objectPosition="50% 50%" image={ image } alt={`image of ${ productName }`}/>
                            </div>
                            <div>
                                <h3>{ productName }</h3>
                                <div dangerouslySetInnerHTML={ { __html: productDescription } } /> 
                                <button 
                                    className="snipcart-add-item"
                                    data-item-id={ sku }
                                    data-item-price={ productPrice }
                                    data-item-url="/" 
                                    data-item-name={ productName }  
                                >
                                    Add this item to your cart
                                </button>
                            </div>
                        </div>
                    </Modal>
                ) }
            </AnimatePresence>
            
        </div>
    ) 
}

