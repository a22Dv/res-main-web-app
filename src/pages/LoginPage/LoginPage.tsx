import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Header from '../../components/Header/Header';
import styles from './LoginPage.module.css';

const LoginPage: React.FC = () => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null); // Clear previous errors

    const loginSuccess = auth.login(studentId, password);

    if (loginSuccess) {
      navigate('/', { replace: true }); // Navigate to dashboard on success
    } else {
      setError('Invalid Student ID or Password.');
    }
  };

  return (
    <div className={styles.loginPageContainer}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.loginPane}>
          <h1 className={styles.title}>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="studentId" className={styles.label}>Student ID</label>
              <input
                type="text"
                id="studentId"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className={styles.input}
                required
                placeholder="e.g. 12-3456-789"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                required
                placeholder="e.g. pass"
              />
            </div>
            {error && <p className={styles.errorMessage}>{error}</p>}
            <button type="submit" className={styles.button}>
              Sign In
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;