import React from "react";

export interface InputProps {
  label?: string;
  placeholder: string;
  onChange(event : React.ChangeEvent<HTMLInputElement>) : void;
  value: string;
  error?: string;
  type?: string;
}