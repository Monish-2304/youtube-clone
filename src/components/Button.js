import React from 'react'

const Button = ({name,onClick,className}) => {
  return (
    <div>
      <button onClick={onClick}
      className={className}>{name}</button>
    </div>
  )
}

export default Button;
