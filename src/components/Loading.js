import React from 'react'
import PikaSearch from 'images/pika-search.png'
import 'components/css/Loading.css';

export const Loading = (props) => {
  const {extraClass} = {props}
  return (
    <React.Fragment>
      <img className={"loading-image loading-animated "+extraClass} src={PikaSearch} alt="Loading"/>
      <p className="loading-text">L O A D I N G</p>
    </React.Fragment>
  )
}