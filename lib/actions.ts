'use server';
import { revalidatePath } from 'next/cache';
import prisma from '@/lib/prisma';

// export const addTodo = async (data: FormData) => {
//   const name = data.get('name') as string;
//   await prisma.user.create({ data: { name } });
//   revalidatePath('/todos');
// };