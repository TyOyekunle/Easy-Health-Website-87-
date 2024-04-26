import React from 'react'
import './Hero.css'
import Decore from '../../assets/Decore.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import physician from '../../assets/Physician-home.png'
import image_200 from '../../assets/200+.png'
import image_15k from '../../assets/15K+.png'
import image_50 from '../../assets/50+.png'


export const Hero = () => {
    return (
        <div id='Hero' className='hero container'>
            <div className='hero_left'>
            <div className='hero-text'>
                <h1> Welcome to <span>Easy Health</span> - Your Gateway to Better Healthcare.</h1>
                <img src={Decore} alt="" className='decore'/>
                <br />
              <p>Empower yourself with Easy Health, your one-stop solution for accessible and reliable healthcare services. Connect with qualified healthcare professionals, 
                access educational resources, and take control of your well-being—all from the convenience of your fingertips.</p> <br /> 
            
                </div>
            
            <button className='btn'><AnchorLink className='anchor-link' offset={50} href='#Contact'> Try Free Consultation</AnchorLink></button>
            
            <div className='hero_icon_class'>
                <div className='icon_group'>
                    <img src={image_200} alt="" />
                    <p>Active <br /> Doctors</p>
                </div>
                <div className='icon_group'>
                    <img src={image_15k} alt="" />
                    <p>Active <br /> Users</p>
                </div>
                <div className='icon_group'>
                    <img src={image_50} alt="" />
                    <p>Active <br /> Pharmacies</p>
                </div>
                </div>  
            </div>

            <div className='hero-right'>
            <img src={physician} alt=""  className='hero-right-image'/>
            </div>
                </div>

    )
}

export default Hero
