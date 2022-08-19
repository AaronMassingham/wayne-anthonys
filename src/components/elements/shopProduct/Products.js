import React from 'react'
import ProductBlock from './productBlock'

//Hook
import { useProductsQuery } from '../../../hooks/data/useProductsQuery'

export default function Products() {

    //WP Product Data
    const products = useProductsQuery();

    return (

        <>
            {products.wpPage.shopProducts.product.map((product) => (
                <ProductBlock 
                    key={product.sku}
                    {...product}
                />
            ))}
        </>

    )
}