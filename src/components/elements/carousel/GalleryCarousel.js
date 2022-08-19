import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

//Components
import Button from '../../button/Button'

//Styles
import { container } from '../carousel/gallerycarousel.module.css'

export default function GalleryCarousel() {

    const [page, setPage] = useState(0);

    const images = [
        "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
        "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
        "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
    ];
    
    const paginate = newPage => {
        if (newPage < 0) {
          setPage(images.length - 1);
        } else if (newPage > images.length - 1) {
          setPage(0);
        } else {
          setPage(newPage);
        }
      };

  return (
    <div className={ container }>
        <motion.div
            key="previous"
            onClick={ () => paginate(page - 1) }
        >
            <Button text="p"/>
        </motion.div>
        <AnimatePresence exitBeforeEnter>
            <motion.div
                key={ page }
                initial={{ opacity: 0, scale: .9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: .9 }}
            >
                <img src={ images[page] } alt="" />
            </motion.div>
        </AnimatePresence>
        <motion.div
            key="next"
            onClick={ () => paginate(page + 1) }
        >
            <Button text="n"/>
        </motion.div>
    </div>
  )
}
