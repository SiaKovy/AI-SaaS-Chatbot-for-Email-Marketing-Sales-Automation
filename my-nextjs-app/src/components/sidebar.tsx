// filepath: /c:/Users/Seilt/source/repos/AI-SaaS-Chatbot-for-Email-Marketing-Sales-Automation/my-nextjs-app/src/components/Sidebar.tsx
import React, { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={isExpanded ? styles.sidebarExpanded : styles.sidebarCollapsed}>
      <button onClick={toggleSidebar} className={styles.toggleButton}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      {isExpanded && (
        <div className={styles.content}>
          <p>Sidebar content goes here</p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;