import React from 'react'

//Layout Components
import Layout from '../components/layout/Layout'
import SolidBackground from '../components/blocks/SolidBackground'

//Content Components
import SubPageTitle from '../components/elements/SubPageTitle'
import Products from '../components/elements/shopProduct/Products'

//SEO
import { Seo } from "../components/seo/Seo"

export default function shop() {
    
    return (
        <Layout>
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

export const Head = () => (
    <Seo title="Buy Our Hair Care Products | Wayne Anthonys Barbers" />
  )