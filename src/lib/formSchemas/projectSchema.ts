import { z } from 'zod';

export const projectSchema = z.object({
  title: z.string().min(1, {
    message: '* Requerido',
  }),
  description: z.string().min(1, {
    message: '* Requerido',
  }),
  address: z.string().min(1, {
    message: '* Requerido',
  }),
  projectValueTotal: z.coerce.number().min(1, {
    message: '* Requerido',
  }),
  startIncomeDate: z.union([z.coerce.date(), z.string()]),
  endIncomeDate: z.union([z.coerce.date(), z.string()]),
  country: z.string().min(1, {
    message: '* Requerido',
  }),
  department: z.string().min(1, {
    message: '* Requerido',
  }),
  city: z.string().min(1, {
    message: '* Requerido',
  }),
  minInvestmentAmount: z.coerce.number().min(1, {
    message: '* Requerido',
  }),
  propertyType: z.enum(['viviendaDeInteresSocial', 'viviendaDeInteresPrioritario'], {
    message: '* Requerido',
  }),
  squareMeters: z.coerce.number().min(1, {
    message: '* Requerido',
  }),
  bedrooms: z.coerce.number().min(1, {
    message: '* Requerido',
  }),
  bathrooms: z.coerce.number().min(1, {
    message: '* Requerido',
  }),
  rentalYieldsAnnualCash: z.coerce.number(),
  incomeFromValuationAnnualCash: z.coerce.number(),
  builder: z.string(),
  commonAreas: z.string(),
  projectLinks: z.string(),
  totalPropertyCost: z.coerce.number(),
  finishingCost: z.coerce.number(),
  basicEquipmentAndTestingCost: z.coerce.number(),
  legalCost: z.coerce.number(),
  cetificatesSNandRCost: z.coerce.number(),
  studyTitleCost: z.coerce.number(),
  companiesIncorporationCost: z.coerce.number(),
  accountServicesCost: z.coerce.number(),
  propertyAppraisal: z.coerce.number(),
  transactionCost: z.coerce.number(),
  searchAndAdvertisingFee: z.coerce.number(),
  contigenciesFee: z.coerce.number(),
});
