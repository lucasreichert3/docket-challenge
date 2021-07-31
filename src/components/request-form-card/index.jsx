import React from 'react'
import { useForm } from 'react-hook-form'
import Card from '../card/index'
import Input from '../input/index'
import InputSelect from '../input-select/index'
import './style.scss'

function RequestFormCard() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    console.log(data)
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
          <Input name="cpf" label="CPF" register={register} required errors={errors} />
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
        <button type="submit">Criar documento</button>
      </form>
    </Card>
  )
}

export default RequestFormCard
