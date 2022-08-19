import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

//Components
import Button from '../../button/Button'
import Modal from '../modal/Modal'

//Image
import head from '../../../images/transplants.svg'

//Styles
import { transplants } from '../transplants/transplants.module.css'

export default function Transplants() {

  //Modal State
  const [modal, setModal] = useState(false);

  const toggleView = () => {
    setModal(true)
  };

  return (
    <>
      <div className={`flex-center ${ transplants }`}>
          <img src={ head } alt=""/>
          <h2 className='fancy'>Hair Transplants</h2>
          <p>Now offering advice and guidance for those taking the steps to receive hair transplants.</p>
          <span 
            onClick={ toggleView } 
            onKeyDown={ toggleView } 
            role="button" 
            tabIndex={ 0 }
          >
          <Button text="Find out more"/>
          </span>
      </div>
      <AnimatePresence>
          { modal && (
              <Modal setModal={ setModal }>
                  <h2>Hair Transplants</h2>
                  <span>{"("}Follicular Unit Extraction{")"} Technique</span>
                  <p>FUE hair transplant in Turkey is the advanced technology option compared to FUT.</p>
                  <h3>How it works</h3>
                  <p>Individual grafts that contain strands of hair are removed from the back and side of the head with 0.6-1.2 mm mini-punches using special tipped micro-engines under local anaesthesia and transplanted into the recipient area.</p>
                  <p>Today FUE technique is preferred in most of the hair transplant procedures because it does not involve a surgical operation, it is a easily decided on technique. There is no cut and stitches on the extraction or scarring and surgical pain is minimized. Through this method, extracted grafts can be used in hair implants as well as beard transplant.</p>
                  <h3>Recovery</h3>
                  <p>After your FUE hair transplant procedure is performed by our partner specialists, the results will be natural and dense. Since no suture removal is required, recovery time is approximately 7 days.</p>
                  <p>Lifelong growing hair will change your appearance in the most positive way.</p>
                  <a target="_blank" rel="noreferrer" href='https://www.drkaraaltinhair.com/'>
                    <Button text="Find out more"/>
                  </a>
              </Modal>
          ) }
      </AnimatePresence>
    </>
  )
}
