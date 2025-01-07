import { useState, useEffect } from "react";
import { Tasks } from "../../../../backend/mock/mockAPI";
import HyperLink from '../shared/HyperLink/HyperLink.tsx';
import styles from './Dashboard.module.css';
import citLogo from '../../assets/cit-horizontal.png';
import userLogo from '../../assets/file-user-fill.svg';
import settingsLogo from '../../assets/settings-3-fill.svg';
import listLogo from '../../assets/list-check-3.svg';
import calendarLogo from '../../assets/calendar-schedule-fill.svg';
import NavButton from '../shared/NavButton/NavButton.tsx';
import TaskList from '../TaskList/TaskList.tsx';
import Button from '../shared/Button/Button.tsx';

interface DashboardProps {
    userInfo : string[] | null;
    handleIsLoggedIn : (isLoggedIn : boolean) => void;
}
const Dashboard = ({userInfo, handleIsLoggedIn} : DashboardProps) => {
    if (!userInfo) {
        handleIsLoggedIn(false);
    } 
    // 0: Dashboard, 1: Calendar, 2: Task List, 3: User Profile, 4: Settings
    const [page, setPage] = useState<number>(0);
    const handleChangePage = (pageNumber : number) => {
        setPage(pageNumber);
    }
    const [tasks, setTasks] = useState<string[][] | null>(null);
    useEffect(() => {
      const userTasks = Tasks({userData : userInfo});
      setTasks(userTasks); 
    }, [userInfo]); 

    return (
        <div className={styles.dashboard}>
            <nav className={styles.nav}>
                <NavButton iconSource={calendarLogo} text="Calendar" onClick={handleChangePage} pageValue={1}/>
                <NavButton iconSource={listLogo} text="Task List" onClick={handleChangePage} pageValue={2}/>
                <NavButton iconSource={userLogo} text="Profile" onClick={handleChangePage} pageValue={3}/>
                <NavButton iconSource={settingsLogo} text="Settings" onClick={handleChangePage} pageValue={4}/>
            </nav>
            <div className={styles.content}>
                <header className={styles.header}>
                    <img src={citLogo} className={styles.headerLogo}></img>
                    <div className={styles.linksContainer}>
                        <HyperLink url='https://shs.cit.edu/my/' showText='Moodle' fontSize={1.2}/>
                        <HyperLink url='https://teams.microsoft.com/v2/' showText='Teams' fontSize={1.2}/>
                        <HyperLink url='https://cituweb.pinnacle.com.ph/aims/students/' showText='AIMS' fontSize={1.2}/>
                    </div>
                </header>
                <body className={styles.body}>
                    <div className={styles.greeting}>
                        <h1>Welcome, {userInfo?.[3]}</h1>
                    </div>
                    <TaskList tasks={tasks} />
                </body>
            </div>
        </div>
    );   
}
export default Dashboard;