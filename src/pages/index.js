import React from 'react'
import { Link } from 'gatsby'

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandScissors, faScissors } from '@fortawesome/free-solid-svg-icons'

//Components > Layout Blocks
import Layout from '../components/layout/Layout'
import FullBackground from '../components/blocks/FullBackground'
import SolidBackground from '../components/blocks/SolidBackground'

//Components > Elements
import Button from '../components/button/Button'
import HomeHero from '../components/elements/HomeHero'
import InstagramFeed from '../components/feeds/InstagramFeed'
import Transplants from '../components/elements/transplants/Transplants'

export default function Index() {

  return (
    <Layout>
      
      <FullBackground>
          <HomeHero 
            wingedText="Award Winning"
            largeText="Wayne Anthony"
            fancyText="Barbershop"
          />
          <div className='flex-center-row gap'>
            <a target="_blank" rel="noreferrer" href='https://booksy.com/en-gb/40645_wayne-anthonys-executive-barbers_barber-shop_1453453_hipperholme'>
              <Button text="Book Yours" hasIcon>
                <span>
                  <FontAwesomeIcon icon={ faHandScissors }/>
                </span>
              </Button>
            </a>
            <Link to='/services'>
              <Button text="View Prices" hasIcon>
                <span>
                  <FontAwesomeIcon icon={ faScissors }/>
                </span>
              </Button>
            </Link>
          </div>
        </FullBackground>
        <SolidBackground>
          <div className='constrained-width'>
            <h2>A Cut Above the Rest</h2>
            <p>Wayne Anthony's Award Winning Barbershop has a long time reputation for being one of the finest places to get your hair cut as sharp as a razor, your face shaved as smooth as silk or your beard sculpted like a chunk of Michelangelo's marble. Established in 1985, Wayne Anthony's vision has been to re-create that classic 1940's feel the moment you rock up to our front door.</p>
            <p>We strive for a relaxed atmosphere and <Link to='/experience'>experience like no other</Link>, once you're through the door, you'll never want to leave.</p>
          </div>
        </SolidBackground>

        <SolidBackground>
          <InstagramFeed/>
        </SolidBackground>

        <SolidBackground>
          <Transplants/>
        </SolidBackground>

    </Layout>

  )
}
