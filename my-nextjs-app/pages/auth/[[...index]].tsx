// filepath: /c:/Users/Seilt/source/repos/AI-SaaS-Chatbot-for-Email-Marketing-Sales-Automation/my-nextjs-app/pages/auth/[[...index]].tsx
import { useEffect } from 'react';
import { SignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard if already signed in
    if (typeof window !== 'undefined' && window.Clerk?.user) {
      router.push('/dashboard');
    }
  }, [router]);

  return (
    <>
      <SignedIn>
        {() => {
          router.push('/dashboard');
          return null;
        }}
      </SignedIn>
      <SignedOut>
        <SignIn routing="path" path="/auth/sign-in" />
      </SignedOut>
    </>
  );
}