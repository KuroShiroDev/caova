-- AlterTable
ALTER TABLE "Investment" RENAME CONSTRAINT "Investement_pkey" TO "Investment_pkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "totalBalance" BIGINT NOT NULL DEFAULT 0;

-- RenameForeignKey
ALTER TABLE "Investment" RENAME CONSTRAINT "Investement_projectId_fkey" TO "Investment_projectId_fkey";

-- RenameForeignKey
ALTER TABLE "Investment" RENAME CONSTRAINT "Investement_userId_fkey" TO "Investment_userId_fkey";
