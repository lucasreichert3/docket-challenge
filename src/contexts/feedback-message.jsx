import React, { createContext, useContext, useState } from 'react'

const FeedbackMessageContext = createContext({})

export const FeedbackMessageProvider = ({ children }) => {
  const [message, setMessage] = useState('')
  const [visible, setVisible] = useState(false)

  const showMessage = message => {
    setVisible(true)
    setMessage(message)

    setTimeout(() => {
      removeMessage();
    }, 3000)
  }

  const removeMessage = () => {
    setVisible(false)
    setMessage('')
  }

  return (
    <FeedbackMessageContext.Provider value={{ showMessage, message, visible, removeMessage }}>
      {children}
    </FeedbackMessageContext.Provider>
  )
}

export function useFeedbackMessage() {
  return useContext(FeedbackMessageContext)
}
