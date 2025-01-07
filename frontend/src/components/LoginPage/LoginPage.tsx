import {  useState } from 'react';
import { Authentication } from '../../../../backend/mock/mockAPI.ts';
import styles from './LoginPage.module.css';
import citLogo from '../../assets/cit-horizontal.png';
import HyperLink from '../shared/HyperLink/HyperLink.tsx';
import Button from '../shared/Button/Button.tsx';
interface LoginPageProps {
    handleIsLoggedIn : (isLoggedIn : boolean) => void;
    handleUserInfo : (userInfo : string[]) => void;
}
const LoginPage = ({ handleIsLoggedIn, handleUserInfo } : LoginPageProps) => {
    const [studentID, setStudentID] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    const handleStudentID = (event : React.ChangeEvent<HTMLInputElement>) => {
        setStudentID(event.target.value);
    }
    const handlePassword = (event : React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    const handleLogin = () => {
        if (studentID && password) {
            const response = Authentication({studentID : studentID, password : password});
            if (response != null) {
                handleIsLoggedIn(true);
                handleUserInfo(response);
            }  else {
                alert("Invalid Credentials.");
            }
        }
    }
    const handleKeyDown = (event : React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleLogin()
        }
    }
    return (
        <div className={styles.loginPage}>
            <header className={styles.header}>
                <img src={citLogo} className={styles.headerLogo}></img>
                <div className={styles.linksContainer}>
                    <HyperLink url='https://shs.cit.edu/my/' showText='Moodle' fontSize={1.2}/>
                    <HyperLink url='https://teams.microsoft.com/v2/' showText='Teams' fontSize={1.2}/>
                    <HyperLink url='https://cituweb.pinnacle.com.ph/aims/students/' showText='AIMS' fontSize={1.2}/>
                </div>
            </header>
            <body className={styles.body}>
                <div className={styles.loginContainer}>
                    <h2>Login</h2>
                    <div className={styles.loginBoxContainer}>
                        <input type='text' onChange={handleStudentID} placeholder='Student ID'></input>
                        <input type='password' onChange={handlePassword} placeholder='Password' onKeyDown={handleKeyDown}></input>
                        <Button onClick={handleLogin} text='Sign In'/>
                    </div>
                </div>
            </body>
            <footer className={styles.footer}>

            </footer>
        </div>
    );
}
export default LoginPage;   