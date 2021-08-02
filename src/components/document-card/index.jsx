import React, { useEffect, useState } from 'react'
import Card from '../card'
import { personType } from '../../constans/MaskConstants'
import './style.scss'
import { getMonth } from '../../constans/Month'
import { FaTrash } from 'react-icons/fa'
import Modal from '../modal'
import Button from '../button'
import { useDocuments } from '../../contexts/documents'
import Loading from '../loading/index'

function DocumentCard({ doc }) {
  const { deleteDocument } = useDocuments()
  const [dateString, setDateString] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (doc) {
      const date = new Date(doc.date)
      const dateValue = `${date.getDay() + 1} de ${getMonth(
        date.getMonth()
      )} de ${date.getFullYear()}`

      setDateString(dateValue)
    }
  }, [doc])

  const getTrashIcon = () => {
    return (
      <div className="trash-icon" onClick={() => handleShowModal(true)}>
        <FaTrash />
      </div>
    )
  }

  const getModalHeader = () => {
    return <h1 className="modal-header-title">Confirmar exclusão</h1>
  }

  const handleShowModal = show => {
    setShowModal(show)
  }

  const handleDocDelete = async () => {
    setLoading(true)
    await deleteDocument(doc.id)
  }

  const getModalContent = () => {
    return (
      <div className="delete-modal-content">
        <div className="delete-modal-text">
          <span>Tem certeza que deseja excluir este documento?</span>
        </div>

        <div className="modal-buttons-footer">
          <div className="modal-button modal-button-cancel">
            <Button
              buttonText="Cancelar"
              clickCallBack={() => handleShowModal(false)}
              outline
            />
          </div>
          <div className="modal-button-delete">
            <Button buttonText="Excluir" danger clickCallBack={handleDocDelete} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Modal
        showModal={showModal}
        modalCloseCallback={() => handleShowModal(false)}
        headerElement={getModalHeader()}
      >
        <Loading visible={loading}>{getModalContent()}</Loading>
      </Modal>
      <Card
        key={doc.id}
        headerTitle={doc.documentName}
        headerBorder
        headerContent={getTrashIcon()}
      >
        <div className="info-content">
          <div className="doc-info">
            <h1 className="info-header">
              {doc.person === personType.physical ? 'Pessoa Física' : 'Pessoa Jurídica'}
            </h1>
            <div className="data-info">
              <p>Nome: {doc.fullname}</p>
              <p>
                {doc.person === personType.physical ? 'CPF' : 'CNPJ'}: {doc.personDoc}
              </p>
            </div>
          </div>
          <div className="doc-info">
            <h1 className="info-header">Dados do cartório</h1>

            <div className="data-info">
              <p>CEP: {doc.cep}</p>
              <p>
                Rua: {doc.street} <span className="inline-info">Nº{doc.number}</span>
              </p>
              <p>
                Cidade: {doc.city} <span className="inline-info">UF: {doc.state}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>
            <strong>Data de criação:</strong> {dateString}
          </p>
        </div>
      </Card>
    </>
  )
}

export default DocumentCard
