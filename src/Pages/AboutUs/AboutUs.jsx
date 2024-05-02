import './AboutUs.css'
import { Frame1, Frame2, LeftSideDesign, Pics, RightSideDesign } from '../../Components/Logo.jsx'
import Reliability from '../../assets/Reliability.svg'
import Convenience from '../../assets/Convenience.svg'
import Innovation from '../../assets/Innovation.svg'
import Professionals from '../../assets/Professionals.svg'
import Comprehensive from '../../assets/Comprehensive.svg'
import Transparency from '../../assets/Transparency.svg'
// import { HeaderSection } from '../../App/components/HeaderSection'
// import { Footer } from '../../App/components/FooterSection'
import {Navbar} from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import logo from '../../assets/logo.svg'



// src\App\assests\images\Comprehensive.svg



export function AboutUs () {
    return (
        <div className='header'>

            {/* Header/navbar */}
            <Navbar/>

      {/* hero section i.e the design immediately after the header */}
        <Frame1 className='GroupPics'/>

      {/* about easy health */}
        <div className='frame2'>
            <Frame2 />
            <div>
            <h4 className='about'>About Easy Health</h4>
            <p className='p1'>
               At Easy Health, we are dedicated to revolutionizing healthcare accessibility in Nigeria. 
               Learn more about our mission, vision, and values as we strive to empower individuals
               with the tools and resources they need to make informed healthcare decisions.
            </p>      
            </div>
        </div>
     
          {/* our mission here */}
        <div className='frame3'>
            <h3 className='about'>Our Mission</h3>
            <div>
                <p className='p1'>
                "<b className='begin'>At Easy Health,</b> our mission is to democratize healthcare by providing
                accessible and reliable health services to every individual in Nigeria.
                We aim to empower our users with the knowledge, tools, and
                resources they need to make informed healthcare decisions,
                ultimately improving health outcomes and quality of life."
                </p>
            </div>
        </div>

     {/* our vision here */}
       <div className='frame4'>
        <LeftSideDesign className='LeftSideDesign'/>
        <div>
        <p className='p1 vision'>
        "Our vision is to create a healthier Nigeria where every individual has equitable 
        access to quality healthcare services. Through innovation, technology, and collaboration,
         we strive to bridge the gap between healthcare providers and patients,
         fostering a culture of proactive health management and wellness across the nation."
       </p>
        </div>
        <h3 className='about'>Our Vision</h3>
        
       </div>

      <RightSideDesign className='RightSideDesign'/>

    {/* Meet our team here */}
      <div className='team'>
        <h3 className='about'>Meet our team </h3>
        <Pics />
      </div>

    {/* Why you choose us starts from here */}
      <div className='footer'>

    <div className='choose'>

        <h3 className='head'>Why you <br/> 
        should choose us</h3>

 <div className='texts'>

        <div className='all'>
        
         <img src={Professionals} alt='' className='img' />
        <div>
       
         <p className='para'>
            <b className='text'>Access to Qualified <br/>  
         Healthcare Professionals:</b>  <br/> 
         Easy Health connects users with a network of qualified
         healthcare professionals, ensuring that they receive expert 
         medical advice and care.</p>  
        </div>
        
        </div>

        <div className='all'>

        <img src={Comprehensive} alt='' className='img' />
        <div>
            
            <p className='para'>
            <b className='text'>Comprehensive Services: </b>  <br/>  
            From virtual consultations to health screenings and 
            educational resources, Easy Health offers a wide range 
            of services designed to support users in managing their 
            health and wellness effectively.</p>
        </div>

        </div>

       <div className='all'>

       <img src={Convenience} alt='' className='img' />
       <div>
             
            <p className='para'>
            <b className='text'>Convenience: </b>  <br/>  
            With Easy Health, users can access healthcare services
            from the comfort of their own homes. Whether through
            virtual consultations or educational resources, our platform
            offers  convenient solutions to meet their healthcare needs.</p>
       </div>

        </div>

       <div className='all'>

        <img src={Transparency} alt='' className='img' />
        <div>
           
            <p className='para'>
             <b className='text'>Transparency: </b>  <br/>  
            Easy Health prioritizes transparency in all aspects of our 
            operations. Users can expect clear communication,
            fair pricing, and honest advice when using our platform.</p>
        </div>

        </div>

        <div className='all'>

        <img src={Innovation} alt='' className='img' />
        <div>
            
            <p className='para'>
            <b className='text'>Commitment to Innovation: </b>  <br/>  
            As a forward-thinking healthcare technology company,
            Easy Health is constantly innovating to improve our services and enhance the user experience. 
            Users can trust that they are receiving cutting-edge healthcare solutions when they choose Easy Health..</p>
        </div>

        </div>

        <div className='all'> 

        <img src={Reliability} alt='' className='img' />
        <div>
            
            <p className='para'>
              <b className='text'>Reliability:</b>  <br/>  
              Easy Health is committed to providing reliable and 
             accurate health information and services. Users can trust 
             our platform to deliver up-to-date medical information 
             and personalized recommendations tailored to their needs.</p>
        </div>

     </div>

 </div>

    </div>

    
    <div className='mainfooter'> 
    <Footer/>
      </div>

       </div>
    
      </div>
    )
}