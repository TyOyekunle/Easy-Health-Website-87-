import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import {Landing} from './Pages/Landing/Landing'
import {OurServices} from './Pages/OurServices/OurServices'
import {ContactPage} from './Pages/ContactPage/ContactPage'
import {TestimonialsPage} from './Pages/Testimonials/TestimonialsPage'
import {PrivacyPolicy} from './Components/PrivacyPolicy/PrivacyPolicy'





const App = () => {
    return  (
        <div className='App'>

            <Routes>
            <Route path='/' element={<Landing /> }></Route>
           <Route path='/our-services' element= {<OurServices />} ></Route>
           <Route path='/contact-us' element= {< ContactPage/>} ></Route>
           <Route path='/testimonials' element= {< TestimonialsPage/>} ></Route>
           <Route path='/login' element= {< ContactPage/>} ></Route>
           <Route path='/signup' element= {< OurServices/>} ></Route>
           <Route path='/privacy-policy' element= {< PrivacyPolicy/>} ></Route>

           </Routes>
        </div>
    )
}

export default App

// const router = createBrowserRouter([
//     {
//         path:'',
//         Component: Landing,
//     },
//     {
//         path: ' Login',
//         element: <OurServices/>,

//     },
//     {
//         path: 'Signup',
//         element: <ContactPage/>,

//     }
// ])

