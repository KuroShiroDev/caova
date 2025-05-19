/*
  Warnings:

  - You are about to drop the column `transaction_status` on the `Investement` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'CANCELLED');

-- AlterTable
ALTER TABLE "Investement" DROP COLUMN "transaction_status";

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "status" "TransactionStatus" NOT NULL DEFAULT 'PENDING';
