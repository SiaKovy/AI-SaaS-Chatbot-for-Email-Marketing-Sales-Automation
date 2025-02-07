import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => (
  <div>
    <SignUp path="/auth/sign-up" routing="path" signInUrl="/auth/sign-in" />
  </div>
);

export default SignUpPage;