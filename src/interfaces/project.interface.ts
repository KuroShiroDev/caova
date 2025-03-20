import { Project } from "@prisma/client";

export interface CreateProject {
  title: string;
  description: string;
  address: string;
  projectValueTotal: number;
  startIncomeDate?: Date;
  endIncomeDate?: Date;
  country: string;
  department: string;
  city: string;
  minInvestmentAmount: number;
  propertyType: 'viviendaDeInteresSocial' | 'viviendaDeInteresPrioritario';
  squareMeters: number;
  bedrooms: number;
  bathrooms: number;
  rentalYieldsAnnualCash?: number;
  incomeFromValuationAnnualCash?: number;
  builder?: string;
  commonAreas: string[];
  projectLinks?: string;
  totalPropertyCost?: number;
  finishingCost?: number;
  basicEquipmentAndTestingCost?: number;
  legalCost?: number;
  cetificatesSNandRCost?: number;
  studyTitleCost?: number;
  companiesIncorporationCost?: number;
  accountServicesCost?: number;
  propertyAppraisal?: number;
  transactionCost?: number;
  searchAndAdvertisingFee?: number;
  contigenciesFee?: number;
}


export interface IProject extends Project {
  totalInvestmentAmount?: number;
}