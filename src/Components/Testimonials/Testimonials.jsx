import React, { useRef } from 'react'
import './Testimonials.css'
import Adeola from '../../assets/Adeola.png'
import Mary from '../../assets/Mary.png'
import DrHalimat from '../../assets/DrHalimat.png'
import star from '../../assets/five-star.png'
import Doctor from '../../assets/doctor.png'
import DrOlawale from '../../assets/DrOlawale.png'
import back_arrow from '../../assets/back-arrow.png'
import next_arrow from '../../assets/next-arrow.png'

 export const Testimonials = () => {
 // code for the slider and arrows.
  const slider = useRef();  //used to select/access the ul tag
  let tx = 0; //tx is translate x.(as in transform: translateX(-50%);) we are initializing it to 0.
  // that means it will display only the first and the second testimonials
  
  const slideForward = ()=>{ // the condition is that the slide forward will only work if the translation along the X axis is greater than 50.meaning 50% of the width of the page which is 200px
    if (tx > -50){ // if it is greater than -50, thats when the slide will change forward.
      tx -=25; // when tx is 0, it will decrease tx by -25. 
              //when it is -25 again, it will decrease by -25 again 
    }
    // selecting the element 
    slider.current.style.transform = `translatex(${tx}%)`
  }
  const slideBackward = ()=>{
    if (tx < 0){ // if it is less than 0, thats when the slide backward will change.
      tx +=25; // when tx is 0, it will increase tx by +25. 
              //when it is -25 again, it will decrease by -25 again 
    }
    // sekecting the element 
    slider.current.style.transform = `translatex(${tx}%)`
  }
  

  return (
    <div id='Testimonials' className='testimonial_div'>
      <div className='testimonial_heading'>
        
        <div className='testimonial_heading_second'>
          <h1> What customers say about Easy Health</h1>
          <h4>We have provided years of remarkable service to both our individual and corporate clients. With a wide range of products and highly knowledgeable team,
            our commitment to surpassing expectations is unmatched.</h4>
        </div>
      </div>

      <img src={next_arrow} alt="" className='next-arrow' 
      onClick={slideForward} />
      <img src={back_arrow} alt="" className='back-arrow'
      onClick={slideBackward} />
      
      <div className='slider'>
        <ul ref = {slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={Adeola} alt="" className='testimonial_picture' />
                    <div>
                      <img src={star} alt="" className='five_star_icon' />
                      <h3> Adeola </h3></div>
                  </div>
                  <p> Since I've been on the Avon plan, I've had a peaceful life based on healthcare.
                    No stress or hassle. Easy access as well. And the hospital I selected,
                    Medwin in Oke Ira has been tremendously good.</p>       
            </div>
          </li>

          <li>
          <div className='slide'>
              <div className='user-info'>
                  <img src={Doctor} alt="" className='testimonial_picture' />
                  <div>
                    <img src={star} alt="" className='five_star_icon' />
                    <h3> Dr Agu </h3></div>
                </div>
                <p> Easy health has brought us closer to our patients</p>
              </div>
             </li>

             <li>
          <div className='slide'>
              <div className='user-info'>
                  <img src={DrOlawale} alt="" className='testimonial_picture' />
                  <div>
                    <img src={star} alt="" className='five_star_icon' />
                    <h3> Olawale </h3></div>
                </div>
                <p> Since I've been on the Avon plan, I've had a peaceful life based on healthcare.
                  No stress or hassle. Easy access as well. And the hospital I selected,
                  Medwin in Oke Ira has been tremendously good.</p>
              </div>
          </li>
          <li>
          <div className='slide'>
              <div className='user-info'>
                  <img src={Mary} alt="" className='testimonial_picture' />
                  <div>
                    <img src={star} alt="" className='five_star_icon' />
                    <h3> Mary </h3></div>
                </div>
                <p> Since I've been on the Avon plan, I've had a peaceful life based on healthcare.
                  No stress or hassle. Easy access as well. And the hospital I selected,
                  Medwin in Oke Ira has been tremendously good.</p>
              </div>
          </li>

          <li>
          <div className='slide'>
              <div className='user-info'>
                  <img src={DrHalimat} alt="" className='testimonial_picture' />
                  <div>
                    <img src={star} alt="" className='five_star_icon' />
                    <h3> Halimat </h3></div>
                </div>
                <p> Since I've been on the Avon plan, I've had a peaceful life based on healthcare.
                  No stress or hassle. Easy access as well. And the hospital I selected,
                  Medwin in Oke Ira has been tremendously good.</p>
              </div>
            
          </li>
        </ul>
      </div>



    </div>
  )
}

export default Testimonials
