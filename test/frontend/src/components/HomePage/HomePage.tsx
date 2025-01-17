// Import react components.
import Header from '../shared/Header/Header.tsx';
import NavBar from '../shared/NavBar/NavBar.tsx';
import { TasksAPI } from '../../../../backend/mock/API/API.ts';
import TaskCell from '../shared/TaskCell/TaskCell.tsx';

// Styling module.
import styles from './HomePage.module.css';

// Main entry.
const HomePage = () => {
    return (
        // Holds the entire page.
        <div className={styles.homePage}>
            {/*Holds the navigation bar. <div> wrapping is for the CSS to respect the flex style.
             Removing the div wrap will make the components overlap. DO NOT REMOVE.*/}
            <div>
                <NavBar/> 
            </div> 

            {/*Holds the content beside the navigation bar*/}
            <div className={styles.homePageContent}>

                {/*For the header. <div> wrapper is to prevent any styling issues.*/}
                <div>
                    <Header/>
                </div>

                {/*Holds the main content of the home page below the header.*/}
                <div className={styles.homePageMainContent}>
  
                    <div className={styles.leftHalfContent}>
                        <div className={styles.greeting}>
                            <h1>Welcome, Juan.</h1>
                            <p>Logged in as 12-3456-789</p>
                        </div>
                        <div className={styles.updateDetails}>
                            <h1>Latest Updates</h1>
                            <h2>You currently have:</h2>
                            <h3>6 pending tasks.</h3>
                            <h3>4 tasks which are due this week.</h3>
                            <h3>2 of which are due tomorrow.</h3>
                        </div>
                    </div>
                    <div className={styles.tasksSection}>
                        <TaskCell taskDetails={TasksAPI()[0]}/>
                        <TaskCell taskDetails={TasksAPI()[0]}/>
                        <TaskCell taskDetails={TasksAPI()[0]}/>
                        <TaskCell taskDetails={TasksAPI()[0]}/>
                        <TaskCell taskDetails={TasksAPI()[0]}/>
                        <TaskCell taskDetails={TasksAPI()[0]}/>
                        <TaskCell taskDetails={TasksAPI()[0]}/>
                        <TaskCell taskDetails={TasksAPI()[0]}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Default export.
export default HomePage;