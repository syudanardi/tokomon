import React from 'react';

export const Card = ({object}) => {
  return (
    <React.Fragment>
      <img
        src={object.image ? object.image : object.sprites.front_default}
        className="bg-white h-28 w-auto object-cover rounded-full mx-auto shadow-lg"
        alt={object.name}
      />
      <p className="capitalize text-xl mt-1 m-auto">{object.name}</p>
    </React.Fragment>
  )
}