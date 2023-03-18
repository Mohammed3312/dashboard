import React from 'react'
import { useStateContext } from '../context/Contextprovicer';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      onClick={(clicked) => setIsClicked({...initialState , [clicked]:false})}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`p-3 text-${size} w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button