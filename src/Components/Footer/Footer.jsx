import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import Home from '../../assets/Home.png'
import Playstore from '../../assets/playstore.png'
import Iphone_store from '../../assets/iphone_store.svg'
import email from '../../assets/email.png'
import phone from '../../assets/phone.svg'
import location from '../../assets/location-icon.svg'



const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-div-top'>
            <div className='footer-div-text'>
                <img src={logo} alt="" className='logo' />
                <p><span>You’ve reached the end, <br /> but it’s not the end! <br />
Remember, you’re not alone. <br /> Reach out, seek support, <br />and prioritize your well-being</span></p>
            </div>
            <div className='footer-list'>
                <p> Services</p>
                <ul>
                    <li><a href='#'> Psychotherapy</a> </li>
                    <li><a href='#'> Mental Counseling </a></li>
                    <li> <a href='#'>Support Groups </a> </li>
                    <li><a href='#'> Case Management </a> </li>
                </ul>
            </div>
            {/* <div className='footer-list'>
                <p> Contact</p>
                <ul>
                    <li> <a href='#'>User App </a></li>
                    <li><a href='#'> Doctor App </a></li>
                </ul>
            </div> */}
            <div className='footer-list'>
                <p> Contact</p>
                <ul>
                    <li> <img src={phone}alt="" /> +234-8086133006 </li>
                    <li><img src={email} alt="" /> oyekunlefpog@gmail.com</li>
                    <li><img src={location} alt="" /> 2, Tech4Dev Avenue, VI, Lagos</li>
                </ul>
            </div>
            <div className='footer-list'>
                <p> Links</p>
               <li> Privacy Policy </li>
            <li> Terms of Use </li>
            </div>
        </div>
        <div className='footer-div-bottom'>
      <p>© 2024 EasyHealth. All rights reserved.</p>
      <ul>
        <li> Terms of Service</li>
        <li> Privacy Policy</li>

      </ul>
      </div>
    </div>
  )
}

export default Footer
