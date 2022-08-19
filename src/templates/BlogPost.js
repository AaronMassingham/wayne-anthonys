import React from 'react'
//import { graphql } from "gatsby"

//Layout Components
import Layout from '../components/layout/Layout'
import SolidBackground from '../components/blocks/SolidBackground'


export default function BlogPost({/* data */}) {

    //const post = data.wpPost

    //const styles = {
    //    lineHeight: .85,
    //    marginTop: '2rem'
    //}

    return (
        <Layout>
            <SolidBackground>
                {/*
                <span>Posted <em>{ post.date }</em></span>
                <h1 className='small' style={styles}>{ post.title }</h1>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                */}
                posts
            </SolidBackground>
        </Layout>
    )
}

//export const query = graphql`
//    query ($slug: String!) {
//        wpPost(slug: {eq: $slug}) {
//            slug
//            title
//            date(formatString: "DD MMMM, YYYY")
//            content
//        }
//    }
//  `

