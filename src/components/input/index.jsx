import React from 'react'
import MaskedInput from 'react-text-mask'
import './style.scss'

function Input({ label, register, required, name, type = 'text', errors, mask, minLength }) {
  return (
    <div className={`input-container ${errors[name] ? 'has-error' : ''}`}>
      <label htmlFor={name}>
        {label}: <span>{required ? '*' : ''}</span>
      </label>
      {mask && (
        <MaskedInput
          placeholder="Digite aqui..."
          type={type}
          id={name}
          guide={false}
          {...register(name, { required, minLength })}
          mask={mask}
        />
      )}
      {!mask && (
        <input
          placeholder="Digite aqui..."
          type={type}
          id={name}
          {...register(name, { required })}
        />
      )}
      <span className="error-message">
        {errors[name]?.type === 'required' && 'Campo obrigatório!'}
        {errors[name]?.type === 'minLength' && 'Formato inválido!'}
      </span>
    </div>
  )
}

export default Input
