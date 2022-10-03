import React from 'react'
import './Banner.scss'
import portada2 from '../../assets/img/portada2.jpg'



const Banner = () => {

    return (
        <div className="banner-container">
            <img className="bannerImage" src={portada2} alt="banner" />
        </div>
    )
}

export default Banner
