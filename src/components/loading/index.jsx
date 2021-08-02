import React from 'react'
import './style.scss'

function Loading({ visible }) {
  return (
    <>
      {visible && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
    </>
  )
}

export default Loading
