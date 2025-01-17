import Header from "../shared/Header/Header";
import NavBar from "../shared/NavBar/NavBar";
import styles from "./TaskList.module.css";
import { TasksAPI } from '../../../../backend/mock/API/API.ts';
import TaskCell from '../shared/TaskCell/TaskCell.tsx';

const TaskList = () => {
    return (
        <div className={styles.taskList}>
            <div>
                <NavBar/>
            </div>
            <div className={styles.taskListContent}>
                <Header/>
                <div className={styles.taskListMainContent}>
                    <h1>Current Tasks</h1>
                    <TaskCell taskDetails={TasksAPI()[0]}/>
                    <TaskCell taskDetails={TasksAPI()[0]}/>
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
    );
}
export default TaskList;