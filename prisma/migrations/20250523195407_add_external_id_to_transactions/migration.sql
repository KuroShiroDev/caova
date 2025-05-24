/*
  Warnings:

  - A unique constraint covering the columns `[external_id]` on the table `Transaction` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "external_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_external_id_key" ON "Transaction"("external_id");
