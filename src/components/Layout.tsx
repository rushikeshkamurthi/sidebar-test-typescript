import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import '../App.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='main-container'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
