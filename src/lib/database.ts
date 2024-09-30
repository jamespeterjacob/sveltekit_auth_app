/* import prisma from '@prisma/client'; 

export const db = new prisma.PrismaClient();
 */
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default prisma