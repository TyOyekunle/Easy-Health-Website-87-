import React from 'react'
import {Routes, Route, link} from 'react-router-dom'
import {Landing} from './Pages/Landing/Landing'
import {OurServices} from './Pages/OurServices/OurServices'
import {ContactPage} from './Pages/ContactPage/ContactPage'
import {TestimonialsPage} from './Pages/Testimonials/TestimonialsPage'
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy'





const App = () => {
    return  (
        <div className='App'>

            <Routes>
            <Route path='/' element={<Landing /> }/>
           <Route path='/our-services' element= {<OurServices />} />
           <Route path='/contact-us' element= {< ContactPage/>} />
           <Route path='/testimonials' element= {< TestimonialsPage/>} />
           <Route path='/login' element= {< ContactPage/>} />
           <Route path='/signup' element= {< OurServices/>} />
           <Route path='/privacy-policy' element= {< PrivacyPolicy/>} />

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

