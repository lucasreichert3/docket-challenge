import React from 'react'
import './style.scss'

function Button({ buttonText }) {
  return <button className="button" type="submit">{buttonText}</button>
}

export default Button
