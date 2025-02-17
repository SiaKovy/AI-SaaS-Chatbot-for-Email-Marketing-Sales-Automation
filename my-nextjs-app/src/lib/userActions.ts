import prisma from './prisma';

export async function createUser(user: { id: string; email: string; name?: string }) {
  try {
    const newUser = await prisma.user.create({
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
    return newUser;
  } catch (error) {
    console.error('Failed to create user:', error);
    throw error;
  }
}