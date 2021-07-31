import React, { createContext, useContext, useState } from 'react'

const DocumentsContext = createContext({})

export const DocumentsProvider = ({ children }) => {
  const [documents, setDocuments] = useState([])

  function newDocument(doc) {
    setDocuments([...documents, doc])
  }

  return (
    <DocumentsContext.Provider value={{ documents, newDocument }}>
      {children}
    </DocumentsContext.Provider>
  )
}

export function useDocuments() {
  return useContext(DocumentsContext)
}
