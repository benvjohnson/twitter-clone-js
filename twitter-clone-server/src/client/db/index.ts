import { PrismaClient } from "@prisma/client";

/**
 * Prisma Query Logger
 */

export const prismaClient = new PrismaClient({ log: ["query"] });
