import React from "react"
import { InputProps } from "../types"



export const Input: React.FC<InputProps> = ({ styles, placeholder, value, onChange }) => {
  return (
    <input 
        className={`${styles} px-4 h-[38px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary appearance-none`}
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        onChange={onChange}
    />
  )
}
