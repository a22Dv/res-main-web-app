import { useState } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router';
import LoginPage from './components/LoginPage/LoginPage.tsx';
import HomePage from './components/HomePage/HomePage.tsx';
import TaskList from './components/TaskList/TaskList.tsx';
import Calendar from './components/Calendar/Calendar.tsx';
import Profile from './components/Profile/Profile.tsx';
import ProtectedRoute from './components/shared/ProtectedRoute/ProtectedRoute.tsx';
import { AuthenticationAPI } from '../../backend/mock/API/API.ts';

const App = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleAuth = ({ studentID,  password } : handleAuthProps) : boolean => {
    if (AuthenticationAPI(studentID, password)) {
      setIsAuth(true);
      navigate('/home')
      return true;
    } else {
      setIsAuth(false);
      navigate('/login');
      return false;
    }
  }
  const handleLogOut = () => {
    setIsAuth(false);
    navigate('/login');
  }
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' replace/>}/>
      <Route path='/login' element={<LoginPage onAuth={handleAuth}/>}/>  
      <Route
        path='/home'
        element={<ProtectedRoute auth={isAuth} passedElement={<HomePage/>}/>}
      />
      <Route
        path='/calendar'
        element={<ProtectedRoute auth={isAuth} passedElement={<Calendar/>}/>}
      />
      <Route
        path='/tasklist'
        element={<ProtectedRoute auth={isAuth} passedElement={<TaskList/>}/>}
      />
      <Route
        path='/profile'
        element={<ProtectedRoute auth={isAuth} passedElement={<Profile onLogOut={handleLogOut}/>}/>}
      />
    </Routes>
  );
}

export interface handleAuthProps {
  studentID : string | undefined;
  password : string | undefined;
}
export const responsiveBreakPoint = 768;
export default App;