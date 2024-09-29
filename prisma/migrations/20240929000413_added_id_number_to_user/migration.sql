-- AlterTable
ALTER TABLE "User" ADD COLUMN     "idNumber" TEXT,
ADD COLUMN     "idType" TEXT NOT NULL DEFAULT 'cedula',
ADD COLUMN     "phoneNumber" TEXT;
