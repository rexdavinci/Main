import React from 'react'
import '../../../resources/sass/Navbar.scss'
import logo from '../../../assets/img/logo.jpg'

const Navbar = () => {
  return(
    <nav className="navbar">
      <img src={logo} alt="logo"/>
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link active">home</a>
        </li>
        <li>
          <a href="/" className="nav-link">about</a>
        </li>
        <li>
          <a href="/" className="nav-link">tours</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
