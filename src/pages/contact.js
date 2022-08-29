import React from 'react'

//SEO
import { SEO } from "../components/seo/seo"

//Layout Components
import Layout from '../components/layout/Layout'
import SolidBackground from '../components/blocks/SolidBackground'

//Content Components
import SubPageTitle from '../components/elements/SubPageTitle'
import ContactForm from '../components/forms/ContactForm'
import Map from '../components/elements/map/Map'

export default function Contact() {

  return (
    <Layout>
      <SolidBackground>
        <SubPageTitle
          wingedText="It's time to make"
          fancyText="Contact"
        />
      </SolidBackground>
      <SolidBackground>
        <div className='constrained-width'>
            <h2 className='withBorders'>Drop an Email</h2>
        </div>
        <ContactForm/>
      </SolidBackground>
      <SolidBackground>
        <div className='constrained-width'>
            <h2 className='withBorders'>Where we at?</h2>
        </div>
        <Map/>
      </SolidBackground>
    </Layout>
  )
}

export function Head() {
  return (
    <SEO title="Get In Touch With Us | Wayne Anthonys Barbers" />
  )
}