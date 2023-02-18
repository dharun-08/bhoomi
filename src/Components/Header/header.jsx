/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './header.css'
import headerPic from '../../Assets/wallpaperflare.com_wallpaper.jpg'
import { GiPlantRoots } from "react-icons/gi"
import { CiSearch } from "react-icons/ci"

const header = () => {
  return (
    <header>
      <div className="container">
        <nav class="navbar">
          <div class="brandtitle"><a href="./">Bhoomi</a>  </div>
          <a href="#" class="toggle-bar">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </a>
          <div className='search-part'>
            <ul>
              <li><input type="text" placeholder='Search' className=' input-search' /></li>
              {/* <li><button><CiSearch /></button></li> */}
            </ul>
          </div>
          <button className='searchBtn'><CiSearch /></button>
          <div class="navlinks">
            <ul>
               
              <li><a href="./header.jsx">Home</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="../About/about.jsx">About</a></li>
            </ul>
          </div>
        </nav>
        <img src={headerPic} alt="headPic" />
        <div class="centered">
          <h1>BHOOMI</h1>
          <p>A Multi-Functional farming website</p>
          <div className="learnmore">
            <a href="#about">Learn More  <GiPlantRoots className='plant-icon' /></a>
          </div>
        </div>

      </div>
      
    </header>
    
  )
}

export default header