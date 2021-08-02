import React, { useEffect, useState } from 'react'
import { CEP_MASK } from '../../constans/MaskConstants'
import { searchCep } from '../../services/Cep'
import Input from '../input'
import Loading from '../loading/index'
import './style.scss'

function RegistryForm({ register, errors, watch, setValue, setFocus }) {
  const cepWatch = watch('cep')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (cepWatch && cepWatch.length === 9) {
      const callCepApi = async () => {
        const response = await searchCep(cepWatch)
        const { logradouro, localidade, uf } = response.data
        setValue('street', logradouro)
        setValue('city', localidade)
        setValue('state', uf)
        setFocus('number')
      }

      setTimeout(() => {
        setLoading(true)
        callCepApi().then(() => setLoading(false))
      }, 500)
    }
  }, [cepWatch, setValue, setFocus])

  return (
    <Loading visible={loading}>
      <Input
        name="cep"
        label="CEP"
        register={register}
        required
        errors={errors}
        mask={CEP_MASK}
        minLength={9}
      />
      <div className="input-line">
        <div className="first-input">
          <Input name="street" label="Rua" register={register} required errors={errors} />
        </div>
        <div className="second-input">
          <Input
            name="number"
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
    </Loading>
  )
}

export default RegistryForm
