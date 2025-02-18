import React from 'react';
import { useAuth, useUser } from '@clerk/clerk-react';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My Next.js App!</h1>
      {isSignedIn ? (
        <p className={styles.description}>Hello, {user?.firstName}!</p>
      ) : (
        <p className={styles.description}>Please sign in to continue.</p>
      )}
    </div>
  );
};

export default Home;