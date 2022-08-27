import React, { useState, useEffect } from 'react'
import './Banner.scss'
import portada2 from '../../assets/img/portada2.jpg'
import MoonLoader from 'react-spinners/MoonLoader'



const Banner = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    })

    return (
        <>
        {loading ? <div className="spinner"><MoonLoader /> </div>
        :
        <div className="banner-container">
            <img calssName="bannerImage" src={portada2} alt="banner" />
        </div>
    }
        </>
    )
}

export default Banner