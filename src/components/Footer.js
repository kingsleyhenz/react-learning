import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='textbox'>
      <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut eius minus, adipisci dolorum officia aspernatur quaerat id, aliquid eligendi eos, totam laboriosam alias ipsam repudiandae tempore odit quam necessitatibus similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquam quos numquam ipsa, iste nam qui repellat veniam sequi, non dolorem! Laboriosam, nobis. Eius perferendis eaque corporis, et commodi ab! 
    </p>
      </div>
      <div className='footinput'>
        <input type={'text'} placeholder={'Enter Your Full Name'}/>
        <input type={'text'} placeholder={'Enter YOur Email Address'}/>
        <button>Send Email</button>
      </div>
    </footer>
  )
}

export default Footer