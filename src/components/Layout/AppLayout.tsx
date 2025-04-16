import React from 'react';
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import styles from './AppLayout.module.css';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <div className={styles.mainWrapper}>
        <NavigationBar />
        <main className={styles.contentArea}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;