// // filepath: /c:/Users/Seilt/source/repos/AI-SaaS-Chatbot-for-Email-Marketing-Sales-Automation/my-nextjs-app/pages/auth/sign-in.tsx
// import { useEffect } from 'react';
// import { useAuth, SignIn } from '@clerk/nextjs';
// import { useRouter } from 'next/navigation';

// export default function SignInPage() {
//   const { isSignedIn } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (isSignedIn) {
//       router.push('/dashboard');
//     }
//   }, [isSignedIn, router]);

//   return <SignIn />;
// }

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
        <SignIn />
      </SignedOut>
    </>
  );
}