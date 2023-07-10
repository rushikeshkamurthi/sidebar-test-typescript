import React from 'react';
import {Outlet } from 'react-router-dom';
import '../../App.css'
const Projects = () => {
  return (
    <div className='project-main-page'>
        <h1>Projects Main Page</h1>
    <div className='project-context'>
    <Outlet/>

    </div>

    </div>
  );
};

export default Projects;
