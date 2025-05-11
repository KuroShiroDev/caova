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

export const currencyFormat = (value: number, minimumFractionDigits: number = 0, maximumFractionDigits: number = 0) => {
  const formattedValue = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(value);

  return formattedValue;
};

export const calculateProgressPercentage = (projectValueActual: bigint, projectValueTotal: bigint): number => {
  if (projectValueTotal === BigInt(0)) {
    return 0;
  }
  return Number((projectValueActual * BigInt(100)) / projectValueTotal);
};

export const getFilenameFromUrl = (url: string): string => {
  if (!url) return '';

  const parts = url.split('/');
  return parts[parts.length - 1] || '';
};

export const getReadableFilename = (filename: string): string => {
  const match = filename.match(/^(cavoa-\d+)-/);
  if (match) {
    return match[1].replace(/-/g, ' ');
  }

  return filename;
};
