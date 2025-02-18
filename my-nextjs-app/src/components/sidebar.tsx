// filepath: /c:/Users/Seilt/source/repos/AI-SaaS-Chatbot-for-Email-Marketing-Sales-Automation/my-nextjs-app/src/components/Sidebar.tsx
import React, { useState } from 'react';
import MenuItem from './MenuItem';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMenuItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div className={isExpanded ? styles.sidebarExpanded : styles.sidebarCollapsed}>
      <button onClick={toggleSidebar} className={styles.toggleButton}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      <div className={styles.menu}>
        <MenuItem
          icon={<span>🏠</span>}
          label="Home"
          isExpanded={isExpanded}
          isActive={activeItem === 'home'}
          onClick={() => handleMenuItemClick('home')}
        />
        <MenuItem
          icon={<span>📊</span>}
          label="Dashboard"
          isExpanded={isExpanded}
          isActive={activeItem === 'dashboard'}
          onClick={() => handleMenuItemClick('dashboard')}
        />
        <MenuItem
          icon={<span>⚙️</span>}
          label="Settings"
          isExpanded={isExpanded}
          isActive={activeItem === 'settings'}
          onClick={() => handleMenuItemClick('settings')}
        />
      </div>
    </div>
  );
};

export default Sidebar;