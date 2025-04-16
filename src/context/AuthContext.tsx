// src/context/AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  userId: string | null;
  login: (id: string, pass: string) => boolean; // Returns true on success, false on failure
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

// Hardcoded credentials
const HARDCODED_ID = '12-3456-789';
const HARDCODED_PASS = 'pass';

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);

  const login = useCallback((id: string, pass: string): boolean => {
    if (id === HARDCODED_ID && pass === HARDCODED_PASS) {
      setIsLoggedIn(true);
      setUserId(id);
      console.log('Login successful'); // For debugging
      return true;
    }
    console.log('Login failed'); // For debugging
    setIsLoggedIn(false);
    setUserId(null);
    return false;
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
    console.log('Logged out'); // For debugging
    // Navigation back to login will be handled by the router/protected routes
  }, []);

  const value = { isLoggedIn, userId, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook for easy context consumption
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};