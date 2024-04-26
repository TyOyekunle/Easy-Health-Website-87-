
import React from 'react'
import './About.css'
import Digital_health from '../../assets/first-hero-image.png'
import doctor from '../../assets/doctor.png'
import pharmacy from '../../assets/pharmacy.png'
import ambulance from '../../assets/ambulance.png'
import manulife from '../../assets/manulife.svg'
import allianz from '../../assets/allianz.svg'
import blibli from '../../assets/blibli.svg'
import bcalife from '../../assets/bcalife.svg'
import fwd from '../../assets/fwd.svg'
import iconsDiv from '../../assets/servicesicongroup.png'



export const About = () => {
  return (
    <div id='About' className='About_us'>
      <div className='top_icons'>
    <img src={manulife} alt="" className='icons' />
    <img src={allianz} className='icons'/>
     <img src={blibli} alt="" className='icons'/>
    <img src={bcalife} alt="" className='icons'/>
    <img src={fwd} alt="" className='icons'/>
      </div> 
      <div className='services_body'>
      {/* <img src={iconsDiv} alt="" className='icon_div'/> */}
        <h1>
          Our <span>Main Services </span><br /> Categories
        </h1>
      </div>
      <div>
   
           <div className='services_div'>
            <div className='Digital_care'>
       <img src={Digital_health} alt="" />
              <div className='Digital_health_font'>
              <h4>Chat with doctor</h4>
              
              <p>You can connect directly, quickly and easily, and there is no
                 need to doubt the quality of the consultation and treatment offered.</p>
                </div>
               </div>

               

            <div class="pharmacy_services">
            <img  src= {pharmacy} alt=""  />
            <div>
              <h4>Health Store</h4>
              <p>Consult a doctor and get your drugs 
                delivered to you or pickup at the Pharmacy closest to you</p>
            </div>
            </div>

            <div className='Doctor_connect'>
            <img src={doctor} alt=""/>
            
            <div>
            <h4>Visit Hospitals</h4>
              <p> Get priority services in hospitals with Easy Health. 
                Which allows you to go to the hospital more practically and save time.</p>
          
            </div>
            </div>
            
            <div className='ambulance_services'>
            <img
               src={ambulance}alt="" />
            <div>
              <h4>Ambulance Services</h4>
              <p>Get Ambulance services on the go with Easy Health.</p>
            </div>
            </div>
            </div>
    </div>
    </div>
  )
}

export default About
