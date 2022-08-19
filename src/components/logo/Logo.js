import React from 'react'

import { logo } from '../logo/logo.module.css'

export default function Logo() {
  return (
    <div className={ logo }>
      <svg viewBox="0 0 500 70"><path d="M164 69.7v-.3c.4 0 .6-.1.8-.1.2-.1.3-.4.3-.7v-6.1c0-.4-.1-.6-.4-.7-.1-.1-.4-.1-.7-.1v-.3h7.2v2.5h-.3c-.2-.8-.4-1.4-.8-1.7-.4-.3-1.1-.4-2.1-.4-.4 0-.6 0-.7.1-.1.1-.2.2-.2.5v2.9c.7 0 1.2-.1 1.4-.4.3-.3.4-.8.6-1.5h.3v4.2h-.3c-.1-.7-.3-1.2-.5-1.5-.3-.3-.8-.4-1.5-.4v3c0 .3.1.4.2.5.1.1.4.1.8.1.8 0 1.4-.2 1.9-.5s.9-.9 1.3-1.8h.3l-.5 2.6H164zm12.9-.3c.3-.1.5-.1.7-.2.2-.1.4-.3.6-.5l2.1-2.8-2.4-3.7c-.2-.3-.3-.5-.5-.6-.1-.1-.3-.2-.5-.2v-.3h4.3v.3c-.4 0-.7.1-.8.1-.1 0-.2.2-.2.3v.2c0 .1.1.2.1.2l1.2 1.8c.7-.9 1.1-1.5 1.2-1.7s.2-.4.2-.6c0-.2-.1-.3-.3-.4-.1 0-.3-.1-.6-.1v-.3h3.1v.3c-.5.1-1 .3-1.3.6-.3.3-1 1.2-2 2.6l2.3 3.5c.3.5.5.8.6.9.1.1.3.2.5.2v.3H181V69c.4 0 .6 0 .7-.1.2-.1.3-.2.3-.3 0-.1 0-.1-.1-.3 0-.1-.1-.2-.2-.4l-1.3-1.9-.5.6c-.4.5-.7.9-.8 1.1-.2.4-.4.6-.4.8 0 .2.1.4.4.5.2 0 .4.1.6.1v.3h-3.1zm13.5.3v-.3c.4 0 .6-.1.8-.1.2-.1.3-.4.3-.7v-6.1c0-.4-.1-.6-.4-.7-.1-.1-.4-.1-.7-.1v-.3h7.2v2.5h-.3c-.2-.8-.4-1.4-.8-1.7-.4-.3-1.1-.4-2.1-.4-.4 0-.6 0-.7.1-.1.1-.2.2-.2.5v2.9c.7 0 1.2-.1 1.4-.4.3-.3.4-.8.6-1.5h.3v4.2h-.3c-.1-.7-.3-1.2-.5-1.5-.3-.3-.8-.4-1.5-.4v3c0 .3.1.4.2.5.1.1.4.1.8.1.8 0 1.4-.2 1.9-.5s.9-.9 1.3-1.8h.3l-.5 2.6h-7.1zm19.1-8.4c.5.2.8.3.9.3.2 0 .3-.1.4-.2.1-.1.2-.3.2-.4h.3v3h-.3c-.3-.6-.6-1.1-.9-1.5-.6-.7-1.2-1-2-1s-1.4.4-1.8 1.1c-.3.7-.5 1.7-.5 2.9 0 .9.1 1.6.3 2.2.4 1.1 1.1 1.6 2.1 1.6.6 0 1.2-.2 1.8-.5.3-.2.7-.5 1.1-1l.4.3c-.5.5-.9.9-1.3 1.2-.7.4-1.4.7-2.2.7-1.2 0-2.3-.4-3.1-1.1-.9-.8-1.4-1.9-1.4-3.3s.4-2.5 1.3-3.3c.8-.8 1.8-1.2 3-1.2.6-.1 1.1 0 1.7.2zm11.5-.1v.3c-.5 0-.8.1-1 .2-.2.1-.2.4-.2.9v4.2c0 .6.1 1.1.2 1.5.3.6.8 1 1.6 1 1 0 1.6-.4 1.9-1.1.2-.4.3-.9.3-1.7v-3.8c0-.5-.1-.8-.2-.9-.2-.2-.5-.3-1-.3v-.3h2.7v.3c-.4.1-.7.2-.8.3-.1.1-.2.4-.2.8v4c0 1.1-.3 1.9-.8 2.5s-1.3.9-2.4.9c-1.4 0-2.4-.4-2.9-1.3-.3-.5-.4-1.1-.4-1.8v-4.2c0-.5-.1-.8-.2-.9-.1-.1-.4-.2-.8-.3v-.3h4.2zm9.5 0h7.5v2.5h-.4c-.1-.9-.5-1.5-1-1.8-.3-.2-.8-.3-1.4-.3v6.6c0 .5.1.8.2.9.2.2.5.2 1 .2v.3H232v-.3c.5 0 .8-.1 1-.2.2-.2.2-.5.2-.9v-6.6c-.6 0-1.1.1-1.4.3-.6.3-.9.9-1 1.8h-.4l.1-2.5zm12.7 8.2c.4 0 .6-.1.8-.1.3-.1.4-.4.4-.8v-6.1c0-.4-.1-.6-.4-.7-.1-.1-.4-.1-.8-.1v-.3h4.3v.3c-.4 0-.7.1-.8.1-.2.1-.4.4-.4.8v6.1c0 .4.1.6.3.7.2.1.5.2.9.2v.3h-4.3v-.4zm13.6-8.2v.3c-.4 0-.7.1-.9.1-.1.1-.2.2-.2.4v.2c0 .1 0 .1.1.2l2 4.7 1.6-4.3c0-.1.1-.2.1-.3 0-.2.1-.3.1-.4 0-.2-.1-.4-.2-.4-.1-.1-.4-.1-.9-.1v-.3h2.6v.3c-.3 0-.5.1-.7.3-.2.1-.3.4-.4.8l-2.8 7.4h-.3l-3.2-7.5c-.1-.3-.3-.5-.4-.7-.1-.1-.3-.2-.6-.2v-.3h4.1zm9.3 8.5v-.3c.4 0 .6-.1.8-.1.2-.1.3-.4.3-.7v-6.1c0-.4-.1-.6-.4-.7-.1-.1-.4-.1-.7-.1v-.3h7.2v2.5h-.3c-.2-.8-.4-1.4-.8-1.7-.4-.3-1.1-.4-2.1-.4-.4 0-.6 0-.7.1-.1.1-.2.2-.2.5v2.9c.7 0 1.2-.1 1.4-.4.3-.3.4-.8.6-1.5h.3v4.2h-.3c-.1-.7-.3-1.2-.5-1.5-.3-.3-.8-.4-1.5-.4v3c0 .3.1.4.2.5.1.1.4.1.8.1.8 0 1.4-.2 1.9-.5s.9-.9 1.3-1.8h.3l-.5 2.6h-7.1zm20.6-.3c.3 0 .6-.1.7-.1.2-.1.4-.4.4-.7v-6.1c0-.4-.1-.6-.3-.7-.1-.1-.4-.1-.7-.1v-.3h3.8c.7 0 1.4.1 1.8.3.9.3 1.4.9 1.4 1.8 0 .5-.2.9-.6 1.2-.4.3-.8.5-1.2.6v.1c.5.1.9.2 1.2.5.7.4 1 1 1 1.7s-.3 1.3-1 1.7c-.6.4-1.5.6-2.5.6h-4v-.5zm4.6-4.8c.3-.3.4-.7.4-1.4 0-.5-.1-.9-.3-1.2-.2-.3-.5-.5-1-.5-.3 0-.4 0-.5.1-.1.1-.2.2-.2.5V65c.8 0 1.3-.1 1.6-.4zm-1.5 4.4c.1.2.3.3.6.3.6 0 1-.2 1.2-.5.2-.3.4-.8.4-1.4 0-.9-.3-1.5-.8-1.8-.3-.2-.8-.3-1.5-.3v3.1c0 .4.1.5.1.6zm9.7.4c.3 0 .5-.2.7-.4.1-.2.3-.5.5-1.1l2.8-6.9h.3l2.8 6.6c.3.7.5 1.2.7 1.4.2.2.4.3.7.3v.3h-4v-.3c.4 0 .7-.1.8-.1.1-.1.2-.2.2-.4 0-.1 0-.2-.1-.4 0-.1-.1-.3-.2-.4l-.3-.8h-2.8c-.2.5-.3.8-.4 1-.1.3-.2.6-.2.7 0 .2.1.3.4.4.1 0 .4.1.6.1v.3h-2.5v-.3zm4.7-2.7-1.2-2.9h-.1l-1.1 2.9h2.4zm8.8 2.7c.4 0 .7-.1.9-.2.2-.1.2-.4.2-.9v-5.6c0-.5-.1-.8-.3-.9-.1-.1-.4-.2-.8-.2v-.3h4c.8 0 1.5.1 2 .3 1 .4 1.5 1 1.5 1.9 0 .7-.3 1.2-.8 1.6-.4.3-.8.5-1.3.6l2.6 3.6c.1.1.1.2.2.2s.2.1.3.1v.3H319l-2.9-3.9v2.5c0 .4.1.7.2.9.1.2.4.2.9.3v.3H313v-.6zm4.9-4.4c.3-.2.5-.7.5-1.5 0-.5-.1-.9-.2-1.2-.2-.5-.7-.7-1.3-.7-.3 0-.5 0-.7.1-.1.1-.2.2-.2.4v3.2c1 .1 1.5-.1 1.9-.3zm8.7 4.4c.3 0 .6-.1.7-.1.2-.1.4-.4.4-.7v-6.1c0-.4-.1-.6-.3-.7-.1-.1-.4-.1-.7-.1v-.3h3.8c.7 0 1.4.1 1.8.3.9.3 1.4.9 1.4 1.8 0 .5-.2.9-.6 1.2-.4.3-.8.5-1.2.6v.1c.5.1.9.2 1.2.5.7.4 1 1 1 1.7s-.3 1.3-1 1.7c-.6.4-1.5.6-2.5.6h-4v-.5zm4.6-4.8c.3-.3.4-.7.4-1.4 0-.5-.1-.9-.3-1.2-.2-.3-.5-.5-1-.5-.3 0-.4 0-.5.1-.1.1-.2.2-.2.5V65c.8 0 1.3-.1 1.6-.4zm-1.5 4.4c.1.2.3.3.6.3.6 0 1-.2 1.2-.5.2-.3.4-.8.4-1.4 0-.9-.3-1.5-.8-1.8-.3-.2-.8-.3-1.5-.3v3.1c.1.4.1.5.1.6zm9.7.7v-.3c.4 0 .6-.1.8-.1.2-.1.3-.4.3-.7v-6.1c0-.4-.1-.6-.4-.7-.1-.1-.4-.1-.7-.1v-.3h7.2v2.5h-.3c-.2-.8-.4-1.4-.8-1.7-.4-.3-1.1-.4-2.1-.4-.4 0-.6 0-.7.1-.1.1-.2.2-.2.5v2.9c.7 0 1.2-.1 1.4-.4.3-.3.4-.8.6-1.5h.3v4.2h-.3c-.1-.7-.3-1.2-.5-1.5-.3-.3-.8-.4-1.5-.4v3c0 .3.1.4.2.5.1.1.4.1.8.1.8 0 1.4-.2 1.9-.5s.9-.9 1.3-1.8h.3l-.5 2.6h-7.1zm12.9-.3c.4 0 .7-.1.9-.2.2-.1.2-.4.2-.9v-5.6c0-.5-.1-.8-.3-.9-.1-.1-.4-.2-.8-.2v-.3h4c.8 0 1.5.1 2 .3 1 .4 1.5 1 1.5 1.9 0 .7-.3 1.2-.8 1.6-.4.3-.8.5-1.3.6l2.6 3.6c.1.1.1.2.2.2s.2.1.3.1v.3h-2.6l-2.9-3.9v2.5c0 .4.1.7.2.9.1.2.4.2.9.3v.3h-4.2v-.6zm4.8-4.4c.3-.2.5-.7.5-1.5 0-.5-.1-.9-.2-1.2-.2-.5-.7-.7-1.3-.7-.3 0-.5 0-.7.1-.1.1-.2.2-.2.4v3.2c1 .1 1.6-.1 1.9-.3zm8.9 1.8h.4c.2.9.5 1.6 1 2 .4.4.9.6 1.5.6s.9-.1 1.2-.4c.2-.3.3-.6.3-.9 0-.4-.1-.7-.4-.9-.2-.2-.5-.4-1-.6l-.8-.4c-.8-.4-1.3-.8-1.7-1.2-.3-.4-.5-.9-.5-1.5s.2-1.2.6-1.7c.4-.5 1.1-.8 2-.8.4 0 .9.1 1.3.2s.7.2.7.2c.1 0 .2 0 .3-.1.1-.1.1-.2.1-.3h.4v2.7h-.3c-.2-.6-.4-1.2-.9-1.6-.4-.5-.9-.7-1.5-.7-.4 0-.7.1-1 .3-.2.2-.4.5-.4.8 0 .4.1.7.3.9.2.2.7.5 1.5.9l.9.5c.4.2.7.4 1 .7.5.5.7 1.1.7 1.7 0 .6-.2 1.2-.7 1.8-.5.6-1.3.8-2.3.8-.2 0-.5 0-.7-.1-.3 0-.5-.1-.7-.2l-.2-.1H366.8c-.1 0-.2 0-.3.1 0 .1-.1.2-.1.3h-.4v-3zM78.8 53.9c-2.1 0-3.8-.8-5.1-2.5-1.1-1.5-1.6-3.5-1.6-6.1 0-3.1 1-6.9 3.1-11.3-6.6-.4-9.8-3.7-9.8-9.9 0-3.5 1.1-7.3 3.3-11.3.8-1.5 1.6-2.9 2.6-4.2 1-1.3 2-2.5 3.1-3.5C77.3 2.4 80.2 1 83.2 1c5.6 0 8.4 3 8.4 9.1 0 1.6-.3 3.3-.8 5.1-.5 1.8-1.4 3.7-2.6 5.7-1.1 2-2.3 3.9-3.6 5.8-1.3 1.9-2.5 3.8-3.7 5.8 2.1-.4 4.5-1 7.1-1.9.1 0 .3-.1.5-.1.4 0 .5.2.5.5s-.3.5-.8.8c-1.5.5-2.9.9-4.3 1.3s-2.7.6-3.9.8c-2.6 4.6-3.9 8.6-3.9 12.1 0 1.7.3 3.1.8 4.2.8 1.3 1.8 2 3.2 2 2.5 0 5.4-1.9 8.7-5.7 1.4-1.6 3.7-5.1 6.8-10.5.6-3.7 1.5-6.8 2.5-9.3 1.1-2.6 2.5-3.9 4.3-3.9 1.2 0 1.8.7 1.8 2.1 0 .7-.3 1.7-.8 3-.4.9-.8 1.7-1.3 2.6s-1 1.6-1.5 2.4l-2.5 3.5c-1.1 3-1.6 5.9-1.6 8.9 0 1 .1 1.8.2 2.6.5 3 1.9 4.4 4.1 4.4 5.6 0 11.7-6.4 18.2-19.1 2.3-4.3 3.4-9 3.4-14 0-4.6-1.3-7.9-3.9-9.8-1.1-.9-2.8-1.3-4.8-1.3-2.2 0-3.9.6-4.9 1.9-.4.4-.7.6-1 .6-.3 0-.4-.1-.4-.3 0-.2.1-.4.3-.6 1.5-1.8 4-2.8 7.5-2.8 2 0 3.8.3 5.2 1 4.3 2.1 6.4 6.1 6.4 12 0 4.3-1.2 8.8-3.5 13.3-1.3 2.6-2.7 5-4.2 7.2s-3.1 4.2-4.8 5.9c-4.6 4.9-9.1 7.4-13.5 7.4-3.5 0-5.7-1.5-6.6-4.6-.3-1-.5-2.2-.5-3.5 0-1.2.1-2.4.4-3.7-.9 1.3-1.7 2.5-2.6 3.6-.8 1.1-1.7 2.1-2.6 2.9-3.2 3.7-6.7 5.5-10.1 5.5zm-2.9-21.1c1-1.9 2.1-3.8 3.2-5.7 1.1-1.9 2.1-3.8 3.2-5.7 2.5-4.6 4.1-8.3 4.8-11.2.2-1.2.4-2.3.4-3.2 0-3-1.3-4.5-3.9-4.5-1.9 0-3.9 1-6.2 3-2.5 2.2-4.5 5.1-6.2 8.6-1.8 3.7-2.7 7.1-2.7 10.2 0 5.2 2.4 8 7.4 8.5zM141.1 52c-1 0-1.8-.3-2.5-.9-.9-.8-1.4-2.1-1.4-3.9 0-1.2.2-2.6.6-4.1-1.5 2.6-3.2 4.8-4.8 6.4-1.7 1.6-3.3 2.4-4.6 2.4-1.2 0-2.1-.5-2.8-1.6-.7-1-1.1-2.4-1.1-4.2 0-4.4 1.9-8.9 5.8-13.6.6-.8 1.4-1.5 2.2-2.1.8-.6 1.7-1.2 2.7-1.7 2-1 3.8-1.5 5.7-1.5 2.2 0 4 .7 5.3 2.2.3.3.5.7.5 1.1 0 .8-.4 1.1-1.2.9-.5-1.7-1.5-2.5-3.2-2.5-1.9 0-4.2 1.4-6.8 4.1-.9 1-1.8 2.1-2.6 3.1-.8 1.1-1.6 2.2-2.3 3.4-2 3.3-2.9 6-2.9 8.1 0 1.6.6 2.3 1.8 2.3 1.3 0 2.8-1 4.6-3 1-1.1 1.9-2.5 2.9-4.1 1-1.6 2-3.5 3.1-5.6.5-.9.9-1.6 1.2-2.1.4-.6.7-1 .9-1.2.7-.7 1.6-1.1 2.6-1l1.4.2c.6.1 1.1.2 1.5.1-.4.4-.9 1.1-1.5 2-.6.9-1.2 2.1-1.9 3.5-.8 1.5-1.4 2.9-1.9 4.1-.5 1.2-.8 2.4-1 3.3-.1.5-.2.9-.2 1.3s-.1.7-.1 1.1c0 1.2.3 1.8 1 1.8.9 0 2.2-1 3.8-3l.3-.3 1 .6-.3.4c-2.1 2.7-4 4-5.8 4zm7.2 18c-2.5 0-4.3-.8-5.5-2.4-.5-.8-.8-1.8-.8-3.1 0-1 .1-1.8.4-2.2l1.3-.1c-.3.7-.4 1.5-.4 2.1 0 2.5 1.4 3.7 4.3 3.7 2.5 0 5.1-2 7.8-5.9 1-1.5 2-3.2 3.1-5.3 1-2.1 2.1-4.4 3.1-7.1.7-1.8 1.4-3.5 2.1-5.3.7-1.8 1.3-3.5 2-5.3-1.2 2.1-2.2 3.8-3 5.2-.8 1.3-1.4 2.3-1.7 2.8-2.4 3.2-4.7 4.8-7 4.8-2.5 0-3.8-1.7-3.8-5 0-2.2.5-4.6 1.5-7.1 1.5-3.6 3-7 4.5-10.2.5-1 1.4-1.5 2.6-1.5h3.6c-1.3.9-2.6 2.9-4 5.8-3.2 6.5-4.8 11.1-4.8 13.9 0 1.5.5 2.3 1.6 2.3 2.1 0 4.8-2.9 8-8.6.2-.5.8-1.7 1.8-3.7s2.3-4.8 4-8.3c.5-1 1.4-1.5 2.6-1.5h4.4c-.6.5-1.4 1.3-2.5 2.5-.4.6-.8 1.4-1.3 2.4s-1.1 2.1-1.7 3.5c-.7 1.8-1.7 4.3-2.9 7.4-1.2 3.1-2.7 6.9-4.6 11.2-1 2.3-1.9 4.3-2.8 5.9-.9 1.6-1.8 3-2.6 4-2.4 3.4-5.6 5.1-9.3 5.1zM172 52.4c.9-2.3 2-5 3.4-8.4 1.4-3.3 3-7.1 5-11.5.4-.9.8-1.7 1.2-2.3.4-.6.7-1.1 1-1.4.6-.6 1.5-1 2.5-1h.5c.2 0 .5 0 1 .1h1.4c-1.7 1-4.2 5.5-7.6 13.4.5-.8 1.3-1.6 2.2-2.6.9-.9 2-2 3.3-3.1.8-.8 1.7-1.5 2.7-2.2 1-.7 2.1-1.4 3.3-2 2.7-1.5 4.7-2.3 5.9-2.3.3 0 .5 0 .7.1-.7 1.3-1.4 2.5-2 3.7-.6 1.2-1.2 2.3-1.7 3.4-2.6 5.2-4.1 8.7-4.4 10.7 0 .3-.1.6-.1.9v.8c0 1.2.4 1.8 1.3 1.8 1.4 0 3.1-1.5 5.1-4.4l1 .7c-2.3 3.5-4.7 5.3-7 5.3-2.9 0-4.3-1.5-4.3-4.5 0-2.4 1.5-6.1 4.4-10.9.5-.7.7-1.4.7-1.9 0-.6-.3-.8-.8-.8s-1.1.3-1.9.8c-.8.5-1.7 1.3-2.8 2.3-1.7 1.6-3.3 3.5-4.8 5.8-1.5 2.2-2.9 4.8-4.1 7.6-.3.7-1 1.1-2.1 1.2-1.8.3-2.7.5-3 .7zm33.7-.2c-1.8 0-3.3-.6-4.6-1.7-.7-.6-1.2-1.4-1.5-2.2-.3-.9-.4-1.8-.4-2.9 0-4.2 1.7-8.5 5.2-12.7 2.9-3.5 5.9-5.3 9.1-5.3 1 0 1.9.3 2.7.8.8.6 1.2 1.5 1.2 2.5 0 2.5-1.7 5.1-5 7.6-1 .8-2.4 1.5-4.2 2.1-1.9.6-3.3 1-4.2 1-.6 1.6-1 3.2-1 5 0 3 1.1 4.5 3.3 4.5 2.9 0 5.6-1.9 8.1-5.7l.3-.4 1.2.5-.2.4c-1.1 2.3-2.6 4-4.3 5-1.9 1-3.7 1.5-5.7 1.5zm-1.3-12.1c.8 0 1.8-.3 3.2-.8.8-.3 1.5-.7 2.2-1 .7-.4 1.3-.8 1.9-1.2 2.5-2.1 3.8-4.4 3.8-6.7 0-1-.4-1.5-1.1-1.5-1.3 0-3.2 1.6-5.8 4.8-1.4 1.5-2.8 3.7-4.2 6.4zm32.3-4.4c1.8-2.4 3.4-4.7 5-6.7s3.1-3.8 4.5-5.4c-2.9-3.1-5.4-4.6-7.6-4.6-1.4 0-2.4.6-3.2 1.9-.8 1.3-1.2 2.9-1.2 5-.1 3.1.8 6.4 2.5 9.8zm19.6 4c.3-1.2.7-2.5 1.2-3.8.5-1.3 1.2-2.7 1.9-4 3.9-7.1 7.8-13.5 11.8-19.4.5-.6.7-1.2.7-1.7 0-.6-.4-.9-1.3-.9-2.6 0-6.4 1.7-11.3 5.1-2 1.4-3.8 2.8-5.4 4.2-1.6 1.4-3.2 2.8-4.6 4.3 3.2 4.7 5.5 10.1 7 16.2zm-20.9-2.2c-3.3-5.2-5-10-5-14.6 0-2.6.6-4.7 1.8-6.4 1.2-1.6 2.8-2.4 4.7-2.4 3.5 0 7.3 2.5 11.1 7.5 4.4-4.6 8.8-8.4 13.4-11.6 6.1-4.3 11.1-6.4 15.1-6.4 1.6 0 2.4.3 2.4 1 0 .2-.1.4-.2.7-10.2 18.6-16 31.2-17.2 37.8-.1.6-.2 1.2-.2 1.8-.1.6-.1 1.1-.1 1.5 0 2.9 1.2 4.4 3.5 4.4 2.4 0 5.7-4.5 10-13.6.2-.5.4-.7.8-.8h.1c.2 0 .3.2.3.5s-.1.6-.3 1.1c-1.3 2.6-2.3 4.6-3 6.2-.8 1.5-1.3 2.5-1.5 2.9-1.3 2-2.5 3.5-3.8 4.5-1.3 1-2.5 1.5-3.8 1.5-1.5 0-3-.6-4.4-1.8-1.8-1.6-2.8-3.8-2.9-6.6-1.2-7.6-3.9-14-8.1-19.4-1.5 1.6-3 3.4-4.6 5.5-1.6 2.1-3.3 4.4-5.2 7 2.1 3.4 4.5 6.5 7.2 9.3 2.7 2.9 5.7 5.4 9 7.7.3.2.5.4.5.7 0 .4-.1.6-.4.6-.1 0-.3-.1-.6-.2-1.3-.8-2.6-1.7-4-2.8-1.4-1.1-2.8-2.3-4.3-3.8-1.7-1.6-3.2-3.2-4.7-4.8-1.4-1.6-2.8-3.3-4-5l-2.4 3.7c-1.3 2.1-2.8 4-4.5 5.8-2.5 2.5-4.6 4.1-6.6 4.6-.9.3-1.8.4-2.7.4-1.3 0-2.4-.3-3.3-.8-1.2-.7-1.8-1.8-1.8-3.2 0-1.3.4-2.4 1.2-3.5.9-1.1 2-1.6 3.1-1.6.9 0 1.6.3 2.3 1 .5.6.8 1.3.8 1.9 0 1.2-.4 2.1-1.3 2.8-.7.7-1.5 1-2.5 1-.9 0-1.6-.3-2.3-1 .3 1 1.2 1.5 2.8 1.5 2.4 0 5.2-1.3 8.5-4.6 4.4-4.6 7.1-10 7.1-10zm35.4 14.9c.9-2.3 2-5 3.4-8.4s3-7.1 5-11.5c.4-.9.8-1.7 1.2-2.3.4-.6.7-1.1 1-1.4.6-.6 1.5-1 2.5-1h.5c.2 0 .5 0 1 .1h1.4c-1.7 1-4.2 5.5-7.6 13.4.5-.8 1.3-1.6 2.2-2.6.9-.9 2-2 3.3-3.1.8-.8 1.7-1.5 2.7-2.2 1-.7 2.1-1.4 3.3-2 2.7-1.5 4.7-2.3 5.9-2.3.3 0 .5 0 .7.1-.7 1.3-1.4 2.5-2 3.7-.6 1.2-1.2 2.3-1.7 3.4-2.6 5.2-4.1 8.7-4.4 10.7 0 .3-.1.6-.1.9v.8c0 1.2.4 1.8 1.3 1.8 1.4 0 3.1-1.5 5.1-4.4l1 .7c-2.3 3.5-4.7 5.3-7 5.3-2.9 0-4.3-1.5-4.3-4.5 0-2.4 1.5-6.1 4.4-10.9.5-.7.7-1.4.7-1.9 0-.6-.3-.8-.8-.8s-1.1.3-1.9.8c-.8.5-1.7 1.3-2.8 2.3-1.7 1.6-3.3 3.5-4.8 5.8-1.5 2.2-2.9 4.8-4.1 7.6-.3.7-1 1.1-2.1 1.2-1.8.3-2.7.5-3 .7zm33.3-.5c-3 0-4.4-1.6-4.4-4.9 0-.6.1-1.3.2-2s.3-1.4.6-2.1c2.4-6.5 4.5-11.7 6.1-15.8h-4.4l.8-1.5h4.2l1.6-4.8c.6-1.7 1.1-2.7 1.5-3 .3-.2 1-.3 2.2-.3l2.9.1c-.9.8-1.6 1.7-2 2.8l-2.3 5.3h5.2l-.8 1.5h-5c-.3.7-.6 1.5-.9 2.2-.3.7-.6 1.5-1 2.3-1 2.1-1.8 4.1-2.5 6-.8 2.2-1.5 4-1.9 5.6-.5 1.6-.8 2.8-.9 3.7-.2 2.3.4 3.4 1.8 3.4 1.3 0 2.8-1.4 4.6-4.1l.8 1c-2.1 3-4.3 4.6-6.4 4.6zm7.4.5c1.5-3.6 3.8-8.7 6.7-15.5 2.9-6.7 6.5-14.9 10.7-24.7 0-.1.1-.3.1-.4v-.4c0-.6-.3-1.3-.8-2.1h3.7c1.3 0 1.9.3 1.9.9 0 .3-.1.8-.4 1.5-1.4 3.1-3.2 7.1-5.5 12.2-2.2 5-4.9 11-8 18 .7-1 1.5-2 2.5-3s2-2 3.2-3.1c.8-.8 1.7-1.5 2.7-2.2 1-.7 2.1-1.4 3.3-2 2.7-1.5 4.7-2.3 5.9-2.3.3 0 .5 0 .7.1-.7 1.3-1.4 2.5-2 3.7-.6 1.2-1.2 2.3-1.7 3.4-2.6 5.2-4.1 8.7-4.4 10.7-.1.7-.2 1.3-.2 1.8 0 1.2.5 1.9 1.4 1.9 1.2 0 2.9-1.5 5-4.6l1 .6c-2.4 3.6-4.7 5.5-7 5.5-2.9 0-4.3-1.5-4.3-4.5 0-2.4 1.5-6.1 4.4-10.9.5-.7.7-1.4.7-1.9 0-.6-.3-.8-.8-.8s-1.1.3-1.9.8c-.8.5-1.7 1.3-2.8 2.3-1.7 1.6-3.4 3.6-4.9 5.8-1.5 2.3-2.9 4.9-4.3 7.8-.3.7-1 1.1-2.2 1.1-1.5 0-2.4.2-2.7.3zm32.9-.5c-3.3 0-5-2.1-5-6.2 0-2 .5-4.2 1.4-6.4 1.4-3.3 3.3-6 5.8-8.3 2.5-2.2 4.8-3.3 7-3.3 3.4 0 5.1 2 5.1 6 0 2.1-.5 4.3-1.5 6.6-1.2 2.8-2.9 5.3-5.1 7.5-2.8 2.8-5.3 4.1-7.7 4.1zm1.1-1.5c1 0 2.2-.4 3.3-1.3 1.5-1.1 3.2-3.4 5.1-6.9 2.1-3.8 3.1-6.8 3.1-9.1 0-2.1-.9-3.1-2.6-3.1-1.4 0-2.9.9-4.6 2.6-1.7 1.7-3.1 3.9-4.3 6.5-1.6 3.5-2.4 6.2-2.4 8.3.1 2 .9 3 2.4 3zm11.8 2c.9-2.3 2-5 3.4-8.4s3-7.1 5-11.5c.4-.9.8-1.7 1.2-2.3.4-.6.7-1.1 1-1.4.6-.6 1.5-1 2.5-1h.5c.2 0 .5 0 1 .1h1.4c-1.7 1-4.2 5.5-7.6 13.4.5-.8 1.3-1.6 2.2-2.6.9-.9 2-2 3.3-3.1.8-.8 1.7-1.5 2.7-2.2 1-.7 2.1-1.4 3.3-2 2.7-1.5 4.7-2.3 5.9-2.3.3 0 .5 0 .7.1-.7 1.3-1.4 2.5-2 3.7-.6 1.2-1.2 2.3-1.7 3.4-2.6 5.2-4.1 8.7-4.4 10.7 0 .3-.1.6-.1.9v.8c0 1.2.4 1.8 1.3 1.8 1.4 0 3.1-1.5 5.1-4.4l1 .7c-2.3 3.5-4.7 5.3-7 5.3-2.9 0-4.3-1.5-4.3-4.5 0-2.4 1.5-6.1 4.4-10.9.5-.7.7-1.4.7-1.9 0-.6-.3-.8-.8-.8s-1.1.3-1.9.8c-.8.5-1.7 1.3-2.8 2.3-1.7 1.6-3.3 3.5-4.8 5.8-1.5 2.2-2.9 4.8-4.1 7.6-.3.7-1 1.1-2.1 1.2-1.8.3-2.6.5-3 .7zM383.8 70c-2.5 0-4.3-.8-5.5-2.4-.5-.8-.8-1.8-.8-3.1 0-1 .1-1.8.4-2.2l1.3-.1c-.3.7-.4 1.5-.4 2.1 0 2.5 1.4 3.7 4.3 3.7 2.5 0 5.1-2 7.8-5.9 1-1.5 2-3.2 3.1-5.3 1-2.1 2.1-4.4 3.1-7.1.7-1.8 1.4-3.5 2.1-5.3.7-1.8 1.3-3.5 2-5.3-1.2 2.1-2.2 3.8-3 5.2-.8 1.3-1.4 2.3-1.7 2.8-2.4 3.2-4.7 4.8-7 4.8-2.5 0-3.8-1.7-3.8-5 0-2.2.5-4.6 1.5-7.1 1.5-3.6 3-7 4.5-10.2.5-1 1.4-1.5 2.6-1.5h3.6c-1.3.9-2.6 2.9-4 5.8-3.2 6.5-4.8 11.1-4.8 13.9 0 1.5.5 2.3 1.6 2.3 2.1 0 4.8-2.9 8-8.6.2-.5.8-1.7 1.8-3.7s2.3-4.8 4-8.3c.5-1 1.4-1.5 2.6-1.5h4.4c-.6.5-1.4 1.3-2.5 2.5-.4.6-.8 1.4-1.3 2.4s-1.1 2.1-1.7 3.5c-.7 1.8-1.7 4.3-2.9 7.4-1.2 3.1-2.7 6.9-4.6 11.2-1 2.3-1.9 4.3-2.8 5.9-.9 1.6-1.8 3-2.6 4-2.4 3.4-5.6 5.1-9.3 5.1zm38.8-17.8c-2.3 0-4-.7-5.3-2.1-1-1.2-1.5-2.5-1.5-4.1 0-2.4.7-3.5 2.2-3.5.5 0 1 .2 1.5.6.5.5.7 1 .7 1.6 0 .4-.1.7-.3.9-.6.7-.9 1.5-.9 2.4 0 .9.3 1.6.8 2.1.6.6 1.3.9 2.3.9 1 0 1.8-.3 2.6-1 1-1 1.6-2.3 1.6-4 0-1.5-.4-3.1-1.2-5-.3-.5-.7-1.1-1.1-1.8-.4-.7-.9-1.6-1.5-2.6-.3-.6-.5-1.1-.6-1.7-.1-.6-.2-1.1-.2-1.7 0-1.9.7-3.5 2.1-4.6 1.5-1.2 3.3-1.8 5.6-1.8.6 0 1.3.1 1.9.2.6.1 1.2.4 1.7.8 1 .8 1.6 1.8 1.6 2.9 0 .5-.1 1-.3 1.4-.4 1.2-1.3 1.8-2.7 1.8-1.5 0-2.3-.8-2.3-2.4 0-.5.1-.9.2-1.2.1-.5.6-.9 1.5-1.4-.3-.6-.9-.9-1.8-.9-.8 0-1.3.2-1.7.6-1.1 1-1.6 2.2-1.6 3.7 0 1 .3 2.1.8 3.3.1.2 1 1.6 2.7 4.4 1.1 1.8 1.7 3.4 1.7 4.6 0 2-.9 3.7-2.7 5.3-1.8 1.5-3.7 2.3-5.8 2.3zM23.3 23.9c.6.2.9 1.7 1.1 2.7.3 2.4-.6 4.4-2.6 5.9-2.5 2-4.4 4.3-5.3 7.6-1.1 3.9-4.3 5.9-7.7 5.7-9.4-.9-9.5-12.4-4.5-18.3 2.7-3.2 6.5-2.6 8.3 1.2-.6.5-1.2.9-1.6 1.2.1 1.1.2 2 .3 2.9.5-.2 1-.4 1.5.1-.7 1.2-1.2 2.7-2.1 3.6-1.3 1.4-1.8 3-.7 4.4.3.3.9.4 1.4.6.2-.5.3-.9.5-1.4H10c.4-.9.6-1.6 1-2.2.8-.9 1.9-1.6 2.5-2.5.6-.9 2-1.7.8-3.1-.2-.2.1-.7.1-1l1.2.3c.3-.8.5-1.6.7-2.2-.6-.3-1.6-.5-1.7-.9-.7-1.9-2.3-2.5-4-3.1-3-1.1-5.6-.8-7.3 2C1.8 29.8.6 32.7.2 35.5-1 44 6.5 49.6 14.3 46.3c2.1-1.1 3.1-3.7 4.3-5.7-1.6 3.8-2.1 7.7-1 11.7.1.5-.1 1.2-.4 1.6-.9 1.5-2.9 3.1-2.7 4.5.5 4.1-1.8 9.1 3.5 11.7 0-.4.1-1 .1-1.4h3.4c.1-.5.2-1 .3-1.8-3.7-.1-3.3-2.6-3.3-5.1 0-1.8.5-3.2 2.2-4.2 4.5-2.9 6.1-7.6 7.4-12.5.6-2.6 1.4-5.2 3.9-6.3 4.7-2 6.1-6.8 9.1-10.2.8-.9.6-2.6.7-3.9 0-.3-.6-.7-1.1-1.3 5.1-1 7.6-7.1 13.5-7.3-.8-.4-1.5-.8-2.7-1.4h3.4c.1-.2.2-.3.3-.5-.7-.4-1.4-.8-2.6-1.5 1.2-.1 1.8-.2 2.4-.3-1.5-1.8-3.8-1.6-5.9 0-2.6 2-5.4 3.8-8.2 5.7-.7.4-1.7-.4-1.6-1.1.8-2.3-1-2.1-2.2-2.7-3.6-1.7-2.6-1.4.3-3-.9-1.4-1.9-2.1-3.3-3.2.5-.2.8-.3 1-.3 1.5.4 3 .5 3.3-1.5.3-1.8-.8-2.6-2.5-2.9-2.1-.3-4.1-.9-6.2-1.4.2-.6.4-1 .6-1.6C28 .2 25.9.1 23.8 0c-.7 0-1.8 0-2.1.4-1.4 2-2.5 4.1-3.7 6.2-.2.3 0 1.2.2 1.3 2 1 .3 1.8.1 2.2.3 1.1.6 1.7.6 2.3-.1 1.2-.5 2.4-.7 3.7-.1 1.2.2 2.2 1.4 2.2.3-.8.6-1.4.8-2 .5.4 1.3.9 1.3 1.3 0 1.2-.3 2.4-.6 3.6.3-.1.7-.3 1.3-.5.1 1.2-1.4 2.5.9 3.2zm9.6 23.4c-.1 2.5-.9 4.6.5 6.9 1.2-1.3 1.9.5 3 .5 2.3-.1 4.5 0 6.8-.1 1-.1 1.9-1.7 2.7-1.9 2.3-.4 3-2.3 4.4-4-4.6-.9-8.3 3.8-12.9 1.5.9-2.8 1.6-5.7 1.8-8.6.1-2.2-1.3-3.3-3.4-3.2-3.6.2-4.5 1-4.2 3.5-2.8-.1-2.4 2.3-3.1 4.2 1.4.4 2.7.7 4.4 1.2zm9.6-20.2c-.5 1.5-1 2.8-1.5 4.2 1.5 1 3.1 2 4.6 3 1.4.7 4.1.1 4.5-1.5.7-2.7 2.7-5.3 1-8.8-1.4 1.7-2.6 3.3-4.2 5.3-1.3-.4-3.1-1.4-4.4-2.2zm435-6.4c.6.2 1 .4 1.3.5-.2-1.2-.6-2.4-.6-3.6 0-.5.9-.9 1.3-1.3.2.6.4 1.1.8 2 1.1 0 1.5-1 1.4-2.2-.1-1.2-.5-2.4-.7-3.7-.1-.6.3-1.2.6-2.3-.1-.4-1.9-1.2.1-2.2.2-.1.4-1 .2-1.3-1.2-2.1-2.3-4.2-3.7-6.2-.2-.4-1.3-.4-2-.4-2.1.1-4.1.2-6.4.4.2.6.4 1 .6 1.6-2.1.5-4.1 1.1-6.2 1.4-1.8.3-2.8 1-2.5 2.9.3 2 1.8 1.9 3.3 1.5.2-.1.5.1 1 .3-1.4 1.1-2.4 1.8-3.3 3.2 2.9 1.6 3.9 1.3.3 3-1.2.5-3.1.4-2.2 2.7.1.8-.9 1.5-1.6 1.1-2.8-1.8-5.6-3.7-8.2-5.7-2.1-1.6-4.4-1.8-5.9 0 .6.1 1.1.1 2.4.3-1.2.7-1.9 1.1-2.6 1.5.1.2.2.3.3.5h3.4c-1.2.6-1.9 1-2.7 1.4 5.9.2 8.3 6.3 13.5 7.3-.5.6-1.1.9-1.1 1.3.1 1.3 0 3 .7 3.9 3 3.4 4.5 8.2 9.1 10.2 2.5 1.1 3.3 3.7 3.9 6.3 1.2 4.9 2.9 9.6 7.4 12.5 1.7 1.1 2.2 2.4 2.2 4.2.1 2.5.4 5-3.3 5.1.1.8.2 1.3.3 1.8h3.4c0 .4.1 1 .1 1.4 5.3-2.6 3-7.7 3.5-11.7.2-1.4-1.8-3-2.7-4.5-.3-.5-.5-1.2-.4-1.6 1.1-4 .6-7.9-1-11.7 1.2 2 2.2 4.5 4.3 5.7 7.9 3.3 15.3-2.3 14.1-10.8-.4-2.8-1.6-5.6-3.1-8.1-1.7-2.8-4.3-3.1-7.3-2-1.7.6-3.3 1.1-4 3.1-.2.4-1.1.6-1.7.9.2.6.5 1.4.7 2.2l1.2-.3c0 .3.3.8.1 1-1.2 1.4.2 2.3.8 3.1.7 1 1.8 1.6 2.5 2.5.5.5.6 1.3 1 2.2h-1.9c.2.5.3.9.5 1.4.5-.2 1.1-.2 1.4-.6 1.2-1.4.7-3-.7-4.4-.9-1-1.4-2.4-2.1-3.6.5-.4 1-.2 1.5-.1.1-.9.2-1.8.3-2.9-.4-.3-1-.7-1.6-1.2 1.8-3.9 5.6-4.4 8.3-1.2 5 5.9 4.8 17.4-4.5 18.3-3.4.2-6.6-1.8-7.7-5.7-.9-3.3-2.8-5.6-5.3-7.6-1.9-1.5-2.9-3.5-2.6-5.9.1-1 .5-2.5 1.1-2.7 2.2-.7.7-2 .7-3.2zm-5.9 25.4c-.8-1.9-.3-4.3-3.1-4.2.3-2.5-.6-3.3-4.2-3.5-2.1-.1-3.5 1-3.4 3.2.2 2.9.9 5.7 1.8 8.6-4.6 2.4-8.2-2.3-12.9-1.5 1.3 1.8 2.1 3.6 4.4 4 .8.2 1.7 1.8 2.7 1.9 2.3.1 4.5 0 6.8.1 1 0 1.8-1.7 3-.5 1.4-2.3.6-4.4.5-6.9 1.6-.5 2.9-.8 4.4-1.2zm-18.5-16.8c-1.6-2-2.8-3.5-4.2-5.3-1.7 3.5.3 6.1 1 8.8.4 1.5 3 2.2 4.5 1.5 1.5-1.1 3.1-2 4.6-3l-1.5-4.2c-1.3.8-3.1 1.8-4.4 2.2z" />
      </svg>
    </div>
  )
}
