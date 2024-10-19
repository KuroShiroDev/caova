import { Almarai, Poppins } from 'next/font/google';

export const geistAlmarai = Almarai({
  weight: ['400', '700', '300'],
  variable: '--font-almarai',
  subsets: ['arabic'],
});

export const geistPoppins = Poppins({
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-poppins',
  subsets: ['latin'],
});
