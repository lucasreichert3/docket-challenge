import React from 'react'
import Card from '../card/index'
import './style.scss'

function RequestInfoCard() {
  const getStatus = currentStatus => {
    const inProgress = currentStatus === 'IN_PROGRESS'
    return (
      <div className="status">
        <div className={`${inProgress ? 'in-progress' : 'done'} status-badge`}></div>
        <span>{inProgress ? 'Em andamento' : 'Finalizado'}</span>
      </div>
    )
  }

  return (
    <Card
      headerTitle="Lead: Documento para criar contrato"
      headerContent={getStatus('IN_PROGRESS')}
    >
      <div className="info">
        <p>
          <strong>Observação:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aliquam sollicitudin commodo faucibus. Nullam ut pharetra turpis. Vestibulum molestie
          turpis ac tortor dapibus porttitor. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Etiam in elit vitae ligula consectetur
          hendrerit id id odio. Vestibulum volutpat gravida arcu sit amet tempus. In rhoncus
          leo vel dolor convallis gravida id a nulla.
        </p>
        <div className="user-info">
          <p>
            <strong>Criado por:</strong> Lucas Reichert
          </p>
          <p>
            <strong>Data de criação:</strong> 31 de julho de 2021
          </p>
        </div>
      </div>
    </Card>
  )
}

export default RequestInfoCard
