import React, { createContext, useContext, useEffect, useState } from 'react'
import { getAll, postNewDocument } from '../services/Documents'

const DocumentsContext = createContext({})

export const DocumentsProvider = ({ children }) => {
  const [documents, setDocuments] = useState([])
  const [documentsLoading, setDocumentsLoading] = useState(false)

  useEffect(() => {
    const getDocumentsFromService = async () => {
      setDocumentsLoading(true)
      const response = await getAll()
      setDocuments(response.data)
      setDocumentsLoading(false)
    }

    getDocumentsFromService()
  }, [])

  async function newDocument(doc) {
    const response = await postNewDocument(doc)
    setDocuments([...documents, response.data])
  }

  return (
    <DocumentsContext.Provider value={{ documents, newDocument, documentsLoading }}>
      {children}
    </DocumentsContext.Provider>
  )
}

export function useDocuments() {
  return useContext(DocumentsContext)
}
