import React from 'react';
import'../assets/styles/components/Footer.css'
import twitter from "../assets/images/twitter.png"
import facebook from "../assets/images/facebook.png"
import google from "../assets/images/google.png"
import linkedin from "../assets/images/linkedin.png"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__logos'>
        <a className='footer__logo-link' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
          <img className='footer__logo' src={twitter} alt='' />
        </a>
        <a className='footer__logo-link' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
          <img className='footer__logo' src={facebook} alt='' />
        </a>
        <a className='footer__logo-link' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
          <img className='footer__logo' src={google} alt='' />
        </a>
        <a className='footer__logo-link' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
          <img className='footer__logo' src={linkedin} alt='' />
        </a>
      </div>
      <hr className='footer__line' />
      <div className='footer__links'>
        <a className='footer__link' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Indigo</a>
        |
        <a className='footer__link' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Privacy</a>
      </div>
    </footer>
  )
}

export default Footer
