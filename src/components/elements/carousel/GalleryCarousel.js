import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

//Components
import Button from '../../button/Button'

//Styles
import { container } from '../carousel/gallerycarousel.module.css'

//Hooks
import { useGalleryQuery } from '../../../hooks/data/useGalleryQuery'

export default function GalleryCarousel() {

    const [page, setPage] = useState(0);

    //WP Product Data
    const data = useGalleryQuery();
    //console.log(data)

    let images = data.wpPage.experience.galleryImages.map(function(item) {
      return item.sourceUrl
    });

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
              style={{width:'100%'}}
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
