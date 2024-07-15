import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import BannerImage from "../assets/banner.jpg"
const Home = () => {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})`}}>
        <div className='headerContainer'>
            <h1>Burger</h1>
            <p>Delicios hamburgers </p>
            <button onClick={useNavigate("/menu")}>Order Now</button>

        </div>
    </div>
  )
}

export default Home