import React, {useState} from 'react'
import './Navbar.css' 
import logo from '../../assets/logo.svg'
// import search from '../../assets/search.png'
import underline from '../../assets/underline.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open_icon from '../../assets/sidebar.png'
import menu_close_icon from '../../assets/menu_close.png'
import { useRef } from 'react';

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
    <div className='navbar'>
      <img src={logo} alt="" className='logo' />
      <img src={menu_open_icon} onClick={openMenu} alt="" className='nav-mob-open'  />
   
      <ul ref= {menuRef} className='nav-menu' >  {/* if mobilemenu is true we will add empty string. if it is false,we wil add the hide classname hide-mobile-menu */}
        <img src={menu_close_icon} onClick={closeMenu} alt="" className='nav-mob-close'/>
       
        <li><AnchorLink className='anchor-link'  href='#Hero' > <p onClick={()=>setMenu("Hero")}> Home</p></AnchorLink> {menu==="Hero"? <img className='underline' src={underline} alt=''/>:<></>} </li>
         <li><AnchorLink className='anchor-link' offset={50} href='#About' ><p onClick={()=>setMenu("About")}> Services </p></AnchorLink> {menu==="About"? <img className='underline' src={underline} alt=''/>:<></>}</li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#AboutPage'><p onClick={()=>setMenu("AboutPage")}>About Us</p></AnchorLink> {menu==="AboutPage"? <img className='underline' src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Testimonials' ><p onClick={()=>setMenu("Testimonials")}>Testimonials</p></AnchorLink>{menu==="Testimonials"? <img className='underline' src={underline} alt=''/>:<></>}</li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#Contact' ><p onClick={()=>setMenu("Contact")}>Contact Us</p></AnchorLink> {menu==="Contact"? <img className='underline' src={underline} alt=''/>:<></>}</li>
        {/* <li> <AnchorLink className='anchor-link' offset={50} href='#Doctors' ><p onClick={()=>setMenu("Doctors")}>Providers</p></AnchorLink> {menu==="Doctors"? <img className='underline' src={underline} alt=''/>:<></>}</li> */}
        <li><button className='bluebtn'> <a href="/OurServices"> Login</a> </button></li>
        <li><button className='btn'> <a href="/ContactPage"> Signup</a></button></li>
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

       </div>
    
  )
}

export default Navbar
