import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

//Layout Components
import Layout from '../components/layout/Layout'
import SolidBackground from '../components/blocks/SolidBackground'

//Content Components
import SubPageTitle from '../components/elements/SubPageTitle'
import Products from '../components/elements/shopProduct/Products'
import CartIcon from '../components/elements/shopProduct/CartIcon'

//SEO
import { Seo } from "../components/seo/Seo"


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
   
                <motion.div 
                    style={{width:'150px', height: '3rem', position: 'fixed', top: '1rem', right:0, zIndex:'99999', background:'red'}}
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
        <Seo title="Buy Our Hair Care Products | Wayne Anthonys Barbers" />
    )
}