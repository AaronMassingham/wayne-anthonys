import { useStaticQuery, graphql } from "gatsby"

export const useServicesQuery = () => {

    const services = useStaticQuery(graphql`
    query {
        wpPage(slug: {eq: "cuts-shaves"}) {
            slug
            services {
                haircutsServices {
                    cutsDescription
                    cutsName
                    cutsPrice
                }
                shavesServices {
                    shavesDescription
                    shavesName 
                    shavesPrice
                }
            }
        }
    }
      
`)
    return services
}