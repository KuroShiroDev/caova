import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const currencyFormat = (
  value: number,
  minimumFractionDigits: number = 0,
  maximumFractionDigits: number = 0
) => {
  const formattedValue = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(value);

  return formattedValue
};

export const calculateProgressPercentage = (projectValueActual: bigint, projectValueTotal: bigint): number => {
  if (projectValueTotal === BigInt(0)) {
    return 0; 
  }
  return Number((projectValueActual * BigInt(100)) / projectValueTotal);
};
