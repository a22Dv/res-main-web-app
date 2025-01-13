import NavBar from '../shared/NavBar/NavBar';
import Header from '../shared/Header/Header';
import styles from './Calendar.module.css';

const Calendar = () => {
    return (
        <div className={styles.calendar}>
            <div>
                <NavBar/>
            </div>
            <div className={styles.calendarContent}>
                <div>
                    <Header/>
                </div>
                <div className={styles.calendarMainContent}>
                    <h1>Test Calendar.</h1>
                </div>
            </div>
        </div>
    );
}
export default Calendar;