import React, { useState, useContext } from 'react';

export const Card = ({object}) => {
  return (
    <div>
    <img
      src={object.image}
      className="bg-white w-20 h-20 object-cover rounded-full mx-auto shadow-lg"
      alt={object.name}
     />
     <p className="capitalize text-xl mt-1 max-w-min m-auto">{object.name}</p>
     </div>
  )
}