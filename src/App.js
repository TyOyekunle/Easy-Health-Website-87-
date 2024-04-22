import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Testimonials from './Components/Testimonials/Testimonials'
import AboutPage from './Components/AboutPage/AboutPage'
import Contact from './Components/Contact/Contact'
import Title from './Components/Title/Title'
import Footer from './Components/Footer/Footer'
import AppPage from './Components/AppPage/AppPage'
import Doctors from './Components/Doctor/Doctors'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

// import Doctor from './Components/Doctor/Doctor'
// import Title from './Components/Title/Title'
const App = () => {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <div className='container'>
            {/* <Title title='OUR SERVICES' subTitle='What we offer'/> */}
                <About/> 
                
                <Title title='ABOUT US' />
                 <AboutPage/>
             <Doctors/>
                <AppPage/>
                <Title title='TESTIMONIALS' subTitle='Reviews from our Users'/>            
            
            <Testimonials />  
            {/* <Doctor name="Dr Boma Okoh" speciality="Pediatrician" 
             experience="6 years" patients={288} /> */}
             <Title title='CONTACT US' subTitle='Get in touch'/>
             <Contact/>
             <Footer/>
            </div>
            <VideoPlayer/>
        </div>
    )
}

export default App