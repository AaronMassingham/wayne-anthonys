import { useStaticQuery, graphql } from "gatsby"

export const useGalleryQuery = () => {

    const data = useStaticQuery(
    graphql`
        query {
            wpPage(slug: {eq: "the-experience"}) {
                experience {
                  galleryImages {
                    gatsbyImage(
                        width: 500
                        layout: CONSTRAINED
                        fit: COVER
                        placeholder: TRACED_SVG
                        formats: AUTO
                        cropFocus: CENTER
                    )
                    sourceUrl
                  }
                }
              }
        }      
    `)
    return data
}