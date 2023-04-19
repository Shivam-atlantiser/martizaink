import React from 'react'
import '../pages/styles.css'
import fb from '../pages/assets/fb.avif'
import insta from '../pages/assets/insta.avif'
import linkedin from '../pages/assets/linkedin.avif'
import star from '../pages/assets/star.avif'
import tiktok from '../pages/assets/tiktok.avif'
import youtube from '../pages/assets/youtube.avif'
import twitter from '../pages/assets/twitter.avif'
import stamp from '../pages/assets/stamp.avif'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-seperator' />
            <div className='footer-logo' />
            <div className='inner-footer'>
                <div className='footer-links'>
                    <a className='footer-heading' href='/'>Products</a>
                    <a href='/' className='footer-link'>Custom T-Shirts</a>
                    <a href='/' className='footer-link'>Custom Hoodies</a>
                    <a href='/' className='footer-link'>Custom Hats</a>
                    <a href='/' className='footer-link'>Women's</a>
                    <a href='/' className='footer-link'>Kids'</a>
                    <a href='/' className='footer-link'>All Products</a>
                </div>
                <div className='footer-links'>
                    <a className='footer-heading' href='/'>Services</a>
                    <a href='/' className='footer-link'>Screen Printing</a>
                    <a href='/' className='footer-link'>Embroidery</a>
                    <a href='/' className='footer-link'>Digital Printing (DTG)</a>
                    <a href='/' className='footer-link'>Tackle Twill</a>
                    <a href='/' className='footer-link'>Names & Numbers</a>
                    <a href='/' className='footer-link'>All Services </a>
                </div>
                <div className='footer-links'>
                    <a className='footer-heading' href='/'>Help</a>
                    <a href='/' className='footer-link'>Content Standards</a>
                    <a href='/' className='footer-link'>Satisfaction Guarantee</a>
                    <a href='/' className='footer-link'>Return Policy</a>
                    <a href='/' className='footer-link'>Shipping Options</a>
                    <a href='/' className='footer-link'>Pricing</a>
                    <a href='/' className='footer-link'>View All</a>
                </div>
                <div className='footer-links'>
                    <a className='footer-heading' href='/'>About</a>
                    <a href='/' className='footer-link'>Reviews</a>
                    <a href='/' className='footer-link'>Our Story</a>
                    <a href='/' className='footer-link'>Scholarship</a>
                    <a href='/' className='footer-link'>Blog</a>
                    <a href='/' className='footer-link'>Careers</a>
                    <a href='/' className='footer-link'>View All</a>
                </div>
                <div className='footer-links'>
                    <a className='footer-heading' href='/'>Contact</a>
                    <a href='/' className='footer-link'>2727 Commerce Way<br /> <br />Philadelphia PA 19154</a>
                    <a href='/' className='footer-link'>Call (800) 620-1233</a>
                    <a href='/' className='footer-link'>Chat With An Expert</a>
                    <a href='/' className='footer-link'>Email Us</a>
                </div>
            </div>
            <div className='after-links-container'>
                <div className='after-links'>
                    <a href='/'>IP Policy</a>
                    <a href='/'>Copyright Infringement</a>
                    <a href='/'>Privacy Policy & Terms of Service</a>
                    <a href='/'>CCPA</a>
                    <a href='/'>Sitemap</a>
                </div>
                <div className='after-links-2'>
                    <img src={fb} alt="networking" />
                    <img src={insta} alt="networking" />
                    <img src={linkedin} alt="networking" />
                    <img src={twitter} alt="networking" />
                    <img src={youtube} alt="networking" />
                    <img src={tiktok} alt="networking" />
                    <img src={star} alt="networking" />
                </div>
            </div>
            <div className='copyright'>
                <img src={stamp} alt='footer-stamp' className='footer-stamp' />
                <p>
                    © Copyright 2023 Martizaink. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer