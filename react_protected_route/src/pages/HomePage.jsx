// src/pages/HomePage.js
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const HomePage = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default HomePage;
