import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Task } from '../../types/data';
import tasksData from '../../data/tasks.json';
import { formatDate } from '../../utils/dateUtils';
import styles from './SubjectDetailPage.module.css';
// Optional: Import an icon for the expand/collapse indicator
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const SubjectDetailPage: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const [subjectTasks, setSubjectTasks] = useState<Task[]>([]);
  const [subjectInfo, setSubjectInfo] = useState<{ teacher: string | null }>({ teacher: null });
  const [expandedTaskId, setExpandedTaskId] = useState<string | null>(null);

  useEffect(() => {
    if (!subjectId) return;

    const filtered = tasksData.filter(task => task.subject === subjectId);

    // Sort by end date (most urgent first)
    const sorted = filtered.sort((a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime());

    setSubjectTasks(sorted);

    // Extract subject info (assuming teacher is consistent)
    if (sorted.length > 0) {
      setSubjectInfo({ teacher: sorted[0].teacher });
    } else {
      setSubjectInfo({ teacher: null });
    }

    // Reset expanded task when subject changes
    setExpandedTaskId(null);

  }, [subjectId]); // Re-run effect if subjectId changes

  const handleToggleExpand = (taskId: string) => {
    setExpandedTaskId(prevId => (prevId === taskId ? null : taskId));
  };

  // Memoize the header info to prevent unnecessary recalculations
  const headerInfo = useMemo(() => {
      if (!subjectId) return { title: "Subject Not Found", teacher: "" };
      return {
          title: subjectId,
          teacher: subjectInfo.teacher || "N/A"
      }
  }, [subjectId, subjectInfo.teacher]);

  if (!subjectId) {
    return <div className={styles.subjectDetail}>Subject ID not provided.</div>;
  }

  return (
    <div className={styles.subjectDetail}>
      {/* Top Subject Header */}
      <div className={styles.subjectHeader}>
        <div className={styles.headerContent}>
          <h1 className={styles.subjectTitle}>{headerInfo.title}</h1>
          <p className={styles.teacherName}>Teacher: {headerInfo.teacher}</p>
        </div>
      </div>

      {/* Task List */}
      <div className={styles.taskList}>
        {subjectTasks.length > 0 ? (
          subjectTasks.map((task) => {
            const isExpanded = expandedTaskId === task.taskId;
            return (
              <div key={task.taskId} className={styles.taskItemContainer}>
                <button
                  className={styles.taskItemHeader}
                  onClick={() => handleToggleExpand(task.taskId)}
                  aria-expanded={isExpanded}
                  aria-controls={`task-details-${task.taskId}`}
                >
                  <span className={styles.taskTitle}>{task.title}</span>
                  <span className={styles.taskDeadline}>
                    Due: {formatDate(task.endDate)}
                    {/* Optional: Add expand/collapse icon here */}
                    {/* isExpanded ? <FaChevronUp /> : <FaChevronDown /> */}
                  </span>
                </button>
                {isExpanded && (
                  <div
                    id={`task-details-${task.taskId}`}
                    className={styles.taskDetails}
                    role="region"
                  >
                    <p className={styles.instructions}>{task.instructions}</p>
                    <div className={styles.dateInfo}>
                      <span>Start Date: {formatDate(task.startDate)}</span>
                      <span>End Date: {formatDate(task.endDate)}</span>
                    </div>
                    {/* Add other details or notes here if needed */}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <p className={styles.noTasksMessage}>No tasks found for this subject.</p>
        )}
      </div>
    </div>
  );
};

export default SubjectDetailPage;