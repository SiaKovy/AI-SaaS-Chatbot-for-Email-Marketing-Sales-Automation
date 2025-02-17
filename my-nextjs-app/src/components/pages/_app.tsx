import { ClerkProvider } from '@clerk/clerk-react';
import '../styles/globals.css';

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || ''}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;