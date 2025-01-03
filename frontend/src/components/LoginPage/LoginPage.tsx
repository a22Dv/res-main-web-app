import {  useState } from 'react';
import { Authentication } from '../../../../backend/mock/mockAPI.ts';

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
    return (
        <div>
            <h1>CIT-TMS | Login Page</h1>
            <br/>
            <input type='text' onChange={handleStudentID}></input>
            <br/>
            <input type='password' onChange={handlePassword}></input>
            <br/>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
export default LoginPage;