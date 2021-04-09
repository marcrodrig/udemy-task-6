import React from 'react'
import { InputProps } from './interface'
import './style.css'

const Input = React.forwardRef<HTMLInputElement, InputProps>(({placeholder, label, onChange, value, error, type}, ref) => {
  const errorClassName = error ? 'error' : ''
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <br/>
      <input placeholder={placeholder} className={`input ${errorClassName}`} type={type} name={label} value={value} onChange={onChange}/>
      <br/>
    </>
  )
}
  
  
);

export default Input
