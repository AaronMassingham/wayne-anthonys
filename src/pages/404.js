import React from "react"
import { Link } from 'gatsby'

//Block Components
import SolidBackground from "../components/blocks/SolidBackground"

//Layout Components
import Layout from '../components/layout/Layout'

//SEO
import { SEO } from "../components/seo/seo"

export default function NotFoundPage() {
  return (
    <Layout>
      <SolidBackground>
          <div className='constrained-width flex-center-xy'>
            <h1>Where are you heading?</h1>
            <p>You're seeing this 404 because the page you're looking for doesn't exist</p>
            <p>Head back to the <Link to='/'>homepage</Link>.</p>
          </div>
        </SolidBackground>

    </Layout>
  )
}

export function Head() {
  return (
    <SEO title="Oops! 404, Page Not Found | Wayne Anthonys Barbers" />
  )
}