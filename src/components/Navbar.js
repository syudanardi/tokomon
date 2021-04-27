import React, {useContext} from 'react';
import { GlobalContext } from 'context/GlobalState';
import TokomonLogo from 'images/tokomon-logo.png'
import HomeIcon from 'images/home.png'
import GrassIcon from 'images/grass.png'
import DeleteIcon from 'images/delete.png'
import { Link, useLocation  } from 'react-router-dom';
import {utility} from 'Utility/Utility';
import 'components/css/Navbar.css'

export const Navbar = ()=>{
  const location = useLocation().pathname;
  const { reset } = useContext(GlobalContext);

  return(
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="navbar-menu logo-container">
            <li className={"navbar-item"}>
              <Link to="/" id="list-link" className="navbar-link">
                <img className="img-item" src={TokomonLogo} alt="Delete Icon"/>
              </Link>
            </li>
          </ul>
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
            <li className={"navbar-item navbar-delete"}>
              <div id="delete-link" className="navbar-link" onClick={()=>{utility.reset(reset)}}>
                <img className="img-item" src={DeleteIcon} alt="Delete Icon"/>
                <p id="delete-text" className="navbar-text">DELETE DATA</p>
              </div>
            </li>
          </ul>
        </div>
      </nav>
  )
}   