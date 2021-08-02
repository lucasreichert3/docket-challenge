import React from 'react'
import './style.scss'
import logo from '../../assets/logo.svg'
import RequestInfoCard from '../../components/request-info-card/index'
import RequestFormCard from '../../components/request-form-card/index'
import DocumentsListCard from '../../components/documents-list-card/index'
import { useDocuments } from '../../contexts/documents'
import FeedbackMessage from '../../components/feedback-message'
import { useFeedbackMessage } from '../../contexts/feedback-message'

function RequestDocuments() {
  const { documents } = useDocuments()
  const { visible, message, removeMessage } = useFeedbackMessage()

  return (
    <>
      <FeedbackMessage visible={visible} message={message} closeCallback={removeMessage} />
      <header className="header">
        <img src={logo} alt="logo" />
      </header>
      <main className="main">
        <div className="request-header">Pedido #1</div>
        <div className="request-info">
          <RequestInfoCard />
        </div>
        <div className="request-documents">
          <div className="form">
            <RequestFormCard />
          </div>
          <div className="list">
            {documents.length > 0 && (
              <h2 className="title">
                {documents.length} documento
                {documents.length === 1 ? '' : 's'} solicitado
              </h2>
            )}
            <DocumentsListCard />
          </div>
        </div>
      </main>
    </>
  )
}

export default RequestDocuments
