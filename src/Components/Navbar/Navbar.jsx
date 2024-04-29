import React, {useState} from 'react'
import './Navbar.css' 
import logo from '../../assets/logo.svg'
// import search from '../../assets/search.png'
import underline from '../../assets/underline.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open_icon from '../../assets/sidebar.png'
import menu_close_icon from '../../assets/menu_close.png'
import { useRef } from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import OurServices from '../../Pages/OurServices/OurServices'


 export const Navbar = () => {

const [menu, setMenu] = useState("Hero"); //this is a state variable

const menuRef = useRef();


const openMenu = () =>{
  menuRef.current.style.right="0"; //when the right is 0, the menu wil be displayed on the smaller screen
}
const closeMenu = () =>{
  menuRef.current.style.right="-350"; //when the right is 0, the munu wil be displayed on the smaller screen
}

// const [mobileMenu, setMobileMenu] = useState(false) //initial state false for mobile menu icon
//  const toggleMenu= ()=>{
//   mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
//  }

return (
    <nav className='navbar'>
      <img src={logo} alt="" className='logo' />
      <img src={menu_open_icon} onClick={openMenu} alt="" className='nav-mob-open'  />
   
      <ul ref= {menuRef} className='nav-menu' >  {/* if mobilemenu is true we will add empty string. if it is false,we wil add the hide classname hide-mobile-menu */}
        <img src={menu_close_icon} onClick={closeMenu} alt="" className='nav-mob-close'/>

        <li><Link className='anchor-link'  to='/' > <p onClick={()=>setMenu("Hero")} >  Home </p></Link> {menu==="Hero"? <img className='underline' src={underline} alt=''/>:<></>} </li>
         <li><Link className='anchor-link' offset={50} to='/our-services' ><p onClick={()=>setMenu("About")}>  Services  </p></Link> {menu==="About"? <img className='underline' src={underline} alt=''/>:<></>}</li>
        <li> <Link className='anchor-link' offset={50} to='/our-services'><p onClick={()=>setMenu("AboutPage")}>About Us</p></Link> {menu==="AboutPage"? <img className='underline' src={underline} alt=''/>:<></>}</li>
        <li><Link className='anchor-link' offset={50} to='/testimonials' ><p onClick={()=>setMenu("Testimonials")}>Testimonials</p></Link>{menu==="Testimonials"? <img className='underline' src={underline} alt=''/>:<></>}</li>
      <li><Link className='anchor-link' offset={50} to='/Contact' ><p onClick={()=>setMenu("Contact")}>Contact Us</p></Link>{menu==="Contact"? <img className='underline' src={underline} alt=''/>:<></>}</li>
        
        
          {/* <li> <Link to="/contact-us"> Contact Us </Link></li> */}

        <li><button className='bluebtn'> <Link to="/login"> Login </Link> </button></li>
        <li><button className='btn'>  <Link to="/signup"> Signup</Link></button></li>
       
       
        {/* <li><AnchorLink className='anchor-link'  href='#Hero' > <p onClick={()=>setMenu("Hero")} >  Home </p></AnchorLink> {menu==="Hero"? <img className='underline' src={underline} alt=''/>:<></>} </li>
         <li><AnchorLink className='anchor-link' offset={50} href='#About' ><p onClick={()=>setMenu("About")}>  Services  </p></AnchorLink> {menu==="About"? <img className='underline' src={underline} alt=''/>:<></>}</li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#AboutPage'><p onClick={()=>setMenu("AboutPage")}>About Us</p></AnchorLink> {menu==="AboutPage"? <img className='underline' src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Testimonials' ><p onClick={()=>setMenu("Testimonials")}>Testimonials</p></AnchorLink>{menu==="Testimonials"? <img className='underline' src={underline} alt=''/>:<></>}</li> */}
        
       
     
        {/* <li> <AnchorLink className='anchor-link' offset={50} href='#Contact' ><p onClick={()=>setMenu("Contact")}>Contact Us</p></AnchorLink> {menu==="Contact"? <img className='underline' src={underline} alt=''/>:<></>}</li> */}
        {/* <li> <AnchorLink className='anchor-link' offset={50} href='#Doctors' ><p onClick={()=>setMenu("Doctors")}>Providers</p></AnchorLink> {menu==="Doctors"? <img className='underline' src={underline} alt=''/>:<></>}</li> */}
        
     
          </ul>
          {/* <button className='nav_btn'><AnchorLink className='anchor-link' offset={50} href='#Contact'> Download App </AnchorLink></button> */}
        
        {/* <div className='search-div'>
        <ul className={mobileMenu?'': 'hide-mobile-menu' }>
      <li><a href=""> <img src={search} alt="" className='search-icon' /> </a></li>
        <li><a href='#'>Login</a></li>
        <li><a href='#'>Signup</a></li>
        <li><button className='btn'><AnchorLink className='anchor-link' offset={50} href='#Contact'> Download App </AnchorLink></button></li>
        </ul>
        </div> */}

       </nav>
    
  )
}

export default Navbar
