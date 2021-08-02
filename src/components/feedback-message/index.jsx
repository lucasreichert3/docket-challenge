import React, { useEffect } from 'react'
import './style.scss'
import { FaCheckCircle, FaTimes } from 'react-icons/fa'
import { useFeedbackMessage } from '../../contexts/feedback-message'

function FeedbackMessage({ message }) {
  const { removeToast } = useFeedbackMessage()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id)
    }, 4800)

    return () => {
      clearTimeout(timer)
    }
  }, [removeToast, message.id])

  return (
    <>
      {message.visible && (
        <div className="feedback-message-content">
          <div className="message-icon">
            <FaCheckCircle />
          </div>
          <span className="feedback-message">{message.message}</span>
          <div className="feedback-close-icon" onClick={() => removeToast(message.id)}>
            <FaTimes />
          </div>
        </div>
      )}
    </>
  )
}

export default FeedbackMessage
