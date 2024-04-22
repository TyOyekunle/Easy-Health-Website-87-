import React, { useRef } from 'react'
import './Doctors.css'
import DrRoselineEbuka from '../../assets/DrRoselineEbuka.png'
import DrOlawale from '../../assets/DrOlawale.png'
import DrHalimat from '../../assets/DrHalimat.png'
import star from '../../assets/five-star.png'
import DrIsaMusa from '../../assets/DrIsaMusa.png'
import DrIsabellaOnos from '../../assets/DrIsabellaOnos.png'
import DrDavidCharles from '../../assets/DrDavidCharles.png'
import DrAdekunleAyoola from '../../assets/DrAdekunleAyoola.png'
import DrJamesWellington from '../../assets/DrJamesWellington.png'
import pictureframe from '../../assets/pictureframe.png'
import back_arrow from '../../assets/back-arrow.png'
import next_arrow from '../../assets/next-arrow.png'

const Doctors = () => {
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
    <div id='Doctors'  className='doctor_div' >
       <div className='doctor_heading'>
        
        <div className='doctor_heading_second'>
          {/* <h2>  Doctors</h2> */}
          <h1> Our Qualified Doctors</h1>
          <h4>Handled directly by general doctors and professional
and experienced specialists doctors.</h4>
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
                
                <img src={DrJamesWellington} alt="" className='doctor_picture' />
                    <div>
                      <img src={star} alt="" className='five_star_icon' />
                      <h3> Dr James Wellington </h3></div>
                  </div>
                  <p> Orthopedy</p>       
            </div>
          </li>
          <li>
          <div className='slide'>
              <div className='user-info'>
                  <img src={DrHalimat} alt="" className='doctor_picture' />
                  <div>
                    <img src={star} alt="" className='five_star_icon' />
                    <h3> Dr Halimat </h3></div>
                </div>
                <p> Physiotherapist </p>
              </div>
            
          </li>
        <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={DrDavidCharles} alt="" className='doctor_picture' />
                    <div>
                      <img src={star} alt="" className='five_star_icon' />
                      <h3> Dr David Charles </h3></div>
                  </div>
                  <p> Gynecologist</p>      
            </div>
          </li>

        <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={DrRoselineEbuka} alt="" className='doctor_picture' />
                    <div>
                      <img src={star} alt="" className='five_star_icon' />
                      <h3> Dr Roseline Ebuka </h3></div>
                  </div>
                  <p> Gynecologist</p>       
            </div>
          </li>

          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={DrAdekunleAyoola} alt="" className='doctor_picture' />
                    <div>
                      <img src={star} alt="" className='five_star_icon' />
                      <h3> Dr Adekunle Ayoola </h3></div>
                  </div>
                  <p> Cardiologist</p>       
            </div>
          </li>
          <li>
          <div className='slide'>
              <div className='user-info'>
                  <img src={DrIsabellaOnos} alt="" className='doctor_picture' />
                  <div>
                    <img src={star} alt="" className='five_star_icon' />
                    <h3> Dr Isabella Onos </h3></div>
                </div>
                <p> Physician</p>
              </div>
          </li>


          <li>
          <div className='slide'>
              <div className='user-info'>
                  <img src={DrIsaMusa} alt="" className='doctor_picture' />
                  <div>
                    <img src={star} alt="" className='five_star_icon' />
                    <h3>Dr Isa Musa </h3></div>
                </div>
                <p> Cardiologist</p>
              </div>
             </li>

             <li>
          <div className='slide'>
              <div className='user-info'>
                  <img src={DrOlawale} alt="" className='doctor_picture' />
                  <div>
                    <img src={star} alt="" className='five_star_icon' />
                    <h3> Dr Olawale </h3></div>
                </div>
                <p> Dentist</p>
              </div>
          </li>
          
         
        </ul>
      </div>
      
      {/* <p>Name: {props.name}</p>
      <p>Speciality: {props.speciality}</p>
      <p>Experience: {props.experience}</p>
      <p>Patients: {props.patients}</p> */}


      
    </div>
  )
}

export default Doctors




 
 
 
 


