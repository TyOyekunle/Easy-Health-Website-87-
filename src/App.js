import React from 'react'
// import ReactDOM from 'react-dom/client';
// import {Routes, 
//     Route,
//      RouterProvider, createBrowserRouter} from 'react-router-dom'
import {Landing} from './Pages/Landing/Landing'
import {OurServices} from './Pages/OurServices/OurServices'
import {ContactPage} from './Pages/ContactPage/ContactPage'




const App = () => {
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
    return  (
        <div>
            
           <Landing/>
           {/* <OurServices/>
           <ContactPage/>   */}
        </div>
    )
}

export default App

