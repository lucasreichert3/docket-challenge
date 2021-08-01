import React, { useEffect } from 'react'
import { CEP_MASK } from '../../constans/MaskConstants'
import { searchCep } from '../../services/Cep'
import Input from '../input'
import './style.scss'

function RegistryForm({ register, errors, watch, setValue }) {
  const cepWatch = watch('cep')

  useEffect(() => {
    if (cepWatch && cepWatch.length === 9) {
      const callCepApi = async () => {
        const response = await searchCep(cepWatch)
        const { logradouro, localidade, uf } = response.data
        setValue('street', logradouro)
        setValue('city', localidade)
        setValue('state', uf)
      }

      setTimeout(() => callCepApi(), 500)
    }
  }, [cepWatch, setValue])

  return (
    <>
      <Input
        name="cep"
        label="CEP"
        register={register}
        required
        errors={errors}
        mask={CEP_MASK}
      />
      <div className="input-line">
        <div className="first-input">
          <Input name="street" label="Rua" register={register} required errors={errors} />
        </div>
        <div className="second-input">
          <Input
            name="Número"
            type="number"
            label="Número"
            register={register}
            required
            errors={errors}
          />
        </div>
      </div>
      <div className="input-line">
        <div className="first-input">
          <Input name="city" label="Cidade" register={register} required errors={errors} />
        </div>
        <div className="second-input">
          <Input name="state" label="UF" register={register} required errors={errors} />
        </div>
      </div>
    </>
  )
}

export default RegistryForm
