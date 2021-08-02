import React, { useEffect, useState } from 'react'
import Card from '../card'
import { personType } from '../../constans/MaskConstants'
import './style.scss'
import { getMonth } from '../../constans/Month'

function DocumentCard({ doc }) {
  const [dateString, setDateString] = useState('')

  useEffect(() => {
    const date = new Date(doc.date)
    const dateValue = `${date.getDay() + 1} de ${getMonth(
      date.getMonth()
    )} de ${date.getFullYear()}`

    setDateString(dateValue)
  }, [doc])

  return (
    <Card key={doc.id} headerTitle={doc.documentName} headerBorder>
      <div className="info-content">
        <div className="doc-info">
          <h1 className="info-header">
            {doc.person === personType.physical ? 'Pessoa Física' : 'Pessoa Jurídica'}
          </h1>
          <div className="data-info">
            <p>Nome: {doc.fullname}</p>
            <p>Cpf: {doc.personDoc}</p>
          </div>
        </div>
        <div className="doc-info">
          <h1 className="info-header">Dados do cartório</h1>

          <div className="data-info">
            <p>CEP: {doc.cep}</p>
            <p>
              Rua: {doc.street} <span class="inline-info">Nº{doc.number}</span>
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
  )
}

export default DocumentCard
