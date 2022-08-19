import { useStaticQuery, graphql } from "gatsby"

export const useBlogPostQuery = () => {

    const data = useStaticQuery(graphql`
    query {
        allWpPost {
            edges {
                node {
                    id
                    slug
                    title
                    excerpt
                }
            }
        }
    }  
      
`)
    return data
}