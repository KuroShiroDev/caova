import React from 'react'
import CustomInput from './CustomInput'
import { Input } from "@/components/ui/input"
import { UseFormReturn } from 'react-hook-form'

interface CustomTextInputProps {
  form: UseFormReturn<any>
  label: string
  name: string
  description?: string
  placeholder?: string
  className?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'date'
}

const CustomTextInput = ({ form, label, name, description, placeholder, className, type }: CustomTextInputProps) => {
  return (
    <CustomInput form={form} label={label} name={name }description={description}  className={className} >
         <Input placeholder={placeholder} type={type}/>
    </CustomInput>
  )
}

export default CustomTextInput