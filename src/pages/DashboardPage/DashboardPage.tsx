import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Task } from '../../types/data'; // Assuming Task type is defined here
import tasksData from '../../data/tasks.json'; // Import the JSON data
import { formatDate } from '../../utils/dateUtils';
import styles from './DashboardPage.module.css';

const DashboardPage: React.FC = () => {
  const { userId } = useAuth();
  const [urgentTasks, setUrgentTasks] = useState<Task[]>([]);

  useEffect(() => {
    // Load and sort tasks by end date (most urgent first)
    const sortedTasks = [...tasksData] // Create a mutable copy
      .sort((a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime());

    // Optionally, you could slice here if you only want the top N urgent tasks
    // const topUrgentTasks = sortedTasks.slice(0, 10);
    setUrgentTasks(sortedTasks);
  }, []);

  const taskCount = urgentTasks.length;

  return (
    <div className={styles.dashboardPage}>
      {/* Greeting Section */}
      <div className={styles.greetingSection}>
        <h1 className={styles.welcomeMessage}>Welcome, {userId || 'User'}</h1>
        <h2 className={styles.taskCount}>
          You currently have {taskCount} task{taskCount !== 1 ? 's' : ''} pending.
        </h2>
      </div>

      {/* Urgent Tasks List Section */}
      <div className={styles.tasksSection}>
        <h3 className={styles.tasksLabel}>Tasks</h3>
        <div className={styles.taskListContainer}>
          {urgentTasks.length > 0 ? (
            urgentTasks.map((task) => (
              <Link
                to={`/tasklist/${task.subject}`} // Link to subject detail page
                key={task.taskId}
                className={styles.taskItemLink}
              >
                <div className={styles.taskItem}>
                  <span className={styles.taskSubject}>{task.subject}</span>
                  <span className={styles.taskTitle}>{task.title}</span>
                  <span className={styles.taskDeadline}>
                    Due: {formatDate(task.endDate)}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <p className={styles.noTasksMessage}>No pending tasks found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;