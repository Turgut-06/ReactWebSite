import React from 'react'
import BannerImage from "../assets/1beef.jpg"

const About = () => {
  return (
    <div className='about'>
        <div className="aboutTop" style={{backgroundImage:`url(${BannerImage})`}}></div>
        <div className="aboutBottom">
        <h1>About Us</h1>
        <p>1995 yılında lezzet tutkunları için kapılarını açmış bir hamburger restoran zinciri olarak kuruluşumuzdan bu yana, taze ve kaliteli malzemelerle hazırlanan özel tariflerimiz sayesinde kısa sürede geniş bir müşteri kitlesine ulaştık. Bugün, dünya genelinde yüzlerce şubemizle müşterilerimize hizmet vermekteyiz</p>
        </div>
        

    </div>
  )
}

export default About