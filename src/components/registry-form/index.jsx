import React from 'react'
import Input from '../input'
import './style.scss'

function RegistryForm({ register, errors }) {
  return (
    <>
      <Input name="cep" label="CEP" register={register} required errors={errors} />
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
          <Input
            name="state"
            label="UF"
            register={register}
            required
            errors={errors}
          />
        </div>
      </div>
    </>
  )
}

export default RegistryForm
