import React, { createContext, useContext, useEffect, useState } from 'react'
import { deleteDoc, getAll, postNewDocument } from '../services/Documents'
import { useFeedbackMessage } from './feedback-message'

const DocumentsContext = createContext({})

export const DocumentsProvider = ({ children }) => {
  const [documents, setDocuments] = useState([])
  const [documentsLoading, setDocumentsLoading] = useState(false)
  const { showMessage } = useFeedbackMessage()

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
    showMessage('Documento criado com successo!')
  }

  async function deleteDocument(id) {
    await deleteDoc(id)
    let newDocumentsList = [...documents]
    newDocumentsList = newDocumentsList.filter(doc => doc.id !== id)
    setDocuments([...newDocumentsList])
    showMessage('Documento excluído com successo!')
  }

  return (
    <DocumentsContext.Provider
      value={{ documents, newDocument, documentsLoading, deleteDocument }}
    >
      {children}
    </DocumentsContext.Provider>
  )
}

export function useDocuments() {
  return useContext(DocumentsContext)
}
