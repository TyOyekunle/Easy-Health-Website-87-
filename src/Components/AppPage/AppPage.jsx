import React from 'react'
import './AppPage.css'
import Home from '../../assets/Home.png'
import AppStoreDownload from '../../assets/apple-store-download.jpg'
import PlayStoreDownload from '../../assets/google-play-download.png'
import doublephone from '../../assets/doublephone.png'

const AppPage = () => {
    return (
        <div id='AppPage' className='App_page container'>
           
            <div className='App_page_right'>
                <h3> Access integrated <br /> healthcare  from <br />your <span>mobile phone</span> </h3>
                <div className='download-options'>
                <img src={AppStoreDownload} alt="" className='apple'/>
                <img src={PlayStoreDownload} alt="" className='playstore'/>
                </div>
            </div>

            <div className='App_page_left'>
                
            <img src={doublephone} alt="" />
                

            </div>
        </div>
    )
}

export default AppPage
