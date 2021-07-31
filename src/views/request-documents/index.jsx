import React from 'react'
import './style.scss'
import logo from '../../assets/logo.svg'
import RequestInfoCard from '../../components/request-info-card/index'
import RequestFormCard from '../../components/request-form-card/index'
import DocumentsListCard from '../../components/documents-list-card/index'

function RequestDocuments() {
  return (
    <>
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
            <h2 className="title">1 documento solicitado</h2>
            <DocumentsListCard />
          </div>
        </div>
      </main>
    </>
  )
}

export default RequestDocuments
