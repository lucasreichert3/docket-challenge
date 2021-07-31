import React from 'react'
import './style.scss'

function InputSelect({ errors, name, label, required, register, options = [] }) {
  return (
    <div className={`input-container ${errors[name] != null ? 'has-error' : ''}`}>
      <label htmlFor={name}>
        {label}: <span>{required ? '*' : ''}</span>
      </label>
      <select name={name} {...register(name, { required })}>
        {options?.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>

      <span className="error-message">
        {errors[name]?.type === 'required' && 'Campo obrigatório!'}
      </span>
    </div>
  )
}

export default InputSelect
