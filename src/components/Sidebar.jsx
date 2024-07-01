import React from 'react';
import { Nav } from 'react-bootstrap';
import './Sidebar.css'; 
import dashboard from '../assets/Dashboard.png';
import projectlist from '../assets/Project-list.png';
import createproject from '../assets/create-project.png';
import logout from '../assets/Logout.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav className="flex-column">
        <Nav.Link href="dashboard" className="sidebar-link">
          <img src={dashboard} alt="Dashboard" className="sidebar-icon" />
        </Nav.Link>
        <Nav.Link href="projectlisting" className="sidebar-link">
          <img src={projectlist} alt="Projectlist" className="sidebar-icon" />
        </Nav.Link>
        <Nav.Link href="createproject" className="sidebar-link">
          <img src={createproject} alt="Createproject" className="sidebar-icon" />
        </Nav.Link>
        <Nav.Link href="login" className="sidebar-link">
          <img src={logout} alt="Logout" className="sidebar-icon" />
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
