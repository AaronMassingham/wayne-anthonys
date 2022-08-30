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
                    voucherGuid
                    sku
                    productImage {
                        gatsbyImage(
                            width: 500
                            layout: FULL_WIDTH
                            fit: COVER
                            placeholder: TRACED_SVG
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