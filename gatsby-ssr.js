import React from 'react';
import { AnimatePresence } from 'framer-motion';

import Background from './src/components/bodyBackground/Background'

export const wrapPageElement = ({element}) => (
  <>
    <AnimatePresence exitBeforeEnter>
      {element}
      </AnimatePresence>
    <Background/>
  </>
);
