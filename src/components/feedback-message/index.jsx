import React from 'react'
import './style.scss'
import { FaCheckCircle, FaTimes } from 'react-icons/fa'

function FeedbackMessage({ message, visible, closeCallback }) {
  return (
    <>
      {visible && (
        <div className="feedback-message-container">
          <div className="feedback-message-content">
            <div className="message-icon">
              <FaCheckCircle />
            </div>
            <span className="feedback-message">{message}</span>
            <div className="feedback-close-icon" onClick={closeCallback}>
              <FaTimes />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FeedbackMessage
