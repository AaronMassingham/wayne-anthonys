import React from 'react';
import { AnimatePresence } from 'framer-motion';

import Background from './src/components/bodyBackground/Background'

const transitionDelay = 1000;

export const wrapPageElement = ({element}) => (
  <>
    <AnimatePresence exitBeforeEnter>
      {element}
      </AnimatePresence>
    <Background/>
  </>
);

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
  } else {
    const savedPosition = getSavedScrollPosition(location) || [0, 0];
    window.setTimeout(
      () => window.scrollTo(...savedPosition), transitionDelay);
  }
  return false;
};