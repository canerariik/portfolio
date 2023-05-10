import React from 'react'
import "./footer.css"
import { IoLogoTwitter } from 'react-icons/io';
import { FiInstagram } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>SOFTWARE</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://twitter.com'><IoLogoTwitter /></a>
        <a href='https://instagram.com'><FiInstagram /></a>
        <a href='https://facebook.com'><FaFacebookF /></a>
      </div>

      <div className='footer__cpyright'>
        <small>
          &copy; Thank U. All rightS reserved.
        </small>
      </div>

    </footer>
  )
}

export default Footer