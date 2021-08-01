import React from 'react'
import MaskedInput from 'react-text-mask'
import './style.scss'

function Input({ label, register, required, name, type = 'text', errors, mask }) {
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
          {...register(name, { required })}
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
      </span>
    </div>
  )
}

export default Input
