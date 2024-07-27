import React from 'react'
import './Button.css'



function Button({type, title, disable}) {
  return (
    <button 
        className={`btn ${
        (type === "add" && "add") ||
        (type === "remove" && "remove") ||
        (type === "checkout" && "checkout")
    }`} 
    disable={disable}
    onClick={onclick}
    
    >{title}
    
    </button>
  );
}

export default Button