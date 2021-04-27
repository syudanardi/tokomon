import React from 'react';

export const Card = ({object}) => {
  return (
    <React.Fragment>
      <img
        src={object.image ? object.image : (object.sprites ?  object.sprites.front_default : null)}
        className="bg-white h-28 w-auto object-cover rounded-full mx-auto shadow-lg"
        alt={object.name}
      />
      <span className="capitalize text-xl mt-4 m-auto block" > {object.name} </span>
    </React.Fragment>
  )
}