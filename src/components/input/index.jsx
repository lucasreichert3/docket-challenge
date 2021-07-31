import React from 'react'
import './style.scss'

function Input({ label, register, required, name, type = 'text', errors }) {
  return (
    <div className={`input-container ${errors[name] ? 'has-error' : ''}`}>
      <label htmlFor={name}>
        {label}: <span>{required ? '*' : ''}</span>
      </label>
      <input
        placeholder="Nome do documento..."
        type={type}
        id={name}
        {...register(name, { required })}
      />
      <span className="error-message">
        {errors[name]?.type === 'required' && 'Campo obrigatório!'}
      </span>
    </div>
  )
}

export default Input
