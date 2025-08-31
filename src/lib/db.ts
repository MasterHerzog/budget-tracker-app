import { PrismaClient } from "@prisma/client";

// Extend the global type definition to include a prisma instance
declare global {
  var prisma: PrismaClient | undefined;
}

// Use the existing global Prisma instance if it exists, 
// otherwise create a new one
export const db = global.prisma || new PrismaClient();

// In development, store the Prisma instance in the global scope
// This ensures hot reloading doesn't create multiple PrismaClient instances,
// which could otherwise exhaust the database connection limit
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}