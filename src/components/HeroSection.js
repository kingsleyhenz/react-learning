import React from 'react'
import heroImg from "../img/shop.jpg"

const HeroSection = () => {
    const subHeading = "And Just Way You Need It....."
  return (
    <div className="heroSection">
        <div className='text'>
            <h1>Here We Are</h1>
            <h1>Everything You Need</h1>
            <p>{subHeading}</p>
            <button>And More</button>
        </div>
        <div className="img">
            <img src={heroImg} alt="" />
        </div>
      </div>
  )
}

export default HeroSection