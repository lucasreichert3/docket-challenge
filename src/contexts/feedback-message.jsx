import React, { createContext, useCallback, useContext, useState } from 'react'

const FeedbackMessageContext = createContext({})

export const FeedbackMessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([])

  const showMessage = message => {
    const newId = messages.length
    setMessages([...messages, { message, visible: true, id: newId }])
  }

  const removeToast = useCallback(id => {
    setMessages(state => state.filter(message => message.id !== id))
  }, [])

  return (
    <FeedbackMessageContext.Provider value={{ showMessage, messages, removeToast }}>
      {children}
    </FeedbackMessageContext.Provider>
  )
}

export function useFeedbackMessage() {
  return useContext(FeedbackMessageContext)
}
