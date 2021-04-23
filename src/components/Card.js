import React, { useState, useContext } from 'react';

export const Card = ({object}) => {
  return (
    <div>
    <img
      src={object.image ? object.image : object.sprites.front_default}
      className="bg-white w-20 h-20 object-cover rounded-full mx-auto shadow-lg"
      alt={object.name}
     />
     <p className="capitalize text-xl mt-1 m-auto">{object.name}</p>
     </div>
  )
}