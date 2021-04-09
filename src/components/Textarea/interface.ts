import React from 'react'

export interface TextareaProps {
  label?: string;
  placeholder: string;
  onChange(event : React.ChangeEvent<HTMLTextAreaElement>) : void;
  value: string;
  error?: string;
}