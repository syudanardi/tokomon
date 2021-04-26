import React from 'react'
import TokomonLogo from 'images/tokomon-logo.png'
import HomeIcon from 'images/home.png'
import GrassIcon from 'images/grass.png'
import { Link, useLocation  } from 'react-router-dom';
import 'components/css/Navbar.css'

export const Navbar = ()=>{
  const location = useLocation().pathname;


  return(
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="logo-container">
            <img className="img-logo" src={TokomonLogo} alt="Tokomon Logo"/>
          </Link>
          <ul className="navbar-menu">
            <li className={location === "/" ? "navbar-item active" : "navbar-item"}>
              <Link to="/" id="list-link" className="navbar-link">
                <img className="img-item" src={GrassIcon} alt="Grass Icon"/>
                <p id="list-text" className="navbar-text">POKEMON LIST</p>
              </Link>
            </li>
            <li className={location === "/collection" ? "navbar-item active" : "navbar-item"}>
              <Link to="/collection" id="collection-link" className="navbar-link">
                <img className="img-item" src={HomeIcon} alt="Home Icon"/>
                <p id="collection-text" className="navbar-text">MY COLLECTION</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}   