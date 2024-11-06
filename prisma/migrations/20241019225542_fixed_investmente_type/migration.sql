/*
  Warnings:

  - You are about to drop the column `minInvesmentAmount` on the `Project` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `minInvestmentAmount` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Investement" DROP CONSTRAINT "Investement_userId_fkey";

-- AlterTable
ALTER TABLE "Investement" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "minInvesmentAmount",
ADD COLUMN     "minInvestmentAmount" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "userId" DROP DEFAULT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("userId");
DROP SEQUENCE "User_userId_seq";

-- AddForeignKey
ALTER TABLE "Investement" ADD CONSTRAINT "Investement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
