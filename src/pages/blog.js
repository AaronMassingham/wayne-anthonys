import React from 'react'
import { Link } from 'gatsby'

//Layout Components
import Layout from '../components/layout/Layout'
import SolidBackground from '../components/blocks/SolidBackground'

//Content Components
import SubPageTitle from '../components/elements/SubPageTitle'
import Button from '../components/button/Button'

//Hook
import { useBlogPostQuery } from '../hooks/data/useBlogPostQuery'


export default function Blog() {


    //WP Data
    const data = useBlogPostQuery(); 

    const headerStyles = {
        lineHeight: .85,
        marginTop: '2rem'
    }
    const containerStyles = {
        padding: '4rem 0'
    }
  
  return (
    <Layout>
      <SolidBackground>
        <SubPageTitle
          wingedText="Tips, Tricks and News from"
          fancyText="The Blog"
          
        />
      </SolidBackground>

      <SolidBackground>
      {
        data.allWpPost.edges.map(({ node }) => (
          <div key={ node.id } style={ containerStyles } className='bdr-b-solid'>
            <h2 className='small' style={ headerStyles }>
              <Link to={`/blog/${node.slug}`}>
                { node.title }
              </Link>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <Link to={`/blog/${node.slug}`}>
              <Button text="Read Post"/>
            </Link>
          </div>
        ))
      }
      </SolidBackground>
    </Layout>
  )
}

