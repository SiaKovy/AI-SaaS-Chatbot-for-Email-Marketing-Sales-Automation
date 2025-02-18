// filepath: /c:/Users/Seilt/source/repos/AI-SaaS-Chatbot-for-Email-Marketing-Sales-Automation/my-nextjs-app/pages/auth/sign-up.tsx
import { useEffect } from 'react';
import { useAuth, SignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push('/dashboard');
    }
  }, [isSignedIn, router]);

  return <SignUp />;
}