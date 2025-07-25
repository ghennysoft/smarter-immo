import { createContext, useContext, useEffect, useState } from 'react';
import { login, register, updateProfile, logout, refreshToken } from '../api/auth';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('access');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          setUser(decoded);
        } catch (error) {
          console.error('Error checking auth:', error);
          logout();
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const signIn = async (credentials) => {
    const decoded = await login(credentials);
    // const userData = await getProfile();
    setUser(decoded);
    return decoded;
  };

  const signUp = async (userData) => {
    const data = await register(userData);
    return data;    
  };

  const updateUserProfile = async (profileData) => {
    const updatedUser = await updateProfile(profileData);
    setUser(updatedUser);
    return updatedUser;
  };

  const signOut = () => {
    logout();
    setUser(null);
  };

  const contextData = {
        user,
        loading,
        signIn,
        signUp,
        signOut,
        updateUserProfile,
    };

  return (
    <AuthContext.Provider
      value={contextData}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);