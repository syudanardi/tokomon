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
            <img className="img-logo" src={TokomonLogo}/>
          </Link>
          <ul className="navbar-menu">
            <li className={location == "/" ? "navbar-item active" : "navbar-item"}>
              <Link to="/" id="list-link" className="navbar-link">
                <img className="img-item" src={GrassIcon}/>
                <p id="list-text" className="navbar-text">POKEMON LIST</p>
              </Link>
            </li>
            <li className="navbar-item">
              <Link id="collection-link" className="navbar-link">
                <img className="img-item" src={HomeIcon}/>
                <p id="collection-text" className="navbar-text">MY COLLECTIONS</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}

{/* <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
          <div class="flex-shrink-0 flex items-center">
            <img class="block h-8 w-auto" src={TokomonLogo} alt="Workflow"/>
          </div>
          <div class="sm:block ml-4 md:ml-6">
            <div class="flex space-x-4">
              <Link to={`/`} className="bg-gray-900 hover:bg-gray-600 text-white px-3 py-2 rounded-md 
              text-sm font-medium flex flex-col transition transform hover:translate-y-4" aria-current="page">
                <img class="block h-8 w-auto float-left" src={GrassIcon} alt="Workflow"/>
                <p>Catch</p>
              </Link>
              <Link to={`/pokemon-details/ivysaur`} className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">IvySaur</Link>

            </div>
          </div>
      </div>
    </div> */}
    