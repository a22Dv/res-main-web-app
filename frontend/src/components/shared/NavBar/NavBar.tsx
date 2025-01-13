import userIcon from '../../../assets/user.svg';
import listIcon from '../../../assets/list.svg';
import calendarIcon from '../../../assets/calendar.svg';
import homeIcon from '../../../assets/home.svg';
import styles from './NavBar.module.css';
import { Link } from 'react-router';

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <div className={styles.links}>
                <Link to='/home' className={styles.link}>
                    <div className={styles.icon}>
                        <img src={homeIcon} />
                        <p>Home</p>
                    </div>
                </Link>
                <Link to='/calendar' className={styles.link} >
                    <div className={styles.icon}>
                        <img src={calendarIcon} />
                        <p id={styles.calendar}>Calendar</p>
                    </div>
                </Link>
                <Link to='/tasklist' className={styles.link} replace>
                    <div className={styles.icon}>
                        <img src={listIcon} />
                        <p id={styles.list}>Tasks</p>
                    </div>
                </Link>
                <Link to='/profile' className={styles.link}>
                    <div className={styles.icon}>
                        <img src={userIcon} />
                        <p>Profile</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
export default NavBar;