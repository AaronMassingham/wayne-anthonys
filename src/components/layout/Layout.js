import React from "react"

//Components
//import Header from "../header/Header"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import SolidBackground from "../blocks/SolidBackground"

//Styles
import '../../styles/style.css'


const Layout = ({ children }) => {

  return (
      <>
        <Header />
        <main>
          { children }
          <SolidBackground>
            <Footer/>
          </SolidBackground>
        </main>
      </>

  )
}

export default Layout