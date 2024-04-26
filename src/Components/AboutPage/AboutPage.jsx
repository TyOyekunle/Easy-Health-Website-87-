import React from 'react'
import './AboutPage.css'
import healthcare from '../../assets/healthcare.png'
import play_icon from '../../assets/play_icon.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'


export const AboutPage = ( setPlayState) => {
    return (
        <div id='AboutPage' className='about_page container'>
            <div className='about_page_left'>
                <img src={healthcare} alt="" className='healthcare_img' />
                {/* <img src={play_icon} alt="" className='play_icon'  onClick={()=> {setPlayState(true)}}/> */}
            </div>
            <div className='about_page_right'>
                
                <h1>Discover the Faces Behind Our <span>Easy Health</span> Consultancy</h1> 
                <p>At Easy Health, we are dedicated to revolutionizing healthcare accessibility in Nigeria. Learn more about our mission, vision, 
                    and values as we strive to empower individuals with the tools and resources they need to make informed healthcare decisions.</p>
                    
                    <button className='btn'><AnchorLink className='anchor-link' offset={50} href='#Contact'> Learn More</AnchorLink></button>
            
            </div>
           
        </div>
    )
}

export default AboutPage
