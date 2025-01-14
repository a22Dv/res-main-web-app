import HyperLink from '../HyperLink/HyperLink';
import citLogoFull from '../../../assets/cit-logo-full.png';
import styles from './header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <img src={citLogoFull} className={styles.citLogo} />
            <div className={styles.links}>
                <HyperLink 
                    displayText='Moodle' 
                    fontSize={1.5} url='https://shs.cit.edu/my/' 
                    isNewTab={true}
                />
                <HyperLink 
                    displayText='Teams' 
                    fontSize={1.5} 
                    url='https://teams.microsoft.com/v2/' 
                    isNewTab={true}
                />
                <HyperLink 
                    displayText='A.I.M.S' 
                    fontSize={1.5} 
                    url='https://cituweb.pinnacle.com.ph/aims/students/stud.calendar.php' 
                    isNewTab={true}
                />
            </div>
        </div>
    );
}

export default Header;