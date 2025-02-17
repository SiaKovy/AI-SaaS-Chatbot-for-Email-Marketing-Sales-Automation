import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => (
  <div>
    <SignIn path="/auth/sign-in" routing="path" signUpUrl="/auth/sign-up" />
  </div>
);

export default SignInPage;