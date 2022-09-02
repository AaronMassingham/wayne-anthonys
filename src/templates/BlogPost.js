import React from 'react'
import { Link, graphql, Script, ScriptStrategy } from "gatsby"

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

//Layout Components
import Layout from '../components/layout/Layout'
import SolidBackground from '../components/blocks/SolidBackground'

//components
import Button from '../components/button/Button'

//SEO
import { SEO } from '../components/seo/seo'

export default function BlogPost({ data }) {

    const post = data.wpPost

    const styles = {
        lineHeight: .85,
        marginTop: '2rem'
    }

    return (
        <Layout>
            <Script src="https://platform.twitter.com/widgets.js" strategy={ScriptStrategy.idle} />
            <SolidBackground>
                <span>Posted <em>{ post.date }</em></span>
                <h1 className='small' style={styles}>{ post.title }</h1>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                <div className='bdr-tb-solid flex-between' style={{padding: '1rem'}}>
                    <Link to="/blog">
                        <Button text="Back to posts" hasIcon>
                            <span>
                                <FontAwesomeIcon icon={ faChevronLeft }/>
                            </span>
                        </Button>
                    </Link>
                    <a  
                        target="_blank" 
                        rel="noreferrer"
                        href={`https://twitter.com/intent/tweet?button_hashtag=share&ref_src=twsrc%5Etfw`}
                        className="twitter-hashtag-button" 
                        data-show-count="false">Tweet #share
                    </a>
                </div>
                
            </SolidBackground>
        </Layout>
    )
}

export const query = graphql`
    query ($slug: String!) {
        wpPost(slug: {eq: $slug}) {
            slug
            title
            date(formatString: "DD MMMM, YYYY")
            content
        }
    }
  `

  export function Head({ data }) {
    const post = data.wpPost
    return (
      <SEO title={`Blog Post | ${ post.title }`} />
    )
  }