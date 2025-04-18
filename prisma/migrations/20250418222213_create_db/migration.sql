-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'user');

-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('viviendaDeInteresSocial', 'viviendaDeInteresPrioritario');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('RECHARGE', 'SPEND', 'WITHDRAWAL');

-- CreateTable
CREATE TABLE "User" (
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "identificationImgLink" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'user',
    "idNumber" TEXT,
    "idType" TEXT NOT NULL DEFAULT 'cedula',
    "phoneNumber" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Project" (
    "title" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "description" TEXT,
    "projectValueTotal" BIGINT,
    "projectValueActual" BIGINT,
    "media" TEXT[],
    "documents" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "accountServicesCost" BIGINT,
    "basicEquipmentAndTestingCost" BIGINT,
    "bathrooms" INTEGER NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "builder" TEXT,
    "cetificatesSNandRCost" BIGINT,
    "city" TEXT NOT NULL,
    "commonAreas" TEXT[],
    "companiesIncorporationCost" BIGINT,
    "contigenciesFee" BIGINT,
    "country" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "endIncomeDate" TIMESTAMP(3),
    "finishingCost" BIGINT,
    "incomeFromValuationAnnualCash" DOUBLE PRECISION,
    "legalCost" BIGINT,
    "projectLinks" TEXT,
    "propertyAppraisal" BIGINT,
    "propertyType" "PropertyType" NOT NULL,
    "rentalYieldsAnnualCash" DOUBLE PRECISION,
    "searchAndAdvertisingFee" BIGINT,
    "squareMeters" INTEGER NOT NULL,
    "startIncomeDate" TIMESTAMP(3),
    "studyTitleCost" BIGINT,
    "totalPropertyCost" BIGINT,
    "transactionCost" BIGINT,
    "status" TEXT NOT NULL DEFAULT 'inactivo',
    "projectId" SERIAL NOT NULL,
    "minInvestmentAmount" INTEGER NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("projectId")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "amount" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "transactionId" SERIAL NOT NULL,
    "type" "TransactionType" NOT NULL,
    "walletId" INTEGER NOT NULL,
    "investmentId" INTEGER,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("transactionId")
);

-- CreateTable
CREATE TABLE "Investement" (
    "amount" BIGINT NOT NULL,
    "transaction_status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "investmentId" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "Investement_pkey" PRIMARY KEY ("investmentId")
);

-- CreateTable
CREATE TABLE "Wallet" (
    "walletId" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "balance" BIGINT NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Wallet_pkey" PRIMARY KEY ("walletId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Project_title_key" ON "Project"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_userId_key" ON "Wallet"("userId");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "Wallet"("walletId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_investmentId_fkey" FOREIGN KEY ("investmentId") REFERENCES "Investement"("investmentId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Investement" ADD CONSTRAINT "Investement_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("projectId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Investement" ADD CONSTRAINT "Investement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wallet" ADD CONSTRAINT "Wallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
