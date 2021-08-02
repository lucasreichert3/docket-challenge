import React from 'react'
import { useDocuments } from '../../contexts/documents'
import EmptyState from '../empty-state'
import icon from '../../assets/document-icon.svg'
import './styles.scss'
import DocumentCard from '../document-card'

function DocumentsListCard() {
  const { documents } = useDocuments()

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
        <DocumentCard key={doc.id} doc={doc} />
      ))}
      {documents.length === 0 && (
        <div className="empty-state-container">
          <EmptyState message="Nenhum documento criado" image={imageIcon()} />
        </div>
      )}
    </>
  )
}

export default DocumentsListCard
