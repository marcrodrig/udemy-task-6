import React from 'react'
import { TextareaProps } from './interface'
import './style.css'

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({placeholder, label, onChange, value, error}, ref) => {
  const errorClassName = error ? 'error' : ''
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <br/>
        <textarea rows={10} cols={50} placeholder={placeholder} value={value} onChange={onChange}></textarea><br/>
     
    </>
  )
}
  
  
);

export default Textarea
