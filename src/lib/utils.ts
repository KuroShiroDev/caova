import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (value: Date) => {
  if (value instanceof Date) {
    const year = value.getUTCFullYear();
    const month = String(value.getUTCMonth() + 1).padStart(2, '0');
    const day = String(value.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  return value;
};

export const generateLink = (url: string, params: Record<string, any>) => {
  const queryString = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
  return `${url}?${queryString}`;
};
