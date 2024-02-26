import React from 'react'
import imageLogo from '../images/airbnb-logo.png'
import '../App.css'

export default function Navbar() {
  return (
    <div>
      <nav>
        <img src={imageLogo} className='nav--logo' />
      </nav>
    </div>
  )
}
