import React from 'react'
import './style.scss'

function Button({
  buttonText,
  outline = false,
  danger = false,
  clickCallBack = () => undefined
}) {
  return (
    <button
      className={`button ${outline ? 'outline' : ''} ${danger ? 'danger' : ''}`}
      type="submit"
      onClick={clickCallBack}
    >
      {buttonText}
    </button>
  )
}

export default Button
