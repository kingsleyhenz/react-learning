import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <a href="/">logo</a>
        </div>

        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About Us</a></li>
            <li><a href="/">Hot Sales</a></li>
            <li><a href="/">Get in touch</a></li>
        </ul>

        <div className='navBtn'>
        <a href="/"><button className='signInBtn'>Sign in</button></a>
            <a href="/"><button className='signUpBtn'>Sign up</button></a>
        </div>
    </div>
  )
}

export default Navbar