import React from 'react'

//Layout Components
import Layout from '../components/layout/Layout'
import SolidBackground from '../components/blocks/SolidBackground'

//Content Components
import SubPageTitle from '../components/elements/SubPageTitle'
import Social from '../components/social/Social'
import PokerNights from '../components/elements/pokernights/PokerNights'
import PokerPriceTable from '../components/elements/pokernights/PokerPriceTable'
import GalleryCarousel from '../components/elements/carousel/GalleryCarousel'

//SEO
import { SEO } from "../components/seo/seo"

export default function Experience() {
    
  return (
    <Layout>
      <SolidBackground>
        <SubPageTitle
          wingedText="The Wayne Anthony"
          fancyText="Experience"
          
        />
      </SolidBackground>
      <SolidBackground>
        <div className='constrained-width'>
          <h2 className='withBorders'>It's the 1940s</h2>
          <p>Our aim is to create the character of a retro 1940s “one stop grooming shop” that captures the essence of old fashioned traditional customer service and values that are disappearing from the modern day barber shop at affordable prices.</p>
          <p>Come and enjoy a friendly, relaxing and spacious environment where you can put your feet up on our Chesterfield sofas, read the papers, enjoy a gourmet coffee, whiskey or brandy, and make use of our free WIFI while you wait for your haircut or wet shave experience.</p>
        </div>
      </SolidBackground>

      <SolidBackground>
        <div className='constrained-width'>
          <h2 className='withBorders'>Authentic Experience</h2>
        </div>
        <GalleryCarousel/>
      </SolidBackground>

      <SolidBackground>
        <PokerNights/>
        <div className='constrained-width'>
          <h4 className='fancy'>"Gentlemen, it's poker night over at Wayne Anthonys!"</h4>
          <p>We can offer you and up to 9 of your friends the unique experience of a gentlemans poker evening in the relaxed, comfortable and 40's retro environment of a traditional barbers shop with a distinctive twist!</p>
        </div>
        <PokerPriceTable/>
      </SolidBackground>

      <SolidBackground>
        <div className='constrained-width'>
          <h3 className='withBorders'>Wayne Anthony</h3>
          <h4 style={{paddingTop: '1rem'}} className='fancy'>Wayne Anthony has 30 years experience as a barber and salon proprietor of repute.</h4>
          <p>Having served a 5 year apprenticeship, Wayne kicked off his own business and over years has accumulated over 50 major hairdressing championship awards while competing all over the UK, including the British Championships. He also trained with the British World Cup squad and the world renowned “Constantino Brothers”.</p>
        </div>
        <div className='bdr-tb-solid' style={{margin: 'auto', textAlign:'center', maxWidth: '400px',marginTop:'4rem', fontSize:'1.5rem', padding: '1rem 0'}}>
        <h4 style={{paddingBottom: '1rem'}}>Follow Wayne on Social Media</h4>
          <Social/>
        </div>
      </SolidBackground>
    </Layout>
  )
}

export function Head() {
  return (
    <SEO title="The Wayne Anthony Experience | Wayne Anthonys Barbers" />
  )
}
