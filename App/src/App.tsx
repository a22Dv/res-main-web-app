// USE WITH CAUTION. AI_GENERATED PROTOTYPE

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage: React.FC<{ setUserKey: (key: number | null) => void }> = ({ setUserKey }) => {
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', { studentID, password });
      setUserKey(response.data.userKey);
      navigate('/');
    } catch (error) {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Student ID" value={studentID} onChange={(e) => setStudentID(e.target.value)} />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const ProfilePage: React.FC<{ userKey: number }> = ({ userKey }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${userKey}`).then((response) => {
      setUser(response.data);
    });
  }, [userKey]);

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <ul>
          <li>Name: {user.user_name}</li>
          <li>Age: {user.age}</li>
          <li>Date of Birth: {user.date_of_birth}</li>
          <li>Address: {user.user_address}</li>
          <li>Year: {user.school_year}</li>
          <li>Section: {user.school_section}</li>
          <li>Grade: {user.grade_level}</li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const TasksPage: React.FC<{ userKey: number }> = ({ userKey }) => {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/assignments/${userKey}`).then((response) => {
      setTasks(response.data);
    });
  }, [userKey]);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.assignment_id}>
            <h3>{task.task_title}</h3>
            <p><strong>Subject:</strong> {task.task_subject}</p>
            <p><strong>Teacher:</strong> {task.teacher}</p>
            <p><strong>Start Date:</strong> {task.date_start}</p>
            <p><strong>End Date:</strong> {task.date_end}</p>
            <p><strong>Start Time:</strong> {task.time_start}</p>
            <p><strong>End Time:</strong> {task.time_end}</p>
            <p><strong>Description:</strong> {task.task_description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
const HomePage: React.FC<{ userKey: number }> = ({ userKey }) => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [taskCount, setTaskCount] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:3000/assignments/${userKey}`).then((response) => {
      setTasks(response.data.slice(0, 3));
      setTaskCount(response.data.length);
    });
  }, [userKey]);

  return (
    <div>
      <h2>Welcome!</h2>
      <p>You have {taskCount} tasks assigned.</p>
      <h3>Latest Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.assignment_id}>{task.task_title}</li>
        ))}
      </ul>
    </div>
  );
};

const App: React.FC = () => {
  const [userKey, setUserKey] = useState<number | null>(null);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> | <Link to="/tasks">Tasks</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<LoginPage setUserKey={setUserKey} />} />
        <Route
          path="/"
          element={
            userKey ? <HomePage userKey={userKey} /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/profile"
          element={
            userKey ? <ProfilePage userKey={userKey} /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/tasks"
          element={
            userKey ? <TasksPage userKey={userKey} /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;