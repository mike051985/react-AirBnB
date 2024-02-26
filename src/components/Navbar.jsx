import React from 'react'
import ImageLogo from '../images/airbnb-logo.png'
import '../App.css'

export default function Navbar() {
  return (
    <div>
      <nav>
        <img src={ImageLogo} className='nav--logo' />
      </nav>
    </div>
  )
}
