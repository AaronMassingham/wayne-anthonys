import React from 'react';
import { AnimatePresence } from 'framer-motion';

import Background from './src/components/bodyBackground/Background'

//const transitionDelay = 1000;

export const wrapPageElement = ({element}) => (
  <>
    <AnimatePresence exitBeforeEnter>
      {element}
      </AnimatePresence>
    <Background/>
  </>
);
