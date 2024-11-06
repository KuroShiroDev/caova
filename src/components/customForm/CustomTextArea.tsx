import React from 'react';
import CustomInput from './CustomInput';
import { UseFormReturn } from 'react-hook-form';
import { Textarea } from '../ui/textarea';

interface CustomTextAreaProps {
  form: UseFormReturn<any>;
  label: string;
  name: string;
  description?: string;
  placeholder?: string;
  className?: string;
}

const CustomTextArea = ({ form, label, name, description, placeholder, className }: CustomTextAreaProps) => {
  return (
    <CustomInput form={form} label={label} name={name} description={description} className={className}>
      <Textarea placeholder={placeholder} />
    </CustomInput>
  );
};

export default CustomTextArea;
