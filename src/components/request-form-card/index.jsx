import React from 'react'
import { useForm } from 'react-hook-form'
import Card from '../card/index'
import Input from '../input/index'
import InputSelect from '../input-select/index'
import Button from '../button/index'
import './style.scss'
import RegistryForm from '../registry-form'
import { useDocuments } from '../../contexts/documents'

function RequestFormCard() {
  const { newDocument } = useDocuments()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    newDocument(data)
    reset()
  }

  return (
    <Card headerTitle="Adicionar documentos ao pedido" headerBorder>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="document-name">
          <Input
            name="documentName"
            label="Nome do documento"
            register={register}
            required
            errors={errors}
          />
        </div>
        <div className="input-space">
          <InputSelect
            name="person"
            label="Tipo de Pessoa"
            register={register}
            errors={errors}
            required
            options={[
              { value: 'physical', text: 'Pessoa física' },
              { value: 'legal', text: 'Pessoa jurídica' }
            ]}
          />
        </div>
        <div className="input-space">
          <Input
            name="cpf"
            label="CPF"
            register={register}
            required
            errors={errors}
            mask={[
              /[1-9]/,
              /\d/,
              /\d/,
              '.',
              /\d/,
              /\d/,
              /\d/,
              '.',
              /\d/,
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/
            ]}
          />
        </div>
        <div className="input-space">
          <Input
            name="fullname"
            label="Nome completo"
            register={register}
            required
            errors={errors}
          />
        </div>
        <div className="registry-form">
          <h2 className="registry-title">Dados do cartório</h2>
          <RegistryForm register={register} errors={errors} />
          <Button buttonText="Criar documento" />
        </div>
      </form>
    </Card>
  )
}

export default RequestFormCard
