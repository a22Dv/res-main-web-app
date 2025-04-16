// src/routes/AppRoutes.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Import your page components (we'll create placeholders soon)
import LoginPage from '../pages/LoginPage/LoginPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import TaskListPage from '../pages/TaskListPage/TaskListPage';
import SubjectDetailPage from '../pages/SubjectDetailPage/SubjectDetailPage';
import AppLayout from '../components/Layout/AppLayout'; // Layout for authenticated pages

// Placeholder components (replace with actual imports later)
// const LoginPage = () => <div>Login Page</div>;
// const DashboardPage = () => <div>Dashboard Page</div>;
// const TaskListPage = () => <div>Task List Page</div>;
// const SubjectDetailPage = () => <div>Subject Detail Page</div>;
// const AppLayout = ({ children }: { children: React.ReactNode }) => <div>Layout <main>{children}</main></div>;


// Component to protect routes
const ProtectedRoute: React.FC = () => {
  const { isLoggedIn } = useAuth();
  console.log('ProtectedRoute check, isLoggedIn:', isLoggedIn); // Debugging

  if (!isLoggedIn) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to. You could use this state later if needed.
    return <Navigate to="/login" replace />;
  }

  // If logged in, render the nested routes/component via Outlet
  // Wrap the Outlet with the AppLayout which includes Header and Nav
  return (
    <AppLayout>
        <Outlet />
    </AppLayout>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dashboard" element={<Navigate to="/" replace />} /> {/* Optional redirect */}
          <Route path="/tasklist" element={<TaskListPage />} />
          <Route path="/tasklist/:subjectId" element={<SubjectDetailPage />} />
          {/* Add other protected routes here */}
        </Route>

        {/* Redirect root path if not logged in (handled by ProtectedRoute) */}
        {/* Or define a public landing page if needed */}
        <Route path="*" element={<Navigate to="/" />} /> {/* Fallback route */}

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;