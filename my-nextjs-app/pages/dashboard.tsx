// filepath: /c:/Users/Seilt/source/repos/AI-SaaS-Chatbot-for-Email-Marketing-Sales-Automation/my-nextjs-app/pages/dashboard.tsx
import React from 'react';
import Sidebar from '../src/components/Sidebar';

const Dashboard: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '20px', padding: '10px' }}>
        <h1>Dashboard</h1>
        <p>This is a protected page.</p>
      </div>
    </div>
  );
};

export default Dashboard;