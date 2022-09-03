import React from 'react'

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

//Layout Components
import Layout from '../components/layout/Layout'
import SolidBackground from '../components/blocks/SolidBackground'

//Content Components
import SubPageTitle from '../components/elements/SubPageTitle'
import ContactForm from '../components/forms/ContactForm'
import Map from '../components/elements/map/Map'

//SEO
import { SEO } from "../components/seo/seo"

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
            <p>LPR Business Park, Halifax Road, Hipperholme, Halifax, HX3 8ER</p>

        </div>
        <Map/>
        <div className='text-center' style={{paddingTop: '2rem'}}>
          <FontAwesomeIcon icon={ faLocationDot }/> <a style={{color:'white'}} target="_blank" rel="noreferrer" href='https://www.google.com/maps/place/Wayne+Anthonys+Executive+Barbers/@53.725962,-1.8180867,17z/data=!3m1!4b1!4m5!3m4!1s0x487be7812a041a41:0x28dfce5b57b9c3c3!8m2!3d53.7259609!4d-1.8160168'>Get Directions</a>
        </div>
      </SolidBackground>
    </Layout>
  )
}

export function Head() {
  return (
    <SEO title="Get In Touch With Us | Wayne Anthonys Barbers" />
  )
}