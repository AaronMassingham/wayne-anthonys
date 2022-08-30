import React, { useState } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

//Components
import Modal from '../modal/Modal'

//Styles
import { product, content, imageContainer, shopModal, productInfo, buttons } from '../shopProduct/productblock.module.css'
import { AnimatePresence } from 'framer-motion';

export default function ProductBlock({ 
    sku, 
    productName, 
    productPrice, 
    productSize, 
    productDescription, 
    productImage,
    voucherGuid
}) {


    // Create excerpt from productDescription
    const str = productDescription.substring(0, 100) + '...';

    // Get image helper
    const image = getImage(productImage)

    //Modal State
    const [modal, setModal] = useState(false);

    console.log({voucherGuid})
    
    return (
        <div className={ product }>
            <div className={ content }> 

                <div className={ imageContainer }>  
                    <GatsbyImage objectPosition="50% 50%" image={ image } alt={`image of ${ productName }`}/>
                    { productSize ? <span>{ productSize }</span> : '' } 
                </div>
                <div className={ productInfo }>
                <h4>{ productName }</h4>
                <div dangerouslySetInnerHTML={{ __html: str }} />

                <div className='bdr-b-solid'>
                    <h4 className='chonky'>£{ productPrice }</h4>
                    <div className={ buttons }>
                        <button 
                            className="snipcart-add-item productButton"
                            
                            data-item-id={ sku }
                            data-item-price={ productPrice } 
                            data-item-url="/shop" 
                            data-item-name={ productName }  
                            data-item-file-guid={ voucherGuid }
                        >
                            Add to cart
                        </button>
                        <button className='productButton' onClick={ () => setModal(true) }>More Info</button>
                    </div>
                </div>
                </div>
            </div>
            <AnimatePresence>
                { modal && (
                    <Modal setModal={ setModal }>
                        <div className={ shopModal }>
                            <div style={{ maxWidth:500 }}>
                                <GatsbyImage objectPosition="50% 50%" image={ image } alt={`image of ${ productName }`}/>
                            </div>
                            <div>
                                <h3>{ productName }</h3>
                                <div dangerouslySetInnerHTML={ { __html: productDescription } } /> 
                                <button 
                                    className="snipcart-add-item productButton"
                                    data-item-id={ sku }
                                    data-item-price={ productPrice }
                                    data-item-url="/shop" 
                                    data-item-name={ productName }  
                                    data-item-file-guid={voucherGuid && voucherGuid}
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

