import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
<div class='footer-logo'>
            <Link to='/' className='social-logo'>
              JOSLA
              
            </Link>
          </div>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Product & Services</h2>
            <Link to='/sign-up'>Smart Meter</Link>
            <Link to='/'>Bill Payment</Link>
            <Link to='/'>Fault Reporting</Link>
            <Link to='/'>Online Store</Link>
           
          </div>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Contact Form</Link>
            <Link to='/'>Career</Link>
            <Link to='/'>Get Newsletter</Link>
            <Link to='/'>Read Blog</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Info</h2>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Terms of Use</Link>
            <Link to='/'>Refund Policy</Link>
            <Link to='/'>Legal</Link>
            <Link to='/'>FAQ</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'>+234(0)8087488793</Link>
            <Link to='/'>corporate@josla.com.ng</Link>
          
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          
          <small class='website-rights'>JOSLA © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
