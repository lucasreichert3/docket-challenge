import React from 'react'
import './style.scss'

function EmptyState({ message, image }) {
  return (
    <div className="empty-state">
      <div className="image">{image}</div>
      <p className="message">{message}</p>
    </div>
  )
}

export default EmptyState
