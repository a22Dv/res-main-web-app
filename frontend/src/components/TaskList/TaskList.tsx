// AI GENERATED PROTOTYPE

import React from 'react';

interface TaskData {
  activity: string;
  res: string;
  assignee: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  description: string;
}

const TaskCell: React.FC<{ task?: TaskData }> = ({ task }) => {
  const cellStyle: React.CSSProperties = {
    backgroundColor: 'var(--primary-color)',
    color: 'var(--background-color)',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '10px',
    fontFamily: 'var(--primary-font)',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    fontSize: '14px',
  };

  const labelStyle: React.CSSProperties = {
    fontWeight: 'bold',
  };

  return (
    <div style={cellStyle}>
      <div>
        <div style={labelStyle}>Activity:</div>
        <div>{task?.activity}</div>
      </div>
      <div>
        <div style={labelStyle}>Subject:</div>
        <div>{task?.res}</div>
      </div>
      <div>
        <div style={labelStyle}>Teacher:</div>
        <div>{task?.assignee}</div>
      </div>
      <div>
        <div style={labelStyle}>Start Date:</div>
        <div>{task?.startDate}</div>
      </div>
      <div>
        <div style={labelStyle}>End Date:</div>
        <div>{task?.endDate}</div>
      </div>
      <div>
        <div style={labelStyle}>Start Time:</div>
        <div>{`${task?.startTime}`}</div>
      </div>
      <div>
        <div style={labelStyle}>End Time:</div>
        <div>{`${task?.endTime}`}</div>
      </div>
      <div style={{ gridColumn: '1 / -1' }}>
        <div style={labelStyle}>Description:</div>
        <div>{task?.description}</div>
      </div>
    </div>
  );
};

interface TaskListProps {
  tasks: string[][] | null;
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const primaryFont = 'Kumbh Sans';

  const containerStyle: React.CSSProperties = {
    fontFamily: primaryFont,
    padding: '20px',
  };

  return (
    <div style={containerStyle}>
      {tasks?.map((taskData, index) => {
        const [activity, res, assignee, startDate, endDate, startTime, endTime, description] = taskData;
        const task: TaskData = {
          activity,
          res,
          assignee,
          startDate,
          endDate,
          startTime,
          endTime,
          description,
        };
        return <TaskCell key={index} task={task} />;
      })}
    </div>
  );
};

export default TaskList;