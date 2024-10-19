/*
  Warnings:

  - You are about to drop the column `end_income_date` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `monthly_dividends_per_action` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `start_income_date` on the `Project` table. All the data in the column will be lost.
  - Added the required column `bathrooms` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bedrooms` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minInvesmentAmount` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyType` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `squareMeters` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('viviendaDeInteresSocial', 'viviendaDeInteresPrioritario');

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "end_income_date",
DROP COLUMN "monthly_dividends_per_action",
DROP COLUMN "start_income_date",
ADD COLUMN     "accountServicesCost" BIGINT,
ADD COLUMN     "basicEquipmentAndTestingCost" BIGINT,
ADD COLUMN     "bathrooms" INTEGER NOT NULL,
ADD COLUMN     "bedrooms" INTEGER NOT NULL,
ADD COLUMN     "builder" TEXT,
ADD COLUMN     "cetificatesSNandRCost" BIGINT,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "commonAreas" TEXT[],
ADD COLUMN     "companiesIncorporationCost" BIGINT,
ADD COLUMN     "contigenciesFee" BIGINT,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "department" TEXT NOT NULL,
ADD COLUMN     "endIncomeDate" TIMESTAMP(3),
ADD COLUMN     "finishingCost" BIGINT,
ADD COLUMN     "incomeFromValuationAnnualCash" DOUBLE PRECISION,
ADD COLUMN     "legalCost" BIGINT,
ADD COLUMN     "minInvesmentAmount" INTEGER NOT NULL,
ADD COLUMN     "projectLinks" TEXT,
ADD COLUMN     "propertyAppraisal" BIGINT,
ADD COLUMN     "propertyType" "PropertyType" NOT NULL,
ADD COLUMN     "rentalYieldsAnnualCash" DOUBLE PRECISION,
ADD COLUMN     "searchAndAdvertisingFee" BIGINT,
ADD COLUMN     "squareMeters" INTEGER NOT NULL,
ADD COLUMN     "startIncomeDate" TIMESTAMP(3),
ADD COLUMN     "studyTitleCost" BIGINT,
ADD COLUMN     "totalPropertyCost" BIGINT,
ADD COLUMN     "transactionCost" BIGINT;
