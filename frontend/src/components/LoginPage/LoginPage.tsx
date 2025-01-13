import { useState } from 'react';
import { handleAuthProps } from '../../App.tsx';
import styles from './LoginPage.module.css';
import Header from '../shared/Header/Header.tsx';
import HyperLink from '../shared/HyperLink/HyperLink.tsx';
import Button from '../shared/Button/Button.tsx';
interface LoginPageProps {
    onAuth : ({ studentID, password } : handleAuthProps) => boolean;
}
const LoginPage = ({ onAuth } : LoginPageProps) => {
    const [studentID, setStudentID] = useState<string | undefined>();
    const [password, setPassword] = useState<string | undefined>();
    const [error, setError] = useState<string | undefined>();

    const handleStudentID = (event : React.ChangeEvent<HTMLInputElement>) => {
        setStudentID(event.target.value);
    }
    const handlePassword = (event : React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    const handleLogin = () => {
        if (!onAuth({studentID : studentID, password : password})) {
            setError("Invalid credentials.");
        } else {
            setError(undefined);
        } 
    }
    return (
        <div className={styles.loginPage}>
            <Header/>
            <div className={styles.loginBody}>
                <div className={styles.loginBoxContainer}>
                    <h1>Welcome!</h1>
                    <div className={styles.loginBox}>
                        <p>Student ID</p>
                        <input type='text' onChange={handleStudentID} placeholder='12-3456-789'/>
                        <p>Password</p>
                        <input type='password' onChange={handlePassword} placeholder='Password'/>
                        <p className={styles.error}>{error && error}</p>
                        <Button 
                            onClick={handleLogin} 
                            displayText='Sign In'
                            fontSize={1.5}
                            padding={0}
                            height='3rem'
                            width='100%'
                            margin='0.5rem 0rem 0.5rem 0rem'/>
                        <HyperLink 
                            displayText='Forgot Password?' 
                            url='' 
                            fontSize={1} 
                            padding={0}
                        />
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;