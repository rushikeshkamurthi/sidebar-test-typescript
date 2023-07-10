import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../App.css'
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <div className='dashboard-content'>
      <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
