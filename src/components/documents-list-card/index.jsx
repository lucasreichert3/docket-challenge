import React from 'react'
import { useDocuments } from '../../contexts/documents'
import Card from '../card/index'
import EmptyState from '../empty-state'
import icon from '../../assets/document-icon.svg'
import './styles.scss'

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
      {documents.map((document, i) => (
        <Card key={i} headerTitle={document.documentName} headerBorder>
          <span>teste</span>
        </Card>
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
