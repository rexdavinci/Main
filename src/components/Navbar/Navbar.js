import React from 'react'
import '../../../resources/sass/Navbar.scss'
import logo from '../../../assets/img/logo.jpg'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="city-tours-logo"/>
      </nav>
    </div>
  )
}
