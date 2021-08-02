import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Card from '../card/index'
import Input from '../input/index'
import InputSelect from '../input-select/index'
import Button from '../button/index'
import './style.scss'
import RegistryForm from '../registry-form'
import { useDocuments } from '../../contexts/documents'
import { CNPJ_MASK, CPF_MASK, personType } from '../../constans/MaskConstants'
import Loading from '../loading/index'

const personDocDefaulValue = { label: 'Cpf', mask: CPF_MASK }

function RequestFormCard() {
  const { newDocument } = useDocuments()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    setFocus 
  } = useForm()
  const personTypeWatch = watch('person')
  const [personDocLabel, setPersonDocLabel] = useState(personDocDefaulValue)
  const [saveLoading, setSavelLoading] = useState(false)

  useEffect(() => {
    const personDocLabelValue =
      personTypeWatch === personType.legal
        ? { label: 'Cnpj', mask: CNPJ_MASK }
        : personDocDefaulValue
    setPersonDocLabel(personDocLabelValue)
  }, [personTypeWatch])

  const onSubmit = async data => {
    setSavelLoading(true)
    await newDocument({ ...data, date: Date.now() })
    reset()
    setSavelLoading(false)
  }

  return (
    <Card headerTitle="Adicionar documentos ao pedido" headerBorder>
      <Loading visible={saveLoading}>
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
                { value: personType.physical, text: 'Pessoa física' },
                { value: personType.legal, text: 'Pessoa jurídica' }
              ]}
            />
          </div>
          <div className="input-space">
            <Input
              name="personDoc"
              label={personDocLabel.label}
              register={register}
              required
              errors={errors}
              mask={personDocLabel.mask}
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
            <RegistryForm
              register={register}
              errors={errors}
              watch={watch}
              setValue={setValue}
              setFocus={setFocus}
            />
            <Button buttonText="Criar documento" />
          </div>
        </form>
      </Loading>
    </Card>
  )
}

export default RequestFormCard
