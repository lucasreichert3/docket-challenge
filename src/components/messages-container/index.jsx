import React from 'react'
import { useFeedbackMessage } from '../../contexts/feedback-message'
import FeedbackMessage from '../feedback-message'
import './style.scss'

function MessagesContainer() {
  const { messages, } = useFeedbackMessage()
  return (
    <>
      <div className="feedback-message-container">
        {messages.map((message) => (
          <FeedbackMessage
            key={message.id}
            message={message}
          />
        ))}
      </div>
    </>
  )
}

export default MessagesContainer
