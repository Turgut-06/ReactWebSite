import React from 'react'
import BannerImage from "../assets/4turkey.jpeg"

export default function Contact() {
  return (
    <div className='contact'>
        <div className="leftSide" style={{backgroundImage:`url(${BannerImage})`}}>

        </div>
        <div className="rightSide">
            <h1>Contact Us</h1>
            <div className="contactForm">
                <label htmlFor="name">Full Name</label>
                <input name='name' placeholder='Enter full name...' type="text" />
                <label htmlFor="email">E mail</label>
                <input name='email' placeholder='Enter e mail...' type="email" />
                <label htmlFor="message">Your Message</label>
                <textarea name='message' placeholder='Enter your message...'/>
                <button type='submit'>Send Message</button>
            </div>
        </div>

    </div>
  )
}
