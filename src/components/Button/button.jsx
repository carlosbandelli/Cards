import './styles.css';
import React from 'react'

 

export const Button = ({ text, onClick, disabled, props }) => {
 

  return (
    

    <button disabled={disabled} className="button"  onClick={onClick}>
    {text}
  </button>
    
)};
