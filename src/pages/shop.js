import React from 'react'
import { motion } from 'framer-motion'
import { Script, ScriptStrategy } from "gatsby"

//Layout Components
import Layout from '../components/layout/Layout'
import SolidBackground from '../components/blocks/SolidBackground'

//Content Components
import SubPageTitle from '../components/elements/SubPageTitle'
import Products from '../components/elements/shopProduct/Products'
import CartIcon from '../components/elements/shopProduct/CartIcon'

//SEO
import { SEO } from "../components/seo/seo"


export default function shop() {

    const cartPromptAnim = {  
        initial: { 
          x: '150px',
          transition: {
            duration:1
          }
        },
        animate: {
          x: 'calc(150px - 3rem)',
          transition: {
            duration:1
          }
        }
      }
    
    return (
        <Layout>
            <Script src="https://cdn.snipcart.com/themes/v3.0.22/default/snipcart.js" strategy={ScriptStrategy.idle} />
            <motion.div 
                className='cartSlide'
                initial="initial"
                animate="animate"
                exit="initial"
                variants={ cartPromptAnim }
            >
                <CartIcon/>
            </motion.div>
   
            <SolidBackground>
                <SubPageTitle
                wingedText="Products for your dome"
                fancyText="Our Shop"
                />
            </SolidBackground>
            <SolidBackground>
                <div className='products'>
                    <Products/>
                </div>
            </SolidBackground>
        </Layout>
    )
}

export function Head() {
    return (
        <>
            <SEO title="Buy Our Hair Care Products | Wayne Anthonys Barbers" />
            {/*<link href="https://cdn.snipcart.com/themes/v3.0.22/default/snipcart.css" rel="stylsheet"></link>*/}
        </>
    )
}