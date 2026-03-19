import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "@/lib/generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
  prismaDbUrl?: string;
};

function createPrismaClient(dbUrl: string) {
  // Keep adapter pointing at the same DB Prisma CLI initialized.
  const adapter = new PrismaBetterSqlite3({ url: dbUrl });
  return new PrismaClient({ adapter });
}

const dbUrl = process.env.DATABASE_URL ?? "file:./dev.db";

export const prisma =
  globalForPrisma.prisma && globalForPrisma.prismaDbUrl === dbUrl
    ? globalForPrisma.prisma
    : createPrismaClient(dbUrl);

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prismaDbUrl = dbUrl;
