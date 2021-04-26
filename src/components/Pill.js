import React from "react";

export const Pill = ({customStyle, text, color})=>{
  const bg = (color && color.bg ? `bg-${color.bg} ` : '')
  const textColor = (color && color.text ? `text-${color.text} ` : '');
  let css = "flex items-center border rounded-full w-24 justify-center mt-2 mb-12 "
  css = css + bg + textColor + customStyle
  return(
    <span className={css}>{text}</span>
  )
}