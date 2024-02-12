import React from 'react'
import './button.scss'

function Button({className,btnTxt}) {
  return (
    <a href="#"> <span className={className}>
      {btnTxt}
    </span>
    </a>
  )
}

export default Button
