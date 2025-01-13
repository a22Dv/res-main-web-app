import Header from "../shared/Header/Header";
import NavBar from "../shared/NavBar/NavBar";
import styles from "./TaskList.module.css";

const TaskList = () => {
    return (
        <div className={styles.taskList}>
            <div>
                <NavBar/>
            </div>
            <div className={styles.taskListContent}>
                <Header/>
                <div className={styles.taskListMainContent}>
                    <h1>Test Tasklist.</h1>
                </div>
            </div>
        </div>
    );
}
export default TaskList;