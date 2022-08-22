import React from 'react'

const Navbar = ({obinna}) => {
  return (
    <div className="navbar">
        <div className="logo">
            <a href="/">{obinna}</a>
        </div>

        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Pricing</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact us</a></li>
        </ul>

        <div className='navBtn'>
        <a href="/"><button className='signInBtn'>Sign in</button></a>
            <a href="/"><button className='signUpBtn'>Sign up</button></a>
        </div>
    </div>
  )
}

export default Navbar