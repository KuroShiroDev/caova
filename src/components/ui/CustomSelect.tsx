import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from './label';

interface Options {
  name: string;
  value: string;
}

interface Props {
  label?: string;
  options: Options[];
  placeHolder?: string;
  onChange?: (value: string) => void;
}

const CustomSelect = ({ label, options, placeHolder = '', onChange }: Props) => {
  return (
    <div className="min-w-[200px]">
      {label && <Label>{label}</Label>}
      <Select onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder={placeHolder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CustomSelect;
