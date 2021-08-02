import React from 'react'
import { useDocuments } from '../../contexts/documents'
import EmptyState from '../empty-state'
import icon from '../../assets/document-icon.svg'
import './styles.scss'
import DocumentCard from '../document-card'
import Loading from '../loading/index'

function DocumentsListCard() {
  const { documents, documentsLoading } = useDocuments()

  const imageIcon = () => {
    return (
      <div className="image-background">
        <img src={icon} alt="document icon" />
      </div>
    )
  }

  return (
    <>
      {documents.map(doc => (
        <div className="document-card" key={doc.id}>
          <DocumentCard doc={doc} />
        </div>
      ))}
      <Loading visible={documentsLoading}></Loading>
      {documents.length === 0 && !documentsLoading && (
        <div className="empty-state-container">
          <EmptyState message="Nenhum documento criado" image={imageIcon()} />
        </div>
      )}
    </>
  )
}

export default DocumentsListCard
