/*
  Warnings:

  - You are about to drop the column `external_id` on the `Transaction` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[externalId]` on the table `Transaction` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Transaction_external_id_key";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "external_id",
ADD COLUMN     "externalId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_externalId_key" ON "Transaction"("externalId");
