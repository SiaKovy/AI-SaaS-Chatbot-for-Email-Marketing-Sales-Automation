// filepath: /c:/Users/Seilt/source/repos/AI-SaaS-Chatbot-for-Email-Marketing-Sales-Automation/my-nextjs-app/src/components/MenuItem.tsx
import React from 'react';
import styles from './MenuItem.module.css';

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  isExpanded: boolean;
  isActive: boolean;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, isExpanded, isActive, onClick }) => {
  return (
    <div className={`${styles.menuItem} ${isActive ? styles.active : ''}`} onClick={onClick}>
      <div className={styles.icon}>{icon}</div>
      {isExpanded && <div className={styles.label}>{label}</div>}
    </div>
  );
};

export default MenuItem;