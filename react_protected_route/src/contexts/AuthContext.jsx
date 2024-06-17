// src/contexts/AuthContext.js
import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    //isAuthenticated is false
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));



  const register = async (username, password) => {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);
      const response = await fetch('/api/register', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Registration failed:', errorData);
        throw new Error(errorData.message || 'Registration failed');
      }
  };
//   const register = async (username, password) => {
//     try {
    //   const response = await fetch('/api/register', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ username, password })
    //   });

//       if (!response.ok) {
//         throw new Error('Registration failed');
//       }
//     } catch (error) {
//       console.error('Registration failed:', error);
//     }
//   };

//   const register = async (username, password) => {
//     try {
//       await axios.post('/api/register', { username, password });
//     } catch (error) {
//       console.error('Registration failed:', error);
//     }
//   };









  const login = async (username, password) => {
    try {
        console.log(username,password);
      const response = await axios.post('/api/login', { username, password });
      localStorage.setItem('token', response.data.token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };






  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };






  return (
    <AuthContext.Provider value={{ isAuthenticated, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
