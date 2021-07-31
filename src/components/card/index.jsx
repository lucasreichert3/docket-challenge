import React from 'react'
import './style.scss'

function Card({ children, headerTitle, headerBorder = false, headerContent }) {
  return (
    <div className="card">
      <header className={`${headerBorder ? 'header-border' : ''}`}>
        <h1>{headerTitle}</h1>
        {headerContent}
      </header>
      <div className={`content ${headerBorder ? 'padding-top' : ''}`}>{children}</div>
    </div>
  )
}

export default Card
