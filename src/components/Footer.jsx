import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <p className='copy'> &copy; 2024 burger06.com</p>
            <div className='icons'>
            <FaInstagramSquare/>
            <FaSquareXTwitter/>
            < FaFacebook/>

            </div>
            
           
        </div>

    </div>
  )
}

export default Footer