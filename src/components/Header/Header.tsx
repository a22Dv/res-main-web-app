import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logoWTextRight.png'; // Make sure this path is correct

const Header: React.FC = () => {
  // Placeholder links - replace '#' with actual URLs
  const links = {
    teams: 'https://teams.microsoft.com/v2/',
    aims: 'https://cituweb.pinnacle.com.ph/aims/students/',
    moodle: 'https://shs.cit.edu/my/',
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="App Logo" className={styles.logo} />
        <nav className={styles.navLinks}>
          <a href={links.teams} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Teams
          </a>
          <a href={links.aims} target="_blank" rel="noopener noreferrer" className={styles.link}>
            AIMS
          </a>
          <a href={links.moodle} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Moodle
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;