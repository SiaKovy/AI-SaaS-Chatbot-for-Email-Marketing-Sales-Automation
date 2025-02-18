import { NextResponse } from 'next/server';
import { createUser } from '../../../../lib/userActions';

export async function POST(req: Request) {
  const { user } = await req.json();

  if (!user) {
    return NextResponse.json({ error: 'User data is missing' }, { status: 400 });
  }

  try {
    const newUser = await createUser({
      id: user.id,
      email: user.email,
      name: user.name,
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}