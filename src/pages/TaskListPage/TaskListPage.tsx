import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SubjectInfo } from '../../types/data'; // Import the new type
import tasksData from '../../data/tasks.json';
import styles from './TaskListPage.module.css';

const TaskListPage: React.FC = () => {
  const [subjects, setSubjects] = useState<SubjectInfo[]>([]);

  useEffect(() => {
    // Process tasks to extract unique subjects
    const subjectMap = new Map<string, SubjectInfo>();

    tasksData.forEach(task => {
      if (!subjectMap.has(task.subject)) {
        subjectMap.set(task.subject, {
          id: task.subject,
          teacher: task.teacher,
          schoolYear: task.schoolYear,
        });
      }
    });

    const uniqueSubjects = Array.from(subjectMap.values());
    // Optionally sort subjects alphabetically by ID
    uniqueSubjects.sort((a, b) => a.id.localeCompare(b.id));

    setSubjects(uniqueSubjects);
  }, []);

  return (
    <div className={styles.taskList}>
      <h1 className={styles.pageTitle}>Subjects</h1>
      <div className={styles.subjectGrid}>
        {subjects.map((subject) => (
          <Link
            to={`/tasklist/${subject.id}`}
            key={subject.id}
            className={styles.subjectCardLink}
          >
            <div className={styles.subjectCard}>
              <div className={styles.cardTop}>
                <h2 className={styles.subjectName}>{subject.id}</h2>
              </div>
              <div className={styles.cardBottom}>
                <p className={styles.detailText}>Teacher: {subject.teacher}</p>
                <p className={styles.detailText}>School Year: {subject.schoolYear}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TaskListPage;