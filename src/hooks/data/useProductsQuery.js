import { useStaticQuery, graphql } from "gatsby"

export const useProductsQuery = () => {

    const products = useStaticQuery(graphql`
    query {
        wpPage(slug: {eq: "products"}) {
            id
            shopProducts {
                product {
                    productDescription
                    productName
                    productSize
                    productPrice
                    sku
                    productImage {
                        gatsbyImage(
                            width: 500
                            layout: CONSTRAINED
                            fit: COVER
                            placeholder: BLURRED
                            formats: AUTO
                            cropFocus: CENTER
                        )
                    }
                }
            }
        }
    }
      
`)
    return products
}