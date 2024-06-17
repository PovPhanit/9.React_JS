// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('/api/protected', {
          headers: { Authorization: token },
        });
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Failed to fetch protected data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
};

export default Dashboard;
