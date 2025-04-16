import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from './NavigationBar.module.css';
// Consider using an icon library like react-icons later
// import { FaHome, FaTasks, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const NavigationBar: React.FC = () => {
  const { userId, logout } = useAuth();
  const navigate = useNavigate();
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const schoolYear = "A.Y. 2024-2025"; // Hardcoded as requested

  const handleLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    console.log("Logout click!")
    logout();
    setProfileMenuOpen(false); // Close menu on logout
    navigate('/login', { replace: true }); // Redirect to login after logout
    
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  // Define NavLink class based on active state
  const getNavLinkClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? `${styles.navItem} ${styles.activeLink}` : styles.navItem;
  };

  return (
    <>
      <nav className={styles.navBar}>
        <NavLink to="/" className={getNavLinkClass} end>
          {/* <FaHome size={20} /> */}
          <span className={styles.navText}>Home</span>
        </NavLink>
        <NavLink to="/tasklist" className={getNavLinkClass}>
          {/* <FaTasks size={20} /> */}
          <span className={styles.navText}>Tasklist</span>
        </NavLink>
        <div className={styles.profileContainer}>
          <button onClick={toggleProfileMenu} className={`${styles.navItem} ${styles.profileButton}`}>
            {/* <FaUserCircle size={20} /> */}
            <span className={styles.navText}>Profile</span>
          </button>

          {isProfileMenuOpen && (
            <div className={styles.profileMenu}>
              <div className={styles.menuItem}>User: {userId}</div>
              <div className={styles.menuItem}>Name: Juan Dela Cruz</div>
              <div className={styles.menuItem}>Section: Virtue</div>
              <div className={styles.menuItem}>School Year: {schoolYear}</div>
            </div>
          )}
        </div>
        <button onClick={handleLogout} className={`${styles.navItem} ${styles.logoutButton}`}>
                {/* <FaSignOutAlt /> */}
                <span>Log Out</span>
              </button>
      </nav>
      {/* Optional: Overlay to close menu when clicking outside */}
      {isProfileMenuOpen && <div className={styles.overlay} onClick={toggleProfileMenu}></div>}
    </>
  );
};

export default NavigationBar;