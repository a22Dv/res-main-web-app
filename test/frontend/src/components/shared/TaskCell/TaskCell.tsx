import styles from './TaskCell.module.css';

interface TaskCellProps {
    taskDetails : Array<string>;
}

// ['RES3', 'T.Juezan', 'Performance Task # 3.1', 'Jan. 14, 2025', 'Jan. 21, 2025', '11:59PM']
const TaskCell = ({taskDetails} : TaskCellProps) => {

    // Defined one by one to increase code readability.
    const subjectName = taskDetails[0];
    const teacherName = taskDetails[1];
    const taskName = taskDetails[2];
    const dateStart = taskDetails[3];
    const dateEnd = taskDetails[4];
    const timeEnd = taskDetails[5];
    const taskDescription = taskDetails[6];

    return (
        <div className={styles.taskCell}>
            <div className={styles.mainBar}>
                <div className={styles.taskMainDetails}>
                    <h1>{taskName}</h1>
                    <p>{subjectName}</p>
                    <p>{teacherName}</p>
                </div>
                <div className={styles.taskMinorDetails}>
                    <p>{dateStart}</p>
                    <p>{dateEnd}</p>
                    <p>{timeEnd}</p>
                </div>
            </div>
            <div className={styles.taskDescription}>
                <p>{taskDescription}</p>
            </div>
        </div>
    );
}
export default TaskCell;