// React imports.
import { useState } from 'react';

// Authentication prop type import.
import { handleAuthProps } from '../../App.tsx';

// React component imports.
import styles from './LoginPage.module.css';
import Header from '../shared/Header/Header.tsx';
import HyperLink from '../shared/HyperLink/HyperLink.tsx';
import Button from '../shared/Button/Button.tsx';

// Login page prop types interface.
interface LoginPageProps {
    onAuth : ({ studentID, password } : handleAuthProps) => boolean;
}

// Login page entry.
const LoginPage = ({ onAuth } : LoginPageProps) => {

    // State variables for credentials and error state.
    const [studentID, setStudentID] = useState<string | undefined>();
    const [password, setPassword] = useState<string | undefined>();
    const [error, setError] = useState<string | undefined>();

    // Handling arrow functions. 
    // handleLogin may be subject to change depending on API implementation.
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
    const handleLoginEnter = (event : React.KeyboardEvent<HTMLInputElement>)  => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    }

    // JSX.
    return (

        // Entry.
        <div className={styles.loginPage}>

            {/*Isolate header component, hasNavBar=false to adjust header width to accomodate navbar.*/}
            <Header/>

            {/*Main content body*/}
            <div className={styles.loginBody}>

                {/*Holds the Login panel along with any labels/components attached*/}
                <div className={styles.loginBoxContainer}>
                    <h1>Welcome!</h1>

                    {/* Holds the actual box where the input is found*/}
                    <div className={styles.loginBox}>

                        {/* Input element and labels.*/}
                        <p>Student ID</p>
                        <input type='text' onChange={handleStudentID} placeholder='12-3456-789'/>
                        <p>Password</p>
                        <input type='password' onChange={handlePassword} placeholder='Password' onKeyDown={handleLoginEnter}/>

                        {/*Error message.*/}
                        <p className={styles.error}>{error && error}</p>

                        {/*Login button and Forgot Password link.*/}
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

// Default export.
export default LoginPage;